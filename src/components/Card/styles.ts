import styled from 'styled-components';

interface ImageWrapperProps {
  thumbnail: string;
}

export const Container = styled.div`
  width: 100%;
  max-width: 280px;
  height: 452px;
  overflow: hidden;

  cursor: pointer;

  h4 {
    color: #e5e5e5;
    font-size: 1.125rem;
    font-weight: 600;
    margin-top: 1rem;
  }

  p {
    color: #e5e5e5;
    font-size: 14px;
    font-weight: 400;
    margin-top: 0.25rem;
  }

  transition: height 200ms ease-in;

  &:hover {
    height: 463px;
  }

  @media (max-width: 600px) {
    max-width: 263px;
  }

  @media (max-width: 480px) {
    max-width: 300px;
  }
`;

export const ImageWrapper = styled.div<ImageWrapperProps>`
  width: 100%;
  height: 384px;
  overflow: hidden;

  position: relative;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  transition: height 200ms ease-in;

  
  }

  &::before {
    content: '';
    width: 100%;
    height: 384px;
    position: absolute;
    left: 0;
    border-radius: 0.25rem;

    background: ${(props) => `url(${props.thumbnail}) no-repeat center center`};
    background-size: cover;

    transition: all 300ms ease-in;
  }

  &::after {
    content: '';
    width: 100%;
    height: 384px;
    position: absolute;
    left: 0;

    background: linear-gradient(
      182.71deg,
      #020203 2.26%,
      rgba(2, 2, 3, 0) 73.74%
    );
    opacity: 0.4;
    transform: rotate(-180deg);
  }

  .logo-game {
    width: 148px;
    height: 98px;
    margin-bottom: 36px;
    z-index: 999;
  }

  &:hover {
    height: 392px;
  }

  &:hover:after {
    content: '';
    width: 100%;
    height: 384px;
    position: absolute;
    left: 0;

    background: linear-gradient(180deg, #020203 40%, rgba(2, 2, 3, 0) 73.74%);
    opacity: 0.6;
    transform: rotate(-180deg);
  }

  &:hover:before {
    transform: scale(1.1);
  }
   
    
`;
