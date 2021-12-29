import React from 'react';

const Things = ({match}) => {
    return (<div>
        <h3> {match.params.thingId} </h3>
    </div>)
};



export default Things;