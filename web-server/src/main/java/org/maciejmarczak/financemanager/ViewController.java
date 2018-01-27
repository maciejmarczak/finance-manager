package org.maciejmarczak.financemanager;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController {

    @RequestMapping(path = { "auth/**", "manager/**" })
    public String index() {
        return "forward:/index.html";
    }
}
