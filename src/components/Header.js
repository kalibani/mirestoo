import React  from 'react'
import { Container, Header, Left, Body, Title, Right, Button, Icon} from 'native-base';

function BaseHeader() {
  return (
    <Header>
      <Left>
        <Button transparent>
          <Icon name='menu' />
        </Button>
      </Left>
      <Body>
        <Title>Header</Title>
      </Body>
      <Right />
    </Header>
  )
}

export default BaseHeader;