import { useState } from 'react';
import './MenuLateral.css';

const MenuLareral = ({menu,items}) =>{
    return (
        <div className={`menu-lateral ${menu?'is-active':''}`}>
            <nav className='menu-lateral-nav'>
                <ul className='menu-lateral-ul'>
                    <li className='menu-lateral-li'><a href='' className='menu-lateral-a'>Perfil</a></li>
                    <li className='menu-lateral-li'><a href='/menu' className='menu-lateral-a'>Volver Al Menu</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default MenuLareral;
