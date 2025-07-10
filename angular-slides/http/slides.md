---

marp: true

---

# Basic HTTP Calls in Angular

---

# Introduction to HTTP in Angular

- HTTP calls  can be used to call out external APIs

- Angular comes with its own HTTP library to call out external APIs

- HTTP requests are asynchronous, because we don't want our page to freeze until the HTTP request returns from the external server

- There are three main approaches to deal with async code:
    1. Callback
    2. Promises
    3. Observables

---

# Basic usage of HTTP in Angular

- HTTP has been split into a separate module in Angular.

- This means that to use it you need to import constants from @angualr/common/http

```
import {
    // The NgModule for using @angular/common/http
    HttpClientModule,

    // the class constants
    HttpClient
} from '@angular/common/http';
```

---

# Basic Request

- The first thing we're going to do is make a simple GET request to the jsonplaceholder API.

- What we need is:
    1. Have a button that calls makeRequest
    2. makeReuqest will call the http library to perform a GET request on our API
    3. When the request returns, we'll update this.data with the results of the data, which will be rendered in the view

---

# SimpleHttpComponent Component Definition

```
import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-simple-http',
    templateUrl: './simple-http.component.html'
})
export class SimpleHttpComponent implements OnInit {
    data: Object;
    loading: boolean;

    contructor (private http: HttpClient) {}
}
```

---

# Making a simple HTTP GET Request

---

# Making a simple HTTP POST Request

---

# Making a PUT/PATCH/DELETE/HEAD Request

---

# Summary

- @angular/common/http is flexible and suitable for a wide variety of APIs

- In general, you can make GET and POST request in an easy and flexible way