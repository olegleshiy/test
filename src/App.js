import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { book } from './book';
import { PieChartProvider } from './components/Piechart/PiechartContext';
import { ChartPage, FormPage } from './page';

function App() {
  return (
      <PieChartProvider>
        <Switch>
            <Route
                exact
                path={ book.chart }
                component={ ChartPage }
            />
            <Route
                exact
                path={ book.form }
                component={ FormPage }
            />
            <Redirect to='/' />
        </Switch>
      </PieChartProvider>
  );
}

export default App;
