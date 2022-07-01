import React, { useState } from "react";

import Sidebar from "components/Sidebar";

import ashFront from '../../assets/images/ashFront.png';
import pokeAPI from '../../services/api';
import * as S from "./styled";
import PokemonStatsModal from "components/PokemonStatsModal";

const MapPage = () => {
  const [pokemonStatsModalIsOpen, setPokemonStatsModalIsOpen] = useState(false);
  const [pokemonData, setPokemonData] = useState({});
  const [pokemonList, setPokemonList] = useState([]);

  function handleOpenPokemonStatsModal() {
      setPokemonStatsModalIsOpen(true)
  }

  function handleClosePokemonStatsModal() {
      setPokemonStatsModalIsOpen(false)
  }

  async function handleHuntPokemon() {
    const rand = Math.floor(Math.random() * 807) + 1;
    const { data } = await pokeAPI.get(`pokemon/${rand}`);

    const dataFormatted = {
      id: data.id,
      name: data.name,
      sprite: data.sprites.front_default,
      hp: data.stats.find(el => el.stat.name === 'hp').base_stat,
      height: data.height,
      weight: data.weight,
      types: data.types.map(el => el.type.name)
    }

    setPokemonData(dataFormatted);
    handleOpenPokemonStatsModal();
  }

  function addPokemonToList(pokemonData) {
    const updatedPokemonList = [...pokemonList, pokemonData];
    setPokemonList(updatedPokemonList);
  }

  function removePokemonFromList(id) {
    const updatedPokemonList = pokemonList.filter(el => el.id !== id);
    setPokemonList(updatedPokemonList);
  }

  return (
    <>
      <S.MapWrapper className="map">
        <Sidebar
          pokemonList={pokemonList}
          setPokemonData={setPokemonData}
          setPokemonStatsModalIsOpen={setPokemonStatsModalIsOpen}
        />
        <img
          className="character"
          src={ashFront}
          alt="Ash"
          onClick={handleHuntPokemon}
        />
      </S.MapWrapper>
      <PokemonStatsModal
        pokemonStatsModalIsOpen={pokemonStatsModalIsOpen}
        onRequestClose={handleClosePokemonStatsModal}
        pokemonData={pokemonData}
        addPokemonToList={addPokemonToList}
        removePokemonFromList={removePokemonFromList}
      />
    </>
  );
};

export default MapPage;
