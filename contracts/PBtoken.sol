// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PBtoken is ERC20 {
    constructor(string memory name, string memory symbol,address to,uint totalsupply) ERC20(name,symbol) {

        _mint(to, totalsupply);
    }
}