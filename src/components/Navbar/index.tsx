import { ReactComponent as GithubIcon } from 'assets/img/githubIcon.svg';
import { ReactComponent as Autocom } from 'assets/img/autocombranco.svg';

import './styles.css';

function Navbar() {


    return (
        <header>
            <nav className='container'>
                <div className='dsmovies-nav-content'>
                    <h1>Galeria</h1>
                    <Autocom />
                    <a href="https://github.com/diogoopeixoto">
                        <div className='dsmovie-contact-container'>
                            <GithubIcon />
                            <p className='dsmovie-contact-link'>/diogopeixoto</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;