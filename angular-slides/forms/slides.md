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
# Form Controls

- A FormControl represents a single input field
- Forms Controls encapsulate the field's value, and states such as being valid, dirty (changed), ot has errors

```
let nameControl = new FormControl("Nate");
let name = nameControl.value // -> Nate

nameControl.errors // -> StringMap<string, any> of errors
nameControl.dirty // -> false
nameControl.valid // -> true
```
- We can attach tot eh DOM with an attribute, like for instance the following code:
```
<input type="text" [formControl]="name">
```
---
# Form Groups
- Most forms have more than one field, so we need a way to manage multiple FormControls.
- Here's how you can create a FormGroup:
```
let personInfo = new FormGroup({
    firstName: new FormControl("Nate"),
    lastName: new FormControl("Murray"),
    zip: new FormControl("90210")
})
```

---
# Form Groups (2)
- FormGroup and FormControl have a common ancestor (AbstractControl). That means we can check the status or value of personInfo just as easily as a single FormControl:

```
personInfo.value;
peroninfo.errors;
personInfo.dirty;
personInfo.valid;
```

--- 
# An Example of Form

