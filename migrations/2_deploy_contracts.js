var PaperHouse = artifacts.require("./book.sol");

module.exports = function(deployer) {
  deployer.deploy(PaperHouse);
};
