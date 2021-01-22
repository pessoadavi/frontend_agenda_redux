import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    agenda: () => ({
        description: 'Ler livro',
        list: [{
            _id:1,
            description: 'Pagar fatura',
            done: true
        }, {
            _id:2,
            description: 'Estudar',
            done: false
        }, {
            _id:3,
            description: 'Dormir',
            done: false
        }]
    })
})

export default rootReducer