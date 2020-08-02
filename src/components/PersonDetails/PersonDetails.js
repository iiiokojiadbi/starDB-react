import React from 'react';
import './PersonDetails.scss';

function PersonDetails() {
  return (
    <section className="person">
      <div className="person__wrapper">
        <img
          src="https://www.wykop.pl/cdn/c3201142/comment_ZC3YM4c53yVLyWDfbElOLVJmgKcdi6Nw,w400.jpg"
          alt=""
          className="person__img"
        />
        <h2 className="person__title">R2-D2</h2>
        <ul className="person__list">
          <li className="person__list-item">
            <span className="person__text">Gender male</span>
          </li>
          <li className="person__list-item">
            <span className="person__text">Birth Year</span>
          </li>
          <li className="person__list-item">
            <span className="person__text">Eye Color red</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default PersonDetails;
