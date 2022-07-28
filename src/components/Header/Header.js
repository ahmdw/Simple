import Link from 'next/link';
import React from 'react';
// import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
// import { DiCssdeck } from 'react-icons/di';

import { NavContainer, DivIcon, DivMenu, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  //The Header
  <NavContainer>
    <Link href="#">
      <a style={{}}>Navbar w/ text</a>
    </Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <DivIcon>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
      <span class="navbar-text">
        Navbar text with an inline element
      </span>
    </DivIcon>
    <DivMenu>
      
    </DivMenu>
  </NavContainer>
);

export default Header;
