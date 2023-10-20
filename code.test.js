const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

var test1 = [
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 1],
    [1, 1, 0, 0, 0]
];

assert(JSON.stringify(depthFirstSearch(test1, 0, 1)) != JSON.stringify([])) 
assert(JSON.stringify(depthFirstSearch(test1, 0, 2)) == JSON.stringify([]))  
assert(JSON.stringify(depthFirstSearch(test1, 0, 3)) != JSON.stringify([])) 
assert(JSON.stringify(depthFirstSearch(test1, 0, 4)) != JSON.stringify([])) 

var test2 = [
    [0,0,0,0,0],
    [0,0,1,0,1],
    [1,1,0,0,0],
    [0,1,1,0,0],
    [0,0,0,1,0]
]

assert(JSON.stringify(depthFirstSearch(test2, 0, 1)) == JSON.stringify([])) 
assert(JSON.stringify(depthFirstSearch(test2, 2, 3)) != JSON.stringify([])) 
assert(JSON.stringify(depthFirstSearch(test2, 1, 0)) != JSON.stringify([])) 
assert(JSON.stringify(depthFirstSearch(test2, 3, 4)) != JSON.stringify([])) 

var test3 = [
    [0,0,0,0,1],
    [0,0,0,1,0],
    [0,1,0,0,0],
    [0,0,1,0,0],
    [1,0,1,0,0]
]

assert(JSON.stringify(depthFirstSearch(test3, 0, 3)) != JSON.stringify([])) 
assert(JSON.stringify(depthFirstSearch(test3, 1, 4)) == JSON.stringify([])) 
assert(JSON.stringify(depthFirstSearch(test3, 2, 0)) == JSON.stringify([])) 
assert(JSON.stringify(depthFirstSearch(test3, 4, 3)) != JSON.stringify([])) 
