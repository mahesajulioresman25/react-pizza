import styled from "styled-components";
import{ NavLink as Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa"


export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    background: transperent;
    height: 80px;
    font-weight: 700;
`;

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    text-decoration: none;

@media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
}
`;
export const NavIcon = styled.div`
    color: #fff;
    display: block;
    top: 0;
    right: 0;
    position: absolute;
    cursor: pointer;

p {
    transform: translate(-175%, 110%);
    font-weight: 700;
}
`;

export const Bars = styled(FaPizzaSlice)`
    font-size: 1.9rem;
    color: #fff;
    transform: translate(-50%, 15%)

`;