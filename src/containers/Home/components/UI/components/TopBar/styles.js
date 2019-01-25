import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Dropdown = styled.select`
    color: #17ABFF;
    background-color: white;
    height: 30px;
    border-radius: 10px;
    border: none;
    padding-left: 3px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
    letter-spacing: 1px;
    font-family: 'Nunito';
    text-align-last:center;
    box-shadow: 0px 5px 10px rgba(0,129,195,0.2);
    :focus{
        outline: none;
        border-radius: 10px 10px 0px 0px;
    }
`

export const Selection = styled.option`
    color: #17ABFF;
    background-color: white;
    height: 30px;
    outline: none;
    border: none;
    padding-left: 3px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
    letter-spacing: 1px;
    font-family: 'Nunito';
    box-shadow: 0px 5px 10px rgba(0,129,195,0.2);
`

export const DropdownBar = styled(Flex)`
    position: absolute;
    top: 0vh;
    right: 0vw;
    height: 8vh;
    left: 0vw;
    z-index: 1;
    background-image: linear-gradient(to bottom right, rgb(24,152,255), #21C4FF);
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const SearchButton = styled.button`
    color: #FFFFFF;
    background-color: #17ABFF;
    border: none;
    text-align: center;
    text-justify: middle;
    font-size: 12px;
    padding: 0px;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    z-index: 2;
    transform: translateX(-28px);
    :focus{
        outline: none;
    }
`

export const SearchInput = styled.input`
    color: #CFCFCF;
    background-color: white;
    height: 30px;
    border-radius: 10px;
    font-size: 12px;
    padding: 0px 35px 0px 6px;
    font-family: 'Nunito';
    box-shadow: 0px 5px 10px rgba(0,129,195,0.2);
    border: none;
    :focus{
        outline: none;
        color: #000000;
        caret-color: #17ABFF;
    }
`

export const LogOutButton = styled.button`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color: #17ABFF;
    background-color: white;
    border: none;
    text-align: center;
    text-justify: middle;
    font-size: 12px;
    padding: 0px 6px;
    height: 30px;
    border-radius: 10px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    font-family: 'Nunito';
    :focus{
        outline: none;
    }
`