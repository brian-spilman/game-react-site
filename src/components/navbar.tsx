import { Link } from "react-router-dom";


export function NavBar() {

    return <div style={{ backgroundColor: "#0085fc", color: "white", height: "50px", padding: "5px" }}>
        <ul style={{ listStyle: "none" }}>
            {/* <li style={{display: "inline", color: "white"}}>Welcome!</li> */}
            <span>
                <li className="navBarItem"><Link to="/">Home</Link></li>
                <li className="navBarItem"><Link to="/creategame">Add Game</Link></li>
            </span>
        </ul>
    </div>

}