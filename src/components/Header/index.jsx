import './styles.css'


import { Link } from 'react-router-dom'

export function Header() {
    return(
        <header className="header-component-content">
            <div className='header-container'>
                <div>
                    <h1>
                        <a href="/">Healthy Food</a>
                    </h1>
                    
                </div>
                <nav className="nav-component-content">
                    <ul>
                        <li><a href="#">HEALTHY RECIPES</a></li>
                        <li><a href="#">BLOG</a></li>
                        <li><a href="#">JOIN</a></li>
                    </ul>
                    <Link className='join-group' to={'/Cadastro'}> 
                        <p>Registro</p>
                    </Link>
                </nav>
            </div>
        </header>
    )
}

