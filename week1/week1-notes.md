## Week 1 notes

### DOM manipulation challenge

‘Test’ in this context probably means ‘open index.html in your browser and see if it works’  
-- Need to console.log instead of return to see the result

DOM element property *innerText* returns the visible text contained in a node, while *textContent* returns the full text

Copying objects in JS:
- Object.assign() can be used for shallow copying (same for spread operator)
- JSON.parse(JSON.stringify()) can be used for deep copying
- the first can be used to copy methods whereas the second cannot
- the first can be used to copy object with circular references, the second cannot

### Git workflow workshop

Recap:  
-- Git, GitHub, a repository, local vs. remote  
-- `git clone`, `git add`, `git commit`, `git push`, `git pull`

New concepts:  
-- GitHub issues  
-- branches (master vs. feature branches), `git branch`, `git checkout`  
-- pull requests (assigning, merging)  
-- `git merge`, solving merge conflicts

'FAC' flow assumptions:  
-- no one should ever work on master or push directly to origin/master  
-- a new branch is created for each new (sub)feature  
-- two different people / pairs should never work on the same branch (if they did, then would always need to merge / rebase from remote before pushing)

More comprehensive git flow:  
-- https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow

`git clone` under the hood: fetches all branches, but only creates one local branch (`master`)

To `stage` a file is to prepare it for a commit. For example if you've touched 5 files, you might only want to stage 2 of them, or only parts of some of them. When you are happy with what you have in the staging area, you commit everything that is there in one go.

When you `commit` something you make it part of your git repository (and not just the working repository). A commit is a snapshot of the whole repo at a particular time.

Since Git 2.0: `git stage -A` and `git stage .` are almost equivalent (both of them stage new, modified and deleted files). However, only the first stages everything regardless of where you are folder structure (the latter ignores folders higher up in the structure from the current one).

"You should never merge your own pull requests." - depends on the workflow. Sometimes collaborators will only comment/ approve, but you are responsible for merging your own pull request.

To checkout to a local version of a (new) remote branch: `git fetch`, then `git checkout featureA`

`git pull` = `git fetch` + `git merge`

### CSS gallery challenge

By default there will be 4px space between inline-block positioned elements  
-- the space is due to HTML (it’s a whitespace)  
-- can either remove the space in the HTML or hack the CSS (add `font-size: 0;` to the parent element - `.gallery`)  
-- or: use Flexbox!

NB `.photo` class should have `font-size: 0;` too to avoid the spacing between the image and the caption in the first figure

Technically min-width should be 601px (the instruction is HIGHER than 600px)

Combining class selectors:  
-- `.foo .bar` means the styles are applied to element with class `.bar` that is inside an element with class `.foo`  
-- `.foo.bar` means the styles are applied to element that has both classes (`.foo` and `.bar`)

Need to use `.gallery .tripled` instead of just `.tripled`, solely to override the specificity of `.gallery .photo`