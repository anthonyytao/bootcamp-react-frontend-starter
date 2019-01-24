import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Button = styled.button`
    color: #17ABFF;
    background-color: white;
    border: 10px solid rgb(51,196,255);
    border-radius: 50%;
    height: 60px;
    width: 60px;
    box-shadow: 0px 10px 10px rgba(0,179,255,0.2);
    font-weight: bold;
    :focus{
        outline: none;
    }
    :hover{
        
    }
`

export const ButtonBar = styled(Flex)`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    bottom: 0vh;
    left: 0vw;
    height: 8vh;
    width: 100vw;
    z-index: 1;
    background-image: linear-gradient(to bottom right, rgb(24,152,255), #21C4FF);
`

export const Counter = styled(Flex)`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    min-width: 20px;
    height: 30px;
    padding: 0px 10px 0px 35px;
    background-color: white;
    border-radius: 0px 10px 10px 0px;
    border: none;
    text-align: center;
    white-space: pre;
    font-family: 'Nunito';
    z-index: -1;
    transform: translateX(-30px)
`

export const Clicker = styled(Flex)`
    flex-direction: row;
    align-items: flex-end;
    transform: translateY(-16px)
`