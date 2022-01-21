import { Battlenet } from '../components/Battlenet';
import { Games } from '../components/Games/Games';
import { Header } from '../components/Header';
import { HomePage } from '../components/Home';

export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
      <Games />
      <Battlenet />
    </>
  );
}
