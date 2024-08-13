import Button from '../Button/Button'
import styles from './ContactForm.module.css'
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";


function ContactForm() {

  const onSubmit = (event)=> {
      event .preventDefault()
        console.log(event.target[0].value) 
        console.log(event.target[1].value) 
        console.log(event.target[2].value) 
      
     
  }  

  return (

<section className={styles.container}>
    <div className={styles.contact_form}>

          <div className={styles.top_btn}>
                <Button text='VIA SUPPORT CHAT' icon={<MdMessage fontSize="24px"/>}/>
                <Button text='VIA CALL' icon={<IoMdCall fontSize="24px"/>}/>
          </div>
          <Button isOutLine={true} text="VIA EMAIL FORM" icon={<MdOutlineEmail fontSize="24px"/>}/>

          <form onSubmit={onSubmit}>
                 <div className={styles.form_control}>
                       <label htmlFor="name">Name</label>      
                       <input type="text"  name='name'/>
                 </div>
                 <div className={styles.form_control}>
                       <label htmlFor="email">Email</label>      
                       <input type="email"  name='email'/>
                 </div>
                 <div className={styles.form_control}>
                       <label htmlFor="text">Text</label>      
                       <textarea name='text' rows={6}/>
                 </div>
                 <div style={{display:"flex", justifyContent:"end"}}>
                 <Button text="Submit"/>
                 </div>

          </form>
    </div>
        
     <div className={styles.contact_Image}>
          <img src="/image/contact.svg" alt="img" />
     </div>
</section>
    
  )
}

export default ContactForm
