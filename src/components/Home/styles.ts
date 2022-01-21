import styled, { css, keyframes } from 'styled-components';

type SectionWrapperProps = {
  bg: string;
  playerImage: string;
  playerHover: string;
  currentBanner: number;
};

export const SectionWrapper = styled.section<SectionWrapperProps>`
  width: 100%;
  height: 736px;
  background: url(${(props) => props.bg}) no-repeat;
  background-size: cover;
  padding-top: 175px;

  position: relative;

  transition: all 0.8s;

  display: flex;
  flex-direction: column;

  .container {
    .s-left {
      ul {
        li {
          ${(props) =>
            props.currentBanner === 0 &&
            css`
              &:nth-child(2),
              &:nth-child(3),
              &:nth-child(4),
              &:nth-child(5) {
                mix-blend-mode: luminosity;
              }
            `};

          ${(props) =>
            props.currentBanner === 1 &&
            css`
              &:nth-child(1),
              &:nth-child(3),
              &:nth-child(4),
              &:nth-child(5) {
                mix-blend-mode: luminosity;
              }
            `};

          ${(props) =>
            props.currentBanner === 2 &&
            css`
              &:nth-child(1),
              &:nth-child(2),
              &:nth-child(4),
              &:nth-child(5) {
                mix-blend-mode: luminosity;
              }
            `}

          margin-bottom: 20px;

          &:nth-child(5) {
            margin-bottom: 0;
          }

          button {
            background: none;
            border: none;
          }
        }
      }
    }

    .s-center {
      padding-left: 160px;
      width: 100%;
      max-width: 800px;

      display: flex;
      flex-direction: column;

      h1 {
        font-weight: bold;
        font-size: 64px;
        line-height: 110.2%;

        color: #ffffff;
      }

      span {
        font-size: 18px;
        font-weight: normal;
        line-height: 27px;
        letter-spacing: -0.005em;
        margin-top: 16px;

        color: #ffffff;
      }

      .play-now {
        margin-top: 32px;
        padding: 14px 32px;

        width: fit-content;
        max-width: 280px;
        height: 52px;

        border: none;
        border-radius: 4px;
        background: var(--primary-default);

        font-weight: 600;
        font-size: 16px;
        line-height: 24px;

        text-align: center;

        color: #ffffff;

        transition: 0.3s;

        &:hover {
          filter: brightness(0.8);
        }
      }
    }

    .s-right {
      flex: 1;
      display: flex;
      align-items: flex-end;
      flex-direction: column;

      .player {
        margin-top: 112px;

        display: flex;
        align-items: flex-end;
        flex-direction: column;

        span {
          font-weight: 600;
          font-size: 13px;
          line-height: 19px;

          text-transform: uppercase;

          color: #ffffff;
        }

        .player-action {
          width: 280px;
          height: 158px;
          margin-top: 16px;
          border-radius: 4px;
          background: url(${(props) => props.playerImage});
          box-shadow: 0 8px 16px #020203;

          display: flex;
          justify-content: center;
          align-items: center;

          cursor: pointer;

          transition: all 0.2s ease-in;

          .btn-player {
            width: 51px;
            height: 51px;
            border: none;
            background: none;

            background: linear-gradient(
              136.72deg,
              rgba(7, 7, 10, 0.86) 19.22%,
              rgba(15, 16, 22, 0.5) 76.59%
            );
            backdrop-filter: blur(3px);
            border-radius: 159px;

            display: flex;
            justify-content: center;
            align-items: center;
          }

          &:hover {
            background: url(${(props) => props.playerHover}) no-repeat center
              center;
            background-size: cover;

            .btn-player {
              background: rgba(0, 174, 255, 1);

              border: 5px solid rgba(0, 174, 255, 0.2);
              backdrop-filter: blur(3px);
              /* Note: backdrop-filter has minimal browser support */

              border-radius: 159px;

              img {
                filter: contrast(1.75) brightness(0);
                z-index: 999;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 800px) {
    .container {
      display: flex;
      flex-direction: column-reverse;
    }
  }
`;
