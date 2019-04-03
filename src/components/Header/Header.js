import React from 'react'
import Form from '../Form/Form';
import "./Header.css"

const Header = () => (
  <header className="header">
    <div className="container">
      <h1 className="header__title">Real Estate App</h1>
      <p className="header__sub-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, quibusdam.</p>
      <Form />
    </div>
  </header>
)

export default Header