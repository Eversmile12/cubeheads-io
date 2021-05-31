import Link from "next/link"



function PrivacyPolicies(props)
{
    return (
        <div className={props.isError && "error"}  style ={{"margin-top": "1rem"}}>
            <input onChange={props.handleOnChange}  type="checkbox"></input>
            <p style={{"display": "inline-block", "margin-left" : "1rem" }} className="x-small" > I accept the <Link href="https://www.freeprivacypolicy.com/live/d1da3cc5-c336-437a-b469-fab34d7c3bb0">privacy policies</Link></p>
        </div>        
    )
}

export default PrivacyPolicies;