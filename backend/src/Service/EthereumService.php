<?php
namespace App\Service;

use App\Document\Event;
use Symfony\Component\HttpFoundation\Response;
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


    public function createSmartContract($ticketCount= 100, $organizerAddress="0x") {

        $response = $this->api('POST', 'posts', [
            'ticketCount' => $ticketCount,
            'address' => $organizerAddress
        ]);

        if (Response::HTTP_CREATED !== $response->getStatusCode()) {
            throw new Exception("couldn't create smart contract for $organizerAddress");
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

        $url = "{$this->ethereumServiceUrl}/$endpoint";

        $response = $this->httpClient->request($method, $url, [
            "json" => $payload
        ]);

        return $response;
    }
}