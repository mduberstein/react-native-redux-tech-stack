import React, {Component} from 'react'
import { Text, StyleSheet } from 'react-native'
import { CardSection } from './common';


class ListItem extends Component {
  render(){
    // console.warn(this.props);
    const{titleStyle} = styles;
    return (
      <CardSection>
         <Text style={titleStyle}>{this.props.library.title}</Text>
      </CardSection>
    );
  }
}
// give intellisense
const styles = StyleSheet.create({
  titleStyle:{
    fontSize: 18,
    paddingLeft: 15
  }
});
// const styles = {
//   titleStyle: {
//     fontSize: 18, 
//     paddingLeft: 15
//   }
// };

export default ListItem;