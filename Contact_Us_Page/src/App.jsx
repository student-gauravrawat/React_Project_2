import './App.css'
import ContactForm from './component/contactForm/ContactForm'
import ContacHeadert from './component/contactHeader/ContacHeadert'
import Navigation from './component/Navigation/Navigation'

function App() {


  return (
    <>
     <Navigation/>
     <main className='main_container'>
     <ContacHeadert/>
     <ContactForm/>
     </main>
  
    </>
  )
}

export default App
