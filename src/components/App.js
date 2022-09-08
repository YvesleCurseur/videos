import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../api/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{

  //Déclaration d'un state vide
  state = { videos:[], selectedVideo: null }

  //Premier chargement lorque l'application démarre
  componentDidMount(){
    this.onTermSubmit('')
  }

  // async operation a une requête vers une api
  onTermSubmit = async (term) => {
    //Récupérations des vidéos basé sur le submit 
    const response = await Youtube.get('/search', {
      params:{
        q: term
      }
    })

    // reacfectation du state aux réponses de la recherche
    this.setState({ 
      videos:response.data.items,
      //Renvoie automatiquement la première video et l'affiche par défaut
      selectedVideo: response.data.items[0]
    })

  }
  // Recupère une vidéo de l'api
  onVideoSelect = (video) =>{
    this.setState({selectedVideo:video})

  }

  render() {
    return(
      <div className="ui container" style={{marginTop:"20px"}}>
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        {/* 
          Accéder à ce qui se trouve dans le state
          I have {this.state.videos.length} 
        */}
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className="five wide column">
            <VideoList 
              onVideoSelect={this.onVideoSelect} 
              videos={this.state.videos}
              />
            </div>
            </div>
          </div>
      </div>
    )
  }
}

export default App;
