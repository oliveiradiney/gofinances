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

interface Props{
    title: string;
    amount: string;
    transaction: string;
    type: 'up'|'down'| 'total'
}

const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total:'dollar-sign'
}

export function HighlightCard({
    type,
    title,
    amount,
    transaction
}: Props){
    return(
        <Container type={type}>
            <Header>
                <Title type={type}>
                    {title}
                </Title>
                <Icon 
                    name={icon[type]} 
                    type={type}
                />
            </Header>

            <Footer>
                <Amount type={type}>
                    {amount}
                </Amount>
                <Transaction type={type}>
                    {transaction}
                </Transaction>
            </Footer>
        </Container>
    );   
}


