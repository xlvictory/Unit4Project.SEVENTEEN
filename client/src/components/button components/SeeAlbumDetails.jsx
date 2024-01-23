import { useNavigate } from "react-router-dom";

export default function SeeAlbumDetails({ album_id }) {
    const navigate = useNavigate();
 function clickMe() {
    navigate(`/albums/${album_id}`);
 }
 return (
    <button type="button" onClick={clickMe}>More Info</button>
 )
}