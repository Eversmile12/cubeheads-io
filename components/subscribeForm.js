import axios from "axios"
import React, {useState, useEffect} from "react"
import { FormInput, FormDropdown, FormInputLabel } from "./UIElements/inputs"
import { SubmitButton } from "./UIElements/buttons"
import styles from "../styles/subscribeForm.module.css"
import styled from "styled-components"


const PrivacyPolicyLink = styled.a`
    color: #FF305E;

`

const SubscribeForm = () => {

    const [email, updateEmailState] = React.useState("")
    const [frequency, updateFrequencyState] = React.useState("")
    const [expertise, updateExpertiseState] = React.useState("Animator")
    const [checkboxIsChecked, updateCheckBoxIsChecked] = React.useState(false)
    const [isSubscribed, updateSubscribedState] = React.useState(false)
    const [isError, updateErrorState] = React.useState(false)
    const [message, updateMessage] = React.useState()
    const [hasError, updateHasError] = React.useState("")


    React.useEffect(()=>{
        console.log(frequency)
    }, [frequency])

    function handleEmailChange(e){
        updateEmailState(e.target.value)
    }

    function handleExpertiseChange(e){
        updateExpertiseState(e.target.value)
    }

    function handleFrequencyChange(e){
        updateFrequencyState(e.target.value)
    }

    async function handleSubmit(e){
        e.preventDefault()
        if(!email || !email.length || !checkboxIsChecked){
            if(!email || !email.length){
                console.log("error in form")
                updateErrorState(true)
                updateHasError("EMAIL")
            }else{
                console.log("error in form")
                updateErrorState(true)
                updateHasError("CHECKBOX")
            }
            updateErrorState(false)
            

        }else{
            axios.post("/api/newsletter", {email, expertise})
            .then(response => {
                const { data } = response
                const { message, error } = data
                if(error){
                    updateErrorState(true)
                    updateMessage(error)
                }else{
                    updateSubscribedState(true)
                    updateErrorState(false)
                    updateMessage("")
                    updateMessage(message)  
                }
                updateHasError("")
                           
            }).catch(e => {
                console.log(e)
            })
        }
    }
    



    return (
        <div className={styles.subscribeFormWrapper}>
             {isSubscribed ?
                <div>
                    <p className={styles.message + " mt-l" + " mb-xs"}>{message}</p>
                    <p >Thank you {expertise}! We're preparing your weekly digest 🚀 <br></br>In the meantime why don't you follow us on  <a style={{"color" : "#FF305E"}} target="_blank" href="https://twitter.com/CubeheadsHQ">Twitter</a>?  </p>
                </div>
                
                :
                <form className="mt-s">
                
                <FormInput type="email" className={hasError == "EMAIL" && "error"} placeholder="Email" onChange={handleEmailChange}></FormInput>
                
                <FormDropdown className="ml-s" onChange={handleExpertiseChange} value={expertise}>
                    <option>All</option>
                    <option>Animator</option>
                    <option>Concept Artist</option>
                    <option>Developer</option>
                    <option>Environment Artist</option>
                    <option>FX Artist</option>
                    <option>Lighting Artist</option>
                    <option>Texture Artist</option>
                    <option>Unity</option>
                    <option>Unreal</option>
                </FormDropdown>
                <SubmitButton type="submit" onClick={handleSubmit}>I want to land my dream job</SubmitButton>    
                <div  className={hasError == "CHECKBOX" ? "error" : ""} style ={{"margin-top": "2rem", "width" : "30rem", "padding" : "0 .5rem 0 .5rem" }}>
                    <label for="privacy-policies" style={{"display" : "none"}}></label>
                    <input id="privacy-policies" onChange={() => updateCheckBoxIsChecked(!checkboxIsChecked)}   type="checkbox"></input>
                    <p style={{"display": "inline-block", "margin-left" : "1rem"}} className="x-small" > I accept the <PrivacyPolicyLink style={{"color" : "#FF305E"}} href="https://www.freeprivacypolicy.com/live/d1da3cc5-c336-437a-b469-fab34d7c3bb0">privacy policies</PrivacyPolicyLink></p>
                </div> 
                {
                    isError && <p style={{"marginTop": "2rem", "color" : "#ff976a"}}> { message }</p>
                }             
                
                </form>
            }
        </div>
       
    )
}

export default SubscribeForm;
