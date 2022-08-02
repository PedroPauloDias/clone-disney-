import React from "react";
import {
  House,
  MagnifyingGlass,
  Plus,
  Star,
  Television,
  FilmStrip,
} from "phosphor-react";
import Image from "next/image";
import * as s from "./style";

const Navbar = () => {
  return (
    <>
      <s.container>
        <Image
          src="/images/logo.svg"
          height="80"
          width="80"
          alt="logo disney plus"
        />
        <s.navbar>
          <ul>
            <li>
              <House size={16} weight="fill" /> INÍCIO
            </li>
            <li>
              <MagnifyingGlass size={16} /> PESQUISA
            </li>
            <li>
              <Plus size={16} weight="fill" /> MINHA LISTA
            </li>
            <li>
              <Star size={16} weight="fill" /> ORIGINAIS
            </li>
            <li>
              <FilmStrip size={16} /> FILMES
            </li>
            <li>
              <Television size={16} weight="fill" /> SERIES
            </li>
          </ul>
          <s.userContainer>
            <p>Pedro Dias</p>
            <Image
              src="/images/avatar.png"
              height="40"
              width="40"
              alt="foto do usuario"
            />
          </s.userContainer>
        </s.navbar>
      </s.container>
    </>
  );
};

export default Navbar;
