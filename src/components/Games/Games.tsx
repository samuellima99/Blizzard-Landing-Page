import Image from 'next/image';
import { Card } from '../Card';
import { GamesWrapper } from './styles';

const cards = [
  {
    id: 1,
    thumbnail: '/assets/card-01.png',
    url_logo: '/assets/card-01-logo.png',
    title: 'Diablo II: Resurrected',
    category: 'RPG de ação',
  },
  {
    id: 2,
    thumbnail: '/assets/card-02.png',
    url_logo: '/assets/card-02-logo.png',
    title: 'Overwatch',
    category: 'Ação em equipe',
  },
  {
    id: 3,
    thumbnail: '/assets/card-03.png',
    url_logo: '/assets/card-03-logo.png',
    title: 'Overwatch 2',
    category: 'Ação em equipe',
  },
  {
    id: 4,
    thumbnail: '/assets/card-04.png',
    url_logo: '/assets/card-04-logo.png',
    title: 'World of Warcraft Classic',
    category: 'RPG multijogador em massa',
  },
  {
    id: 5,
    thumbnail: '/assets/card-05.png',
    url_logo: '/assets/card-06-logo.png',
    title: 'Hearthstone',
    category: 'Jogo de cards estratégicos',
  },
  {
    id: 6,
    thumbnail: '/assets/card-06.png',
    url_logo: '/assets/card-07-logo.png',
    title: 'Heroes of storm',
    category: 'RPG de ação',
  },
  {
    id: 7,
    thumbnail: '/assets/card-07.png',
    url_logo: '/assets/card-07-logo.png',
    title: 'Warcraft III Reforged',
    category: 'RPG de ação',
  },
  {
    id: 8,
    thumbnail: '/assets/card-08.png',
    url_logo: '/assets/card-08-logo.png',
    title: 'Diablo IV',
    category: 'RPG de ação',
  },
  {
    id: 9,
    thumbnail: '/assets/card-09.png',
    url_logo: '/assets/card-09-logo.png',
    title: 'Diablo III',
    category: 'RPG de ação',
  },
  {
    id: 10,
    thumbnail: '/assets/card-10.png',
    url_logo: '/assets/card-10-logo.png',
    title: 'StarCraft II',
    category: 'RPG de ação',
  },
  {
    id: 11,
    thumbnail: '/assets/card-11.png',
    url_logo: '/assets/card-11-logo.png',
    title: 'StarCraft Remastered',
    category: 'RPG de ação',
  },
];

export function Games() {
  return (
    <GamesWrapper>
      <div className="container">
        <header>
          <div className="header-left">
            <span>GAMES</span>
            <h3>Jogos exclusivos</h3>
          </div>

          <Image
            src="/assets/plataforms.png"
            alt="Plataformas"
            width="159px"
            height="22px"
          />

          <div className="more-games">
            <Image
              src="/assets/icon-more-games.svg"
              width="10px"
              height="10px"
              alt="Ver todos os jogos"
            />
            <strong>Ver todos os jogos</strong>
          </div>
        </header>
        <main>
          <div className="container">
            <div className="games-list">
              {cards.map((card) => (
                <Card
                  key={card.id}
                  title={card.title}
                  category={card.category}
                  thumbnail={card.thumbnail}
                  url_logo={card.url_logo}
                />
              ))}
              <div className="more-games-blizzard">
                <Image
                  src="/assets/logo.png"
                  width="86px"
                  height="40px"
                  alt="Ver todos os jogos"
                />

                <div className="more">
                  <Image
                    src="/assets/more-icon.svg"
                    width="10px"
                    height="10px"
                    alt="Ver todos os jogos"
                  />
                  <strong>Ver todos os jogos</strong>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </GamesWrapper>
  );
}
