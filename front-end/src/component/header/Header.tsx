import { Link } from '@reach/router'

function Header(): JSX.Element {
    return (
        <header id="header">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header