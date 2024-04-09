import Education from './Education';
import Experience from './Experience';
import Personal from './Personal';
import './style.css';

const Preview = () => {
  return (
    <div className="preview">
      <h1 className="preview__header">CV Preview</h1>
      <Personal />
      <Experience />
      <Education />
    </div>
  );
};

export default Preview;
