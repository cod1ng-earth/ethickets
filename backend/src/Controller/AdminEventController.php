<?php

namespace App\Controller;

use App\Document\Event;
use App\Form\EventType;
use App\Service\EthereumService;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
//use Symfony\Contracts\HttpClient\HttpClientInterface;

class AdminEventController extends AbstractController
{

    /** @var DocumentManager  */
    private $dm;


    /**
     * @var EthereumService
     */
    private $es;

    /**
     * AdminEventController constructor.
     * @param DocumentManager $dm
     * @param EthereumService $
     */
    public function __construct(DocumentManager $dm, EthereumService $es)
    {
        $this->dm = $dm;
        $this->es = $es;
    }


    /**
     * @Route("/admin/events/", name="admin_events")
     */
    public function index()
    {
        $events = $this->dm->getRepository(Event::class)->findBy([], ['startDate' => 'ASC']);

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
            /* @var Event $event */
            $event = $form->getData();
            $this->dm->persist($event);
            $this->dm->flush();

            $msg = '';

            /* Create Ethereum contract location */
            $response = $this->es->getTest();

            if (201 !== $response->getStatusCode()) {
                // TODO: Handle errors
            }
            else {
                $headers = $response->getHeaders();

                if (isset($headers['location'][0])) {
                    $location = $headers['location'][0];

                    /* Get Ethereum contract address */
                    //$response = $this->es->getContractInfo($location);

                    $event->setEthContractLocation($location);
                    $this->dm->persist($event);
                    $this->dm->flush();
                    $msg .= 'Address '.$headers['location'][0].' added.';
                }
            }

            $this->addFlash('success', 'Event has been created. '.$msg);
            return $this->redirectToRoute('admin_events');
        }
      
        return $this->render('admin_event/edit.html.twig', [
            'form' => $form->createView()
        ] );
    }

    /**
     * @Route("/admin/events/edit/{id}", name="admin_events_edit", methods={"GET", "POST"})
     * @param Request $request
     * @param $id
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|Response
     */
    public function edit(Request $request, $id)
    {
        $event = $this->dm->getRepository(Event::class)->findOneBy(['id' => $id]);

        if (!$event) {
            throw $this->createNotFoundException('No event found with ID '.$id);
        }

        $form = $this->createForm(EventType::class, $event);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $event = $form->getData();
            $this->dm->persist($event);
            $this->dm->flush();

            $this->addFlash('success', 'Event has been updated.');
            return $this->redirectToRoute('admin_events');
        }

        return $this->render('admin_event/edit.html.twig', [
            'form' => $form->createView()
        ] );
    }

    /**
     * @Route("/admin/events/delete/{id}", name="admin_events_delete", methods={"GET", "POST"})
     * @param $id
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function delete($id)
    {
        $event = $this->dm->getRepository(Event::class)->findOneBy(['id' => $id]);

        if (!$event) {
            throw $this->createNotFoundException('No event found with ID '.$id);
        }

        $this->dm->remove($event);
        $this->dm->flush();
        $this->addFlash('success', 'Event has been deleted.');

        return $this->redirectToRoute('admin_events');
    }

    /**
     * @Route("/admin/events/{id}", name="admin_events_details", methods={"GET", "HEAD"})
     * @param null $id
     * @return Response
     * @throws \Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface
     */
    public function detail($id = null)
    {

        $response = $this->es->getTest();


        return new Response($response->getContent());
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
