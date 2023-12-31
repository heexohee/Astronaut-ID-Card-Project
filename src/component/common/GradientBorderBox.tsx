import type { ReactNode } from 'react';
import styled from 'styled-components';

import { GradientBoxStyled } from '@/assets/styles/gradient';
interface GradientBorderBoxProps {
  children: ReactNode;
  borderRadius?: string;
}

function GradientBorderBox({ children, borderRadius }: GradientBorderBoxProps) {
  return (
    <Wrapper>
      <InnerWrapper>{children}</InnerWrapper>

      <BgBox borderRadius={borderRadius}>
        <BgInnerBox />
      </BgBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const InnerWrapper = styled.div`
  position: relative;
  z-index: 10;
`;

const BgBox = styled(GradientBoxStyled)<{ borderRadius?: string }>`
  opacity: 0.6;

  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  border-radius: ${(props) => props.borderRadius ?? '20px'};
  z-index: 0;
  overflow: hidden;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
`;

const BgInnerBox = styled.div``;

export default GradientBorderBox;
