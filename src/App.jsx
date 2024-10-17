
import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import Button from 'react-bootstrap/Button';
import { changeRange, decrement, increment, reset } from './redux/counterSlice';
import { useState } from 'react';

function App() {

  const [range, setRange] = useState(0)
  console.log(range);
  

  const count = useSelector((state)=>state.counter.value)
  console.log(count);
  

  const dispatch = useDispatch()  //call action
 
  return (
    <>
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4 rounded mt-5 bg-light">
        <h1 className='mt-5 text-center text-primary'>Counter Application</h1>

        <h1 className='mt-5 mb-5 text-center' style={{fontSize:'70px'}}>{count}</h1>

        <div className='d-flex align-item-center justify-content-center mt-5'>
          <Button onClick={()=>dispatch(decrement())} className='ms-3' variant="warning">Decrement</Button>{' '}
        <Button onClick={()=>dispatch(reset())} className='ms-3' variant="danger">Reset</Button>{' '}
        <Button onClick={()=>dispatch(increment())} className='ms-3' variant="success">Increment</Button>{' '}
        </div>
        <div className='d-flex align-item-center justify-content-center mt-5 mb-5'>
          <input className='form-control' type="text" placeholder='Enter the range' onChange={(e)=>setRange(e.target.value)} />
          <Button className='ms-3' variant="primary" onClick={()=>dispatch(changeRange(Number(range)))}>Click</Button>{' '}

        </div>

      </div>
      <div className="col-md-4"></div>
    </div>
    </>
  )
}

export default App
