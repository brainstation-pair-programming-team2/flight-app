import './Nav.scss'
import logo from '../../assets/Logo/logo.png'

export default function Nav() {
    return (
        <>
            <nav className='nav'>
                <div>
                    <img className='nav__logo' src={logo}/>
                </div>
                <ul className='nav__pages'>
                    <li className='nav__page'>Search</li>
                    <li className='nav__page'>Airlines</li>
                </ul>
            </nav>
        </>
    )
}