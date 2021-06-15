import axios from "axios"
import React, { useEffect } from "react"
import Link from "next/link"
import { FormInput } from "./UIElements/inputs"
import { SubmitButton } from "./UIElements/buttons"
import styles from "../styles/subscribeForm.module.css"


const SubscribeForm = () => {

    const [email, updateEmailState] = React.useState("")
    const [checkboxIsChecked, updateCheckBoxIsChecked] = React.useState(false)
    const [isSubscribed, updateSubscribedState] = React.useState(false)
    const [isError, updateErrorState] = React.useState(false)
    const [message, updateMessage] = React.useState()
    const [hasError, updateHasError] = React.useState("")


    function handleEmailChange(e){
        updateEmailState(e.target.value)
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
            axios.post("/api/newsletter", {email})
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
                    <p >While waiting, why don't you follow us on <a target="_blank" href="https://twitter.com/CubeheadsI">Twitter</a>? </p>
                </div>
                
                :
                <form className="mt-s">
                <FormInput type="email" style={{"border-radius" : "4px 0 0 4px "}} className={hasError == "EMAIL" && "error"} placeholder="Email" onChange={handleEmailChange}></FormInput>
                
                <SubmitButton type="submit" onClick={handleSubmit}>Keep me updated</SubmitButton>              
            
                <div  className={hasError == "CHECKBOX" ? "error" : ""} style ={{"margin-top": "2rem", "width" : "30rem", "padding" : "0 .5rem 0 .5rem" }}>
                    <label for="privacy-policies" style={{"display" : "none"}}></label>
                    <input id="privacy-policies" onChange={() => updateCheckBoxIsChecked(!checkboxIsChecked)}   type="checkbox"></input>
                    <p style={{"display": "inline-block", "margin-left" : "1rem"}} className="x-small" > I accept the <Link href="https://www.freeprivacypolicy.com/live/d1da3cc5-c336-437a-b469-fab34d7c3bb0">privacy policies</Link></p>
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