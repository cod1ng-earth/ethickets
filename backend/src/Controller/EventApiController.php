<?php

namespace App\Controller;

use App\Document\Event;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class EventApiController extends AbstractController
{
    /**
     * @Route("/v1/events/", name="api_events", methods={"GET", "HEAD"})
     */
    public function index(DocumentManager $dm)
    {
        $events = $dm->getRepository(Event::class)->findAll();

        //var_dump($events);
        //die();
        if (!$events) {
            throw $this->createNotFoundException('No events found.');
        }

        $data = array();
        /* @var Event $event */
        foreach ($events as $event) {
            $data[] = [
                'id' => $event->getId(),
                'name' => $event->getName(),
                'description' => $event->getDescription(),
                'ethContractId' => $event->getEthContractId(),
                'url' => $event->getUrl(),
                'startDate' => $event->getStartDate(),
                'endDate' => $event->getEndDate()
                ];

        }

       return new JsonResponse($data);

    }

    /**
     * @Route("/v1/events/{id}", name="api_events", methods={"GET", "HEAD"})
     */
    public function detail(DocumentManager $dm, $id  = null)
    {
        $event = $dm->getRepository(Event::class)->findOneBy(['id' => $id]);

        //var_dump($event);
        //die();
        if (!$event) {
            throw $this->createNotFoundException('No event found with ID '.$id);
        }

        $data = array();
        $data[] = [
            'id' => $event->getId(),
            'name' => $event->getName(),
            'description' => $event->getDescription(),
            'ethContractId' => $event->getEthContractId(),
            'url' => $event->getUrl(),
            'startDate' => $event->getStartDate(),
            'endDate' => $event->getEndDate()
        ];


        return new JsonResponse($data);

    }







}
