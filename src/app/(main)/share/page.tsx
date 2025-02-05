import { type Metadata } from "next";

import ShareSign from "@/features/share/components/share-sign";

export const metadata: Metadata = {
  title: "linzheng's - share",
  description: 'This is the share page',
};

export default function SharePage() {
  return (
    <div className="mt-10 w-full h-full">
      <ShareSign />
    </div>
  )
}

