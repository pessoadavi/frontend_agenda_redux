import React from 'react';

const PageHeader = (props) => {
    return ( 
        <header className="page-header">
            <h2>{props.name}</h2><small>{props.small}</small>
        </header>
     );
}
 
export default PageHeader;