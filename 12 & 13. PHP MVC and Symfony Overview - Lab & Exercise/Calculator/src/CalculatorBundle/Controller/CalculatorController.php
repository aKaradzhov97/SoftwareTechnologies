<?php

namespace CalculatorBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use CalculatorBundle\Entity\Calculator;
use CalculatorBundle\Form\CalculatorType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class CalculatorController extends Controller
{
    /**
     * @param Request $request
     *
     * @Route("/", name="index")
     *
     * @return \Symfony\Component\HttpFoundation\Response
     *
     */
    public function index(Request $request)
    {
        // TODO add $form and calculation logic;
        $calculator = new Calculator();
        $form = $this->createForm(CalculatorType::class, $calculator);

        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            switch ($calculator->getOperator()) {
                case "+":
                    $result = $calculator->getLeftOperand() + $calculator->getRightOperand();
                    break;
                case "-":
                    $result = $calculator->getLeftOperand() - $calculator->getRightOperand();
                    break;
                case "*":
                    $result = $calculator->getLeftOperand() * $calculator->getRightOperand();
                    break;
                case "/":
                    $result = $calculator->getLeftOperand() / $calculator->getRightOperand();
            }
            return $this->render('calculator/index.html.twig', ['form'=>$form->createView(), 'result'=>$result, 'calculator'=>$calculator]);
        }
        return $this->render('calculator/index.html.twig', ['form'=>$form->createView()]);
    }
}
