# QStatusBar


```sh
MainAppWidget::MainAppWidget(QWidget *parent) {
    QStatusBar *sBar = statusBar();
    QLabel *label = new QLabel(this);
    label->setText("hello");
    sBar->addWidget(label);
    sBar->addWidget(new QLabel("world"));
    sBar->addPermanentWidget(new QLabel("right label"));
}
```