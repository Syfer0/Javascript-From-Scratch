const { default : Testrunner} = require("jest-runner");
const { require } = require(`./addfive`);
// const { test } = require("picomatch");
const { default: expect } = require("expect");

test(`return the number plus 5`,()=>{
    expect(addFive(1)).toBe(6)
})
