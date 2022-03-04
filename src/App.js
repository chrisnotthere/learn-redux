import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions'

function App() {
  const [amount, setAmount] = useState(1);
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1> Counter {counter} </h1>
      <input type={'number'} value={amount} onChange={e => setAmount(e.target.value)} ></input>
      <button onClick={() => dispatch(increment(amount))}>+</button>
      <button onClick={() => dispatch(decrement(amount))}>-</button>
      {isLogged ? <h3>Secret information only for logged in user.</h3> : ''}

    </div>
  );
}

export default App;
