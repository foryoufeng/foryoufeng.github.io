# signals

basic


```sh
class MainAppWidget:public QMainWindow{
    Q_OBJECT
public:
    explicit MainAppWidget(QWidget *parent=0);

signals:
    void buttonClicked();
private:
    QPushButton *b;
};

connect(b, &QPushButton::clicked, [this]() {
        qDebug() << "buttonClicked";
        emit buttonClicked();
    });
connect(this, &MainAppWidget::buttonClicked, this, [this]() mutable  {
    b->setText("Hello signal!");
    qDebug() << "get buttonClicked signal";
});
```


```sh
#ifndef QTHELLO_TEACHER_H
#define QTHELLO_TEACHER_H
#include <QObject>


class Teacher: public QObject{
Q_OBJECT
public:
    explicit Teacher(QObject *parent=0);
signals:
    void hungry();
public slots:

};


#endif //QTHELLO_TEACHER_H

#include "Teacher.h"
Teacher::Teacher(QObject *parent): QObject(parent) {}

#ifndef QTHELLO_STUDENT_H
#define QTHELLO_STUDENT_H
#include <QObject>

class Student: public QObject{
public:
    explicit Student(QObject *parent=0);
    signals:
public slots:
    void treat();
};


#endif //QTHELLO_STUDENT_H

#include "Student.h"
#include <QDebug>
Student::Student(QObject *parent):QObject(parent) {

}
void Student::treat() {
    qDebug()<<"student treat teacher";
}

void App::teacherClick(){
    this->teacher = new Teacher;
    this->student = new Student;
    connect(teacher,&Teacher::hungry,student,&Student::treat);
    classIsOver();
}
void App::classIsOver(){
    emit teacher->hungry();
}
```

add param to signal

```sh
class Teacher: public QObject{
Q_OBJECT
public:
    explicit Teacher(QObject *parent=0);
signals:
    void hungry();
    void hungry(QString foodName);
public slots:

};

class Student: public QObject{
public:
    explicit Student(QObject *parent=0);
    signals:
public slots:
    void treat();
    void treat(QString foodName);
};

//student.cpp
Student::Student(QObject *parent):QObject(parent) {

}
void Student::treat() {
    qDebug()<<"student treat teacher";
}
void Student::treat(QString foodName) {
    qDebug()<<"student treat teacher to eat"<<foodName.toUtf8().data();
}


void App::teacherFoodClick(){
    this->teacher = new Teacher;
    this->student = new Student;
    void (Teacher:: *teacherSignal)(QString) = &Teacher::hungry;
    void (Student:: *studentSlog)(QString) = &Student::treat;
    connect(teacher,teacherSignal,student,studentSlog);
    classIsOver2();
}
```