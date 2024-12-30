import React, { useState, useRef } from "react";
import '../Styles/reproductor.css';

const Reproductor = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLooping, setIsLooping] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const toggleLoop = () => {
        setIsLooping(!isLooping);
        audioRef.current.loop = !isLooping;
    };

    return (
    <div className="reproductor">
        <p className="texto">
        Click para reproducir<br />mi canción favorita
        </p>
        <img src="/lineaMusica.png" alt="" />
        <div className="controles">
            <span className="material-symbols-outlined boton">
                skip_previous
            </span>
            <button className="boton" onClick={togglePlay}>
                {isPlaying ? 
                <span class="material-symbols-outlined boton">
                    pause
                </span>
                :
                <span className="material-symbols-outlined boton">
                    play_arrow
                </span>}
            </button>
            <span className="material-symbols-outlined boton">
                skip_next
            </span>
            <button className="boton" onClick={toggleLoop}>
            <span className="material-symbols-outlined boton">
                repeat
            </span>
            </button>
        </div>
        <audio ref={audioRef} src="/Snowman(MP3_320K).mp3"></audio>
    </div>
    );
};

export default Reproductor;
