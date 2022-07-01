import React from 'react';
import Modal from 'react-modal';

import { ModalWrapper } from './styled';
import pokeball from '../../assets/images/pokeball.png';

Modal.setAppElement('#root')

export const PokemonStatsModal = ({ pokemonStatsModalIsOpen, onRequestClose, pokemonData, addPokemonToList, removePokemonFromList }) => {
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

    if (Object.keys(pokemonData).length) {
      return (
        <>
          <div className="pokemon__top">
            <div className="pokemon__sprite">
              <img src={pokemonData.sprite} alt="Pokemon sprite" />
            </div>
          </div>
          <div className="pokemon__stats">
            <div className="pokemon__name">{pokemonData.name}</div>
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
                    <div key={index} className="pokemon__type">{type}</div>
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
