---

marp: true

---

# Introduction to Dependency Injection in Angular

---

# General concept of DI

- Dependency Injection is a system to make parts (class and object) of our program accessible to other parts of the program - and we can canfigure how that happens

- The major benefit of using Dependency Injection is that the client commponent needn't be aware of how to create the dependencies. All the client component need to know is hoe to interact with those dependencies

---

# How DI works in Angular

- Register the "dependency" with Angular

- Describe how the dependency will be injected

- Inject the dependency

- Usually, we may want to have only one instance of the class to be injected, that is, a Singleton.

---

# Dependency Injection Parts

- Dependency Injection in Angular has three pieces:

- the Provider (also often referred to as a binding) maps a token (that can be a string or a class) to a list of  dependencies. It tells Angular how to create an object, given a token

- the Injector that holds a set of bindings and is responsible for resolving dependencies and injecting them when creating objects

- the Dependncy that is what's being injected

---

# Providing dependencies with NgModule

- The typical way of using DI in Angular is by following these two steps:

    - use NgModule to register what we'll inject - these are called providers and
    
    - use decorators (generally on a constructor) to specify what we're injecting


---

# An example of DI: user-demo.module.ts

```
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserService} from '../services/user.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        UserService
    ],
    declarations: []
})
export class UserDemoModule {}
```

---
# An example of DI: user-demo.component.ts

```
```