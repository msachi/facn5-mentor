## Week 1 notes

### Intro to APIs

xhr.response: can be of various types, including JS object  
xhr.responseText: can only be a string (JSON) or `null`  

Fetch's Body.json() is asynchronous, whereas XHR's JSON.parse() is synchronous

NB: with fetch, a failed request (e.g. a request returning a 404) will not automatically result in the catch block being called

'Synchronous' does NOT mean 'happening at the same time', but 'using the same clock' (and so happening one after the other)

### API workshop

'No ES6' rule: using .then() and .catch() as part of using fetch() is allowed  
-- the official solution actually uses ES6 in other places

This is a good exercise to practice how to make code modular, reusable / DRY and to implement separation of concern (e.g. fetching data, processing / extracting data, updating DOM)

It is important to batch up all DOM changes in one synchronous piece of Javascript. In this way the browser will queue the reflow and repaint until you've made all your DOM changes.
