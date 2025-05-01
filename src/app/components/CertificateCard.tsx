// components/CertificateCard.tsx
import Image from "next/image";

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
      <Image
        src={imageSrc}
        width={250}
        height={350}
        alt={altText}
        className={`mb-5 mx-auto ${imageClassName}`}
      />
      <p className="text-xl font-semibold">{title}</p>
      <p className="text-sm text-gray-600">Date Issued: {dateIssued}</p>
    </div>
  );
}
