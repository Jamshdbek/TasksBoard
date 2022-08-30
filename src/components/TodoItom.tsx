import "../scss/card.scss";
import Init from "./Init";
import { TodoInterface } from "../redux/todoReducer";
/**?
 * this card pace for agein bould card
 */
interface Props {
  todos: TodoInterface[];
}
function TodoItom(props: Props) {
  return (
    <div>
      <h3 className="text_top">Main Board</h3>
      <div className="main">
        {props.todos.map((todo ) => {
          return (
            <div>
              <Init todoText={todo.text} todoId={todo.id} key={todo.id} />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default TodoItom;
