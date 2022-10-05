import { useState } from 'react';
import './MenuLateral.css';

const Cabecera = ({menu}) =>{
    return (
        <div className={`menu-lateral ${menu?'is-active':''}`}>
            <nav className='menu-lateral-nav'>
                <ul className='menu-lateral-ul'>
                    <li className='menu-lateral-li'><a href='' className='menu-lateral-a'>Item $</a></li>
                    <li className='menu-lateral-li'><a href='' className='menu-lateral-a'>Item $</a></li>
                    <li className='menu-lateral-li'><a href='' className='menu-lateral-a'>Item $</a></li>
                    <li className='menu-lateral-li'><a href='' className='menu-lateral-a'>Item $</a></li>
                    <li className='menu-lateral-li'><a href='' className='menu-lateral-a'>Item $</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Cabecera;
