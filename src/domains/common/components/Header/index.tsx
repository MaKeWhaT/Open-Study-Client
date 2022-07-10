import Link from "next/link";
import Navigation from "@/src/domains/common/components/Header/Navigation";
import Search from "@/src/domains/common/components/Header/Search";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 flex h-[60px] w-full bg-white px-[20px] shadow-md">
      <div className="mr-[20px] flex items-center pb-[4px]">
        <h1 className="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-[24px] font-bold text-transparent">
          <Link href="/" passHref>
            <a>Open Study</a>
          </Link>
        </h1>
      </div>
      <Navigation />
      <Search />
    </header>
  );
}
