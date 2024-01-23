import { useNavigate } from "react-router-dom";

export default function LessMemberDetails({ mem_id }) {
    const navigate = useNavigate();
 function clickMe2() {
    navigate(`/members`);
 }
 return (
    <button type="button" onClick={clickMe2}>Back</button>
 )
}