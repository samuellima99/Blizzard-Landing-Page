import styled, { keyframes } from 'styled-components';

const animateBattlenet = keyframes`
  0% {
    transform: translateY(0);
  } 50%{
    transform: translateY(3%);
  }100%{
    transform: translateY(0);
  }
`;

const animateInstall = keyframes`
  0% {
    transform: translateY(0);
  } 50%{
    transform: translateY(4%);
  }100%{
    transform: translateY(0);
  }
`;

const animateBattlenetLogo = keyframes`
  0% {
    transform: translateX(-50%);
  }100%{
    transform: translateX(0);
  }
`;

const animateTitle = keyframes`
  0% {
    transform: translateX(-50%);
  }100%{
    transform: translateX(0);
  }
`;

const animateItem01 = keyframes`
  0% {
    transform: translateX(-50%);
  }100%{
    transform: translateX(0);
  }
`;
const animateItem02 = keyframes`
  0% {
    transform: translateX(-50%);
  }100%{
    transform: translateX(0);
  }
`;
const animateItem03 = keyframes`
  0% {
    transform: translateX(-50%);
  }100%{
    transform: translateX(0);
  }
`;

const animateButtonDownload = keyframes`
  0% {
    transform: translateY(100%);
  }100%{
    transform: translateY(0);
  }
`;

const animateMobileApp = keyframes`
  0% {
    transform: translateY(100%);
  }100%{
    transform: translateY(0);
  }
`;

export const BattlenetContainer = styled.section`
  width: 100%;
  height: 852px;
  margin-top: 109px;
  padding: 136px 0;
  overflow: hidden;

  position: relative;

  background: url('/assets/background-section-download.jpg') no-repeat center
    center;
  background-size: cover;

  display: flex;

  .battlenet-left {
    padding-left: 195px;

    img {
      animation: ${animateBattlenetLogo} 0.5s;
    }

    h3 {
      font-size: 2rem;
      line-height: 110.2%;
      color: #ffffff;
      font-weight: bold;
      max-width: 240px;
      margin: 1.875rem 0;

      animation: ${animateTitle} 1s;
    }

    ul {
      li {
        margin-bottom: 1.5rem;

        &:nth-child(1) {
          animation: ${animateItem01} 2s;
        }

        &:nth-child(2) {
          animation: ${animateItem02} 3s;
        }

        &:nth-child(3) {
          animation: ${animateItem03} 4s;
        }

        &:last-child {
          margin-bottom: 0;
        }

        display: flex;
        align-items: center;

        img {
          margin-right: 1rem;
        }

        span {
          color: #828792;
          font-size: 1.125rem;
          line-height: 178.2%;
        }
      }
    }

    .download-macos {
      width: 100%;
      max-width: 266px;
      height: 52px;
      border-radius: 0.25rem;
      background-color: var(--primary-default);
      border: 0;
      margin-top: 2.625rem;

      display: flex;
      align-items: center;
      justify-content: center;

      transition: filter 0.3s;

      animation: ${animateButtonDownload} 1s;

      img {
        margin-right: 0.5rem;
      }

      span {
        font-size: 1rem;
        color: #ffffff;
        font-weight: 600;
      }

      &:hover {
        filter: brightness(0.8);
      }
    }

    .aplication-mobile {
      margin-top: 3rem;
      max-width: 238px;

      display: flex;
      align-items: center;

      animation: ${animateMobileApp} 1s;

      img {
        margin-right: 1.125rem;
      }

      span {
        color: #e5e5e5;
        font-size: 0.875rem;

        .outline {
          text-decoration: underline;
        }
      }
    }
  }

  .battlenet-right {
    display: flex;
    flex-direction: column;

    .battlenet {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 999;

      animation: ${animateBattlenet} 5s linear infinite;
    }

    .install {
      position: absolute;
      top: 250px;
      right: 0;
      z-index: 9999;

      animation: ${animateInstall} 5s linear infinite;
    }
  }

  @media (max-width: 1440px) {
    .battlenet-left {
      padding-left: 110px;
    }
  }

  @media (max-width: 1366px) {
    .battlenet-left {
      padding-left: 74px;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;

    height: auto;

    .battlenet-left {
      padding-left: 0;

      display: flex;
      flex-direction: column;
      align-items: center;

      h3 {
        text-align: center;
      }
    }

    .battlenet-right {
      height: 400px;

      .battlenet {
        width: 72%;
        top: 600px;
      }

      .install {
        width: 54%;
        top: 730px;
      }
    }
  }

  @media (max-width: 480px) {
    .battlenet-right {
      .battlenet {
        width: 100%;
        top: 650px;
      }

      .install {
        width: 75%;
        top: 750px;
      }
    }
  }
`;
