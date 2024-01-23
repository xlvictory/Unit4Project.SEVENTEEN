import { useState, useEffect } from "react";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import LessMemberDetails from "./button components/LessMemberDetails";

const API_URL = "http://localhost:8080/api"

export default function SingleMember() {
    const [selectedMember, setSelectedMember] = useState({});
    const { mem_id } = useParams();

    useEffect(() => {
        async function fetchSingleMember() {
            try {
                const response = await fetch(`${API_URL}/members/${mem_id}`)
                const result = await response.json();
                setSelectedMember(result);
            } catch(error) {
                console.error(error);
            }
        }
        fetchSingleMember();
    }, []);

    const navigate = useNavigate();

    return (
        <div id='single-member'>
            <h1>{selectedMember.stageName}</h1>
            <img src={selectedMember.image} alt={selectedMember.stageName} />
            <p>Birth Name: {selectedMember.realName}</p>
            {selectedMember.koreanName != null ? <p>Korean Name: {selectedMember.koreanName}</p> : ""}
            <p>Position: {selectedMember.position}</p>
            <p>Unit: {selectedMember.unit}</p>
            <p>Birthdate: {selectedMember.birthday}</p>
            <p>Zodiac: {selectedMember.zodiacSign}</p>
            <p>Nationality: {selectedMember.nationality}</p>
            {<LessMemberDetails />}
        </div>
    )
}