"use client"

import Image from "next/image"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"


interface PortableTextImageProps {
  value: {
    _key: string
    url: string
    alt: string
    label: string
    width: number
    height: number
  }
}

export default function PortableTextImage({ value }: PortableTextImageProps) {
  const { width, height, url, alt, label } = value
  return (
    <div className="flex justify-center w-full">
      <Dialog>
        <DialogTrigger asChild>
          <div className="w-fit cursor-pointer relative group">
            <Image
              width={width}
              height={height}
              src={url}
              alt={alt || "image"}
              className="rounded-2xl group-hover:opacity-75 transition-all duration-300"
            />
            {label && (
              <div className="hidden group-hover:flex absolute bottom-0 p-2 bg-white/10 backdrop-blur-md w-full rounded-br-2xl rounded-bl-2xl justify-center">
                {label}
              </div>
            )}
          </div>
        </DialogTrigger>
        <DialogContent className="bg-transparent border-none max-w-[90vw] max-h-[90vh]">
          <DialogHeader>
            <DialogTitle className="sr-only">{alt || "图片"}</DialogTitle>
          </DialogHeader>
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src={url}
              alt={alt}
              width={width}
              height={height}
              className="rounded-lg max-w-full max-h-full object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

