import React from 'react';
import IconButton from '../template/IconButton'

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
                        onClickk={() => { props.handleMarkedAsPendingg(agenda) }} />
                    <IconButton style="warning" icon="undo" hide={!agenda.done}
                        onClickk={() => { props.handleMarkedAsDonee(agenda) }} />
                    <IconButton style='danger' icon='trash-o' hide={!agenda.done}
                        onClickk={() => { props.handleRemovee(agenda) }} />
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

export default AgendaList;