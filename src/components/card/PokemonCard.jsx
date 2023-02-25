import React from "react";
import { jpTypes } from "../../utils/convert";
import "./PokemonCard.css";
const PokemonCard = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={pokemon.sprites.front_default} />
      </div>
      <h3 className="pokemonName">{pokemon.name}</h3>
      <div className="pokemonType">
        <h5>タイプ</h5>
        <span>
          {pokemon.types.map((type, index) => {
            return <div key={index}>{jpTypes[type.type.name]}</div>;
          })}
        </span>
      </div>
      <div className="cardInfo">
        <div className="cardDate">
          <p className="title">重さ：{pokemon.weight}</p>
        </div>
        <div className="cardDate">
          <p className="title">高さ：{pokemon.height}</p>
        </div>
        <div className="cardData">
          <p className="title">
            アビリティ：{pokemon.abilities[0].ability.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
