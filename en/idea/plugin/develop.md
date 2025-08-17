# develop
* https://docs.namichong.com/intellij-platform-sdk/code-samples.html
* https://github.com/JetBrains/intellij-sdk-code-samples


install `Plugin Devkit`,`LivePlugin`

config local idea to run plugin

```sh
intellij {
    localPath.set("/Applications/CLion.app/Contents")

    plugins.set(listOf("JavaScript"))
}
```

edit `plugin.xml`

```sh
src/resources/META-INF/plugin.xml
```


upgrade to Gradle Plugin 2.x

```sh
plugins {
    id("java")
    id("org.jetbrains.intellij.platform") version "2.7.1"
}

dependencies {
    intellijPlatform {
        local("/Users/wuqiang/Applications/IntelliJ IDEA Community Edition.app/Contents")
    }
}
```

