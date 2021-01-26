import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import IconButton from '../template/IconButton'

import { markedAsDone, markedAsPending, remove } from '../main/agendaActions'

const AgendaList = (props) => {


    const renderRows = () => {

        const list = props.list || []

        return list.map(agenda => (
            <tr key={agenda._id}>
                <td className={agenda.done ? 'markedAsDone' : ''}>
                    {agenda.description}
                </td>
                <td>
                    <IconButton style="success" icon="check" hide={agenda.done}
                        onClickk={() => { props.markedAsPending(agenda) }} />
                    <IconButton style="warning" icon="undo" hide={!agenda.done}
                        onClickk={() => { props.markedAsDone(agenda) }} />
                    <IconButton style='danger' icon='trash-o' hide={!agenda.done}
                        onClickk={() => { props.remove(agenda) }} />
                </td>
            </tr>
        ))
    }


    return (

        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableAction'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
        
    );
}

const mapStateToProps = (state) => ({
    list: state.agenda.list
})

const mapDispatchToProps = (dispatch) => 
    bindActionCreators({markedAsDone, markedAsPending, remove }, dispatch) 

export default connect(mapStateToProps, mapDispatchToProps) (AgendaList);