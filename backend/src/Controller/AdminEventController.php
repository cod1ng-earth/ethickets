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

/**
 * @Route("/admin/events")
 */
class AdminEventController extends AbstractController
{

    /** @var DocumentManager  */
    private $dm;

    /**
     * @var EthereumService
     */
    private $ethereumService;

    /**
     * AdminEventController constructor.
     * @param DocumentManager $dm
     * @param EthereumService $
     */
    public function __construct(DocumentManager $dm, EthereumService $ethereumService)
    {
        $this->dm = $dm;
        $this->ethereumService = $ethereumService;
    }


    /**
     * @Route("/", name="admin_events")
     */
    public function index()
    {
        $events = $this->dm->getRepository(Event::class)->findBy([], ['startDate' => 'ASC']);

        return $this->render('admin_event/index.html.twig', ['events' => $events]);
    }

    /**
     * @Route("/form", name="admin_events_form", methods={"GET", "POST"})
     */
    public function form(Request $request)
    {
        $event = new Event();
        $form = $this->createForm(EventType::class, $event);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            /* @var Event $event */
            $event = $form->getData();
            
            if (empty($event->getEthContractAddress())) {
                try {
                    $contractAddress = $this->ethereumService->createSmartContract($event->getTicketAmountOriginal(), $event->getOrganizerAddress());
                    $event->setEthContractAddress($contractAddress);
                    $this->addFlash('success', 'New Contract created: '.$contractAddress);
                } catch(Exception $e) {
                    $this->addFlash('error', 'an error occurred' . $e->getMessage());
                }
            }

            $this->dm->persist($event);            
            $this->dm->flush();
            
            return $this->redirectToRoute('admin_events');
        }
      
        return $this->render('admin_event/edit.html.twig', [
            'form' => $form->createView()
        ] );
    }


    /**
     * @Route("/edit/{id}", name="admin_events_edit", methods={"GET", "POST"})
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
     * @Route("/delete/{id}", name="admin_events_delete", methods={"GET", "POST"})
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
     * @Route("/{id}", name="admin_events_details", methods={"GET", "HEAD"})
     * @param null $id
     * @return Response
     * @throws \Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface
     */
    public function detail($id = null)
    {
        $response = $this->ethereumService->getTest();
        return new Response($response->getContent());
    }

    /**
     * @Route("/createdummy", name="admin_events_createdummy")
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
