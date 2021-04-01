import { FormEvent, useRef } from "react";
import './Form.css'

export default function Form() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(nameRef.current?.value);
    console.log(emailRef.current?.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="nome">Nome</label>
        <input type="text" ref={nameRef} id="nome" name="nome" />
      </div>
      <div className="form-group">
        <label htmlFor="email">E-mail</label>
        <input type="email" ref={emailRef} id="email" name="email" />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}