import React from 'react';

const Header: React.FC = () => {
  const scrollToFirst = () => {
    document.getElementById('first')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSecond = () => {
    document.getElementById('second')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToThird = () => {
    document.getElementById('third')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFourth = () => {
    document.getElementById('fourth')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <h1 className="nav">
      <div className="container">
        <div className="nav-row">
          <a href="./index.html" className="logo nav-list__link--active">
            Danil <strong>«Dorley» </strong> Valiev
          </a>

          <ul className="nav-list">
            <button className="nav-list__item" onClick={scrollToFirst}>
              <a className="nav-list__link">About me</a>
            </button>
            <button className="nav-list__item" onClick={scrollToSecond}>
              <a className="nav-list__link">Projects</a>
            </button>
            <button className="nav-list__item" onClick={scrollToThird}>
              <a className="nav-list__link">Skills</a>
            </button>
            <button className="nav-list__item" onClick={scrollToFourth}>
              <a className="nav-list__link">Contacts</a>
            </button>
          </ul>
        </div>
      </div>
    </h1>
  );
};

export default Header;
