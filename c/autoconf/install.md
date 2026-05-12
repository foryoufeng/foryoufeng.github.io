 # install
 

```sh
sudo apt install autoconf 
```

run

```sh
autoscan
mv configure.scan configure.in
```

change configure.in

```sh
AC_INIT([libfoo], [1.0])
AC_PROG_CC
AM_INIT_AUTOMAKE
AC_CONFIG_FILES([Makefile])
AC_OUTPUT(Makefile)
```


```sh
aclocal
autoconf
```

add makefile.am