import React from 'react';
import './App.css';
import LearningTypography from './components/LearningTypography';
import LearningButton from './components/LearningButton';
import LearningTextField from './components/LearningTextField';
import FormHandling from './components/FormHandling';
import Navbar from './components/Navbar';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <LearningTypography></LearningTypography>
      <LearningButton></LearningButton>
      <LearningTextField></LearningTextField>
      <FormHandling></FormHandling>
    </div>
  );
}

export default App;
