"use client";

import Link from "next/link";

interface Props {
  label: string;
  url: string;
}

const LinktreeButton: React.FC<Props> = ({ label, url }) => {
  const isExternal = url.startsWith("http");

  const className =
    "block w-full bg-white/30 hover:bg-white/30 transition text-white px-4 py-3 rounded-lg font-semibold tracking-wide text-sm text-center";

  return isExternal ? (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {label}
    </Link>
  ) : (
    <Link href={url} className={className}>
      {label}
    </Link>
  );
};

export default LinktreeButton;
