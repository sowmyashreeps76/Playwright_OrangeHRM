import { test, expect } from '@playwright/test';


//Grouping the test cases
//multiple group of tests is possible

test.describe("Group1", () => {
    // test.only("test1", () => {
    // test.skip("test1", () => {
        test.fail("test1", () => {
        console.log("test1");

    })
    test("test2", {tag : ["@smoke", "@sowmya"]}, () => {
        console.log("test2");

    })
})

test.describe("Group2", () => {
    test.fixme("test3", () => {
        console.log("test3");

    })
    test("test4", () => {
        console.log("test4");

    })
})


// Annotations

//  .only - Run specific test
//  .skip - skip the test
//  .fail()- intentionally failing the test
//  .slow()- tripple the test time out for slowly running test
//  .fixme ()- for maintanance - it will not run test cases when remove the fixme then only run like .skip


