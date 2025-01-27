import { type PortableTextBlock, type PortableTextComponentProps } from "@portabletext/react";

export default function PortableTextBlockNormal({ children }: PortableTextComponentProps<PortableTextBlock>) {
  return (
    <p className="text-base py-3 font-normal text-gray-50">
      {children}
    </p>
  );
}

