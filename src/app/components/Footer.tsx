import React from 'react';

interface FooterProps {
  text: string;
}

const Footer: React.FC<FooterProps> = ({ text }) => {
  return (
    <footer className="text-white text-center my-5">{text}</footer>
  );
};

export default Footer;
