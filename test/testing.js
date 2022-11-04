const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("testing voting smart contract", function () {
  let add1, add2, add3, add4, candidate;
  let voting;
  let votingInstance;

  beforeEach(async function () {

    [add1, add2, add3, add4, candidate] = await ethers.getSigners();
    voting = await ethers.getContractFactory("voting");
    votingInstance = await voting.deploy();
  
  });

  describe("", function () {
  
    it("vote function working fine", async function () {
     
      await votingInstance.vote(candidate.address);
      await votingInstance.connect(add2).vote(candidate.address);
      await votingInstance.connect(add3).vote(candidate.address);
      await votingInstance.connect(add4).vote(candidate.address);
      let funds = await votingInstance.GetTotalFunds(candidate.address);
      expect(await votingInstance.getVoteCount(candidate.address)).to.equal(4);
   
    });

    it("fundme function working fine", async () => {
     
      await votingInstance.connect(add3).SendEth(candidate.address, { value: ethers.utils.parseEther("5") });
      await votingInstance.SendEth(candidate.address, {value: ethers.utils.parseEther("10"),});
      let funds = await votingInstance.GetTotalFunds(candidate.address);
      if (funds > 14) {
        console.log("working fine");
      }
   
    });
 
  });

});
