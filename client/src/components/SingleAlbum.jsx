import { useState, useEffect, useContext } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import LessAlbumDetails from "./button components/LessAlbumDetails";
import { urlContext } from "./ContextAPI";



export default function SingleAlbum({ token }) {
    const API_URL = useContext(urlContext);
    const [selectedAlbum, setSelectedAlbum] = useState({});
    const { album_id } = useParams();

    useEffect(() => {
        async function fetchSingleAlbum() {
            try {
                const response = await fetch(`${API_URL}/albums/${album_id}`)
                const result = await response.json();
                console.log(result);
                setSelectedAlbum(result);
            } catch(error) {
                console.error(error);
            }
        }
        fetchSingleAlbum();
 
   }, []);

   return (
    <>
    <div id='single-album'>
        <h3>{selectedAlbum.title}</h3>
        <img id="album-photo" src={selectedAlbum.image} alt={selectedAlbum.title} />
        <p>Released: {new Date(selectedAlbum.releaseDate).toLocaleDateString("en-US")}</p>
        <p>{selectedAlbum.description}</p>
        <a href={selectedAlbum.listenLink}>Listen on Spotify</a><br />
        {<LessAlbumDetails />}
    </div>
    </>
   )
}