import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();

  return (
    <nav>
      <ul className="flex h-full font-medium">
        {PAGE_NAVIGATOINS.map(({ href, text }) => (
          <li
            key={href}
            className={clsx(
              "inline-block h-full w-[150px] hover:cursor-pointer hover:bg-violet-50",
              { "bg-violet-50": href === router.pathname },
            )}
          >
            <Link href={href} passHref>
              <a className="flex h-full w-full items-center justify-center">
                {text}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const PAGE_NAVIGATOINS = [
  {
    href: "/study",
    text: "스터디 시작",
  },
  {
    href: "/pins",
    text: "나의 핀",
  },
];
