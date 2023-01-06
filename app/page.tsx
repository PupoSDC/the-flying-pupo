"use client"
import Link from "next/link";
import { FunctionComponent, useEffect, useState } from "react"
import "./page.css"

const Page: FunctionComponent = () => {
    const [popped, setPopped] = useState(false);
    useEffect(() => {
        setTimeout(() => setPopped(true), 200);
    }, []);

    return (
        <>
            <video autoPlay muted loop id="myVideo">
                <source src="videos/background.mp4" type="video/mp4" />
            </video>
            <div className="content">
                <div id="menu">
                    <ul className={popped ? "pop" : ""}>
                        <li><Link href="logbook">Logbook</Link></li>
                        <li><Link href="logbook">Curriculum</Link></li>
                    </ul>
                    <hr />
                    <h1>The Flying Pupo</h1>
                </div>
            </div>
        </>
    )
}

export default Page;