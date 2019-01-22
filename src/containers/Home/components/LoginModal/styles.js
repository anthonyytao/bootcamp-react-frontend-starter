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
  background-color: rgba(0,0,0,0.25);
`

export const LoginBox = styled(Flex)`
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 60vh;
  width: 80vh;
  padding: 50px;
  background-color: rgba(255,255,255,1);
  border: solid;
  border-radius: 25px;
  border-color: #2473f2;
  border-width: 1px;
`

export const Text = styled(Flex)``
