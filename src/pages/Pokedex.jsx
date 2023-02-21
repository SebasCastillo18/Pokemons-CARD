import React from "react";
import { useSelector } from "react-redux";
import PokemonCard from "../components/pokedex/PokemonCard";
import "./styles/Pokedex.css";
import usePokedex from "../hooks/usePokedex";

const Pokedex = () => {
  const nameTrainer = useSelector((store) => store.nameTrainer);

  const {
    handleSubmit,
    handleChangeSelect,
    types,
    handleNextPage,
    handlePreviusPage,
    pokemonsInPage,
    pagesInBlock,
  } = usePokedex();

  return (
    <main>
      <p className="pokedex_text">
        <span className="pokedex_welcome">Welcome {nameTrainer},</span> here you
        can find information about your favorite pokemon
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="pokedex_input"
            type="text"
            id="pokemonName"
            placeholder="search your pokemon"
          />
          <button className="pokedex_btn">Search</button>
        </div>
        <select className="pokedex_option" onChange={handleChangeSelect}>
          <option value="">All</option>
          {types.map((type) => (
            <option className="pokedex_optionlist" key={type.url}>
              {type.name}
            </option>
          ))}
        </select>
      </form>

      <section className="pokedex">
        {pokemonsInPage.map((pokemon) => (
          <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} />
        ))}
      </section>

      <section>
        <ul className="pokedex_list">
          <li onClick={handlePreviusPage}>{"<<<"}</li>
          <li onClick={() => setCurrentPage(1)}>...</li>
          {pagesInBlock.map((page) => (
            <li onClick={() => setCurrentPage(page)} key={page}>
              {page}
            </li>
          ))}

          <li onClick={() => setCurrentPage(lastPage)}>...</li>
          <li onClick={handleNextPage}>{">>>"}</li>
        </ul>
      </section>
    </main>
  );
};

export default Pokedex;
