import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Dropdown = styled.select`
    color: red;
    height: 40px;
`

export const DropdownBar = styled(Flex)`
    position: absolute;
    top: 0vh;
    right: 0vw;
    height: 8vh;
    left: 13vh;
    z-index: 1;
    background-color: gray;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const SettingsButton = styled(Flex)`
    position: absolute;
    top: 0vh;
    left: 0vh;
    height: 13vh;
    width: 13vh;
    background-color: gray;
    border-radius: 0vh 0vh 5vh 0vh;
    z-index: 2;
`