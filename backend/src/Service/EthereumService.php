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
     * @var string $method
     */
    private $method;

    /**
     * @var string $endpoint
     */
    private $endpoint = '';

    /**
     * @var array $payload body uploaded to API
     */
    private $payload = [];

    /**
     * EthereumService constructor.
     * @param HttpClientInterface $httpClient
     * @param EthereumService $ethereumServiceUrl
     */
    public function __construct(HttpClientInterface $httpClient, $ethereumServiceUrl )
    {
        $this->httpClient = $httpClient;
        $this->ethereumServiceUrl = $ethereumServiceUrl;

    }

    public function getAvailableTickets(Event $event) {

    }

    public function addEvent(Event $event) {
        $this->endpoint = 'event';
        $this->method = 'POST';

        $this->payload = [
            'json' =>   [
                'address' => $event->getEthOrganizerId(),
            ]
        ];

        return json_encode([ 'address' => 'sakdfjlsadfkjf']);
        //return $this->executeApiCall();
    }

    public function getTest() {
        $this->endpoint = 'posts';
        $this->method = 'POST';

        $this->payload = [
          'json' =>   [
              'title' => 'Test',
              'body' => 'Body Rock',
              'userId' => 3
          ]
        ];


        return $this->executeApiCall();
    }

    public function getContractInfo(string $location) {
        return $response = $this->httpClient->request('GET', $location);
    }

    private function executeApiCall() {

        $serviceUrl = [
            $this->ethereumServiceUrl,
            $this->endpoint
        ];

        $response = $this->httpClient->request($this->method, implode('/', $serviceUrl) , $this->payload);

        if (200 !== $response->getStatusCode() ) {
            // TODO
        }

        return $response;

    }


}