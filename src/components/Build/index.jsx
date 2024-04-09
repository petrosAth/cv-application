import Education from './Education';
import Experience from './Experience';
import Personal from './Personal';

const Build = () => {
  return (
    <form className="builder">
      <h1 className="builder__title">CV Preview</h1>
      <section className="builder__personal">
        <div className="builder__personal__name">
          <input type="text" className="builder__personal__name__input" />
          <span className="builder__personal__name__label">Full Name</span>
        </div>
        <div className="builder__personal__mail">
          <input type="text" className="builder__personal__mail__input" />
          <span className="builder__personal__mail__label">Email</span>
        </div>
        <div className="builder__personal__phone">
          <input type="text" className="builder__personal__phone__input" />
          <span className="builder__personal__phone__label">Phone Number</span>
        </div>
        <div className="builder__personal__location">
          <input type="text" className="builder__personal__location__input" />
          <span className="builder__personal__location__label">Location</span>
        </div>
        <div className="builder__personal__github">
          <input type="text" className="builder__personal__github__input" />
          <span className="builder__personal__github__label">Github Profile</span>
        </div>
        <div className="builder__personal__linkedin">
          <input type="text" className="builder__personal__linkedin__input" />
          <span className="builder__personal__linkedin__label">Linkedin Profile</span>
        </div>
      </section>
      <section className="builder__experience">
        <h2 className="builder__experience__title">Work Experience</h2>
        <div className="builder__experience__body">
          <div className="builder__experience__body__input">
            <div className="builder__experience__body__info">
              <h3 className="builder__experience__body__info__title">Web Developer</h3>
              <p className="builder__experience__body__info__duration">2010-2015</p>
            </div>
            <div className="builder__experience__body__location">
              <h3 className="builder__experience__body__location__company">Moon Corp</h3>
              <p className="builder__experience__body__location__city">Big Crater</p>
            </div>
            <ul className="builder__experience__body__bullets">
              <li className="builder__experience__body__bullets__item">Marvelous things</li>
              <li className="builder__experience__body__bullets__item">Great experience</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="builder__education">
        <h2 className="builder__education__title">Education</h2>
        <div className="builder__education__body">
          <div className="builder__education__body__item">
            <div className="builder__education__body__item__info">
              <h3 className="builder__education__body__item__info__degree">Bachelor of engineering</h3>
              <p className="builder__education__body__item__info__duration">2005-2010</p>
            </div>
            <div className="builder__education__body__item__location">
              <h3 className="builder__education__body__item__location__institute">Big Crater University</h3>
              <p className="builder__education__body__item__location__city">Moon</p>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};

export default Build;
