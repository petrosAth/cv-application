const Preview = () => {
  return (
    <div className="preview">
      <h1 className="preview__title">CV Preview</h1>
      <section className="preview__personal">
        <h2 className="preview__personal__name">John Doe</h2>
        <ul className="preview__personal__details">
          <li className="preview__personal__details__mail">john.doe@gmail.com</li>
          <li className="preview__personal__details__phone">0123456789</li>
          <li className="preview__personal__details__location">Big Crater, Moon</li>
          <li className="preview__personal__details__github">@johnDoe</li>
          <li className="preview__personal__details__linkedin">john-doe</li>
        </ul>
      </section>
      <section className="preview__experience">
        <h2 className="preview__experience__title">Work Experience</h2>
        <div className="preview__experience__body">
          <div className="preview__experience__body__input">
            <div className="preview__experience__body__info">
              <h3 className="preview__experience__body__info__title">Web Developer</h3>
              <p className="preview__experience__body__info__duration">2010-2015</p>
            </div>
            <div className="preview__experience__body__location">
              <h3 className="preview__experience__body__location__company">Moon Corp</h3>
              <p className="preview__experience__body__location__city">Big Crater</p>
            </div>
            <ul className="preview__experience__body__bullets">
              <li className="preview__experience__body__bullets__item">Marvelous things</li>
              <li className="preview__experience__body__bullets__item">Great experience</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="preview__education">
        <h2 className="preview__education__title">Education</h2>
        <div className="preview__education__body">
          <div className="preview__education__body__item">
            <div className="preview__education__body__item__info">
              <h3 className="preview__education__body__item__info__degree">Bachelor of engineering</h3>
              <p className="preview__education__body__item__info__duration">2005-2010</p>
            </div>
            <div className="preview__education__body__item__location">
              <h3 className="preview__education__body__item__location__institute">Big Crater University</h3>
              <p className="preview__education__body__item__location__city">Moon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Preview;
