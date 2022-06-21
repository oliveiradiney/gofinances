import React from "react";

import {
    Container,
    Header,
    Title,
    Icon,
    Footer,
    Amount,
    Transaction
} from './styles';

export function HighlightCard(){
    return(
        <Container>
            <Header>
                <Title>Entrada</Title>
                <Icon name="arrow-up-circle"/>
            </Header>

            <Footer>
                <Amount>R$ 17.400,00</Amount>
                <Transaction>Última entrada dia 13 de abril</Transaction>
            </Footer>
        </Container>
    );   
}


