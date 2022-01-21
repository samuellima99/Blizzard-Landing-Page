/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { ProgressBar } from '../ProgressBar';
import { SectionWrapper } from './styles';

const bannersInfos = [
  {
    id: 0,
    image: 'assets/bg-banner.png',
    title: 'Retorne à escuridão com o game Diablo IV',
    subtitle: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
    logoGame: '/assets/logo-diablo.svg',
    playerImg: '/assets/image-player.png',
    playerHoverImg: '/assets/hover-diablo.gif',
    buttonText: 'Jogar agora',
    isActive: true,
  },
  {
    id: 1,
    image: 'assets/bg-hearthstone.png',
    title: 'Novo pacote de expansão de Hearthstone',
    subtitle: 'A Horda e a Aliança se encontraram no Vale Alterac para lutar',
    logoGame: '/assets/logo-hearthstone.svg',
    playerImg: '/assets/image-player02.png',
    playerHoverImg: '/assets/hover-heartstone.gif',
    buttonText: 'Reserve agora na pré-venda',
    isActive: false,
  },
  {
    id: 2,
    image: 'assets/bg-warcraft.png',
    title: 'Desbrave as Terras Sombrias em Shadowlands!',
    subtitle: 'O que jaz além do mundo que você conhece?',
    logoGame: '/assets/logo-warcraft.svg',
    playerImg: '/assets/image-player03.png',
    playerHoverImg: '/assets/hover-warcraft.gif',
    buttonText: 'Reserve agora na pré-venda',
    isActive: false,
  },
];

type BannersProps = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  logoGame: string;
  playerImg: string;
  playerHoverImg: string;
  buttonText: string;
  isActive: boolean;
};

export function HomePage() {
  const [banners, setBanners] = useState({} as BannersProps);
  const [progress, setProgress] = useState(0);
  const [currentBannerCount, setCurrentBannerCount] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  function nextProgress() {
    setProgress(progress + 33.33);
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentBannerCount((prevIndex) =>
        prevIndex === bannersInfos.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      resetTimeout();
    };
  }, [currentBannerCount]);

  useEffect(() => {
    setBanners(bannersInfos[currentBannerCount]);
    if (progress === 99.99) {
      setProgress(33.33);
    } else {
      nextProgress();
    }
  }, [currentBannerCount]);

  function changeBanner(banner: number) {
    resetTimeout();
    setCurrentBannerCount(banner);
  }

  return (
    <SectionWrapper
      bg={banners?.image}
      playerImage={banners?.playerImg}
      playerHover={banners?.playerHoverImg}
      currentBanner={currentBannerCount}
    >
      <div className="container">
        <div className="s-left">
          <ul>
            <li>
              <button type="button" onClick={() => changeBanner(0)}>
                <Image
                  src="/assets/control-diablo.svg"
                  alt="Diablo"
                  width="48"
                  height="48"
                />
              </button>
            </li>
            <li>
              <button type="button" onClick={() => changeBanner(1)}>
                <Image
                  src="/assets/control-hearthstone.svg"
                  alt="Diablo"
                  width="48"
                  height="48"
                />
              </button>
            </li>
            <li>
              <button type="button" onClick={() => changeBanner(2)}>
                <Image
                  src="/assets/control-warcraft.svg"
                  alt="Diablo"
                  width="48"
                  height="48"
                />
              </button>
            </li>
            <li>
              <button type="button">
                <Image
                  src="/assets/control-diablo-imortal.svg"
                  alt="Diablo"
                  width="48"
                  height="48"
                />
              </button>
            </li>
            <li>
              <button type="button">
                <Image
                  src="/assets/control-starcraft.svg"
                  alt="Diablo"
                  width="48"
                  height="48"
                />
              </button>
            </li>
          </ul>
        </div>
        <div className="s-center">
          <h1>{banners && banners.title}</h1>
          <span>{banners && banners.subtitle}</span>

          <button className="play-now">{banners && banners.buttonText}</button>
        </div>
        <div className="s-right">
          <img
            src={banners.logoGame}
            alt={banners && banners.title}
            width="280px"
            height="154px"
          />

          <div className="player">
            <span>Assista o trailer</span>

            <div className="player-action">
              <button className="btn-player">
                <Image
                  src="/assets/player.svg"
                  alt="Player"
                  width="20px"
                  height="16px"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ProgressBar progress={progress} />
    </SectionWrapper>
  );
}
