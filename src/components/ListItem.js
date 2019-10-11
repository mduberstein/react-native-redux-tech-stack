import React, {Component} from 'react'
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import {connect} from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';


class ListItem extends Component {
  render(){
    // console.warn(this.props);
    // console.log(this.props);
    const{titleStyle} = styles;
    const {id, title} = this.props.library;
    return (
      <TouchableWithoutFeedback onPress={()=>this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
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

// null in the first argument is for the mapStateToProps
// second argument actions - causes 
// 1. each actions(term used here for action creator) accessible by name due to the import above to be passed to the ListItem as this.props.<action name>, ex. this.props.selectLibrary and
// 2. when called as this.props.selectLibrary(libraryId) to dispatch its return value as action to all the reducers in the redux store, wired via Provider in the file app.js
export default connect(null,  actions)(ListItem);