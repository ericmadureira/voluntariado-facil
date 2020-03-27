import React from 'react';
import './App.css';
import 'typeface-roboto';
import { useTranslation } from 'react-i18next';

import Header from './components/Header';
import ContentContainer from './components/ContentContainer';

function App() {
  const { t, i18n } = useTranslation();
  const projectName = t('Project Name');

  return (
    <div className="App">
      <Header title={projectName} />
      <ContentContainer />
    </div>
  );
}

export default App;
