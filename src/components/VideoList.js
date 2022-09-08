import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({videos, onVideoSelect}) =>{

    //Parcourir toutes les videos et les renvoyer dans le return et dans la renderList
    const renderList = videos.map((video) =>{
        // La vidéo dans le map de video qu'on repasse au return
        return (
            <VideoItem 
                key={video.id.videoId} 
                onVideoSelect={onVideoSelect} 
                video={video}
            />
        )
    })

    return (
        <div className="ui relaxed divided list">
            {renderList}
        </div>
    )
}

export default VideoList;