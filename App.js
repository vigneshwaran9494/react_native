import React from 'react';
import { Container, Header, Content, Button, Text } from "native-base";


export default class App extends React.Component {
  render() {
   return <Container>
       <Header />
       <Content>
         // NativeBase default style
         <Button>
           <Text>Click Me! </Text>
         </Button>
       </Content>
     </Container>;
  }
}


