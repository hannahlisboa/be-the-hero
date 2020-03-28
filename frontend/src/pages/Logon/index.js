import React, {useState} from 'react';
import './styles.css'
import { FiLogIn } from 'react-icons/fi'
import heroesImage from '../../assets/heroes.png'
import logoImage from '../../assets/logo.svg'
import {Link, useHistory} from 'react-router-dom'
import api from '../../services/api'

export default function Logon() {
    const [id, setId] = useState('')
    const history = useHistory()
   async function handleLogin(e){
        e.preventDefault();
        try {
           const response = await api.post('session', {id})
           localStorage.setItem('ongID', id)
           localStorage.setItem('ongName', response.data.name)
           history.push('/profile')

        } catch (error) {
            console.log(error)
            alert('Falha no login, tente novamente.')
        }
    }
  return (
   <div className="logon-container">
       <section className="form">
            <img src={logoImage} alt='Be The Hero'/>
            <form onSubmit={handleLogin}>
                <h1>Faça seu logon</h1>
                <input 
                    placeholder='Sua ID'
                    value={id}
                    onChange={e=> setId(e.target.value)}
                    />
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
