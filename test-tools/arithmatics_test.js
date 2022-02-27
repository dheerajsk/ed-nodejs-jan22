const arithmatic = require("./arithmatics");
const chai = require("chai");
const expect = chai.expect;

// 1. Test Suite per module.
// Many test cases to cover all functionalities.

// Test Suite
describe("Arthimatic Tests", ()=>{

    // Test Cases
    it("should add 2 numbers", ()=>{
        // AAA (Arrange, Act, Assert)

        // Arrange
        const num1=10;
        const num2=20;
        const expectedResult=30;
        var actualResult;

        // Act
        actualResult = arithmatic.add(num1, num2);

        // Assert
        expect(actualResult).to.be.equal(expectedResult);
    });

});