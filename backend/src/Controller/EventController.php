<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class EventController extends AbstractController
{
    /**
     * @Route("/event", name="event")
     */
    public function index()
    {
       /* return $this->render('event/index.html.twig', [
            'controller_name' => 'EventController',
        ]);
       */
       $a = ['name' => 'Stefan'];

       return new JsonResponse($a);

    }
}
