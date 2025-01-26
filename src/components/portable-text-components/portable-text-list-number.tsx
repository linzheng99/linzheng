import { type PortableTextListComponent } from "@portabletext/react";

const PortableTextListNumber: PortableTextListComponent = ({ children }) => (
  <ol className="list-decimal ml-4 mb-4">{children}</ol>
)

export default PortableTextListNumber
