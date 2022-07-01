import React from "react";
import { Link } from "react-router-dom";

import * as S from "./styled";
import pokemonLogo from '../../assets/images/pokemonLogo.png';

const HomePage = () => (
  <S.HomeWrapper>
    <div>
      <img src={pokemonLogo} alt="Logo Pokémon" />
      <Link className="button" to="/map">START</Link>
    </div>
  </S.HomeWrapper>
);

export default HomePage;
