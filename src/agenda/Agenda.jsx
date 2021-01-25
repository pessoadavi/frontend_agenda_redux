import React, { Component } from 'react';
import axios from 'axios'

import PageHeader from '../template/PageHeader'
import AgendaForm from '../agenda/AgendaForm'
import AgendaList from '../agenda/AgendaList'

const url = 'http://localhost:3003/api/agendas'

class Agenda extends Component {

    constructor(props) {

        super(props)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkedAsDone = this.handleMarkedAsDone.bind(this)
        this.handleMarkedAsPending = this.handleMarkedAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.state = {
            description: '',
            list: []
        }

        this.refresh()

    }

    handleChange(result) {

        this.setState({
            ...this.state,
            description: result.target.value
        })

    }

    handleAdd() {

        const description = this.state.description
        axios.post(url, { description })
            .then(() => this.refresh())
    }

    refresh(description='') {

        const search = description ? `&description__regex=/${description}/` : ''

        axios.get(`${url}?sort=-createAt${search}`)
            .then(resp => {
                this.setState({
                    ...this.state,
                    description,            // já recebe o valor vazio do parâmetro por isso recebe nada diferente de list 
                    list: resp.data
                })
            })
    }

    handleRemove(agenda) {

        axios.delete(`${url}/${agenda._id}`)
            .then(() => {
                this.refresh()
            })

    }

    handleMarkedAsDone(agenda) {

        axios.put(`${url}/${agenda._id}`, {
            ...agenda,
            done: false
        })
            .then(() => {
                this.refresh(this.state.description)
            })

    }

    handleMarkedAsPending(agenda) {

        axios.put(`${url}/${agenda._id}`, {
            ...agenda,
            done: true
        })
            .then(() => {
                this.refresh(this.state.description)
            })


    }

    handleClear() {

        this.refresh()

    }

    handleSearch() {

            this.refresh(this.state.description)
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <AgendaForm
                    descriptionn={this.state.description}
                    handleChangee={this.handleChange}
                    handleAddd={this.handleAdd}
                    handleSearchh={this.handleSearch}
                    handleClearr={this.handleClear}
                />
                <AgendaList
                    list={this.state.list}
                    handleRemovee={this.handleRemove}
                    handleMarkedAsDonee={this.handleMarkedAsDone}
                    handleMarkedAsPendingg={this.handleMarkedAsPending} />
            </div>
        );
    }
}

export default Agenda;