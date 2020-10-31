import styled from 'styled-components';

export const PostList = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
`;
export const PostItem = styled.li`
    list-style: none;
    width: 25%;
    min-width: 220px;
    border: solid 1px #523939;
    padding: 10px;
    border-radius: 5px;
    margin: 0 5px 5px;
    background-color: #fdfdfd;
    cursor: pointer;

    :hover {
        border: solid 1px #351818;
        background-color: #eeeeee;
        transition: background-color 300ms;
    }
`;
export const PostLink = styled.a`
    cursor: pointer;
`;
export const PostNumber = styled.p`
    margin: 0;
    color: #614747;
    font-size: 14px;
`;
export const PostTitle = styled.h2`
    text-decoration: underline;
    word-wrap: break-word;
`;
export const PostText = styled.p`
    word-wrap: break-word;
`;
