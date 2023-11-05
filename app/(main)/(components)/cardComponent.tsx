import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
export default function CardComponent({ title, linkTo, img }: { title: string; linkTo: string; img: { src: string } }) {
  const cardSize = { height: '240px', width: '320px' };
  return (
    <Link href={linkTo}>
      <Card
        className={`w-1/3 flex flex-col justify-center p-8 m-5 h-[${cardSize.height}] max-w-[${cardSize.width}] rounded-lg bg-[#617bc6] items-center hover:scale-95 transition-transform bg-[url(../../../public/images/consulting.jpg')] opacity-70
      bg-cover bg-center bg-fixed`}
        style={{
          backgroundImage: `url(${img.src})`,
          width: cardSize.width,
          height: cardSize.height,
          scale: 1,
        }}
      >
        <CardHeader>
          <CardTitle className="p-2 bg-gray-100 rounded-md">{title}</CardTitle>
        </CardHeader>
      </Card>
    </Link>
  );
}
