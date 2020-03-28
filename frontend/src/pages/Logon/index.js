import React from 'react';
import './styles.css'
import { FiLogIn } from 'react-icons/fi'
import heroesImage from '../../assets/heroes.png'
import logoImage from '../../assets/logo.svg'
import {Link} from 'react-router-dom'

export default function Logon() {
  return (
   <div className="logon-container">
       <section className="form">
            <img src={logoImage} alt='Be The Hero'/>
            <form>
                <h1>Faça seu logon</h1>
                <input placeholder='Sua ID'/>
                <button className='button' type='submit'>Entrar</button>
                <Link className="back-link" to="/register">
                    <FiLogIn size={15} color="E02041"/>
                    Não tenho Cadastro
                </Link>
            </form>
       </section>
       <img src={heroesImage} alt='Heroes'/>
   </div>
  );
}
