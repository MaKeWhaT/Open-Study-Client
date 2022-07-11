import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { IClassName } from "../../types";

interface INavigation extends IClassName {}

export default function Navigation({ className }: INavigation) {
  const router = useRouter();

  return (
    <nav className={className}>
      <ul className="flex h-full">
        {PAGE_NAVIGATIONS.map(({ href, text }) => (
          <li
            key={href}
            className={clsx(
              "relative inline-block h-full w-[150px] text-gray-700 hover:cursor-pointer hover:bg-violet-50",
              {
                "after:absolute after:bottom-0 after:w-full after:border-b-[3px] after:border-violet-500":
                  href === router.pathname,
              },
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

const PAGE_NAVIGATIONS = [
  {
    href: "/study",
    text: "스터디 시작",
  },
  {
    href: "/pins",
    text: "나의 핀",
  },
];
