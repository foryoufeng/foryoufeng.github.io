# csv


```sh
void write() {
    FILE *fp=fopen("out.csv", "w");
    fprintf(fp,"id,name,age\n");
    fprintf(fp,"%d,%s,%d\n",1,"alice",12);
    fprintf(fp,"%d,%s,%d\n",2,"alice2",13);
    fprintf(fp,"%d,%s,%d\n",3,"alice3",14);
    fclose(fp);
}

void read() {
    FILE *fp=fopen("out.csv", "r");
    if (fp == NULL) {
        perror("Failed to open file");
    }
    char line[1024];
    fgets(line,1024,fp);
    while (fgets(line,1024,fp) != NULL) {
        char *token;
        token = strtok(line,",");
        int id = atoi(token);
        token = strtok(NULL,",");
        char name[64];
        strcpy(name,token);
        token = strtok(NULL,",");
        int age = atoi(token);
        printf("id: %d, name: %s,age=%d\n",id,name,age);
    }
}
```