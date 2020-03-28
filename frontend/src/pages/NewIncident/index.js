import React from 'react';
import './styles.css';
import logoImage from '../../assets/logo.svg'
import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

export default function NewIncident() {
  return (
    <div className="new-incident-container">
          <div className="content">
              <section>
                <img src={logoImage} alt='Be The Hero'/>  
                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontar um herói para resolver isso.</p>
                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={15} color="E02041"/>
                    Voltar para home
                </Link>
              </section>
              <form>
                  <input placeholder="Título do cado"/>
                  <textarea placeholder='Descrição'/>
                  <input placeholder='Valor em reais'/>
                  <button className='button' type= 'submit'>Cadastrar</button>
              </form>
          </div>
      </div>
  );
}
