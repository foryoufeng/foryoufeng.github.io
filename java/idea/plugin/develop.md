# develop
* https://docs.namichong.com/intellij-platform-sdk/code-samples.html
* https://github.com/JetBrains/intellij-sdk-code-samples


install `Plugin Devkit`,`LivePlugin`

config local idea to run plugin

```sh
dependencies {
    intellijPlatform {
        local("/home/wuqiang/Applications/idea-IU-252.23892.409")
        testFramework(org.jetbrains.intellij.platform.gradle.TestFrameworkType.Platform)
        bundledPlugin("JavaScript")                 // 提供 JSLiteralExpression 等 JS PSI
        bundledPlugin("org.jetbrains.plugins.vue")        // 处理 .vue / 模板内注入的 JS
        bundledPlugin("com.intellij.modules.json")
    }
}
```

edit `plugin.xml`

```sh
src/resources/META-INF/plugin.xml
```

add depends
```sh
<depends>JavaScript</depends>
<depends>org.jetbrains.plugins.vue</depends>
<depends>com.intellij.modules.json</depends>
```


