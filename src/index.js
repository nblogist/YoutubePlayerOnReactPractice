import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetails from './components/video_detail';
const API_KEY = 'AIzaSyCffUYFZkwTcbngSOxAN--TVKb8PhWEdjY';
const Key=API_KEY;



class App extends Component {
    constructor (props)
    {
        super(props);
        this.state = { 
            videos: [],
            selectedVideo: null
        }

        this.videoSearch('Fail Army');
    }

    videoSearch(term)
    {
        YTSearch({key: Key, term: {term}}, (data) => {
            this.setState( {
                videos: data,
                selectedVideo: data[0]
            })
        });
    }

    render()
    {
        const videoSearchingDelay = _.debounce((term) => {this.videoSearch(term)}, 500);//TRIGGERSS THIS FUNCTION CALL ONLY AFTER 500ms
        return (
        <div>
        <SearchBar onSearchTermChange = {videoSearchingDelay}/>
        <VideoDetails video = {this.state.selectedVideo} />
        <VideoList 
        onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
        </div>
        );
    }
    
}

//NEW ES6 EQUAVALENT SYNTAX
/*
const App =  () => {
    return <div>FurqanAhmed</div>
}
*/
 
ReactDOM.render(<App />, document.querySelector('.container'));