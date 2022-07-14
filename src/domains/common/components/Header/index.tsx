import Link from "next/link";
import Navigation from "@/src/domains/common/components/Header/Navigation";
import Profile from "@/src/domains/common/components/Header/Profile";
import Search from "@/src/domains/common/components/Header/Search";
import Text from "@/src/domains/common/components/Text";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 flex h-[60px] w-full bg-white px-[20px] shadow-md">
      <div className="mr-[20px] flex items-center pb-[4px]">
        <Text
          as="h1"
          className="typo-bold-24 inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          <Link href="/" passHref>
            <a>Open Study</a>
          </Link>
        </Text>
      </div>
      <Navigation className="mr-auto" />
      <Profile />
      <Search />
    </header>
  );
}
