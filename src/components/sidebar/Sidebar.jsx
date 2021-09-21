import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className = "sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className = "sidebarImg" src="images/IMG_1485.JPG" alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className = "sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Anime</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Programming</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Movies</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW ME</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-twitter"></i>
                    <i className="sidebarIcon fab fa-instagram"></i>
                    <i className="sidebarIcon fab fa-linkedin"></i>
                </div>
            </div>
        </div>
    )
}
