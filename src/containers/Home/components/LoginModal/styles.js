import styled from 'styled-components'
import { Flex } from 'grid-styled'


export const Shadow = styled(Flex)`
  position: absolute;
  top: 0vh;
  left: 0vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0,0,0,0.35);
`

export const LoginBox = styled(Flex)`
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 60vh;
  width: 80vh;
  padding: 50px;
  background-color: white;
  border-style: solid;
  border-image: linear-gradient(to bottom right, #1898ff, #21C4FF);
  border-image-slice: 1;
  border-width: 10px;
  box-shadow: 0px 10px 8px #777777;
`