<?php

namespace App\Controller;

use App\Document\Event;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints\DateTime;

class AdminEventController extends AbstractController
{
    /**
     * @Route("/admin/event", name="admin_event")
     */
    public function index()
    {
        return $this->render('admin_event/index.html.twig', [
            'controller_name' => 'AdminEventController',
        ]);
    }

    /**
 * @Route("/admin/event/create", name="admin_event_create")
 */
    public function createAction(DocumentManager  $dm)
    {
        $event = new Event();
        $event->setName('Breakout 2019');
        $event->setStartDate(new \DateTime());

        $dm->persist($event);
        $dm->flush();


        */
        return new Response('Created event id '.$event->getId());
    }


    /**
     * @Route("/admin/event/createdummy", name="admin_event_create")
     */
    public function createdummyAction(DocumentManager  $dm)
    {
        $events = [
          [
              'name' => 'Breakout 2019',
              'startDate' => new \DateTime(),
              'endDate' => new \DateTime(),
              'url' => 'http://www.breakout2019.com',
          ],
            [
                'name' => 'Breakout 2020',
                'startDate' => new \DateTime(),
                'endDate' => new \DateTime(),
                'url' => 'http://www.breakou2ß2ßt.com',

            ],
            [
                'name' => 'Breakout 2021',
                'startDate' => new \DateTime(),
                'endDate' => new \DateTime(),
                'url' => 'http://www.breakout21.com',

            ],
            [
                'name' => 'Breakout 2022',
                'startDate' => new \DateTime(),
                'endDate' => new \DateTime(),
                'url' => 'http://www.breakout22.com',

            ],
            [
                'name' => 'Breakout 2023',
                'startDate' => new \DateTime(),
                'endDate' => new \DateTime(),
                'url' => 'http://www.breakout23.com',

            ]

        ];

        foreach ($events as $e) {

            $event = new Event();
            $event->setName($e['name']);
            $event->setStartDate($e['startDate']);
            $event->setEndDate($e['endDate']);
            $event->setUrl($e['url']);
            $dm->persist($event);
        }


        $dm->flush();

        return new Response('Created event id '.$event->getId());
    }
}
