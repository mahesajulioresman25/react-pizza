import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from 'react-icons/fa';


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 350px;
    height: 100%;
    background: #ffc500;
    display: grid;
    align-items: center;
    top: 0;
    transition: 0.2s ease-in-out;
    right: ${({isOpen}) => (isOpen ? '0' : '-1000px')};

    @media screen and (max-width: 400px) {
        width: 100%;
    }
`;

export const CloseIcon = styled(FaTimes)`
    color: #000;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    border: transparent;
    outline: none;
    font-size: 1.4rem;
    cursor: pointer;
`;
export const SidebarMenu = styled.div`
    display: grid;
    grid-template-column: 1fr;
    grid-template-rows: repeat(3, 80px);
    text-align: center;

@media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 60px);
}
`;
export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    text-decoration: none;
    color: #000;
    font-size: 1.5rem;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        transition: 0.2s ease-in-out;
        color: #e31837;
    }
`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;    
`;
export const SidebarRoute = styled(Link)`
    background: #e31837;
    border: none;
    white-space: nowrap;
    padding: 16px 64px;
    text-decoration: none;
    color: #fff;
    outline: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
    transition: 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    }
`