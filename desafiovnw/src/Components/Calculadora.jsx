import React from "react";
import { useState } from "react";
import { Container, Box, Botao, FirstPart, SecondPart, ThirdPart, FourthPart, FifthPart, SixthPart } from "./Style.jsx";

export default function Calculator() {

    const [number, setNumber] = useState("");
    const [oldNumber, setOldNumber] = useState("");
    const [input, setInput] = useState();
    const [operator, setOperator] = useState();

    const InputNumber = (item) => {
        if(operator === "+" || operator === "-" || operator === "/" || operator === "*" ) {
            setOldNumber(oldNumber+item.target.value);
         } else{
            setNumber(number+item.target.value);
         }
        };
    

    const Clean = () => {
        setNumber("");
        setOldNumber("");
        setOperator("");
    };

    const OperatorChange = (item) => {
        setOperator(item.target.value);
    };

    const Calculate = () => {
        if(operator === "/") {
            setNumber(parseFloat(oldNumber) / parseFloat(number));
        } else if(operator === "*" ) {
            setNumber(parseFloat(oldNumber) * parseFloat(number));
        } else if(operator === "-" ) {
            setNumber(parseFloat(oldNumber) - parseFloat(number));
        } else if(operator === "+" ) {
            setNumber(parseFloat(oldNumber) + parseFloat(number));
        }
    }

    return (
        <div>
            <Box>
            <h1>{number}</h1>
            </Box>
    <Container>
        <FirstPart>
         <Botao onClick={InputNumber} value={"1"}>1</Botao>
         <Botao onClick={InputNumber} value={"2"}>2</Botao>
         <Botao onClick={InputNumber} value={"3"}>3</Botao>
        </FirstPart>

        <SecondPart>
         <Botao onClick={InputNumber} value={"4"}>4</Botao>
         <Botao onClick={InputNumber} value={"5"}>5</Botao>
         <Botao onClick={InputNumber} value={"6"}>6</Botao>
        </SecondPart>

        <ThirdPart>
         <Botao onClick={InputNumber} value={"7"}>7</Botao>
         <Botao onClick={InputNumber} value={"8"}>8</Botao>
         <Botao onClick={InputNumber} value={"9"}>9</Botao>
        </ThirdPart>

        <FourthPart>
         <Botao onClick={InputNumber} value={"0"}>0</Botao>
         <Botao onClick={Clean}>AC</Botao>
         <Botao onClick={InputNumber} value={"."}>,</Botao>
        </FourthPart>

        <FifthPart>
         <Botao onClick={OperatorChange} value={"+"}>+</Botao>
         <Botao onClick={OperatorChange} value={"-"}>-</Botao>
         <Botao onClick={OperatorChange} value={"/"}>/</Botao>
        </FifthPart>

        <SixthPart>
         <Botao onClick={OperatorChange} value={"*"}>*</Botao>
         <Botao onClick={Calculate} value={"="}>=</Botao>
        </SixthPart>

    </Container>
    </div>
    )
}
