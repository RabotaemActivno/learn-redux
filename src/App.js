import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)

  const addCash=(cash)=>{
    dispatch({type:'ADD_CASH', payload: cash})
  }

  const getCash=(cash)=>{
    dispatch({type:'GET_CASH', payload: cash})
  }

  return (
    <div className="App">
      <div className='wrapper'>
        <div className='cash__label'>{cash}</div>
        <div style={{ display: 'flex' }}>
          <button onClick={()=>addCash(Number(prompt(cash)))} type="button" className="btn btn-success">Пополнить счет</button>
          <button onClick={()=>getCash(Number(prompt(cash)))} type="button" className="btn btn-danger">Снять со счета</button>
        </div>
      </div>
    </div>
  );
}

export default App;
