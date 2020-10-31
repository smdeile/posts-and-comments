import styled from 'styled-components';

export const NavLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    :hover {
        color: #5e4545;
        transition: color 300ms;
    }
`;
export const NavigationBlock = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 10px auto 10px;
`;
export const NavigationItem = styled.div`
    margin: 0;
    font-family: Arial, sans-serif;
    font-size: 24px;
`;
export const MainBlock = styled.main`
    border-top: 1px solid #523939;
    padding-top: 10px;
    width: 100%;
    min-width: 100vw;
    margin: 0 auto;
`;

export const MainBlockWrapper = styled.main`
    width: 80%;
    margin: 0 auto;
`;
