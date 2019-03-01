## Week 1 notes

### DOM manipulation challenge

‘Test’ in this context probably means ‘open index.html in your browser and see if it works’  
-- Need to console.log instead of return to see the result

DOM element property *innerText* returns the visible text contained in a node, while *textContent* returns the full text

updateStateValue() and updateStateValues() solutions seem to be wrong (need inputName and inputNames properties, respectively), generateUl() solution is wrong also

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