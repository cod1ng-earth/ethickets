<?php


namespace App\Service;
use App\Document\Event;


class EventMapper
{


    /**
     * @param Event $event
     * @return false|array
     */
    public function jsonResponseMapper(Event $event) {

        $data[] = [
            'id' => $event->getId(),
            'organizerName' => $event->getOrganizerName(),
            'name' => $event->getName(),
            'description' => $event->getDescription(),
            'ethContractId' => $event->getEthContractId(),
            'ticketPrice' => $event->getTicketPrice(),
            'url' => $event->getUrl(),
            'startDate' => $event->getStartDate(),
            'endDate' => $event->getEndDate()
        ];
        return $data;
    }
}