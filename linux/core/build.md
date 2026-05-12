# build


```sh
sudo apt update
sudo apt install -y qemu-system-x86 build-essential libncurses-dev bison flex libssl-dev libelf-dev
mkdir -p ~/my-linux/{kernel,rootfs,toolchain}
cd ~/my-linux/kernel
git clone https://git.kernel.org/pub/scm/linux/kernel/git/stable/linux.git
cd linux
make x86_64_defconfig
make menuconfig
```

choose

```sh
General setup
  [*] Initial RAM filesystem and RAM disk (initramfs/initrd)

Device Drivers
  Generic Driver Options
    [*] Maintain a devtmpfs filesystem to mount at /dev
    [*] Automount devtmpfs at /dev
```

compile

```sh
make -j$(nproc)
```

will make file

```sh
arch/x86/boot/bzImage
```

BusyBox

```sh
cd ~/my-linux
git clone https://busybox.net/git/busybox.git
cd busybox
make defconfig
make menuconfig
```

choose

```sh
Settings
  [*] Build static binary (no shared libs)
```

compile

```sh
make -j$(nproc)
make CONFIG_PREFIX=~/my-linux/rootfs install
```

create init

```sh
cd ~/my-linux/rootfs
vi init
```
add content

```sh
#!/bin/sh

mount -t proc none /proc
mount -t sysfs none /sys
mount -t devtmpfs none /dev

echo "Welcome to my tiny Linux!"

exec /bin/sh

```


```sh
chmod +x init
```

create directory

```sh
mkdir -p proc sys dev tmp
```

package initramfs

```sh
cd ~/my-linux/initramfs
find . | cpio -H newc -o | gzip > ~/my-linux/initramfs.gz
```
start linux

```sh
qemu-system-x86_64 \
  -kernel ~/my-linux/kernel/linux/arch/x86/boot/bzImage \
  -initrd ~/my-linux/initramfs.gz \
  -nographic \
  -append "console=ttyS0"
```


```sh
mkdir /tmp/initrd
cd /tmp/initrd
gzip -dc ~/my-linux/initramfs.gz | cpio -idmv
mkdir -p ~/my-linux/initramfs/{bin,sbin,etc,proc,sys,dev}
cp ~/my-linux/busybox/_install/bin/busybox ~/my-linux/initramfs/bin/
cd ~/my-linux/initramfs/bin
ln -s busybox sh

```

create init

```sh
cat > ~/my-linux/initramfs/init << 'EOF'
#!/bin/sh
mount -t proc none /proc
mount -t sysfs none /sys
echo "Welcome to Minimal Linux!"
exec /bin/sh
EOF


chmod +x ~/my-linux/initramfs/init
```

