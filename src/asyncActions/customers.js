import { addManyCustomersAction } from "../store/customerReducer"

export const fetchCustomers = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(data => data.json())
            .then(json => dispatch(addManyCustomersAction(json)))
    }
}