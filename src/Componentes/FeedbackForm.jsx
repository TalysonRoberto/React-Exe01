import React, { useState } from 'react'

const FeedbackForm = () => {
    const[nome,setNome]=useState('');
    const[email,setEmail]=useState('');
    const[comentario,setComentario]=useState('');

    function enviarform(){
        alert("Usuário: "+ nome +" de email: " + email + ". Enviou o seguinte comentatio: " + comentario)
    }
  return (
    <div>
        <form onSubmit={enviarform}>
            {/* Campo do nome*/}
            <label htmlFor="nome">Nome</label>
            <input 
            type="text" 
            id="nome"
            required
            onChange={(e)=> setNome(e.target.value)}
            value={nome}
            placeholder='Digite seu nome'
            />

            {/* Campo do email*/}
            <label htmlFor="email">E-mail</label>
            <input 
            type="text" 
            id="email"
            required
            onChange={(e)=> setEmail(e.target.value)}
            value={email}
            placeholder='Digite seu email'
            />

            {/* Campo do comentario*/}
            <label htmlFor="">Comentario</label>
            <textarea 
            name="" 
            required
            onChange={(e)=> setComentario(e.target.value)}
            value={comentario}
            placeholder='Digite o seu comentário'
            id="comentario"
            ></textarea>

            {/*Botão de enviar*/}
            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default FeedbackForm