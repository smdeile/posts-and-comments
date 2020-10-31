import styled from 'styled-components';

export const NewPostForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    min-width: 300px;
    margin: 0 auto;
`;
export const NewPostInput = styled.input`
    width: 100%;
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
    height: 30px;
`;
export const NewPostTextarea = styled.textarea`
    width: 100%;
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
    height: 100px;
    resize: none;
`;
export const NewPostButton = styled.button`
    width: 140px;
    height: 30px;
    background-color: #a06a6a;
    border-radius: 5px;
    cursor: pointer;
    :hover {
        background-color: #6b4e4e;
        color: #f8a0a0;
    }
`;
export const PostedPost = styled.h2`
    font-size: 30px;
    text-decoration: underline;
`;
