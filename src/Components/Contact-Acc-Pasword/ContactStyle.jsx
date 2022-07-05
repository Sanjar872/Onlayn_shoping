import styled from "styled-components";
import {Button, TextField} from '@mui/material';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0;
    margin: 0;
`
export const ContactDiv = styled.div`
    
`
export const Texts = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 125px;
    text-align: center;
    font-size: 33px;
    font-family: 'DM sans';
`
export const Text = styled.p`
    max-width: 560px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: 'DM sans';
    font-size: 20px;

`
export const InputsDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Inputs = styled.div`
    width: 700px;
    display: grid;
    grid-template-columns: 1fr 1fr;
`
export const Input = styled(TextField)`
    width: 300px;
    margin: 10px 0px !important;
    margin-left: 20px !important;
    :nth-child(5){
        position: absolute;
        width: 650px;
        bottom: 130px;
    }
`
export const ButtonDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ContactBtn = styled(Button)`
    width: 500px;
    height: 53px;
    margin-top: 150px !important;
    border: none !important;
    background-color: black !important;
    border-radius: 5px !important;
    font-size: 16px !important;
    color: white !important;
    font-family: 'DM Sans' !important;

`