// components/CertificateCard.tsx
import Image from "next/image";
import languages from "./langData";

interface CertificateCardProps {
  imageSrc: string;
  altText: string;
  title: string;
  dateIssued: string;
  imageClassName?: string;
}

export default function CertificateCard({
  imageSrc,
  altText,
  title,
  dateIssued,
  imageClassName = "",
}: CertificateCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
    <div className="h-[200px] flex items-center justify-center mb-5">
      <Image
        src={imageSrc}
        width={250}
        height={350}
        alt={altText}
        className={`max-h-full object-contain ${imageClassName}`}
      />
    </div>
    <p className="text-xl font-semibold mb-1">{title}</p>
    <p className="text-sm text-grey-700 mb-8">{dateIssued}</p>
  </div>
  );
}
