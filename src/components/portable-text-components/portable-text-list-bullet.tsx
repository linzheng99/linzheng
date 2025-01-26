import { type PortableTextListComponent } from "@portabletext/react";

const PortableTextListBullet: PortableTextListComponent = ({ children }) => (
  <ul className="list-disc ml-4 mb-4">{children}</ul>
)

export default PortableTextListBullet
