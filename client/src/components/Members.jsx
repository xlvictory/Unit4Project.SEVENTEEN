import { useState, useEffect } from "react";
import SeeMemberDetails from "./button components/SeeMemberDetails";

const API_URL = "http://localhost:8080/api";

export default function Members() {
    const [member, setMember] = useState([]);

    useEffect(() => {
        async function fetchMembers() {
            try {
                const response = await fetch(`${API_URL}/members`);
                const result = await response.json();
                setMember(result)

                // console.log("Members:", result);
            } catch (error) {
                console.error(error);
            }
        } fetchMembers();
    }, []);
console.log(member);
    return (
        <>
        <div>
            <h1>Members</h1>
          {
            member.map((mem) => {
              return (
                <div id='members'>
                <h4>{mem.stageName}</h4>
                <img src={mem.image} alt={mem.stageName} /><br />  
                  <p>{<SeeMemberDetails mem_id={mem.mem_id} />}</p>
                </div>
              )
            })
          }
         
        </div>
      </>
    )
}