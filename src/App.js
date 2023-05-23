import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
import { fetchCustomers } from './asyncActions/customers';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)

  const addCash = (cash) => {
    dispatch({ type: 'ADD_CASH', payload: cash })
  }

  const getCash = (cash) => {
    dispatch({ type: 'GET_CASH', payload: cash })
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
      <div className='wrapper'>
        <div className='cash__label'><span>Баланс:</span>{cash}</div>
        <div style={{ display: 'flex' }}>
          <button onClick={() => addCash(Number(prompt(cash)))} type="button" className="btn btn-success">Пополнить счет</button>
          <button onClick={() => getCash(Number(prompt(cash)))} type="button" className="btn btn-danger">Снять со счета</button>
        </div>
        <div className='wrapper__btn'>
          <button onClick={() => addCustomer(prompt())} type="button" className="btn btn-primary">Добавить клиента</button>
        </div>
        <div className='wrapper__btn'>
          <button onClick={() => dispatch(fetchCustomers())} type="button" className="btn btn-primary">Добавить клиентов из базы</button>
        </div>
        {customers.length > 0 ?
          <ul className='list-group'>
            {customers.map(customer => {
              return <li onClick={()=> removeCustomer(customer)} className='list-group-item list-group-item-action'>{customer.name}</li>
            })}
          </ul> : <div style={{ fontSize: '2rem' }}>клиенты отсутсвуют</div>}
      </div>
    </div>
  );
}

export default App;
