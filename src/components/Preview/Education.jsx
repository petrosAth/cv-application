const Education = () => {
  return (
    <section className="preview__experience">
      <h2 className="preview__experience-header">Work Experience</h2>
      <div className="preview__experience-content">
        <div className="preview__experience-item">
          <div className="preview__experience-info">
            <h3 className="preview__experience-job-title">Web Developer</h3>
            <p className="preview__experience-duration">2010-2015</p>
          </div>
          <div className="preview__experience-location">
            <h3 className="preview__experience-company">Moon Corp</h3>
            <p className="preview__experience-city">Big Crater</p>
          </div>
          <ul className="preview__experience-list">
            <li className="preview__experience-bullet">Marvelous things</li>
            <li className="preview__experience-bullet">Great experience</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
