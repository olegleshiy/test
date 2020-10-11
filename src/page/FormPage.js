import React from 'react';

import { Header, Form } from '../components';

const FormPage = React.memo((props) => {
    return (
        <div>
            <Header />
            <Form />
        </div>
    );
});

export default FormPage;
