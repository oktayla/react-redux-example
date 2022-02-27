import { useSelector, useDispatch } from 'react-redux'

import Navbar from './Navbar'

import { increment, decrement, changeCount } from './redux/counter'

const App = () => {

  const count = useSelector(state => state.counter.value)
  
  const dispatch = useDispatch()

  const Increment = () => {
    dispatch( increment() )
  }
  
  const Decrement = () => {
    dispatch( decrement() )
  }

  const _changeCount = (value) => {
    dispatch( changeCount(value) )
  }

  return (
    <>
      <div align="center">

        <Navbar />

        <div className="counter">
          <h1 style={{marginBottom: 10}}>Count: <strong>{count}</strong></h1>

          <button className="increment" onClick={Increment}>Increment</button>
          <button className="decrement" onClick={Decrement}>Decrement</button>

          <div className="custom-change" style={{marginTop: 10}}>
            <input type="number" onChange={(e) => _changeCount(e.target.value)} value={count} />
          </div>
        </div>

      </div>
    </>
  )
}

export default App