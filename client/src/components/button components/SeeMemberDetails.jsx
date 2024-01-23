import { useNavigate } from "react-router-dom";

export default function SeeMemberDetails({ mem_id }) {
    const navigate = useNavigate();
 function clickMe() {
    navigate(`/members/${mem_id}`);
 }
 return (
    <button type="button" onClick={clickMe}>Member Profile</button>
 )
}