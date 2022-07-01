import React from 'react';
import Modal from 'react-modal';

import { ModalWrapper } from './styled';

Modal.setAppElement('#root')

export const CreatePokemonModal = ({ createPokemonModalIsOpen, onRequestClose, pokemonData, addPokemonToList }) => {
  function contents() {
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

  return (
    <Modal
      isOpen={createPokemonModalIsOpen}
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
