import React from 'react';
import Modal from 'react-modal';
import { HiPencil } from 'react-icons/hi';

import { ModalWrapper } from './styled';
import pokeball from '../../assets/images/pokeball.png';

Modal.setAppElement('#root')

export const PokemonStatsModal = ({ pokemonStatsModalIsOpen, onRequestClose, pokemonData, addPokemonToList, removePokemonFromList, updatePokemonName }) => {
  function openUpdatePokemonName() {
    const name = prompt('Nome');
    updatePokemonName(pokemonData.id, name);
    onRequestClose();
  }

  function contents() {
    const actionButton = () => {
      if (pokemonData.captured) {
        return (
          <button
            className="pokemon__free-btn"
            onClick={freePokemon}
          >
            Liberar Pokemon
            </button>
        );
      }

      return (
        <div className="pokeball" onClick={capturePokemon}>
          <img src={pokeball} alt="Pokeball" />
        </div>
      )
    }

    const pokemonName = () => {
      if (pokemonData.captured) {
        return (
          <div className="pokemon__name pokemon__name-editable" onClick={openUpdatePokemonName}>
            <span>{pokemonData.name}</span>
            <HiPencil />
          </div>
        )
      }

      return (
        <div className="pokemon__name">{pokemonData.name}</div>
      )
    }

    const ptbrTypes = {
      normal: 'Normal',
      fire: 'Fogo',
      water: 'Água',
      grass: 'Grama',
      eletric: 'Elétrico',
      ice: 'Gelo',
      fighting: 'Lutador',
      poison: 'Veneno',
      ground: 'Terra',
      flying: 'Voador',
      psychic: 'Psíquico',
      bug: 'Inseto',
      rock: 'Pedra',
      ghost: 'Fantasma',
      dark: 'Sombrio',
      dragon: 'Dragão',
      steel: 'Ferro',
      fairy: 'Fada',
    }

    if (Object.keys(pokemonData).length) {
      return (
        <>
          <div className="pokemon__top">
            <div className="pokemon__sprite">
              <img src={pokemonData.sprite} alt="Pokemon sprite" />
            </div>
          </div>
          <div className="pokemon__stats">
            {pokemonName()}
            <div className="pokemon__info-container">
              <div className="pokemon__infos">
                <div className="pokemon__info">
                  <div className="pokemon__info-name">HP</div>
                  <div className="pokemon__info-value">{pokemonData.hp}</div>
                </div>
                <div className="pokemon__info">
                  <div className="pokemon__info-name">ALTURA</div>
                  <div className="pokemon__info-value">{pokemonData.height} m</div>
                </div>
                <div className="pokemon__info">
                  <div className="pokemon__info-name">PESO</div>
                  <div className="pokemon__info-value">{pokemonData.weight} kg</div>
                </div>
              </div>
              <div className="pokemon__types">
                {pokemonData.types.map((type, index) => {
                  return (
                    <div key={index} className="pokemon__type">{ptbrTypes[type]}</div>
                  )
                })}
              </div>
            </div>
            {actionButton()}
          </div>
        </>
      )
    }

    return <></>
  }

  function capturePokemon() {
    const updatedPokemonData = JSON.parse(JSON.stringify(pokemonData));
    updatedPokemonData.captured = true;
    addPokemonToList(updatedPokemonData);
    onRequestClose();
  }

  function freePokemon() {
    removePokemonFromList(pokemonData.id);
    onRequestClose();
  }

  return (
    <Modal
      isOpen={pokemonStatsModalIsOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <ModalWrapper>
        {contents()}
      </ModalWrapper>
    </Modal>
  )
}

export default PokemonStatsModal;
