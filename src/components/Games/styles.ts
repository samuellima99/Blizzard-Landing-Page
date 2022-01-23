import styled from 'styled-components';

export const GamesWrapper = styled.div`
  width: 100%;
  padding-top: 72px;

  .container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  header {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .header-left {
      display: flex;
      align-items: center;
      margin-right: 244px;

      span {
        color: #8f9199;
        font-size: 15px;
        font-weight: 600;
      }

      h3 {
        max-width: 3rem;
        margin-left: 161px;

        color: #ffffff;

        font-size: 2rem;
        font-weight: bold;
        line-height: 110.2%;
      }
    }

    .more-games {
      display: flex;
      align-items: center;
      cursor: pointer;

      transition: all 0.3s;

      strong {
        color: var(--primary-default);
        font-size: 1rem;
        font-weight: 600;

        margin-left: 4px;
      }

      &:hover {
        filter: brightness(0.8);
      }
    }
  }

  main {
    width: 100%;
    padding-top: 72px;

    .games-list {
      display: flex;
      flex-wrap: wrap;
      column-gap: 2rem;
      row-gap: 40px;
      font-size: 1rem;
      font-weight: 600;
    }

    .more-games-blizzard {
      width: 100%;
      max-width: 280px;
      height: 384px;
      border: 1.5px solid #212428;
      border-radius: 4px;

      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .more {
        margin-top: 34px;

        display: flex;
        align-items: center;

        strong {
          margin-left: 12px;
          color: #ffffff;
          line-height: 24px;
          font-size: 1rem;
          font-weight: 400;
        }
      }
    }
  }

  @media (max-width: 800px) {
    .container {
      max-width: 600px;
    }

    header {
      .header-left {
        h3 {
          max-width: 0;
          font-size: 1.5rem;
        }
      }

      .more-games {
        display: none;
      }
    }

    main {
      .games-list {
        justify-content: space-between;
      }
    }
  }

  @media (max-width: 600px) {
    .container {
      max-width: 550px;
    }

    header {
      .header-left {
        h3 {
          font-size: 1.125rem;
        }
      }
    }

    main {
      .games-list {
        justify-content: flex-start;
        column-gap: 24px;

        .more-games-blizzard {
          max-width: 263px;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .container {
      max-width: 332px;
    }

    header {
      .header-left {
        h3 {
          font-size: 1.125rem;
        }
      }
    }

    main {
      .games-list {
        justify-content: center;
        column-gap: 24px;

        .more-games-blizzard {
          max-width: 300px;
        }
      }
    }
  }
`;
