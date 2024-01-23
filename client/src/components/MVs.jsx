import { useState, useEffect } from "react";

const API_URL = "http://localhost:8080/api";

export default function Albums() {
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
            <div>
                <h1>Music Videos</h1>
                {
                    musicVid.map((mv) => {
                        return (
                            <div id='mvs'>
                                <iframe width="420" height="315"
                            src={mv.watchLink}>
                            </iframe>
                                <h4>{mv.title}</h4>
                                <p>{mv.releaseDate}</p>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}