import Image from "next/image";

interface BlogCoverImageProps {
  url: string
}

export default function BlogCoverImage({ url }: BlogCoverImageProps) {
  return (
    <div className="w-full h-[300px] relative">
      <Image
        src={url}
        fill
        className="object-cover rounded-2xl"
        alt={'cover image'}
      />
    </div>
  )
}
