## Week 6 notes

### PG walkthrough

Confusingly, the `env2` module expects a path to your env file that is **relative to the root**

### Database testing workshop

The WS suggests cloning the WS repo, copy-pasting the existing DB url from the pg-workshop repo to `config.env`, and then creating and linking up a new test DB  
-- but can probably just as easily start from the existing pg-workshop directory and just create and link up a new test DB

`t.error(err)` should be run in each error-first callback, to make sure that there is no error  
-- do not wrap it with an `if` statement, otherwise it won't actually run