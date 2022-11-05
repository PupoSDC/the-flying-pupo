import type { FunctionComponent } from "react"

const Page: FunctionComponent = () => {
    return (
        <body>
            <div id="menu">
                <div id="menu-items">
                    <div className="menu-item">Home</div>
                    <div className="menu-item">Shop</div>
                    <div className="menu-item">About</div>
                    <div className="menu-item">Contact Us</div>
                </div>
                <div id="menu-background-pattern"></div>
                <div id="menu-background-image"></div>
            </div>
        </body>
    )
}

export default Page;