import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <h1 className="text-xl text-white flex gap-2">
        <span className="text-blue-500">
          {"<"}
          <span className="text-muted-foreground">/</span>
          {">"}
        </span>
        Site.Dev
      </h1>
    </Link>
  );
}
