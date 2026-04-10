import Link from "next/link";

export default function Nav() {
  return (
    <nav className="text-2xl font-bold bg-blue-500 text-white rounded m-3 p-3">
      <ul className="flex items-center justify-center space-x-4 m-3 p-3">

        <li>
          <Link href="/" className="hover:bg-black rounded p-3">
            Home
          </Link>
        </li>

        <li>
          <Link href="/world" className="hover:bg-black rounded p-3">
            Material
          </Link>
        </li>

        <li>
          <Link href="/mind" className="hover:bg-black rounded p-3">
            Mental
          </Link>
        </li>

        <li>
          <Link href="/technology" className="hover:bg-black rounded p-3">
            Tecnológico
          </Link>
        </li>

      </ul>
    </nav>
  );
}