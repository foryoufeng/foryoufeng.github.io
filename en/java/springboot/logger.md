# logger

config in `application.properties`

```sh
logging.pattern.console=%d{yyyy-MM-dd HH:mm:ss} %-5level [%thread] %logger{15} ==> %msg%n

logging.level.sql=debug
logging.level.web=debug
logging.file.name=demo.log


```


```

basic

```sh
package tech.pplang.demo.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class HelloController {
    
    @GetMapping("/hello")
    public String sayHello() {
        log.error("Hello World!");
        return "Hello World!";
    }
}

```