import React, { FormEvent, useRef } from 'react';
import './App.css';

function App() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(nameRef.current?.value);
    console.log(emailRef.current?.value);
  }

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input type="text" ref={nameRef } id="nome" name="nome"/>
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" ref={emailRef} id="email" name="email"/>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
