import React, { useState } from 'react';
import Modal from 'react-modal';

import { ModalWrapper } from './styled';
import cameraImg from '../../assets/images/camera.png';

Modal.setAppElement('#root')

export const CreatePokemonModal = ({ isOpen, onRequestClose, addPokemonToList }) => {
  const [pokemonImage, setPokemonImage] = useState('');

  function contents() {
    return (
      <>
        <div className="modal__header">
          <div className="pokemon__sprite" onClick={promptPokemonImage}>
            <img src={pokemonImage || cameraImg} alt="A camera" />
          </div>
        </div>
        <form className="modal__body" name="pokemonCreationForm">
          <div className="input-group">
            <label htmlFor="nome">NOME</label>
            <input required type="text" id="nome" placeholder="Nome" />
          </div>
          <div className="input-group">
            <label htmlFor="hp">HP</label>
            <input required type="number" id="hp" placeholder="HP" />
          </div>
          <div className="input-group">
            <label htmlFor="peso">Peso</label>
            <input required type="number" id="peso" placeholder="Peso" />
          </div>
          <div className="input-group">
            <label htmlFor="altura">Altura</label>
            <input required type="number" id="altura" placeholder="Altura" />
          </div>
          <div className="modal__title"><span>TIPO</span></div>
          <div className="input-group">
            <select id="tipo">
              <option value="normal">Normal</option>
              <option value="inseto">Inseto</option>
              <option value="sombrio">Sombrio</option>
              <option value="dragão">Dragão</option>
              <option value="fada">Fada</option>
              <option value="lutador">Lutador</option>
              <option value="fogo">Fogo</option>
              <option value="voador">Voador</option>
              <option value="fantasma">Fantasma</option>
              <option value="planta">Planta</option>
              <option value="terra">Terra</option>
              <option value="gelo">Gelo</option>
              <option value="veneno">Veneno</option>
              <option value="psíquico">Psíquico</option>
              <option value="pedra">Pedra</option>
              <option value="metálico">Metálico</option>
              <option value="água">Água</option>
            </select>
          </div>
          <div className="modal__title"><span>HABILIDADES</span></div>
          <div className="input-group">
            <input required type="text"id="habilidade1"  placeholder="Habilidade 1" />
          </div>
          <div className="input-group">
            <input required type="text" id="habilidade2" placeholder="Habilidade 2" />
          </div>
          <div className="input-group">
            <input required type="text" id="habilidade3" placeholder="Habilidade 3" />
          </div>
          <div className="input-group">
            <input required type="text" id="habilidade4" placeholder="Habilidade 4" />
          </div>
          <div className="modal__title"><span>ESTATÍSTICAS</span></div>
          <div className="input-group">
            <label htmlFor="defesa">Defesa</label>
            <input required type="number" id="defesa" placeholder="Defesa" />
          </div>
          <div className="input-group">
            <label htmlFor="ataque">Ataque</label>
            <input required type="number" id="ataque" placeholder="Ataque" />
          </div>
          <div className="input-group">
            <label htmlFor="defesa especial">Defesa Especial</label>
            <input required type="number" id="defesaEspecial" placeholder="Defesa Especial" />
          </div>
          <div className="input-group">
            <label htmlFor="ataque especial">Ataque Especial</label>
            <input required type="number" id="ataqueEspecial" placeholder="Ataque Especial" />
          </div>
          <div className="input-group">
            <label htmlFor="velocidade">Velocidade</label>
            <input required type="number" id="velocidade" placeholder="Velocidade" />
          </div>
          <button type="submit" className="modal__button" onClick={event => createPokemon(event)}>CRIAR POKEMON</button>
        </form>
      </>
    );
  }

  function createPokemon(event) {
    event.preventDefault();
    const form = document.querySelector('[name="pokemonCreationForm"]');

    const formInputs = {
      nome: form.nome,
      hp: form.hp,
      peso: form.peso,
      altura: form.altura,
      tipo: form.tipo,
      habilidades: [
        form.habilidade1,
        form.habilidade2,
        form.habilidade3,
        form.habilidade4,
      ],
      defesa: form.defesa,
      ataque: form.ataque,
      defesaEspecial: form.defesaEspecial,
      ataqueEspecial: form.ataqueEspecial,
      velocidade: form.velocidade,
    };

    if (!formInputs.nome.value) {
      alert('É necessário preencher o campo "Nome"');
      return;
    }

    if (!formInputs.hp.value) {
      alert('É necessário preencher o campo "HP"');
      return;
    }

    if (!formInputs.peso.value) {
      alert('É necessário preencher o campo "Peso"');
      return;
    }

    if (!formInputs.altura.value) {
      alert('É necessário preencher o campo "Altura"');
      return;
    }

    if (!formInputs.tipo.value) {
      alert('É necessário preencher o campo "Tipo"');
      return;
    }

    if (!formInputs.habilidades[0].value
      && !formInputs.habilidades[1].value
      && !formInputs.habilidades[2].value
      && !formInputs.habilidades[3].value
    ) {
      alert('É necessário especificar ao menos uma habilidade');
      return;
    }

    if (!formInputs.defesa.value) {
      alert('É necessário preencher o campo "Defesa"');
      return;
    }

    if (!formInputs.ataque.value) {
      alert('É necessário preencher o campo "Ataque"');
      return;
    }

    if (!formInputs.ataqueEspecial.value) {
      alert('É necessário preencher o campo "Ataque Especial"');
      return;
    }

    if (!formInputs.defesaEspecial.value) {
      alert('É necessário preencher o campo "Defesa Especial"');
      return;
    }

    if (!pokemonImage) {
      alert('É necessário escolher uma imagem');
      return;
    }

    const pokemon = createPokemonObject(formInputs);
    addPokemonToList(pokemon);
    onRequestClose();
  }

  function createPokemonObject(data) {
    const rand = Math.floor(Math.random() * 10000) + 1000;

    return  {
      id: rand,
      name: data.nome.value,
      sprite: pokemonImage,
      hp: data.hp.value,
      height: data.altura.value,
      weight: data.peso.value,
      types: [data.tipo.value],
      skills: data.habilidades.filter(el => !!el.value).map(el => el.value).join(', '),
      stats: {
        defense: data.defesa.value,
        attack: data.ataque.value,
        specialDefense: data.defesaEspecial.value,
        specialAttack: data.ataqueEspecial.value,
        speed: data.velocidade.value,
      },
      captured: true,
    }
  }

  function promptPokemonImage() {
    const imageUrl = prompt('URL da imagem');
    setPokemonImage(imageUrl);
  }

  return (
    <Modal
      isOpen={isOpen}
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

export default CreatePokemonModal;
