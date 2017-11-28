/**
* The required modules
*/
import React from 'react';
import Movies from 'components/movie/Movie.Component';
import {connect} from 'react-redux';
import {loadAlbums} from 'redux/actions/albumActions';
import albums from "data/data.json";
/**
* The component class
*/
class AlbumComponent extends React.Component {
  /**
  * The constructor
  */
  constructor(props) {
    super(props);
    this.state = {};
  }
  /**
  * Component will mount
  */
  componentWillMount() {
    this.props.loadAlbums(albums);
  }
  /**
  * The renderr
  */
  render() {
    return (
      <div>
        <h1 className="album-title">{this.props.albums.title}</h1>
        <hr />
        <h3 className="album-title">{this.props.albums.desc}</h3>
        <hr />
        <Movies data={(this.props.albums.videos ? this.props.albums.videos : [])}/>
      </div>
    );
  }
}
/**
* Hooking up store
*/
const mapStateToProps = (state) => {
  return {
    albums:state.albums
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadAlbums:(albums) => {
      dispatch(loadAlbums(albums))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(AlbumComponent);
