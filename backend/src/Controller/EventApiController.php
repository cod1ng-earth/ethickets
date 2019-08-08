<?php

namespace App\Controller;

use App\Document\Event;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;


/**
 * @Route("/v1/events")
 */
class EventApiController extends AbstractController
{
    /**
     * @var SerializerInterface
     */
    private $serializer;

    public function __construct(SerializerInterface $serializer)
    {
        $this->serializer = $serializer;
    }

    /**
     * @Route("/", name="api_events", methods={"GET", "HEAD"})
     */
    public function index(DocumentManager $dm)
    {
        $events = $dm->getRepository(Event::class)->findAll();

        if (!$events) {
            throw $this->createNotFoundException('No events found.');
        }

        $serialized = $this->serializer->serialize($events, 'json', [
            'groups' => ['api_default']
        ]);

       return new JsonResponse($serialized, Response::HTTP_OK, [], true);

    }

    /**
     * @Route("/{id}", name="api_events_detail", methods={"GET", "HEAD"})
     */
    public function detail(DocumentManager $dm, $id  = null)
    {
        $event = $dm->getRepository(Event::class)->findOneBy(['id' => $id]);

        if (!$event) {
            throw $this->createNotFoundException('No event found with ID '.$id);
        }

        $serialized = $this->serializer->serialize($event, 'json', [
            'groups' => ['api_default']
        ]);


        return new JsonResponse($serialized, Response::HTTP_OK, [], true);
    }







}
