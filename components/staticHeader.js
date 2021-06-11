import Image from "next/image"
import {XlHeader} from "./UIElements/headers.js"
import styles from "../styles/staticHeader.module.css"
import SubscribeForm from "./subscribeForm"

export default function StaticHeader({props}){
    return(
        <div className={styles.wrapper}>
            <div className={styles.textContainer}>
                <XlHeader className="mb-l">Your dream studio is just a few clicks away.</XlHeader>
                <p style={{"line-height" : "2em"}}>Receive stunning game dev jobs in wonderful studios.<br></br>Directly to your inbox <strong>once a week.</strong></p>
                <SubscribeForm></SubscribeForm>
            </div>
            <div>
                <img className={styles.headerImage} src="/header-image.svg"></img>
            </div>
        </div>
    )
}



