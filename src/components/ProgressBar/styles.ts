import styled from 'styled-components';

interface ProgressBarProps {
  progress: number;
}

export const Container = styled.div<ProgressBarProps>`
  width: ${(props) => props.progress}%;
  height: 3px;
  background-color: var(--primary-default);

  position: absolute;
  bottom: 0;

  transition: width 0.3s;
`;
