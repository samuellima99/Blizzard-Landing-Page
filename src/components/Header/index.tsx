import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

import { HeaderWrapper } from './styles';

export function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderWrapper scrollPosition={scrollPosition}>
      <div className="container">
        <Image
          src="/assets/logo.png"
          alt="Blizzard logo"
          width="86.77px"
          height="40px"
        />

        <nav>
          <ul>
            <li>
              <a href="#">
                <span>Jogos</span>
                <FiChevronDown />
              </a>
              <a href="#">
                <span>Esportes</span>
                <FiChevronDown />
              </a>
              <a href="#">
                <span>Loja</span>
              </a>
              <a href="#">
                <span>Notícias</span>
              </a>
              <a href="#">
                <span>Suporte</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="buttons">
          <button className="create-account">Criar conta</button>
          <button className="play">
            <Image
              src="/assets/user.svg"
              alt="User"
              width="19px"
              height="19px"
            />
            Jogar
          </button>
        </div>

        <button className="toggle">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </HeaderWrapper>
  );
}
