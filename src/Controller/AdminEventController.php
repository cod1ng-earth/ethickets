<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

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
}
