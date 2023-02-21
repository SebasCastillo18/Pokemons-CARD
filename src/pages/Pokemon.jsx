import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/Pokemon.css";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState();

  const { id } = useParams();

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`;

    axios
      .get(URL)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <section>
        <section
          className={`Pokemon_content bg-lg-${pokemon?.types[0].type.name}`}
        >
          <section>
            <div>
              <img
                className="Pokemon_img"
                src={pokemon?.sprites.other["official-artwork"].front_default}
                alt=""
              />
            </div>
          </section>

          <div className="Pokemon_div">
            <h2 className="Pokemon_name">{pokemon?.name}</h2>
            <h2 className="Pokemon_number"># {pokemon?.id}</h2>
          </div>
          <div>
            <div className="Pokemon_container">
              <h4>{pokemon?.weight}</h4>
              <h5>Weight</h5>
            </div>
            <div className="Pokemon_container-2">
              <h5>Height</h5>
              <h4>{pokemon?.height}</h4>
            </div>
          </div>
        </section>

        <div className="Pokemon_contents">
          <div
            className={`Pokemon-content-types bg-lg-${pokemon?.types[0].type.name}`}
          >
            <h3 className="Pokemon_title">Type</h3>
            <div className="Pokemon_type-container">
              {pokemon?.types.map((type) => (
                <div key={type.type.name}>
                  <span>{type.type.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div
            className={`Pokemon-content-abilities bg-lg-${pokemon?.types[0].type.name}`}
          >
            <h3 className="Pokemon_title">Abilities</h3>
            <div className="Pokemon_type-container">
              {pokemon?.abilities.map((ability) => (
                <div key={ability.ability.name}>
                  <span>{ability.ability.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section>
          <h2 className="pokemon_stats">Stats</h2>
          <section className="pokemon_container-stats">
            {pokemon?.stats.map((stat) => (
              <article key={stat.stat.name}>
                <div className="pokemon_type-stats">
                  <h4 className="pokemon_type-number">{stat.stat.name}</h4>
                  <h5 className="pokemon_type-number">{stat.base_stat}/150</h5>

                </div>
                <div className="pokemon_box-content">
                  <div>
                    <div style={{ background: "red", width: "5px", height: "15px" }}></div>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </section>
      </section>
    </main>
  );
};

export default Pokemon;
