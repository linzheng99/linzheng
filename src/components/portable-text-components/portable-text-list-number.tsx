import { type PortableTextListComponent } from "@portabletext/react";

const PortableTextListNumber: PortableTextListComponent = ({ children }) => (
  <ol className="list-decimal ml-6 mb-4 text-gray-50">{children}</ol>
)

export default PortableTextListNumber
