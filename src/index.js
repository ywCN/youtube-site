import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAKRu9Q1NFeewHGbsC85jAXa-Cwkm3avZQ';

// // experiment: This code will log out 5 video information
// YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
//     console.log(data);
// });

// create a new component. 
// this component should create some HTML.
// this component should be responsible for fetching data
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] }; // [] for list of Objects
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            // this.setState({ videos: videos});
            this.setState({ videos }); // ES6, when key and value are same
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.videos[0]} />
                {/* pass props to VideoList */}
                <VideoList videos={this.state.videos}/>
                
            </div>
        );
    }
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
// document.querySelector('.container') is the root container element
