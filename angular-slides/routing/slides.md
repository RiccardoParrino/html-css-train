---

marp: true

---

# Basic Routing in Angular

---

# Introduction to Routing in Angular

- In web development, routing means splitting the application into different areas usually based on rules that are derived from the current URL in the browser

- Defining routes in our application is useful for:
    - seperate different areas of the app;
    - maintain the state in the app;
    - protect areas of the app based on certain rules;

- Routing lets us define a URL string that specifies where within our app a user should be

---

# How client-side routing works

- With Angualr, we have "Single Page Apps" (SPA) because our server only gives us a single page and it's our JavaScript that renders the different pages. So how can we have different routes in our JavaScript code?

- At the beginneing was the anchor tag for simple HTML5 page. With this feature, it was possible to link the user to a specific portion of the current webpage

- The evolution for the SPA  was to take the anchor tags and use them represent the routes within the app by formatting them as paths.

- So the actual URL for an SPA became something like: http://something/#/about. This is what is known as hash-based routing

---

# The evolution: HTLM5 client-side routing 

- Modern frameworks rely on pushState to perform history manipulation without reloads

- 

---

# Writing out first routes

- In Angular we configure routes by mapping paths to the component that will handle them

- For example, you can have a simple app with three different routes:
    - A main page route: /#/home path
    - An about page: /#/about path
    - A contact us page: /#/contact
    - And  when the user visits the root path (/#/), it will redirect to the home path

---

# Components of Angular Routing

- Routes describes the routes our application supports

- RouterOutlet is a "placeholder" component that shows Angular where to put the content of each route

- RouterLink directive is used to link to routes

---

# How to use Route in Angular

- Import
- Routes
- Redirections
- Installing our Routes 

---

# Angular Routing Implementation: Imports

```
import {RouterModule, Routes} from '@angular/router';
```

---

# Angular Implementation: Define routes

```
const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'contactus', redirectTo: 'contact'},
```

---

```
    // authentication demo
    {path: 'login', component: LoginComponent},
    {
        path: 'protected',
        component: ProtectedComponent,
        canActivate: [LoggedInGuard]
    }

    // nested
    {
        path: 'products',
        component: ProductsComponent,
        children: childRoutes
    }
]
```

---

# Redirections

- When we use redirectTo on a route definition, it will tell the router that when we visit the path of the route, we want the browser to be redirected to another route

--- 

# Installing the Routes

- To use the routes in our app we do two things to our NgModule:
    1. Import the RouterModule
    2. Install the routes using RouterModule.forRoot(routes) in the imports of our NgModule

---

# Installing the routes (1)

```
const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch:'full'},
    {path: 'home', component: HomeComponet},
    ...
]
```

---

# Installing the routes (2)

```
import: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes), // <-- routes
    ProductsModule
]
```

---

