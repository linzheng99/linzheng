import { type PortableTextListComponent } from "@portabletext/react";

const PortableTextListBullet: PortableTextListComponent = ({ children }) => (
  <ul className="list-disc ml-6 mb-4 text-gray-50">{children}</ul>
)

export default PortableTextListBullet
