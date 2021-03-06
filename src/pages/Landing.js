import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 90%;
    margin: 3rem auto;

    h2 {
        font-family: 'Poppins';
        font-size: 40;
    }
`;

const Landing = () => {
    return (
        <Container>
            <h2>Live</h2>
            <h2>Categories</h2>
        </Container>
    )
};

export default Landing;