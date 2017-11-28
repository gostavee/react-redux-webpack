/**
* The required modules
*/
import React from 'react';
/**
* The component class
*/
export default class MovieComponent extends React.Component {
  /**
  * The constructor
  */
  constructor(props) {
    super(props);
    this.state = {};
  }
  /**
  * Get embed url
  */
  getEmbed(url) {
    if(url.split('v=')[1]) {
      let movieId = url.split('v=')[1].split('&')[0];
      url = "https://www.youtube.com/embed/"+movieId;
    } else {
      url = null;
    }
    return url;
  }
  /**
  * The renderr
  */
  render() {
    return this.props.data.map((movie) => {
      return (
        <div key={movie.url} className="content-box-outer">
          <div className="content-box-inner">
            <h1>{movie.title}</h1>
            <iframe className="video" src={this.getEmbed(movie.url)}></iframe>
          </div>
        </div>
      );
    });
  }
}
