import React from 'react';
import './App.css';
import 'typeface-roboto';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';

function App() {
  const { t, i18n } = useTranslation();
  const projectName = t('Project Name');

  return (
    <Router>
      <div className="App">
        <Header title={projectName} />

        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
