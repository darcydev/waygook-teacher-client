import React from 'react';

import Logo from '../components/Graphics/Logos/Logo';
/* import NavBar from '../components/Navigation/NavBar'; */

export default function Header() {
  return (
    <Header style={{ display: 'flex' }}>
      <Logo />
      {/* <NavBar /> */}
    </Header>
  );
}
