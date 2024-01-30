import { useState, useEffect, useContext } from "react";
import SeeMemberDetails from "./button components/SeeMemberDetails";
import { urlContext } from "./ContextAPI";


export default function Members({ token }) {
  const API_URL = useContext(urlContext);
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
        <><div id='mem-title'><h1>Members</h1></div>
        <div id='members-container'>
            
          {
            member.map((mem) => {
              return (
                <div id='members'>
                <h2>{mem.stageName}</h2>
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