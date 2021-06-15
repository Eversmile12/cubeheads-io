import styled from "styled-components"
import { TitleHeader } from "../components/UIElements/headers"
import { library } from "@fortawesome/fontawesome-svg-core"
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"






const StudioHeaderContainer = styled.div`
    background: #0E1526;
    height: 60vh;
    color: #FFFFFA;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    position:relative;
`

const ImageContainer = styled.div`
    background: #FFFFFA;
    padding: 2rem;
    border-radius: 4px;
    margin-bottom: 2rem;
`



const LocationContainer = styled.div`
   position:absolute;
   bottom: 3%;
   opacity: .7;
   ${'' /* font-size: 1.4rem; */}
`



export default function StudioHeader({title, logo, studioName, studioId, location}){
    return (
        <StudioHeaderContainer>
                <ImageContainer>
                    <a href={"/studios/" + studioId}><img alt={studioName + " logo"} src={logo} width="150" height="150"></img></a>
                </ImageContainer>

                <TitleHeader>{title}</TitleHeader>
                <div>
                    {/* <FontAwesomeIcon className="mr-s" style={{"color" : "#FF305E", "opacity" : ".65", "display" : "inline-block"}} size="sm" icon={faMapMarkerAlt}></FontAwesomeIcon> */}
                    <p style={{"display" : "inline-block"}}>{location}</p>
                </div>
               
                    
                 {studioName &&  <p style={{"position" : "absolute", "bottom" : "2%"}}><span style={{"color" : "#FF305E" }} className="mr-s">Studio:</span><a style={{"color" : "white"}} href={"/studios/" + studioId}>{studioName}</a></p>}  

               
        </StudioHeaderContainer>
    )
}