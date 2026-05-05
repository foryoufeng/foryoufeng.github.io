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

basic use

```sh
calc:add.o sub.o multi.o
	$(CC) add.o sub.o multi.o calc.c -o calc

add.o:add.c
	$(CC) -c add.c -o add.o

sub.o:sub.c
	$(CC) -c sub.c -o sub.o

multi.o:multi.c
	$(CC) -c multi.c -o multi.o

clean:
	rm -f *.o calc
```

use var

```sh
OBJS=add.o sub.o multi.o calc.o
TARGET=calc

${TARGET}:${OBJS}
	$(CC) ${OBJS} -o ${TARGET}

add.o:add.c
	$(CC) -c add.c -o add.o

sub.o:sub.c
	$(CC) -c sub.c -o sub.o

multi.o:multi.c
	$(CC) -c multi.c -o multi.o

calc.o:calc.c
	$(CC) -c calc.c -o calc.o

clean:
	rm -f *.o calc
```

change

```sh
OBJS=add.o sub.o multi.o calc.o
TARGET=calc

$(TARGET):$(OBJS)
	$(CC) $^ -o $@

add.o:add.c
	$(CC) -c $^ -o $@

sub.o:sub.c
	$(CC) -c $^ -o $@

multi.o:multi.c
	$(CC) -c $^ -o $@

calc.o:calc.c
	$(CC) -c $^ -o $@

clean:
	rm -f *.o $(TARGET)
```

change more

```sh
.PHONY: clean

OBJS=add.o sub.o multi.o calc.o
TARGET=calc

all:$(TARGET)

$(TARGET):$(OBJS)
	$(CC) $^ -o $@

%.o:%.c
	$(CC) -c $^ -o $@

clean:
	rm -f *.o $(TARGET)
```

makefile will run all var ,then computer

```sh
A=123
B=$(A)
A=456
# B=456
```