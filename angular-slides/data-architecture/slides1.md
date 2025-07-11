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