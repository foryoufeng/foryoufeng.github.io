# c class


```sh
#include <stdio.h>

typedef struct Shape {
    int height;
    int width;

    void (*setWidth)(struct Shape *s, int width);

    void (*setHeight)(struct Shape *s, int height);
} Shape;

void setWidth(Shape *s, int width) {
    s->width = width;
}

void setHeight(Shape *s, int height) {
    s->height = height;
}

typedef struct Rectangle {
    Shape shape;

    int (*getArea)(Shape *s);
} Rectangle;

int getArea(Shape *s) {
    return s->width * s->height;
}

int main() {
    Rectangle rectangle = {
        .shape.setWidth = setWidth,
        .shape.setHeight = setHeight,
        .getArea = getArea
    };
    rectangle.shape.setWidth(&rectangle.shape, 5);
    rectangle.shape.setHeight(&rectangle.shape, 10);
    int area = rectangle.getArea(&rectangle.shape);
    printf("area:%d\n", area);
    return 0;
}

```