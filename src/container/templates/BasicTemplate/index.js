// BasicTemplate Component
// --------------------------------------------------------

// import React, { useState } from 'react';
import React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import PropTypes from 'prop-types';
import styles from './styles.js';

const BasicTemplate = ({ propsName }) => {
  // const [count, setCount] = useState(0);

  return (
    <Container>
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
      <Content>
        <Text>
          This is Content Section
        </Text>
      </Content>
      <Footer>
        <FooterTab>
          <Button full>
            <Text>Footer</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  )

};

BasicTemplate.propTypes = {
propsName: PropTypes.string,
};

BasicTemplate.defaultProps = {
propsName: '',
};

export default BasicTemplate;
