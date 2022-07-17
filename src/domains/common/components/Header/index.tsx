import Link from "next/link";
import Navigation from "@/src/domains/common/components/Header/Navigation";
import Profile from "@/src/domains/common/components/Header/Profile";
import Search from "@/src/domains/common/components/Header/Search";
import TextLogo from "@/src/domains/common/components/TextLogo";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 flex h-[60px] w-full bg-white px-[20px] shadow-md">
      <div className="mr-[20px] flex items-center pb-[4px]">
        <TextLogo as="h1" className="typo-bold-18">
          <Link href="/" passHref>
            <a>Open Study</a>
          </Link>
        </TextLogo>
      </div>
      <Navigation className="mr-auto" />
      <Profile />
      <Search />
    </header>
  );
}
