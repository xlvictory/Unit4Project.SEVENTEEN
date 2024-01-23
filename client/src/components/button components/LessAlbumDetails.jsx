import { useNavigate } from "react-router-dom";

export default function LessAlbumDetails({ album_id }) {
    const navigate = useNavigate();
 function clickMe2() {
    navigate(`/albums`);
 }
 return (
    <button type="button" onClick={clickMe2}>Back</button>
 )
}