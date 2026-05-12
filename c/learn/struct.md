# struct

basic

```sh
#include <stdio.h>

struct Book {
    int id;
    char *title;
    char *author;
};

int main(){
    struct Book book;
    book.id = 1;
    book.title = "Hello World";
    printf("%d\n",book.id);
    printf("%s\n",book.title);
    struct Book book2 = {
        1,"hello","jim"
      };
    printf("id=%d,title=%s,author=%s",book2.id,book2.title,book2.author);
    return 0;
}

```

struct array

```sh
struct Book books[]={
        {"hello","jim",1},
        {"hello2","jim",2},
        {"hello3","jim",3}
};
for(int i=0;i<sizeof(books)/sizeof(struct Book);i++) {
    printf("id=%d ,title= %s \n",books[i].id,books[i].title);
}
```

node struct

```sh
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *next;
};
void insertNode(struct Node **head, int data) {
    struct Node *previous;
    struct Node *current;
    struct Node *newNode;
    current = *head;
    previous = NULL;
    while (current != NULL && current->data < data) {
        previous = current;
        current = current->next;
    }
    newNode = malloc(sizeof(struct Node));
    if (newNode == NULL) {
        printf("Not enough space\n");
        return;
    }
    newNode->data = data;
    newNode->next = current;
    if (previous == NULL) {
        *head = newNode;
    }else {
        previous->next = newNode;
    }
}
void printList(struct Node *head) {
    struct Node *current;
    current = head;
    while (current != NULL) {
        printf("%d ", current->data);
        current = current->next;
    }
    printf("\n");
}
int main(){
    struct Node *head = NULL;
    int input;
    while(1) {
        scanf("%d",&input);
        if(input == -1) {
            break;
        }
        insertNode(&head,input);
        printList(head);
    }
    return 0;
}
```