/* eslint-disable @next/next/no-img-element */
import { Container, ImageWrapper } from './styles';

interface CardProps {
  title: string;
  category: string;
  thumbnail: string;
  url_logo: string;
}

export function Card({ title, category, thumbnail, url_logo }: CardProps) {
  return (
    <Container>
      <ImageWrapper thumbnail={thumbnail}>
        <img src={url_logo} alt={title} className="logo-game" />
      </ImageWrapper>

      <h4>{title}</h4>
      <p>{category}</p>
    </Container>
  );
}
