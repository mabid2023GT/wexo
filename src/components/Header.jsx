import '../assets/styles/header.scss';
import wexoLogo from '/wexo.svg'


const Header = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <img src={wexoLogo} className="logo" alt="Vite logo" />
            </div>
            <div className='appTitle'>
                Wexo - Weather App
            </div>
        </header>
    );
}

export default Header;