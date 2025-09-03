// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract PersonalLocker {
    address public owner;
    string private message;
    string private password;

    constructor(string memory _initialMessage, string memory _password) {
        owner = msg.sender;
        message = _initialMessage;
        password = _password;
    }

    function getMessage() public view returns (string memory) {
        require(msg.sender == owner, "Not the owner");
        return message;
    }

    function updateMessage(string memory newMessage, string memory _password) public {
        require(msg.sender == owner, "Not the owner");
        require(keccak256(bytes(_password)) == keccak256(bytes(password)), "Invalid password");
        message = newMessage;
    }
}
