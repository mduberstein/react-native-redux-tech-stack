import React, {Component} from 'react'
import { Text, StyleSheet } from 'react-native'
import {connect} from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';


class ListItem extends Component {
  render(){
    // console.warn(this.props);
    console.log(this.props);
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

// null is for mapStateToProps
// second argument actions, causes 
// 1. all the actions accessible by name due to the import above to be passed to the ListItem as this.props.<action name>, ex. this.props.selectLibrary
// 2. when called this.props.selectLibrary() to dispatch its return value as action to all the reducers in the redux store, wired via Provider in file app.js
export default connect(null,  actions)(ListItem);