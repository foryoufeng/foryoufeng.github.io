# QMenu

basic


```sh
int main(){
    QMenuBar *menuBar= this->menuBar();
    QMenu *appMenu = menuBar->addMenu("设置");
    // 添加关于动作
    QAction *aboutAction = appMenu->addAction("关于");
    connect(aboutAction, &QAction::triggered, this, [this]() {
        QMessageBox::about(this, "关于", "菜单栏示例应用");
    });
    QAction *exitMenu = appMenu->addAction("退出");
    connect(exitMenu, &QAction::triggered, [this]() {
        QApplication::exit();
    });
}
```