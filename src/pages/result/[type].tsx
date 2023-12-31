/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Notice from '@/component/notice';
import IconBox from '@/component/result/icon-box';
import IDCard from '@/component/result/IDCard';
import type { IDCardTextInfo } from '@/component/result/IDCard/types';
import withLayout from '@/hoc/withLayout';
import useImageDownload from '@/hooks/use-image-download';
import type { CharacterColorType, CharacterType } from '@/types/character';
import { getCharacterImageUrl } from '@/utils/character/image';
import { checkKakao, Mobile } from '@/utils/device';
import { getStorage } from '@/utils/storage';

const getImagedata = () => {
  const data = getStorage('user');
  if (data === null) return null;

  const { image } = JSON.parse(data);
  if (image) {
    return image;
  }
  return null;
};

type queryType = string | string[] | undefined;
const getData = ({
  name,
  birth,
  whatILike,
  goal,
  color,
  char,
}: {
  name: queryType;
  birth: queryType;
  whatILike: queryType;
  goal: queryType;
  color: queryType;
  char: queryType;
}): ResultProps => {
  const { name: characterName, image: characterImage } = getCharacterImageUrl({
    color: color as CharacterColorType,
    char: char as CharacterType,
  });

  return {
    cardData: {
      name: (name as string) ?? '데이터가 없습니다',
      birth: (birth as string) ?? '데이터가 없습니다',
      whatILike: (whatILike as string) ?? '데이터가 없습니다',
      goal: (goal as string) ?? '데이터가 없습니다',
    },
    character: {
      name: characterName ?? 'Purple_Lumi',
      image: characterImage ?? `/characters/lumi.png`,
    },
  };
};

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const { name, birth, whatILike, goal, color, char } = context.query;

//   const { name: characterName, image: characterImage } = calcCharacter({
//     color: color as CharacterColorType,
//     char: char as CharacterType,
//   });

//   return {
//     props: {
//       cardData: {
//         name: name ?? '데이터가 없습니다',
//         birth: birth ?? '데이터가 없습니다',
//         whatILike: whatILike ?? '데이터가 없습니다',
//         goal: goal ?? '데이터가 없습니다',
//         image: null,
//       },
//       character: {
//         name: characterName ?? 'Yellow_Lomi',
//         image: characterImage ?? '/characters/lumi.png',
//       },
//     },
//   };
// }

interface ResultProps {
  cardData: IDCardTextInfo;
  character: {
    name: string;
    image: string;
  };
}

function Result() {
  const router = useRouter();
  const { name, birth, whatILike, goal, color, char } = router.query;
  const { cardData, character } = getData({
    name,
    birth,
    whatILike,
    goal,
    color,
    char,
  });

  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const {
    captureArea: cardRef,
    onImageDownload,
    getImageBlob,
  } = useImageDownload();

  const handleDownloadImage = async () => {
    setIsLoading(true);
    try {
      if (checkKakao() || Mobile()) {
        window.alert('모바일 환경에서의 다운로드는 준비중입니다.');
        return;
        setTimeout(async () => {
          const imageUrl = await getImageBlob();
          if (imageUrl) {
            localStorage.setItem('card-image', imageUrl);

            router.push({
              pathname: '/result/img',
              query: { image: imageUrl },
            });
          }

          setIsLoading(false);
        }, 1000);
        return;
      }
      // await downloadImage(cardRef);
      await onImageDownload();
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const onDownloadBtn = () => {
    handleDownloadImage();
  };

  const goHome = () => {
    router.push('/');
  };

  useEffect(() => {
    const image = getImagedata();
    setImage(image);
    setIsLoading(false);
  }, []);

  return (
    <>
      <Heading onClick={goHome}>
        {/* TODO : logo 분리 */}
        <img
          src={'/images/logos/logo-aics.png'}
          width={236}
          height={62}
          alt="result"
        />
      </Heading>
      <IDCard
        cardRef={cardRef}
        cardData={{ ...cardData, image: image ?? '' }}
        character={character}
      />
      <IconBox isLoading={isLoading} onDownloadBtn={onDownloadBtn} />
      {/* <Content /> */}
      <NoticeWrapper>
        <Notice />
      </NoticeWrapper>
    </>
  );
}

const Heading = styled.h1`
  margin-bottom: 35px;
`;

const NoticeWrapper = styled.div`
  margin-top: 35px;
`;

export default withLayout(Result, '우주인 결과', '우주인 테스트 결과 페이지');
