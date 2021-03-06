/* Action Creator  */

import axios from 'axios'

const url = 'http://localhost:3003/api/agendas'

export const changeDescription = (inputField) => ({

    type: 'DESCRIPTION_CHANGED',
    payload: inputField.target.value
})


export const search = () => {

    return (dispatch, getState) => {

        const description = getState().agenda.description
        const search = description ? `&description__regex=/${description}/` : ''
        const request = axios.get(`${url}?sort=-createAt${search}`)
            .then(resp => {
                dispatch({
                    type: 'AGENDA_SEARCHED',
                    payload: resp.data
                })
            })
    }

}

/* Neste creat action estão sendo usados dois midleewares: thunk e multi.
   O multi permite que mais de uma ação seja executada ao mesmo tempo quando
   a action for chamada, neste caso a action 'search'. Entretanto ambas
   ocorrem ao mesmo tempo. Por isso o uso da thunk que permite que apenas 
   que permite que uma promisse seja efetuada quando a anterior estiver 
   concluida */

export const add = (description) => {

    return dispatch => {
        axios.post(url, { description })
            .then(() => {
                dispatch(
                    clearForm()
                )
            })
            .then(() => {
                dispatch(
                    search()
                )
            })
    }

}

export const markedAsPending = (agenda) => {

    return dispatch => {
        axios.put(`${url}/${agenda._id}`, { ...agenda, done: true })
            .then(() => {
                dispatch(
                    search()
                )
            })
    }

}


export const markedAsDone = (agenda) => {

    return dispatch => {
        axios.put(`${url}/${agenda._id}`, { ...agenda, done: false })
            .then(() => {
                dispatch(
                    search()
                )
            })
    }
}

export const remove = (agenda) => {

    return dispatch => {
        axios.delete(`${url}/${agenda._id}`)
            .then(() => {
                dispatch(
                    search()
                )
            })
    }


}

export const clearForm = () => {

    return [
        {
            type: 'AGENDA_CLEAR'
        },
        search()
    ]

}

