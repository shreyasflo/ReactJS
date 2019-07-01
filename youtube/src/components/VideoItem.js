import React from 'react'
import './VideoItem.css'
export default function VideoItem({ video, onVideoSelect }) {
    const { snippet } = video
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img className="ui image" alt={snippet.title} src={snippet.thumbnails.high.url} />
            <div className="content">
                <div className="header">{snippet.title}</div>
            </div>
        </div>
    )
}
