import Image from "next/image";

export function needsImageFrame(width: number, height: number) {
  return width / height < 1.45;
}

export default function ProjectImage({
  src, alt, width, height, sizes, frame = needsImageFrame(width, height),
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  frame?: boolean;
}) {
  if (!frame) return <Image src={src} alt={alt} width={width} height={height} sizes={sizes} />;
  return (
    <div className="project-image-frame">
      <Image src={src} alt={alt} fill sizes={sizes} />
    </div>
  );
}
