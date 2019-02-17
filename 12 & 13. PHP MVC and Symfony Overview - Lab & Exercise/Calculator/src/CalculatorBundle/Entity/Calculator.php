<?php
namespace CalculatorBundle\Entity;

class Calculator
{

    // TODO add class fields and properties, getters and setters
    /**
     * Calculator constructor.
     */
    public function __construct()
    {

    }


    /**
     * @var float
     */
    public $leftOperand;

    /**
     * @return float
     */
    public function getLeftOperand()
    {
        return $this->leftOperand;
    }

    /**
     * @param float $leftOperand
     */
    public function setLeftOperand(float $leftOperand)
    {
        $this->leftOperand = $leftOperand;
    }



    /**
     * @var float
     */
    public $rightOperand;

    /**
     * @return float
     */
    public function getRightOperand()
    {
        return $this->rightOperand;
    }

    /**
     * @param float $rightOperand
     */
    public function setRightOperand(float $rightOperand)
    {
        $this->rightOperand = $rightOperand;
    }


    /**
     * @var string
     */
    public $operator;

    /**
     * @return string
     */
    public function getOperator()
    {
        return $this->operator;
    }

    /**
     * @param string $operator
     */
    public function setOperator(string $operator)
    {
        $this->operator = $operator;
    }
}