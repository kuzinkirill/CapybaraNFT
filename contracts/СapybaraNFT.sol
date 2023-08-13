// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

//import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CapybaraNFT is ERC721URIStorage, Ownable {

    constructor() ERC721("Capybara", "CPB") {}

    function mint(address _to, uint _tokenId, string calldata _tokenURI) external onlyOwner {
        _mint(_to, _tokenId);
        _setTokenURI(_tokenId, _tokenURI);
    }

}