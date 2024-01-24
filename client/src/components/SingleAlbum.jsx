import { useState, useEffect } from "react";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import LessAlbumDetails from "./button components/LessAlbumDetails";

const API_URL = "http://localhost:8080/api"

export default function SingleAlbum() {
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
        <img src={selectedAlbum.image} alt={selectedAlbum.title} />
        <p>Released: {selectedAlbum.releaseDate}</p>
        <p>{selectedAlbum.description}</p>
        <a href={selectedAlbum.listenLink}>Listen on Spotify</a><br />
        {<LessAlbumDetails />}
    </div>
    </>
   )
}