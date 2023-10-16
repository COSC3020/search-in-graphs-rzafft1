const fs = require('fs');
const jsc = require('jsverify');

// Read and evaluate code from 'code.js'
const codeContent = fs.readFileSync('code.js', 'utf8');
eval(codeContent);

var test1 = [
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 1],
    [1, 1, 0, 0, 0]
];

if (depthFirstSearch(test1, 0, 1).length < 1) {
    console.log("ERROR")
}
else {
    console.log("PASSED")
}

if (depthFirstSearch(test1, 0, 2).length > 1) {
    console.log("ERROR")
}
else {
    console.log("PASSED")
}

if (depthFirstSearch(test1, 0, 3).length < 1) {
    console.log("ERROR")
}
else {
    console.log("PASSED")
}

if (depthFirstSearch(test1, 0, 4).length < 1) {
    console.log("ERROR")
}
else {
    console.log("PASSED")
}

var test2 = [
    [0,0,0,0,0],
    [0,0,1,0,1],
    [1,1,0,0,0],
    [0,1,1,0,0],
    [0,0,0,1,0]
]

if (depthFirstSearch(test2, 0, 4).length > 1) {
    console.log("ERROR")
}
else {
    console.log("PASSED")
}

if (depthFirstSearch(test2, 2, 3).length < 1) {
    console.log("ERROR")
}
else {
    console.log("PASSED")
}

if (depthFirstSearch(test2, 1, 0).length < 1) {
    console.log("ERROR")
}
else {
    console.log("PASSED")
}

if (depthFirstSearch(test2, 3, 4).length < 1) {
    console.log("ERROR")
}
else {
    console.log("PASSED")
}

var test3 = [
    [0,0,0,0,1],
    [0,0,0,1,0],
    [0,1,0,0,0],
    [0,0,1,0,0],
    [1,0,1,0,0]
]

if (depthFirstSearch(test3, 0, 3).length < 1) {
    console.log("ERROR")
}
else {
    console.log("PASSED")
}

if (depthFirstSearch(test3, 1, 4).length > 1) {
    console.log("ERROR")
}
else {
    console.log("PASSED")
}

if (depthFirstSearch(test3, 2, 0).length > 1) {
    console.log("ERROR")
}
else {
    console.log("PASSED")
}

if (depthFirstSearch(test3, 4, 3).length < 1) {
    console.log("ERROR")
}
else {
    console.log("PASSED")
}