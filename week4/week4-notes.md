## Week 4 notes

### Node.js code-along

Declaring variables without the 'var' keyword  
-- the variable's scope will be global regardless of where it is declared  
-- the only difference between declaring a global variable like this and using 'var' in the global scope is that the latter can't be deleted with `delete`  
-- however, if a variable with that name has already been declared elsewhere using 'var', then that variable will be reassigned (and that variable's scope will be used)