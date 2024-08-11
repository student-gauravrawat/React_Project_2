import Button from '../Button/Button'
import styles from './ContactForm.module.css'
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

function ContactForm() {
  return (

<section className={styles.container}>
    <div className={styles.contact_from}>

          <div className={styles.top_btn}>
                <Button text='VIA SUPPORT CHAT' icon={<MdMessage fontSize="24px"/>}/>
                <Button text='VIA CALL' icon={<IoMdCall fontSize="24px"/>}/>
          </div>
          <Button isOutLine={true} text="VIA EMAIL FORM" icon={<MdOutlineEmail fontSize="24px"/>}/>

          <form>
                 <div className={styles.form_control}>
                       <label htmlFor="name">Name</label>      
                       <input type="text"  name='name'/>
                 </div>
          </form>
    </div>
        
     <div className={styles.contact_Image}>
         
     </div>
</section>
    
  )
}

export default ContactForm
