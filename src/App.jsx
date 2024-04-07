import { useState } from 'react';
import Build from './components/Build.jsx';
import Preview from './components/Preview.jsx';

function App() {
  return (
    <div className="app">
      <Build />
      <Preview />
    </div>
  );
}

export default App;
