import "../Header/Header.css"
import logo from '../../assets/icons8-mummy.svg'
import { Link } from 'react-router-dom'
import CartWidget from "../CartWidget/CartWidget"

const Header = ({variant = false}) => {


    return (
        <header className={variant ? "header header-v" : "header"}>
            <div className="header__container">
                <img src={logo} alt='logo'/>

                <nav className="header__nav">
                    <Link className="header__link" to="/">Todos</Link>
                    <Link className="header__link" to="/productos/jean">Jeans</Link>
                    <Link className="header__link" to="/productos/remeras">Remeras</Link>
                    <Link className="header__link" to="/productos/buzos">Buzos</Link>
                </nav>
                <nav className="CartWidget">
                <CartWidget />
                </nav>
            </div>
        </header>
    )
}

export default Header