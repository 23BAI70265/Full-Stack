package org.example.est.controller;

import org.example.est.model.ApiResponse;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")


@CrossOrigin(origins = "http://localhost:3000")

public class ESTController {

    @GetMapping("/")
    public String Greet(){
        return new String("Hello from Spring Boot!") ;
    }
    @GetMapping("/est")
    public ApiResponse hello() {
        return new ApiResponse("Hello from Spring Boot!", "success");
    }

    @GetMapping("/est/{name}")
    public ApiResponse helloName(@PathVariable String name) {
        return new ApiResponse("Hello, " + name + "!", "success");
    }

    @PostMapping("/message")
    public ApiResponse postMessage(@RequestBody String body) {
        return new ApiResponse("Received: " + body, "success");
    }

}