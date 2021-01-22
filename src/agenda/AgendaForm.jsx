import React from 'react';
import Grid from '../template/Grid'
import IconButton from '../template/IconButton'

const AgendaForm = (props) => {

    const keyHandler = (keyEvent) => {
        if (keyEvent.key === 'Enter') {
            keyEvent.shiftKey ? props.handleSearchh() : props.handleAddd()
        } else if (keyEvent.key === 'Escape') {
            props.handleClearr()
        }
    }

    return (
        <div role='form' className='agendaForm'>
            <Grid cols='12 9 10'>
                <input id='description'
                    className='form-control'
                    placeholder='Adicione uma tarefa'
                    value={props.descriptionn}
                    onChange={props.handleChangee}
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

export default AgendaForm;