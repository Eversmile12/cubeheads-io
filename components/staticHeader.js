import Image from "next/image"
import {XlHeader} from "./UIElements/headers.js"
import styles from "../styles/staticHeader.module.css"
import SubscribeForm from "./subscribeForm"

export default function StaticHeader({props}){
    return(
        <div className={styles.wrapper}>
            <div className={styles.textContainer}>
                <XlHeader className="mb-l">News letter cta dolor sit amte. Lorem ipsum dolor</XlHeader>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <SubscribeForm></SubscribeForm>
            </div>
            <div>
                <img className={styles.headerImage} src="/email-header-image.png" width="582" height="602"></img>
            </div>
        </div>
    )
}



