pragma solidity >=0.4.22 <0.6.0;
contract ETHicketEvent {
    address payable hoster;
    
    mapping (address => uint8) tickets;
    
    constructor() public {
        hoster = msg.sender;
    }
    
    function requestTicket(address attendee) payable public {
        require (msg.value > 1000000);
        hoster.transfer(msg.value);
        tickets[attendee] += 1;    
    }
    
    function getTicketCount(address requester) public view returns (uint8) {
        require(msg.sender == hoster);
        
        return tickets[requester];
    }
}
