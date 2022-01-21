/* eslint-disable @next/next/no-img-element */
import { BattlenetContainer } from './styles';

export function Battlenet() {
  return (
    <BattlenetContainer>
      <div className="battlenet-left">
        <img src="/assets/battlenet.png" alt="Battlenet" />
        <h3>Baixe agora o battle.net</h3>

        <ul>
          <li>
            <img src="/assets/icon-games.svg" alt="Seus jogos em um só lugar" />
            <span>Seus jogos em um só lugar</span>
          </li>
          <li>
            <img
              src="/assets/icon-conect.svg"
              alt="Conect-se aos seus amigos"
            />
            <span>Conect-se aos seus amigos</span>
          </li>
          <li>
            <img
              src="/assets/icon-buy.svg"
              alt="Compre jogos e itens digitais"
            />
            <span>Compre jogos e itens digitais</span>
          </li>
        </ul>

        <button className="download-macos">
          <img src="/assets/icon-apple.svg" alt="Icone apple" />
          <span>Baixar para o MacOs</span>
        </button>

        <div className="aplication-mobile">
          <img src="/assets/icon-phone.svg" alt="Icone de telefone" />

          <span>
            Também disponível como
            <span className="outline"> aplicativo móvel</span>
          </span>
        </div>
      </div>

      <div className="battlenet-right">
        <img
          src="/assets/plataform-blizzard.png"
          alt="Battlenet"
          className="battlenet"
        />
        <img src="/assets/install.png" alt="Instalação" className="install" />
      </div>
    </BattlenetContainer>
  );
}
