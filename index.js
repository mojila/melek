import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'element-react'

import 'element-theme-default';

const App = () => (
    <div>
        <Button type="primary">Tombol dev</Button>
    </div>
);

ReactDOM.render(<App/>, document.getElementById('app'));