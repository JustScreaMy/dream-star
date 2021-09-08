import React from 'react'
import styled from 'styled-components'

import logo from '../img/elita.jpg'

const Container = styled.div`
    margin: 2rem;
    text-align: center;
    display: grid;
    row-gap: 2rem;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    color: #fff;
    @media screen and (max-width: 750px) and (min-width: 0) {
        grid-template-columns: auto;
    }
    `
const Child = styled.div`
    display: flex;
    flex-direction: ${props => props.direction};
    justify-content: ${props => props.justify};
    margin-block: ${props => props.margin && 1}rem;
`
const H1 = styled.h1`
    margin: 2rem;
    font-size: 3vw;
    @media screen and (max-width: 750px) and (min-width: 0) {
        font-size: 3.5vw;
    }
`
const Paragraph = styled.p`
    margin: .5rem;
    font-size: 1.5rem;
    @media screen and (max-width: 750px) and (min-width: 0) {
        font-size: 2.5vw;
    }
`

export default function Server() {
    return (
        <Container>
            <img src={logo} alt="owner logo" className='elita-logo' />
            <Child direction='column' className='shadow-bg' padding={true} style={{marginTop: '1rem'}}>
                <Child direction='column'>
                <H1>Info o DreamStar</H1>
                    <Child direction='column' margin={true}>
                        <Paragraph>IP: 82.208.17.78:27794</Paragraph>
                        <Paragraph>Verze: 1.17.1.</Paragraph>
                    </Child>
                    <Child direction='column' margin={true}>
                        <H1>Socialní síťe</H1>
                        <Paragraph>Discord: Elita`s Twitch</Paragraph>
                        <Paragraph>Twitter: @DreamStarReal</Paragraph>
                    </Child>
                </Child>
            </Child>
        </Container>
    )
}