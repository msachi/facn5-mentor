## Week 7 notes

### Stateless session management workshop

Example Bcrypt and JWT-based authentication:  
-- when registering, user sends their username and password  
-- server hashes the password using a random salt and stores the username and pw hash in the DB  
-- when logging in, user sends their username and password  
-- server retrieves the user, hashes the password and compares the hash to the hash from the DB  
-- if user authenticated, server signs a JWT using the user id and a secret  
-- server sends the JWT back to client in the login response  
-- client stores the JWT in local / session storage  
-- in each request, client attaches the JWT to the Authorization header  
-- server retrieves the user id from the JWT using the secret

An alternative is to store the JWT in a cookie, which will get automatically sent to the server in each request
-- NB JWT is just a standard for encoding and signing user information, it doesn't specify how that information should be stored and sent around

JWTs use a combination of encoding (sections 1 and 2) and hashing (section 3)  
-- hashing is used just for signing, i.e. to specify the JWT has been created by the server and has not been tampered with  
-- the actual user data can still easily be decoded, so should not store sensitive information in a JWT

Encoding: can easily be reversed using a public algorithm  
Encryption: can only be reversed with a secret key  
Hashing: cannot be reversed

### Promises morning challenge

You do not have to return promises from fulfilment handlers provided to `then()` calls, can also just return a value
-- values will be automatically wrapped in a promise (which will resolve on the next turn of the event loop)

### Client-side validation challenge

Two ways of accessing data:  
-- from `e.target` in the form submit event listener  
-- from the relevant input elements directly

In the first case, need to use custom validation

In the second case, can use html5 validation and then check the `validity` property of each input element

### Projects

It is standard practice to send 'plaintext' passwords over HTTPS  
-- client-server communication is encrypted anyway  
-- additionally encrypting the password doesn't accomplish much because if an attacker retrieves it they could use it as if it were an actual password (the server wouldn't know the difference)  
-- shouldn't do this if using HTML though

Status code 401 can be used when the request is not authorized

302 redirects should only be used on the server for browser navigation requests  
-- if you use them for JS fetch requests, the client will expect a JSON response and will get an HTML of the redirect page instead