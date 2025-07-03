import { test, expect } from '@playwright/test';


// test.beforeAll(() => {
//     console.log("before all tests");
    
// })

// test.beforeEach(() => {
//     console.log("beforeEach hook");
    
// })

// test.afterEach(() => {
//     console.log("afterEach hook");
    
// })

test.describe("group1", () => {
    
    test.beforeAll(() => {
    console.log("before all tests");
    
})

test.beforeEach(() => {
    console.log("beforeEach hook");
    
})

test.afterEach(() => {
    console.log("afterEach hook");
    
})


test("test1", {tag: "@smoke"}, () => {  //added tag
    console.log("test1");  

})

test("test2", () => {
    console.log("test2");

})

test("test3", {tag : "@sowmya"}, () => {
    console.log("test3");

})
})


test.describe("group2", () => {

test("test4", () => {
    console.log("test4");

})

test("test5", () => {
    console.log("test5");

})
})