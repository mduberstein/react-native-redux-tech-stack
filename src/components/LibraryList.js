import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import {Text} from 'react-native'
import ListItem from './ListItem';

class LibraryList extends Component {
  renderItem(library) {
    // console.warn(library);
    return <ListItem library={library} />;
  }

  render() {
    //console.warn(this.props);
    return (  
      <FlatList
        data={this.props.libraries}
        renderItem={({item}) => this.renderItem(item)}
        // key in FlatList must be a string
        keyExtractor={library => `${library.id}`}
      />
    );
    return null;
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {libraries: state.libraries};
};

export default connect(mapStateToProps)(LibraryList);
