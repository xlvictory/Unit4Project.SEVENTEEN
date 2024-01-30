import React, { useState, useEffect, useContext } from "react";
import { urlContext } from "./ContextAPI";



export default function Albums() {
    const API_URL = useContext(urlContext);
    const [musicVid, setMusicVid] = useState([]);

    useEffect(() => {
        async function fetchMvs() {
            try {
                const response = await fetch(`${API_URL}/MVs`);
                const result = await response.json();
                setMusicVid(result);

            } catch (error) {
                console.error(error);
            }
        } fetchMvs();
    }, [])

    return (
        <>
        <h1>Music Videos</h1>
            <div id='mv-container'>

                {
                    musicVid.map((mv) => {
                        return (
                            <div id='mvs'>
                                <h2>{mv.title}</h2>
                                <iframe width="420" height="315"
                            src={mv.watchLink}>
                            </iframe>
                                
                                <p>Release Date: {new Date(mv.releaseDate).toLocaleDateString("en-US")}</p>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}