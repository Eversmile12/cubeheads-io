import Image from "next/image"
import {XlHeader} from "./UIElements/headers.js"
import styles from "../styles/staticHeader.module.css"
import SubscribeForm from "./subscribeForm"

export default function StaticHeader({props}){
    return(
        <div className={styles.wrapper}>
            <div className={styles.textContainer}>
                <XlHeader className="mb-m">Gamedev jobs at the tips of your fingers</XlHeader>
                <p style={{"line-height" : "1.5em"}} className="mb-s">Join <strong>100+ Artists. </strong> Receive stunning jobs in wonderful game studios.</p>
                <ul className="mb-l" style={{"lineHeight" : "1.4em"}}>
                    <li>
                        Tailored on your expertise.
                    </li>
                    <li>
                        Always up-to-date.
                    </li>
                    <li>
                        Once a week, unsubscribe when you want.
                    </li>
                </ul>
                <SubscribeForm></SubscribeForm>
            </div>
            <div className={styles.imgContainer}>
                <img className={styles.headerImage} alt="Image with a 3D hand that says ok" src="/header-image.svg"></img>
            </div>
        </div>
    )
}



