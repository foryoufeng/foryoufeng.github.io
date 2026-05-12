# custom language

1.create class extends Language

```java
import com.intellij.lang.Language;

public class MyLanguage extends Language {
    public static final MyLanguage INSTANCE = new MyLanguage();

    private MyLanguage() {
        super("MyLanguage"); // 自定义语言名称
    }
}
```

(2) 定义文件类型
实现 LanguageFileType，为文件类型设置图标和扩展名：

```java
import com.intellij.openapi.fileTypes.LanguageFileType;
import javax.swing.*;

public class MyFileType extends LanguageFileType {
    public static final MyFileType INSTANCE = new MyFileType();

    private MyFileType() {
        super(MyLanguage.INSTANCE);
    }

    @Override
    public String getName() {
        return "MyLanguage File";
    }

    @Override
    public String getDescription() {
        return "MyLanguage language file";
    }

    @Override
    public String getDefaultExtension() {
        return "mylang"; // 自定义扩展名
    }

    @Override
    public Icon getIcon() {
        return MyIcons.FILE; // 设置文件图标
    }
}

```