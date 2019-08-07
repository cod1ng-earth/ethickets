<?php

namespace App\Controller;

use App\Document\Event;
use App\Form\EventType;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

class AdminEventController extends AbstractController
{

    /** @var DocumentManager  */
    private $dm;

    public function __construct(DocumentManager $dm)
    {
        $this->dm = $dm;
    }


    /**
     * @Route("/admin/events/", name="admin_events")
     */
    public function index()
    {
        $events = $this->dm->getRepository(Event::class)->findAll();

        return $this->render('admin_event/index.html.twig', ['events' => $events]);


    }

    /**
     * @Route("/admin/events/form", name="admin_events_form", methods={"GET", "POST"})
     */
    public function form(Request $request)
    {
        $event = new Event();
        $form = $this->createForm(EventType::class, $event);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $event = $form->getData();
            $this->dm->persist($event);
            $this->dm->flush();

            $this->addFlash('success', 'Event had been created.');
            return $this->redirectToRoute('admin_events');
        }
      
        return $this->render('admin_event/edit.html.twig', [
            'form' => $form->createView()
        ] );
    }



    /**
     * @Route("/admin/events/{id}", name="admin_events_details", methods={"GET", "HEAD"})
     */
    public function detail($id  = null)
    {
        $event = $this->dm->getRepository(Event::class)->findOneBy(['id' => $id]);

        if (!$event) {
            throw $this->createNotFoundException('No event found with ID '.$id);
        }
        return $this->render('admin_event/detail.html.twig', ['event' => $event]);
    }



    /**
     * @Route("/admin/events/createdummy", name="admin_events_createdummy")
     */
    public function createdummy(DocumentManager  $dm)
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


        $this->dm->flush();

        return new Response('Created event id '.$event->getId());
    }
}
