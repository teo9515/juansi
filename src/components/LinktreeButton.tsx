"use client";

import Link from "next/link";

interface Props {
  label: string;
  url: string;
}

const LinktreeButton: React.FC<Props> = ({ label, url }) => {
  const isExternal = url.startsWith("http");

  const className =
    "w-full rounded-xl border border-black px-6 py-3 text-center text-lg font-medium transition-colors hover:bg-black hover:text-white";

  return isExternal ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {label}
    </a>
  ) : (
    <Link href={url} className={className}>
      {label}
    </Link>
  );
};

export default LinktreeButton;
