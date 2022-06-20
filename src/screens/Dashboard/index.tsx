import React from 'react';
import { Text, View} from 'react-native';
import { 
    Container, 
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon
    
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
            
        </Container>
    )
}