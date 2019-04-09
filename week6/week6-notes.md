## Week 6 notes

### Intro to databases

People & pets
- if one person can only own one pet (one-to-one), need ownerID in pet table
- if one person can own many pets (one-to-many), need ownerID in pet table
- if many persons can share one pet (many-to-one), need petID in owner table
- if many persons can share many pets (many-to-many), need a separate table to describe the relationships (ownerID -- petID, one row per relationship)

### PostgreSQL setup

The set up instructions ask you to 'create a new postgres database for the currently logged in user', but really all you're doing is craeting a new database with the current username as the database name

### SQL commands workshops

Postgres operators: equal(`=`), not equal(`<>`), less than (`<`), greater than (`>`)

Types of joins:
-- (INNER) JOIN: Returns records that have matching values in both tables
-- LEFT (OUTER) JOIN: Return all records from the left table, and the matched records from the right table
-- RIGHT (OUTER) JOIN: Return all records from the right table, and the matched records from the left table
-- FULL (OUTER) JOIN: Return all records when there is a match in either left or right table

We mainly use (INNER) JOIN because we only want the records that are linked / matched  
-- but for the test data we could use any type of join, since all the records are linked

### PG walkthrough

Confusingly, the `env2` module expects a path to your env file that is **relative to the root**

### Database testing workshop

The WS suggests cloning the WS repo, copy-pasting the existing DB url from the pg-workshop repo to `config.env`, and then creating and linking up a new test DB  
-- but can probably just as easily start from the existing pg-workshop directory and just create and link up a new test DB

Following the suggested refactor, the `runDbBuild` function inside `db_build.js` needs to be called in a non-test environment, otherwise `node [path-to-build-file]` won't do anything

`t.error(err)` should be run in each error-first callback, to make sure that there is no error  
-- do not wrap it with an `if` statement, otherwise it won't actually run

### Morning challenge

To connect to the Heroku database: `\c heroku-database-url`, then can use SQL commands like on a local database

The first challenge uses an example of a 'correlated subquery' (also known as 'synchronised subquery')  
-- this is a query that uses the values from the outer query  
-- it is executed once for each row processed by the outer query  
-- aliases must be used to distinguish table names from the inner and outer queries

Some shorthands:  
-- `SELECT * FROM posts JOIN likes` can be shortened to `SELECT * FROM posts, likes`  
-- `books as B` can be shortened to `books B`  
-- `CAST(AVG(count) AS INTEGER)` can be shortened to `AVG(count)::INTEGER`

### Projects

To link tables together (e.g. `users` and `posts`), can add the following to the `posts` table: `user_id INTEGER REFERENCES users(id)`

To escape single quotes in Postgres, need to double them up

NB `package-lock.json` file should be committed and pushed to master
