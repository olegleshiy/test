import React from 'react';

import { Header, Piechart } from '../components';

const ChartPage = React.memo((props) => {
    return (
        <div>
            <Header />
            <Piechart />
        </div>
    );
});

export default ChartPage;
