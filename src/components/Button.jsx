function Button({name, func}) {
  return(
    <button onClick={func} className={name}>{name}</button>
  );
}

export default Button;