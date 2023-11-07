import './estilo.css';

function NavBar({cordafonte,children}){

    return(
        <nav className='navegacao'>
            <img className='navegacao-img' src="https://cdn-icons-png.flaticon.com/512/6313/6313619.png" alt="ícone projeto" />
            <ul>
                { children.map(item => <li><a style={{color:cordafonte}} href="#">{item}</a></li>) }
            </ul>
        </nav>
    );

}

export default NavBar;