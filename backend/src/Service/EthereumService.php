<?php
namespace App\Service;

use App\Document\Event;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class EthereumService
{
    /**
     * @var HttpClientInterface
     */
    private $httpClient;

    /**
     * @var string $ethereumServiceUrl
     */
    private $ethereumServiceUrl;

    /**
     * EthereumService constructor.
     * @param HttpClientInterface $httpClient
     * @param EthereumService $ethereumServiceUrl
     */
    public function __construct(HttpClientInterface $httpClient, $ethereumServiceUrl)
    {
        $this->httpClient = $httpClient;
        $this->ethereumServiceUrl = $ethereumServiceUrl;
    }

    public function getAvailableTickets(Event $event) {

    }

    public function addEvent(Event $event) {
        
        /*$this->api('POST', 'event', [
            'address' => $event->getEthOrganizerId(),
        ]);
        */

        return json_encode([ 'address' => 'sakdfjlsadfkjf']);
    }

    public function createSmartContract($ticketCount= 100, $organizerAddress="0x") {

        $response = $this->api('POST', 'posts', [
            'ticketCount' => $ticketCount,
            'address' => $organizerAddress
        ]);
        if (201 !== $response->getStatusCode()) {
            throw new Exception("couldnt create smart contract for $organizerAddress");
        }

        $headers = $response->getHeaders();

        if (isset($headers['location'][0])) {
            return $headers['location'][0];
        }
        return null;
    }

    public function getContractInfo(string $location) {
        return $response = $this->httpClient->request('GET', $location);
    }

    private function api($method, $endpoint, $payload) {

        $serviceUrl = [
            $this->ethereumServiceUrl,
            $this->endpoint
        ];
        
        $url = "{$this->ethereumServiceUrl}/$endpoint"; 

        $response = $this->httpClient->request($method, $endpoint, [
            "json" => $payload
        ]);

        if (200 !== $response->getStatusCode() ) {
            // TODO
        }

        return $response;
    }
}