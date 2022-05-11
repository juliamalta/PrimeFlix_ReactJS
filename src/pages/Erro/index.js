
import React from 'react';
import './erro.css';
import { Link } from 'react-router-dom'
 
function Erro () {

    return (
        <div className='erro'>
<h1>404</h1>
 <h2>Está pagina nao existe</h2>
            <Link to='/'>Veja todos os filmes!</Link>
 </div>
    )
 }

 export default Erro;