---

marp: true

---

# Basic Forms in Angular

---

# Introduction
- Forms are where we get the majority of our rich data input from users

- Forms can be very complex:
    - Form inputs are menat to modify data, both on the page and the server
    - Changes often need to be reflexted elsewhere no the page
    - Users have a lot of leeway in what they enter, so  you need to validate values
    - The UI needs to clearly state expectations and errors, id any
    Dependent fields can have complex logic
    - We want to be able tot test our forms, without relying on DOM selectors
---
# Angular Form Tools
- Angular help with all of these things:
    - FormControls encapsulate the inputs in our forms and give us objects to work with them
    - Validators give us the ability to validate inputs
    - Observers let us watch our form for changes and respond accordingly
---

