import { useState, useEffect, useContext } from "react";
import SeeAlbumDetails from "./button components/SeeAlbumDetails";
import { urlContext } from "./ContextAPI";



export default function Albums({ token }) {
      const API_URL = useContext(urlContext);
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
        <div id='album-title'><h1>Albums & EPs</h1></div>
        <div id='albums-container'>
          {
            album.map((album) => {
              return (
                <div id='albums'>
                <img src={album.image} alt={album.title} /><br />
                  <h4>{album.title}</h4>
                  <p>{<SeeAlbumDetails album_id={album.album_id} />}</p>
                </div>
              )
            })
          }
         
        </div>
      </>
    )
}