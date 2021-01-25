/* Action Creator  */

const url = 'http//localhost:3003/api/agendas'

export const changeDescription = (inputField) => ({

    type: 'DESCRIPTION_CHANGED',
    payload: inputField.target.value
})

