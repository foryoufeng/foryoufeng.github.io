# basic


```sh
#include <stdio.h>
#include <gtk/gtk.h>

int main(void) {
    printf("Hello, World!\n");
    gtk_init(NULL,NULL);
    GtkWidget *window = gtk_window_new(GTK_WINDOW_TOPLEVEL);
    gtk_window_set_title(GTK_WINDOW(window),"Hello World!");
    g_signal_connect(window,"destroy",G_CALLBACK(gtk_main_quit),NULL);
    gtk_widget_show(window);
    gtk_main();
    return 0;
}
```