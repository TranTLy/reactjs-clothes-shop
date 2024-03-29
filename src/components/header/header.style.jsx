import style from 'styled-components';
import { Link } from 'react-router-dom';

// const OptionsContainerStyle = css`
// padding: 10px 15px;
// `

export const HeaderContainer = style.div`
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;
`

export const LogoLink = style(Link)`
height: 100%;
width: 70px;
padding: 25px;
`
export const OptionContainer = style.div`
    width: 50%;
    height: 100%;
    display: flex;  
    align-items: center;
    justify-content: flex-end;
`

export const OptionLink = style(Link)`
    padding: 10px 15px;
    &:hover{
        cursor: pointer;
    }
`