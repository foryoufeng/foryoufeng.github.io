# makefile


basic

```sh
.PHONY: clean
.SILENT: main
CC = gcc
CFLAGS = -Wall -g

main: main.c
	$(CC) main.c -o main

file_util.o: file_util.c file_util.h
	$(CC) $(CFLAGS) -c file_util.c

test: file_util.o test_file_util.c
	$(CC) $(CFLAGS) test_file_util.c file_util.o -o test

clean:
	rm -f *.o test
```

ifdef

```sh
var = 100
ifdef var
$(info $(var))
endif
```

ifeq

```sh
var = 100
var2= 200
ifeq ($(var),$(var2))
$(info var=var2)
else
$(info var!=var2)
endif
```