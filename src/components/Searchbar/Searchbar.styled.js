import styled from "@emotion/styled";
import { Field} from "formik";

export const HeaderStyled = styled.header`
position:sticky;
`

export const Input = styled(Field)`
padding:10px;
padding-left:30px;
border:none;
outline: none;
`

export const Error = styled.p`
padding:0;

color:white;
margin-top:10px;
font-size:15px;
`
export const Button = styled.button`

position: absolute;
background-color:white;
border:none;
padding:9px;
`