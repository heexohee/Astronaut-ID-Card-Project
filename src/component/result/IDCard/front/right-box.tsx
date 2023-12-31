import React from 'react';
import styled from 'styled-components';

import InfoBox from '@/component/result/IDCard/front/info-box';
import type { IDCardTextInfo } from '@/component/result/IDCard/types';

export default function RightBox({
  name,
  birth,
  whatILike,
  goal,
}: IDCardTextInfo) {
  return (
    <Wrapper>
      <TopWrapper>
        <InfoBox name={name} birth={birth} whatILike={whatILike} goal={goal} />
      </TopWrapper>
      <BottomWrapper>
        <Desc>
          <p>이 카드를 소지한 사람은 별에서 온 우주인임을 증명합니다.</p>
          <p> This card certifies the bearer as an astronaut.</p>
        </Desc>
      </BottomWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 198px;
  max-width: 198px;
`;

const TopWrapper = styled.div`
  height: 120px;
`;

const BottomWrapper = styled.div``;

const Desc = styled.div`
  font-weight: 300;
  line-height: 10px;
  font-size: 10px;

  transform: translate(0%, 55%) scale(0.75);

  display: inline-block;
  text-align: right;
  color: #343232;
  opacity: 0.8;
  width: fit-content;

  p {
    width: fit-content;
    text-overflow: ellipsis;
    white-space: pre;
    float: right;
  }
`;
