## Week 7 notes

### Client-side validation challenge

Two ways of accessing data:  
-- from `e.target` in the form submit event listener  
-- from the relevant input elements directly

In the first case, need to use custom validation

In the second case, can use html5 validation and then check the `validity` property of each input element