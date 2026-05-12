# basic


```sh
#include <QApplication>
#include <QVBoxLayout>
#include <QMessageBox>
#include <qdebug.h>
#include "app.h"


int main(int argc, char *argv[]) {
    QApplication app(argc, argv);
    QMainWindow w;
    w.setWindowTitle("hello world");
    QWidget *widget = new QWidget(&w);
    QVBoxLayout *layout = new QVBoxLayout(widget);
    QPushButton *button = new QPushButton("submit");
    layout->addWidget(button);
    QObject::connect(button,&QPushButton::clicked,[](){
        QMessageBox::information(nullptr,"info","hello button");
    });
    w.setCentralWidget(widget);
    w.resize(400,300);
    w.show();
    qDebug()<<"hello";

    return app.exec();
}


```