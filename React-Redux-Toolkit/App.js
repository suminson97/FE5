import { useSelector, useDispatch } from "react-redux";
import { changeName } from "./store.js";

function App() {
  let state = useSelector((state) => {
    return state;
  });
  console.log(state.user);

  let dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(changeName());
        }}
      >
        이름바꿔~
      </button>
    </div>
  );
}
export default App;
