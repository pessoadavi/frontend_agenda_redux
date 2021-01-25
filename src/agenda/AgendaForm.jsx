import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/Grid'
import IconButton from '../template/IconButton'
import { changeDescription } from '../main/agendaActions'

const AgendaForm = (props) => {

    const keyHandler = (keyEvent) => {
        if (keyEvent.key === 'Enter') {
            keyEvent.shiftKey ? props.handleSearchh() : props.handleAddd()
        } else if (keyEvent.key === 'Escape') {
            props.handleClearr()
        }
    }


    return (
        <div role='form' className='agendaForm' type='text'>
            <Grid cols='12 9 10'>
                <input id='description'
                    className='form-control'
                    placeholder='Adicione uma tarefa'
                    value={props.descriptionn}     
                    onChange={props.changeDescription}      /* Recebe agora a chamada do action creator */
                    onKeyUp={keyHandler}
                />
            </Grid>

            <Grid cols='12 3 2'>
                <IconButton style='primary' icon='plus'
                    onClickk={props.handleAddd} />
                <IconButton style='info' icon='search'
                    onClickk={props.handleSearchh} />
                <IconButton style='default' icon='close'
                    onClickk={props.handleClearr} />
            </Grid>
        </div>
    );
}

const mapStateToProps = (state) => ({
    descriptionn: state.agenda.description
    
})

const mapDispatchToProps = (dispatch) =>                    // mapDispatchToProps mapeia changeDescription
    bindActionCreators({ changeDescription }, dispatch)     // bindActionCreators faz o dispatch ocorrer sempre que ocorre um evento em changeDescription 
                                                            // dispara a acão e aciona o action creatorchangeDescription



export default connect(mapStateToProps, mapDispatchToProps)(AgendaForm);