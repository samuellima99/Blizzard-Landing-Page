import styled, { css } from 'styled-components';

interface HeaderProps {
  scrollPosition: number;
}

export const HeaderWrapper = styled.header<HeaderProps>`
  width: 100%;
  height: 96px;
  position: relative;
  border-bottom: 1.5px solid rgba(255, 255, 255, 0.1);

  transition: 0.3s;

  ${(props) =>
    props.scrollPosition > 80 &&
    css`
      background: rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(8px);
    `}

  display: flex;
  align-items: center;

  position: fixed;
  z-index: 9999;

  &::before {
    content: '';
    width: 43px;
    height: 2px;
    position: absolute;
    background-color: var(--primary-default);
    bottom: -1px;
    left: 10%;
  }

  .container {
    nav {
      margin-left: 121.23px;

      ul {
        li {
          display: flex;

          margin-right: 34px;

          a {
            display: flex;
            align-items: center;
            flex-direction: row;

            margin-right: 34px;

            &:nth-last-child() {
              margin-right: 0;
            }

            span {
              color: #ffff;
              font-size: 14px;
              line-height: 21px;
            }

            svg {
              color: rgba(255, 255, 255, 0.8);
              margin-left: 14px;
            }
          }
        }
      }
    }

    .buttons {
      margin-left: auto;

      display: flex;
      align-items: center;

      .create-account {
        width: 112px;
        height: 41px;

        border: 1px solid #ffffff;
        border-radius: 4px;
        background: none;

        font-weight: 500;
        font-size: 14px;
        line-height: 21px;

        text-align: center;

        color: #ffffff;

        transition: 0.3s;

        &:hover {
          filter: brightness(0.8);
        }
      }

      .play {
        width: 115.69px;
        height: 41px;
        border: none;
        margin-left: 16px;

        background: var(--primary-default);
        border-radius: 4px;

        font-weight: 500;
        font-size: 14px;
        line-height: 21px;

        text-align: center;

        color: #ffffff;

        display: flex;
        align-items: center;
        justify-content: center;

        transition: 0.3s;

        &:hover {
          filter: brightness(0.8);
        }
      }
    }

    .toggle {
      display: none;
    }
  }

  @media (max-width: 1440px) {
    &::before {
      content: '';
      width: 43px;
      height: 2px;
      position: absolute;
      background-color: var(--primary-default);
      bottom: -1px;
      left: 8%;
    }
  }

  @media (max-width: 1366px) {
    &::before {
      content: '';
      width: 43px;
      height: 2px;
      position: absolute;
      background-color: var(--primary-default);
      bottom: -1px;
      left: 5.5%;
    }
  }

  @media (max-width: 800px) {
    .container {
      padding: 0 2rem;

      display: flex;
      justify-content: space-between;

      nav {
        display: none;
      }

      .buttons {
        margin: 0;
      }

      .toggle {
        width: 3rem;
        height: 3rem;
        padding: 0 0.25rem;
        background: none;
        border: none;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .bar {
          width: 100%;
          height: 0.25rem;
          background-color: var(--primary-default);
          border-radius: 2px;

          margin-bottom: 6px;

          &:nth-child(3) {
            margin-bottom: 0;
          }
        }
      }
    }
  }
`;
