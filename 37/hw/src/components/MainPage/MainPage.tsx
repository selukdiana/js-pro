import React from 'react';
import './MainPage.css';
import Header from '../Header/Header';

function MainPage() {
  return (
    <div className="MainPage">
      <div className="container">
        <Header collapsed={true} />
        <section className="first-screen">
          <h1 className="first-screen__title title">
            Make your Blog <span>Online</span>
          </h1>
          <div className="first-screen__subtitle subtitle">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
              tenetur earum laboriosam cupiditate eveniet nisi nam odio maxime
              repellat at sed velit error deleniti unde, placeat iure! Eos,
              rerum assumenda!
            </p>
          </div>
          <div className="first-screen__btn btn">
            <a href="#">Learn More</a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MainPage;
