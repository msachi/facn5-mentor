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

### Event loop video

Sections of video (pause after each):

1) Call stack (sync examples)  
-- JS only has one call stack; it can only do one thing at a time  
-- call stack records where in the programme we are  
-- when we step into a function we push something onto the stack; when we return from a function, we pop off the top of the stack  
-- if you get an error in the console, it will print the stack trace  
-- infinite loops wils blow the call stack  

2) Blocking behaviour  
-- code that is slow and on the stack  
-- blocking sync operations are problematic in the browser; it gets stuck and can't do anything  
-- blocking is prevented using async callbacks  

3) Concurrency  
-- we can do more than one thing at at time because the browser is more than just the runtime   
-- web APIs, task queue and event loop are all implemented in the browser (not V8)  
-- web API pushes callbacks that are done to the task queue  
-- event loop takes the first thing on the task queue and pushes it onto the stack, provided that the stack is empty  

4) Examples  
-- defering execution with setTimeout  

> setTimeout(cb, 0) defers execution until the stack is clear  

-- AJAX requests  
-- click handlers  
-- running multiple setTimeouts in a row  

> setTimeout is not a guaranteed time to execution, it's a minimum time to execution  
-- setTimeout(cb, 1000) will run in 1000 ms or later  

-- looping through an array in a sync and async way  
-- simulating the rendering in the browser  

> The browser needs to wait until the stack is clear before it can (re)render  
-- although the render is given a higher priority than your callbacks  
-- this is why you shouldn't block the call stack!  

-- scroll events and the need to debounce  

### Software design workshop

A first-class citizen in a programming language is an entity that supports all the operations available to other entities  
-- functions are first-class objects in JS, i.e. they support all operations allowed to other objects  

Local variables are created when the function is invoked, and deleted when the function is finished  
-- a closure is a function having access to the parent scope, even after the parent function has closed

There is actually a bug in the final exercise of Stage 1, which they'll need to fix before they can start to refactor

Stage 2 exercise bugs:
-- tests mistakenly point to the solution file  
-- tests expect the 'query' property to be 'querystring'  
-- the function is not set up as an IIFE (might be intentional)

