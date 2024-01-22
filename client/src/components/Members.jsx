import { useState, useEffect } from "react";

const API_URL = "http://localhost:8080/api";

export default function Members() {
    const [member, setMember] = useState([]);

    useEffect(() => {
        async function fetchMembers() {
            try {
                const response = await fetch(`${API_URL}/members`);
                const result = await response.json();
                setMember(result.svtMembers)

                console.log("Members:", response);
            } catch (error) {
                console.error(error);
            }
        } fetchMembers();
    }, []);

    return (
        <div>
        </div>

    )
}