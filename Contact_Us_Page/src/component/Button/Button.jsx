import styles from './Button.module.css';

const Button = ({text , icon, isOutLine}) => {
  return (
    <div className={isOutLine? styles.outline_btn : styles.primary_btn}>
      {icon} 
      {text}
    </div>
  )
}

export default Button
