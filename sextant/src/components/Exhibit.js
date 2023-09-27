import React from 'react';

const Exhibit = ({children}) => {
    return (
        <div style={{margin: '20px', padding: '20px', border: '1px solid black'}}>
        <h1>Your Network Statistics</h1>            
        {children}
        </div>
    );
};

export default Exhibit;
