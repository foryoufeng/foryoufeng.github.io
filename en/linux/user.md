# user

give user no password to run sudo

```sh
sudo visudo
# add current user to the file and ctrl + o to save
your_username ALL=(ALL) NOPASSWD:ALL
```