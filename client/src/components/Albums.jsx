import { useState, useEffect } from "react";

const API_URL = "http://localhost:8080/api";

export default function Albums() {
    const [album, setAlbum] = useState([]);

    useEffect(() => {
        async function fetchAlbums() {
            try {
                const response = await fetch(`${API_URL}/albums`);
                const result = await response.json();
                setAlbum(result);

            } catch (error) {
                console.error(error);
            }
        } fetchAlbums();
    }, [])

    return (
        <>
        <div>
            <h1>Albums & EPs</h1>
          {
            album.map((album) => {
              return (
                <div id='albums'>
                <img src={album.image} alt={album.title} /><br />
                  <h4>{album.title}</h4>
                  <p>{album.releaseDate}</p>
                  <p>{album.description}</p>
                  <a href={album.listenLink}>Listen on Spotify</a>
                </div>
              )
            })
          }
         
        </div>
      </>
    )
}