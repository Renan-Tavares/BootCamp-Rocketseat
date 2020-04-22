import React from 'react'
import './Login.css'
import logo from '../images/tindev.png'

export default function Login() {
    return(
        <div className='Login-container'>
            <form>
              <img src={logo} alt='Tindev' />
                 <input placeholder="Digite seu usuário no GitHub."/>
                      <button type="submit">Enviar</button>
           
             
            </form>
        </div>

        
    )
}

