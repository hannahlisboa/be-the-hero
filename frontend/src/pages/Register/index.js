import React from 'react';
import './styles.css';
import logoImage from '../../assets/logo.svg'
import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
export default function Register() {
  return (
      <div className="register-container">
          <div className="content">
              <section>
                <img src={logoImage} alt='Be The Hero'/>  
                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem casos da sua ONG.</p>
                <Link className="back-link" to="/">
                    <FiArrowLeft size={15} color="E02041"/>
                    Não tenho Cadastro
                </Link>
              </section>
              <form>
                  <input placeholder="Nome da ONG"/>
                  <input type="email" placeholder='e-mail'/>
                  <input placeholder='WhatsApp'/>
                  <div className='input-group'>
                      <input placeholder='Cidade'/>
                      <input placeholder='UF' style={{width:80}}/>
                  </div>
                  <button className='button' type= 'submit'>Cadastrar</button>
              </form>
          </div>
      </div>
  );
}
