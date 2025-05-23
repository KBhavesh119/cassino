// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract CasinoGame {
    address public owner;

    event BetPlaced(address indexed player, uint256 amount, string game, bool win, string userInput, string outcome);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call.");
        _;
    }

    function placeBetChooseNumber(uint256 guess) external payable {
        require(msg.value > 0, "Must bet some ETH.");
        require(guess >= 1 && guess <= 10, "Guess must be between 1 and 10.");

        uint256 random = (uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 10) + 1;

        bool win = guess == random;

        if (win) {
            payable(msg.sender).transfer(msg.value * 2);
        }

        emit BetPlaced(msg.sender, msg.value, "choose-number", win, toString(guess), toString(random));
    }

    function placeBetHeadsOrTails(string memory guess) external payable {
        require(msg.value > 0, "Must bet some ETH.");
        require(compareStrings(guess, "heads") || compareStrings(guess, "tails"), "Invalid guess.");

        string memory outcome = (block.timestamp % 2 == 0) ? "heads" : "tails";
        bool win = compareStrings(guess, outcome);

        if (win) {
            payable(msg.sender).transfer(msg.value * 2);
        }

        emit BetPlaced(msg.sender, msg.value, "heads-or-tails", win, guess, outcome);
    }

    function withdraw() external onlyOwner {
        payable(owner).transfer(address(this).balance);
    }

    // Helpers
    function compareStrings(string memory a, string memory b) private pure returns (bool) {
        return keccak256(bytes(a)) == keccak256(bytes(b));
    }

    function toString(uint256 value) private pure returns (string memory) {
        if (value == 0) return "0";
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) { digits++; temp /= 10; }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + value % 10));
            value /= 10;
        }
        return string(buffer);
    }

    receive() external payable {}
}
