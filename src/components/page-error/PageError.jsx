import React, { Component } from 'react';
import { useHistory } from 'react-router';


function ErrorSearch() {
    const history = useHistory();

    function redirection() {
        history.push('/')
    }

    return (
        <div>
           <p>pas de film existant ...</p> 
            {setTimeout(() => {
                redirection()
            }, 1500)}
        </div>
    );

}
export default ErrorSearch;

