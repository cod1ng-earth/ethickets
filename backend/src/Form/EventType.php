<?php
namespace App\Form;
use App\Document\Event;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EventType  extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', null, [
                'label' => 'Event title'
            ])
            ->add('organizerName')
            ->add('ethOrganizerAddress', null,  [
                'label' => 'Ethereum organizer address'
            ])            
            ->add('ethContractAddress', null, [
                'label' => 'Etherum contract address'
            ])
            ->add('ticketAmountOriginal', null, [
                'label' => 'Amount of available tickets'
            ])
            ->add('ticketPrice', null, [
                'label' => 'Ticket price in Euro'
            ])
            ->add('startDate', null, ['widget' => 'single_text'])
            ->add('endDate', null, ['widget' => 'single_text'])
            ->add('url', null, [
                'attr' => [
                    'placeholder' => 'https://www.myevent.com',
                    'type' => 'url'
                ]
            ])
            ->add('description', TextareaType::class)
            ->add('save', SubmitType::class)
        ;
    }


    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Event::class,
        ]);
    }
}