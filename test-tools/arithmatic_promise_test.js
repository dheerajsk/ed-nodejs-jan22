const arithmatic = require("./arithmatics_promise");
const chai = require("chai");
const expect = chai.expect;

describe("Async Arithmatic Tests", ()=>{

    it("Should add two no asynchornously", async()=>{
        // Arrange
         const num1=10;
         const num2=20;
         const expectedResult=30;
         var actualResult;
        
        // Act
        actualResult = await arithmatic.add(num1, num2);
        console.log(actualResult);

        // Assert
        expect(actualResult).to.be.equal(expectedResult);

    });

    it("Should add two no asynchornously", (done)=>{
        // Arrange
         const num1=10;
         const num2=20;
         const expectedResult=30;
         var actualResult;
        
        // Act
        arithmatic.add(num1, num2).then(
        (res)=>{
            actualResult=res;
            console.log("Is this printed before pass ?");
            expect(actualResult).to.be.equal(expectedResult);
            done();
        });
        
    });

    it("Should just pass", ()=>{

    })

});