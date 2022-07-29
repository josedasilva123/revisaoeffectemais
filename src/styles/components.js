import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 10px;
    background: white;
    margin-top: ${({marginTop}) => marginTop};
`