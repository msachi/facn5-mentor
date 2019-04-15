## Week 8 notes

### React API workshop

NB inside `setState()`, should not rely on the values of `this.props` and `this.state` because they may get updated asynchronously  
-- instead use the second form of `setState` that takes a function with the `state` and `props` arguments