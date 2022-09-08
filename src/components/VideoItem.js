import React from "react";
import './VideoItem.css';

// Au lieu de passer le props on peut passer la variable qui suis le props
const VideoItem = ({ video, onVideoSelect }) =>{
    return(
        //Exécuter l'action lorsqu'une video est cliquée
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img 
                className="ui image" 
                src={video.snippet.thumbnails.medium.url} 
                alt={video.snippet.title} 
            />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
            
        </div>
    )
}

export default VideoItem