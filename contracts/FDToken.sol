// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// Made with Love by Dennison Bertram @Tally.xyz

import "@openzeppelin/contracts@4.6.0/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@4.6.0/access/Ownable.sol";
import "@openzeppelin/contracts@4.6.0/utils/cryptography/draft-EIP712.sol";
import "@openzeppelin/contracts@4.6.0/token/ERC721/extensions/draft-ERC721Votes.sol";
import "@openzeppelin/contracts@4.6.0/utils/Counters.sol";
import "@openzeppelin/contracts@4.6.0/token/ERC721/extensions/ERC721Enumerable.sol";

contract FDToken is ERC721, Ownable, EIP712, ERC721Votes, ERC721Enumerable{
    using Counters for Counters.Counter;

    mapping(uint256 => string) properities;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("FDToken", "FDT") EIP712("FDToken", "1") {
    }

    function _baseURI() internal pure override returns (string memory) {
        return "<https://www.myapp.com/>";
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, ERC721Enumerable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function safeMint(address to) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }

    // The following functions are overrides required by Solidity.

    function _afterTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721, ERC721Votes)
    {
        super._afterTokenTransfer(from, to, tokenId);
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
    internal override(ERC721, ERC721Enumerable) {
        require(from == address(0), "Err: token is SOUL BOUND");
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function transferGood(address to, uint256 amount) public {
        for (uint256 i = 0; i < amount; i++) {
            uint256 tokenId = _tokenIdCounter.current();
            properities[tokenId] = "good";
            _tokenIdCounter.increment();
            _safeMint(to, tokenId);
        }
    }

    function transferBad(address to, uint256 amount) public {
        for (uint256 i = 0; i < amount; i++) {
            uint256 tokenId = _tokenIdCounter.current();
            properities[tokenId] = "bad";
            _tokenIdCounter.increment();
            _safeMint(to, tokenId);
        }
    }

    function getOwnedToken(address owner) public view returns (int result) {
        int _good = 0;
        int _bad = 0;
        uint256 tokenCount = balanceOf(owner);
        for (uint256 i = 0; i < tokenCount; i++) {
            if(sha256(bytes(properities[tokenOfOwnerByIndex(owner, i)])) == sha256(bytes("good"))) {
                _good += 1;
            }
            else if(sha256(bytes(properities[tokenOfOwnerByIndex(owner, i)])) == sha256(bytes("bad"))) {
                _bad += 1;
            }
        }
        result = _good - _bad;
    }
}
