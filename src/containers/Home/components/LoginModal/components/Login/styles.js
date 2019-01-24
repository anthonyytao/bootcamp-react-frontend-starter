import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Title = styled(Flex)`
  color: black;
  font-size: 50px;
  font-family: 'Nunito';
  margin-bottom: 20px;
`

export const LineInput = styled.input`
  height: 30px;
  width: 400px;
  font-family: 'Open Sans';
  margin-bottom: 20px;
  text-align: center;
  background-color: rgba(255,255,255,0);
  border: none;
  :focus{
    outline: none;
  }
`
export const SubmitButton = styled(Flex)`
  color: white;
  margin-top: 20px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #7AC70C;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`
export const SecondaryOptionText = styled(Flex)`
  color: #1CB0F6;
  height: 30px;
  margin-top: 30px;
  font-size: 12px;
  font-family: 'Open Sans';
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`
