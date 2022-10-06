import { useState } from 'react';
import MenuLareral from './MenuLateral';
import './Cabecera.css';

const Cabecera = ({titulo,items}) =>{
    const [menu,setMenu] = useState(false)
    const toggleMenu = ()=>{
        setMenu(!menu)
    }
    return (
        <div className='contenedor-principal'>
            <header className='cabecera'>
                <button onClick={toggleMenu} className='cabecera-button'>
                <svg className='cabecera-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
                </button>
                <h1 className='cabecera-h1'>
                    <a href='' className='cabecera-a'>
                        {titulo}
                    </a>
                </h1>
            </header>
            <MenuLareral menu={menu} items={items}/>
        </div>
    )
}

export default Cabecera;