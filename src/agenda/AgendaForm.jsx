import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/Grid'
import IconButton from '../template/IconButton'
import { changeDescription, search, add, clearForm } from '../main/agendaActions'


class AgendaForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }


    keyHandler(keyEvent) {

        const {add, search, descriptionn, clearForm } = this.props

        if (keyEvent.key === 'Enter') {
            keyEvent.shiftKey ? search(/*descriptionn*/) : add(descriptionn)
        } else if (keyEvent.key === 'Escape') {
            clearForm()
        }

    }

    render() {

        const {add, search, descriptionn, clearForm } = this.props

        return (

            <div role='form' className='agendaForm' type='text'>
                <Grid cols='12 9 10'>
                    <input id='description'
                        className='form-control'
                        placeholder='Adicione uma tarefa'
                        value={this.props.descriptionn}
                        onChange={this.props.changeDescription}      /* Recebe agora a chamada do action creator */
                        onKeyUp={this.keyHandler}
                    />
                </Grid>

                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus'
                        onClickk={()=>{add(descriptionn)}} />
                    <IconButton style='info' icon='search'
                        onClickk={()=>{search(/*descriptionn*/)}} />
                    <IconButton style='default' icon='close'
                        onClickk={()=>{clearForm()}} />
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    descriptionn: state.agenda.description

})

const mapDispatchToProps = (dispatch) =>                            // mapDispatchToProps mapeia changeDescription
    bindActionCreators({ changeDescription, search, add, clearForm }, dispatch)     // bindActionCreators faz o dispatch ocorrer sempre que ocorre um evento em changeDescription 
// dispara a acão e aciona o action creatorchangeDescription



export default connect(mapStateToProps, mapDispatchToProps)(AgendaForm);