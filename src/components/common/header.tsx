import { RiNextjsFill as NextIcon } from "react-icons/ri";

export default function Header() {
  return (
    <header className="mx-4 mt-6 flex h-12 items-center justify-between rounded-sm bg-white px-4 shadow lg:mx-12 lg:px-8">
      <NextIcon className="text-3xl text-gray-400" />
    </header>
  );
}
