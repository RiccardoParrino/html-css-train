---

marp: true

---

# Introduction to Data Architecture in Angular

---

# Reasons for arguing about Data Architecture

- Managing data can be one of the trickiest aspects of writing a maintanable app

- You can get data from a lot of source: 
    - HTTP Requests
    - Websockets
    - Indexdb
    - LocalStorage
    - Service Workers
    - etc.

---

# The problem(s) we try to solve

- How can we aggregate all of these different sources into a coherent system?

- How can we avoid bugs caused by unintended side-effects?

- How can we structure the code sensibly so that it's easier to maintain and on-board new team members?

- How can we make the app run as fast as possible when data changes?

--- 

# The solutions to the problem(s)

- MVC is good for the problem, but it doesn't translate directly into client-side web application very well

- New solutions have been explored:
    - MVW / Two-way data binding: Model-View-Whatever is a term used to describe Angular 1's default architecture. The whole application shares the same data structures and a change is propagated to the rest of the app

    - Flux: uses a unidirection data flow. In Flux, Stores hold data, Views render what's in the Store, and Actions change the data in the Store

    - Observables: Observables gives us streams of data. We subscribe to the streams and then perform operations to react to changes. RxJs is the most popular reactive streams library for JavaScript

---

# Data Architecture with Observable

- In Angular we can structure the data architecture of the application using Observables and implementing Reactive Programming

- Reactive Programming is a way to work with asynchronous streams of data

- Observables are the main data structure we use to implement Reactive Programming

---

# Introduction to Reactive Programming

- Reactive programming is programming with asynchronous data streams

- A stream is a sequence of ongoing events ordered in time. It can emit three different things: a value (of some type), an error, or a "completed" signal

- We capture these emitted events only asynchronously, by defining a function that will execute when a value is emitted

- The "listening to the stream is called subscribing", the functions we are defining are observers and the stream is the subject being observed. This is precisely the Observer Design Pattern.

---

# Introduction to Reactive Programming (2)

- Reactive Programming raises the level of abstraction of your code so you can focus on the interdependence of events that define the business logic

- The benefit of RP is more evident in modern webapps: apps have evolved to be more real-time: modifying a single form field can automatically trigger a save to the backend, "likes" to some content can be reflected in real time to other connected users, and so forth.

---

# Observables in Angular

- They are used for:
    - HTTP Requests
    - Reactive Forms
    - UI Events
    - Routing
    - Services

---

# Observables in Angular (2)

```
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn:'root'})
export class UserService {
    constructor(private http: HttpClient) {}

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>('https://api.example.com/users');
    }
}
```

---

# Observables in Angualr (3)

- RxJs operators reduce, filter and map observable element, like:

```
this.userService.getUsers()
    .pipe(
        map(users => users.filter(user => user.isActive))
    )
    .subscribe(activeUsers => {
        this.user = activeUsers;
    });
```

---

# Introduction to RxJs 

- RxJS (Reactive Extensions for JavaScript) is a library for working with asynchronous data streams and events using reactive programming paradigm

- The core concept of RxJs are:
    - Observable: represents a stream of data over time (like Promise, but can emit multiple values) and supports three different function: next, error and complete

    - Observer: is an object that subscribes to the Observable to receive data

    - Subscription: the object returned by .subscribe() used to manage the subscription

    - Operators: functions that transform or combine Observables

---

# Introduction to RxJs (2)

- Most common creation functions:
    - of(1,2,3) emits static values
    - from([1,2,3]) converts array or Promise to Observable
    - interval(1000) Emits a value every second
    - timer(2000) Emits after 2 seconds
    - fromEvent(btn, 'click') Creates Observable from DOM events

---

# Introduction to RxJs (3)

- Most Used operators:
    - map(fn) trasforms values
    - filter(fn) filters values
    - take(n) Takes the first n values
    - debounceTime(ms) Waits for silence before emitting
    - switchMap() Cancels the previous stream and starts a new one (good for autocomplete)
    - mergeMap() Runs all streams in parallel
    - catchError() Handles errors
