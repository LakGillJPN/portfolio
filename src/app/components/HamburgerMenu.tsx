// HamburgerMenu.tsx

import React from 'react';

interface HamburgerMenu {
  closeMenu: any;
}

const HamburgerMenu: React.FC<HamburgerMenu> = ({ closeMenu }) => {
  return (
    <div className="flex flex-col fixed top-0 left-0 w-{30%} text-2xl h-full p-5 box-border bg-pink-500">
      <p onClick={closeMenu}>X</p>
      <a href="#projects" onClick={closeMenu}>Projects</a>
      <a href="#contributions" onClick={closeMenu}>Contributions</a>
    </div>
  );
};

export default HamburgerMenu;
