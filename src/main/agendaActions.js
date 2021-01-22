/* Action Creator  */
const changeDescription = (inputField) => ({

    type: 'DESCRIPTION_CHANGED',
    payload: inputField.target.value
})