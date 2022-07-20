import '../styles/Task.css'
function Task (props) {
  return(
    <div className={props.done}>{props.children}</div>
  );
}

export default Task;