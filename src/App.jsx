import { useState } from 'react';
import Build from './components/Build';
import Preview from './components/Preview';

function App() {
  return (
    <div className="app">
      <Build />
      <Preview />
    </div>
  );
}

export default App;
