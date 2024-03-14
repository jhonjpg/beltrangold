import { useState } from 'react'
import { I18nextProvider } from 'react-i18next';
import i18n from './18n';import './App.css'
import Auth from './Routes/Auth';

function App() {

  return (
    <>

<I18nextProvider i18n={i18n} >
<Auth/>
</I18nextProvider>


    </>
  )
}

export default App
