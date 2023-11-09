import logo from "../logo192.png";

export default function Header() {
    return(
        <header id="header">
            <img id="logo" src={logo}/>
                <ul id="menuList">
                    <li className="menuItem">Lorem</li>
                    <li className="menuItem">Ipsum</li>
                    <li className="menuItem">Test</li>
                </ul>
        </header>
    );
}