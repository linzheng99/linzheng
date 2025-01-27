import { type PortableTextBlock, type PortableTextComponentProps } from "@portabletext/react";

export default function PortableTextBlockH1({ value, children }: PortableTextComponentProps<PortableTextBlock>) {
  return (
    <h1 className="text-4xl py-3 font-bold relative after:content-['_#'] after:opacity-0 hover:after:opacity-100 after:transition-opacity after:will-change-[opacity] after:pointer-events-none after:inline after:select-none text-gray-50">
      <a href={`#${value._key}`} className="absolute inset-0" />
      {children}
    </h1>
  );
}

