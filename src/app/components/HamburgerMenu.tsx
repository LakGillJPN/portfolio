// HamburgerMenu.tsx

import React from 'react';

interface HamburgerMenu {
  closeMenu: any;
}

const HamburgerMenu: React.FC<HamburgerMenu> = ({ closeMenu }) => {
  return (
    <div className="hamburger-menu">
      <a href="#projects" onClick={closeMenu}>Projects</a>
      <a href="#contributions" onClick={closeMenu}>Contributions</a>
    </div>
  );
};

export default HamburgerMenu;
