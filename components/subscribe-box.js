import axios from "axios"
import React, { useEffect } from "react"
import CTAButton from "./CTAbutton"
import FormInput from "./FormInput"
import PrivacyPolicies from "./PrivacyPolicies"


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
                    updateMessage(data.message)  
                }
                updateHasError("")
                           
            }).catch(e => {
                console.log(e)
            })
        }
    }
    



    return (
        <div>
             {isSubscribed ?
                <div>
                    <p style={{"marginTop": "8rem","font-size": "3rem", "font-weight" : "700", "marginBottom": "1rem"}}>{message}</p>
                    <p style={{"fontSize": "1.6rem"}}>While waiting, why don't you follow us on <a target="_blank" href="https://twitter.com/CubeheadsI">Twitter</a>? </p>
                </div>
                
                :
                <form style = {{"margin-top": "4rem"}}>
                <FormInput className={hasError == "EMAIL" && "error"} placeholder="Email" onChange={handleEmailChange}></FormInput>
                <CTAButton  type="submit" onClick={handleSubmit}>JOIN THE WAITING LIST</CTAButton>                
                <PrivacyPolicies isError = {hasError == "CHECKBOX" ? true:false} handleOnChange= {() => updateCheckBoxIsChecked(!checkboxIsChecked)}></PrivacyPolicies>
                {
                    isError && <p style={{"marginTop": "2rem", "color" : "#ff976a"}}> { message }</p>
                }             
                
                </form>
            }
        </div>
       
    )
}

export default SubscribeForm;