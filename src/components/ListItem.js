import React, {Component} from 'react'
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import {connect} from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';


class ListItem extends Component {

  renderDescription() {
    const {library, selectedLibraryId} = this.props;
    if (library.id === selectedLibraryId) {
      return (
        <Text>{library.description}</Text>
      );
    }
  }

  render(){
    // console.warn(this.props);
    // console.log(this.props);
    const{titleStyle} = styles;
    // destructuring
    const {id, title} = this.props.library;


    return (
      // this.props.selectLibrary(id) call is dispatch
      <TouchableWithoutFeedback onPress={()=>this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
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

const mapStateToProps = state => {
  return {selectedLibraryId: state.selectedLibraryId};
}

// State retrieval from store - store.getState() is responsibility of the first argument. 
// mapStateToProps is called when the component is about to be rendered - i.e. its tag is encountered in code. The state argument is the object passed to combineReducers in src/reducers/index.js. The return value becomes accessible to the argument of the return value of "connect" i.e. ListItem as this.props;

// State change - dispatch - : second argument actions - causes 
// 1. each action(term used here for action creator) accessible by name due to the import above to be passed to the ListItem as this.props.<action name>, ex. this.props.selectLibrary and
// 2. when called as this.props.selectLibrary(libraryId) to dispatch its return value as action to all the reducers in the redux store, wired via Provider in the file app.js
export default connect(mapStateToProps,  actions)(ListItem);