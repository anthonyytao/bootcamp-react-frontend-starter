import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Button = styled.button`
    color: red;
    height: 40px;
`

export const ButtonBar = styled(Flex)`
    position: absolute;
    bottom: 0vh;
    left: 0vw;
    height: 8vh;
    width: 100vw;
    z-index: 1;
    background-color: gray;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const Counter = styled(Flex)`

`

export const Clicker = styled(Flex)`
    flex-direction: row;  
    /*border: 1px dashed yellow;*/
    align-items: center;
`