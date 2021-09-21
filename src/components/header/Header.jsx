import "./header.css"

export default function Header() {
    return (
        <div className = "header">
            <div className="headerTitles">
                <span className="headerTitleSm">Ovie5th</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className = "headerImg" src="images/background.jpg" alt="" />            
        </div>
    )
}
