import React, { useState } from "react";

import Sidebar from "components/Sidebar";

import ashFront from '../../assets/images/ashFront.png';
import ashRight from '../../assets/images/ashStop.png';
import searchBallon from '../../assets/images/searchTooltip.png';
import searchingBallon from '../../assets/images/searchingTooltip.png';
import errorBallon from '../../assets/images/tooltipError.png';
import pokeAPI from '../../services/api';
import * as S from "./styled";
import PokemonStatsModal from "components/PokemonStatsModal";
import CreatePokemonModal from "components/CreatePokemonModal";

const MapPage = () => {
  const [createPokemonModalIsOpen, setCreatePokemonModalIsOpen] = useState(false);
  const [pokemonStatsModalIsOpen, setPokemonStatsModalIsOpen] = useState(false);
  const [pokemonData, setPokemonData] = useState({});
  const [pokemonList, setPokemonList] = useState([]);
  const [ashState, setAshState] = useState('initial')
  const [ballonSrc, setBallonSrc] = useState(searchBallon);

  function handleOpenPokemonStatsModal() {
    setPokemonStatsModalIsOpen(true)
  }

  function handleClosePokemonStatsModal() {
    setPokemonStatsModalIsOpen(false)
  }

  function handleOpenCreatePokemonModal() {
    setCreatePokemonModalIsOpen(true)
  }

  function handleCloseCreatePokemonModal() {
    setCreatePokemonModalIsOpen(false)
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
    if (pokemonList.length == 6) {
      alert('Não é possível ter mais do que 6 pokémons simultaneamente');
      const balloon = document.querySelector('.balloon');
      setBallonSrc(errorBallon);
      return;
    }

    const updatedPokemonList = [...pokemonList, pokemonData];
    setPokemonList(updatedPokemonList);
  }

  function removePokemonFromList(id) {
    const updatedPokemonList = pokemonList.filter(el => el.id !== id);
    setPokemonList(updatedPokemonList);
    setBallonSrc(searchBallon);
  }

  async function handleAshAction() {
    const ash = document.querySelector('#ash');

    if (ashState === 'initial') {
      if (pokemonList.length === 6) {
        alert('Não é possível ter mais do que 6 pokémons simultaneamente');
        return;
      }

      ash.src = ashRight;
      setBallonSrc(searchingBallon);
      setAshState('hunting');
    }

    if (ashState === 'hunting') {
      await handleHuntPokemon();
      ash.src = ashFront;
      setBallonSrc(searchBallon);
      setAshState('initial');
    }
  }

  function updatePokemonName(id, name) {
    const updatedPokemonList = pokemonList;
    const pokemon = updatedPokemonList.find(el => el.id === id);
    pokemon.name = name;
    setPokemonList(updatedPokemonList);
  }

  return (
    <>
      <S.MapWrapper className="map">
        <Sidebar
          pokemonList={pokemonList}
          setPokemonData={setPokemonData}
          setPokemonStatsModalIsOpen={setPokemonStatsModalIsOpen}
          handleOpenCreatePokemonModal={handleOpenCreatePokemonModal}
        />
        <div
          className="ash-container"
          onMouseOver={() => document.querySelector('.balloon').style.visibility = 'visible'}
          onMouseOut={() => document.querySelector('.balloon').style.visibility = 'hidden'}
        >
          <img
            id="ballon"
            className="balloon"
            src={ballonSrc}
            alt="Ballon"
          />
          <img
            id="ash"
            className="character"
            src={ashFront}
            alt="Ash"
            onClick={handleAshAction}
          />
        </div>
      </S.MapWrapper>
      <PokemonStatsModal
        pokemonStatsModalIsOpen={pokemonStatsModalIsOpen}
        onRequestClose={handleClosePokemonStatsModal}
        pokemonData={pokemonData}
        addPokemonToList={addPokemonToList}
        removePokemonFromList={removePokemonFromList}
        updatePokemonName={updatePokemonName}
      />
      <CreatePokemonModal
        isOpen={createPokemonModalIsOpen}
        onRequestClose={handleCloseCreatePokemonModal}
        addPokemonToList={addPokemonToList}
      />
    </>
  );
};

export default MapPage;
