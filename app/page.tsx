import Link from "next/link";
import type { FunctionComponent } from "react"
import "./page.css"

const Page: FunctionComponent = () => {
    return (
        <>
            <video autoPlay muted loop id="myVideo">
                <source src="videos/background.mp4" type="video/mp4" />
            </video>
            <div className="content">
                <div id="menu">
                    <ul>
                        <li><Link href="logbook">Logbook</Link></li>
                    </ul>
                    <hr />
                    <h1>The Flying Pupo</h1>
                </div>
            </div>
        </>
    )
}

export default Page;