import React from "react";
interface PropsArr {
  todo: string[],
  mainTodo:number,
  inId:number
}
function SmileLists(props: PropsArr) {

  return (
    <div >
      {props.todo.map((texts ,index) => {
        if(props.mainTodo === props.inId){

          return (

            <p key={index} className="smileList">
              <i className="material-icons">&#xe5ca;</i>
              {texts}

            <span className="button_smile">
              <span className="fas fa-ellipsis-v"></span>
            </span>
            
            </p>
        );
      }
      return texts
      })}
    </div>
  );
}

export default SmileLists;
