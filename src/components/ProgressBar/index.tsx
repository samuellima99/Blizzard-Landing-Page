import { Container } from './styles';

interface ProgressBarProps {
  progress: number;
}
export function ProgressBar({ progress }: ProgressBarProps) {
  return <Container progress={progress}></Container>;
}
