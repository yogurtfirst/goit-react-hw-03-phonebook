import styled from '@emotion/styled';

export const ContactWrapper = styled.form`
    display: flex;
    flex-direction: column;
    width: 310px;
    padding: 14px;
    border: 1px solid black;
    border-radius: 12px;
`;

export const Label = styled.label`
    font-size: 14px;
    margin-bottom: 4px;
`;

export const Input = styled.input`
    padding: 6px;
    border-radius: 6px;
    margin-bottom: 14px;
    font-size: 14px;
`;

export const Button = styled.button`
    padding: 6px;
    border-radius: 16px;
    :hover,
    :focus {
        background-color: rgb(35, 149, 207);
        color: white;
    }
`;