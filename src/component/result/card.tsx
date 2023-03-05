import IDCard from '@/component/result/IDCard';
import Image from 'next/image';

const name = '이름';
const birth = '2000.00.00';
const hobby = '취미';

function IDCardPage({ cardRef }: { cardRef: any }) {
  return <IDCard name={name} birth={birth} hobby={hobby} cardRef={cardRef} />;
}

export default IDCardPage;
