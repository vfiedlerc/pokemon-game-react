import React from "react";

import Button from "components/Button";

import iconPlus from "assets/images/plus.png";

import * as S from "./styled";

const Sidebar = ({ pokemonList, setPokemonData, setPokemonStatsModalIsOpen}) => {
  function contents() {
    if (pokemonList.length) {
      return pokemonList.map((pokemonData, index) => {
        return (
          <S.SideBarItem
            key={index}
            onClick={() => showPokemon(pokemonData)}
          >
            <img src={pokemonData.sprite} alt="Pokemon sprite" />
          </S.SideBarItem>
        )
      });
    }

    return (
      <>
        <S.SideBarItem>?</S.SideBarItem>
        <S.SideBarItem>?</S.SideBarItem>
        <S.SideBarItem>?</S.SideBarItem>
        <S.SideBarItem>?</S.SideBarItem>
        <S.SideBarItem>?</S.SideBarItem>
        <S.SideBarItem>?</S.SideBarItem>
      </>
    );
  }

  function showPokemon(pokemonData) {
    setPokemonData(pokemonData);
    setPokemonStatsModalIsOpen(true);
  }

  return (
    <S.SideBarWrapper>
      <S.SideBarList>
        {contents()}
      </S.SideBarList>
      <Button icon={iconPlus} />
    </S.SideBarWrapper>
  );
};

export default Sidebar;
