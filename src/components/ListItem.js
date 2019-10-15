import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
} from 'react-native';
import {connect} from 'react-redux';
import {CardSection} from './common';
import * as actions from '../actions';

class ListItem extends Component {
  // https://aboutreact.com/react-native-application-life-cycle-of/
  // componentWillUpdate() // deprecated
  //componentDidUpdate(){ // worked as well
  shouldComponentUpdate(nextProp, nextState){
    LayoutAnimation.spring();
    return true;
  }

  renderDescription() {
    const {library, expanded} = this.props;

    // expanded is a state slice returned from mapStateToProps as a response
    // to dispatch
    if (expanded) {
      return (
        <CardSection>
          {/* <Text style={{flex: 1}}>{library.description}</Text> */}
          <Text>{library.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    // console.warn(this.props);
    // console.log(this.props);
    const {titleStyle} = styles;
    // destructuring
    const {id, title} = this.props.library;

    return (
      // dispatch implementation: this.props.selectLibrary(id)
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
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
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
});
// const styles = {
//   titleStyle: {
//     fontSize: 18,
//     paddingLeft: 15
//   }
// };

// ownProps is the props passed to the component
const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  // return {expanded: expanded}; // long version
  return {expanded}; // syntax sugar
};

// State retrieval from store - store.getState() is responsibility of the first argument.
// mapStateToProps is called when the component is about to be rendered - i.e. its tag is encountered in code. The state argument is the object passed to combineReducers in src/reducers/index.js. The return value becomes accessible to the argument of the return value of "connect" i.e. ListItem as this.props;

// State change - dispatch - : second argument actions - causes
// 1. each action(term used here for action creator) accessible by name due to the import above to be passed to the ListItem as this.props.<action name>, ex. this.props.selectLibrary and
// 2. when called as this.props.selectLibrary(libraryId) to dispatch its return value as action to all the reducers in the redux store, wired via Provider in the file app.js
export default connect(
  mapStateToProps,
  actions,
)(ListItem);
