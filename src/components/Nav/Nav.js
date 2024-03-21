import './Nav.scss'
import logo from '../../assets/logo/logo.png'
import { Link } from 'react-router-dom'

export default function Nav({ selectedPage }) {
    return (
        <>
            <nav className='nav'>
                <Link to='/' className='nav__logo-container'>
                        <img className='nav__logo' src={logo} />

                </Link>
                <ul className='nav__pages'>
                    <Link
                        to='/'
                        className={`nav__page ${selectedPage === 'search' ? "nav__page--selected" : ""}`}
                    >
                        <li className="nav__page">
                            Search
                        </li>
                    </Link>
                    <Link
                        to='/airlines'
                        className={`nav__page ${selectedPage === 'airlines' ? "nav__page--selected" : ""}`}>
                        <li className="nav__page">
                            Airlines
                        </li>
                    </Link>
                </ul>
            </nav>
        </>
    )
}