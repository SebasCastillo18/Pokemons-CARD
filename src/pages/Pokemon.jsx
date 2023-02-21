import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/Pokemon.css";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState();

  const { id } = useParams();

  const getPercenBar = (stat) => {

    const percent = (stat * 100) / 255;
    return `${percent}%`

  };

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`;

    axios
      .get(URL)
      .then((res) => setPokemon(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="pokemon_main">
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
            <div className="Pokemon_type-container-2">
              {pokemon?.abilities.map((ability) => (
                <div key={ability.ability.name}>
                  <span>{ability.ability.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="pokemon_stats">
          <h2 className="pokemon_stats-title">Stats</h2>
          <section className="pokemon_stats_info">
            {pokemon?.stats.map((stat) => (
              <article className="pokemon_stat" key={stat.stat.name}>
                <div className="pokemon_stat-header">
                  <h4 className="pokemon_stat-name">{stat.stat.name}</h4>
                  <h5 className="pokemon_stat-value">{stat.base_stat}/255</h5>

                </div>
                <div className="pokemon_stat-bar">
                  <div className="pokemon_stat-barGray">
                    <div className="pokemon_stat-barProgress" style={{width: getPercenBar(stat.base_stat)}}></div>
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
