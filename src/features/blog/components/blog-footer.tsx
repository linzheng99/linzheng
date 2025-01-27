import Link from "next/link";

export default function BlogFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="flex flex-col py-4 items-end w-full">
      <p className="text-gray-50">Copyright © {currentYear} by <Link href="https://github.com/linzheng99" target="_blank" className="text-gray-100 hover:text-white transition-colors duration-300 font-bold hover:underline">Lin Zheng</Link></p>
    </div>
  )
};

