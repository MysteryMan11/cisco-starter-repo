import React from 'react';

const Exhibit = ({ children }) => {
    return (
        <div style={{margin: '20px', padding: '20px', border: '1px solid black'}}>
            <h2>Heading 1</h2>
            {children}
        </div>
    );
};

export default Exhibit;
