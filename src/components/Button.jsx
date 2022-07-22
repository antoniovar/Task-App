import '../styles/Button.css'

function Button({name, func, little}) {
  return(
    <button onClick={func} className={little ? 'button' : 'button clear'}>{name}</button>
  );
}

export default Button;