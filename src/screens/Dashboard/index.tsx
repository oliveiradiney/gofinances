import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';

import { 
    Container, 
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighlightCards
    
}from './styles';

export function Dashboard(){
    return(
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>

                        <Photo 
                            source={{uri:'https://avatars.githubusercontent.com/u/12983160?v=4'}} 
                        />
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Diney</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power" />
                </UserWrapper>
            </Header>

            <HighlightCards>
                <HighlightCard />
                <HighlightCard />
            </HighlightCards>
                
            
        </Container>
    )
}