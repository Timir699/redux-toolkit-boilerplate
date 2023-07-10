import { RootState } from "./redux/store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counterSlice/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <button className="border" onClick={() => dispatch(increment())}>
        increament
      </button>
      <button className="border ml-7" onClick={() => dispatch(decrement())}>
        Decreament
      </button>
      <button
        className="border ml-7"
        onClick={() => dispatch(incrementByAmount(5))}
      >
        increment Amount 5
      </button>
      <div>{count}</div>
    </>
  );
}

export default App;
