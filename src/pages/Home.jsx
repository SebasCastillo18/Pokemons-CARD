import React from 'react'
import { useDispatch } from 'react-redux';
import { setNameTrainerGlobal } from '../store/slices/nameTrainer.slice';
import "./styles/Home.css"

const Home = () => {

  const dispatch = useDispatch()

  const handleSubmit = (e) => {

    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispatch(setNameTrainerGlobal(nameTrainer));

  };
  return (
    <main>
      <section className="Home">
        <div className="Home_img">
          <img src="/images/pokedex.png" alt="" />
        </div>
        <h2 className="Home_title">Hello trainer</h2>
        <form className="Home_form" onSubmit={handleSubmit}>
          <p className="Home_text">Give me your name to start!</p>
          <input className="Home_input" required id="nameTrainer" type="text" placeholder="your name..." />
          <button className="Home_btn">Start</button>
        </form>
      </section>
    </main>
  )
}

export default Home
