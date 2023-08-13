const { expect } = require("chai");

describe("CapybaraNFT", function () {
  let capybaraNFT;
  let owner;

  beforeEach(async function () {
    const CapybaraNFT = await ethers.getContractFactory("CapybaraNFT");
    capybaraNFT = await CapybaraNFT.deploy();
    owner = await capybaraNFT.owner();
  });

  it("should mint a new token with correct owner and token URI", async function () {
    const tokenId = 1;
    const expectedTokenURI = "https://example.com/token/1";

    await capybaraNFT.mint(owner, tokenId, expectedTokenURI);

    const tokenOwner = await capybaraNFT.ownerOf(tokenId);
    const tokenURI = await capybaraNFT.tokenURI(tokenId);

    expect(tokenOwner).to.equal(owner);
    expect(tokenURI).to.equal(expectedTokenURI);
  });

  it("should not allow non-owner to mint a new token", async function () {
    const [owner, nonOwner] = await ethers.getSigners(); // Get the owner and non-owner signers
    const tokenId = 1;
    const tokenURI = "https://example.com/token/1";

    // Try to mint from non-owner account
    await expect(
        capybaraNFT.connect(nonOwner).mint(nonOwner.address, tokenId, tokenURI)
    ).to.be.revertedWith("Ownable: caller is not the owner");
  });
});