import styles from './Button.module.css';

const Button = ({text , icon, isOutLine}) => {
  return (
    <button className={isOutLine? styles.outline_btn : styles.primary_btn} >
      {icon} 
      {text}
    </button>
  )
}

export default Button
