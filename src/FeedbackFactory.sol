// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "./Feedback.sol";

contract FeedbackFactory {
    mapping(address => Feedback[]) public feedbackList;

    function createFeedbackList(
        string memory name,
        string memory symbol
    ) external returns (Feedback company) {
        feedbackList[msg.sender].push(
            ((company = new Feedback(msg.sender, name, symbol)))
        );
    }
}
