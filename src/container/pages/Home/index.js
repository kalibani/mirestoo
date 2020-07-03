// Home Component
// --------------------------------------------------------

// import React, { useState } from 'react';
import React from 'react';
import { Container, Content, Footer, FooterTab, Button, Text } from 'native-base';
import PropTypes from 'prop-types';
import styles from './styles.js';

const Home = ({ navigation }) => {
  // const [count, setCount] = useState(0);

  return (
    <Container>
      <Content>
        <Text>
          This is Content Section
        </Text>
        <Button 
        onPress={() => navigation.navigate('Details')}
        primary><Text> Go To Details </Text></Button>
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

Home.propTypes = {
propsName: PropTypes.string,
};

Home.defaultProps = {
propsName: '',
};

export default Home;
