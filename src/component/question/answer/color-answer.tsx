import type { ChangeEvent } from 'react';
import styled from 'styled-components';

import star from '@/assets/images/Star2.png';
import { GradientButtonStyled } from '@/assets/styles/gradient';
import type { AnswerType } from '@/types/question';

const mappingColorScore: Record<string, number> = {
  '1': 4,
  '2': 2,
  '3': 1,
};

interface ColorAnswerProps {
  answerColorStatus: string;
  handleAnswerChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAnswerSubmit: (answer: AnswerType) => void;
}

export default function ColorAnswer({
  handleAnswerSubmit,
  handleAnswerChange,
  answerColorStatus,
}: ColorAnswerProps) {
  const onAnswerClick = () => {
    handleAnswerSubmit({
      label: 'color',
      score: mappingColorScore[answerColorStatus],
    });
  };

  return (
    <>
      <InputWrapper>
        <input
          type="range"
          max={3}
          step={1}
          min={1}
          value={answerColorStatus}
          onChange={handleAnswerChange}
        />
      </InputWrapper>
      <GradientButton onClick={onAnswerClick}>
        <span>Submit</span>
      </GradientButton>
    </>
  );
}

//? 참고 링크 : https://stickode.tistory.com/472
const InputWrapper = styled.div`
  background: linear-gradient(
    253.86deg,
    #feac5e 16.16%,
    #c779d0 50.65%,
    #4bc0c8 84.32%
  );

  width: 322px;
  height: 68px;

  input {
    width: 85%;
    outline: none;
    background: transparent;
    -webkit-appearance: none;
    height: 100%;
    outline: none;

    &::-webkit-slider-thumb {
      -webkit-appearance: none; /* 기본 CSS 스타일을 적용하지 않기 위해서 */
      appearance: none; /* 기본 CSS 스타일을 적용하지 않기 위해서 */
      width: 51px; /* 슬라이더 핸들 길이 */
      height: 51px; /* 슬라이더 핸들 높이 */
      background-image: url(${star.src});
      background-color: transparent;
      box-shadow: none;
      cursor: pointer;
    }

    &::-moz-range-thumb {
      -webkit-appearance: none; /* 기본 CSS 스타일을 적용하지 않기 위해서 */
      appearance: none; /* 기본 CSS 스타일을 적용하지 않기 위해서 */
      width: 51px;
      height: 51px; /* 슬라이더 핸들 높이 */
      background-image: url(${star.src});
      background-color: transparent;
      box-shadow: none;
      cursor: pointer;
    }
  }
`;

const GradientButton = styled(GradientButtonStyled)`
  font-family: 'Space-Rave';
  color: ${(props) => props.theme.colors[3]};

  font-size: 32px;
  border-radius: 40px;
  padding: 2px;
  width: 180px;

  span {
    position: relative;
    left: -3px;
    bottom: 1px;
  }
`;
