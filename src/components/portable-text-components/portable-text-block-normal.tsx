import { type PortableTextBlock, type PortableTextComponentProps } from "@portabletext/react";

export default function PortableTextBlockNormal({ children }: PortableTextComponentProps<PortableTextBlock>) {
  return (
    <p className="text-base font-normal">
      {children}
    </p>
  );
}

