import React from 'react'
import {render} from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";

import App from 'components/App'



const Application = () => {

    return (
        <Router>
            <App/>
        </Router>

    )
}

render(<Application/>, document.getElementById('root'));