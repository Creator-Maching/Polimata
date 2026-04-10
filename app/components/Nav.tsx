import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-blue-500 text-white rounded m-3 p-3">
      
      <ul className="
        flex 
        flex-col 
        sm:flex-row 
        items-center 
        justify-center 
        gap-2 
        sm:gap-4
        text-lg 
        sm:text-xl 
        md:text-2xl 
        font-bold
      ">

        <li className="w-full sm:w-auto text-center">
          <Link href="/" className="block hover:bg-black rounded p-2 sm:p-3">
            Home
          </Link>
        </li>

        <li className="w-full sm:w-auto text-center">
          <Link href="/world" className="block hover:bg-black rounded p-2 sm:p-3">
            Material
          </Link>
        </li>

        <li className="w-full sm:w-auto text-center">
          <Link href="/mind" className="block hover:bg-black rounded p-2 sm:p-3">
            Mental
          </Link>
        </li>

        <li className="w-full sm:w-auto text-center">
          <Link href="/technology" className="block hover:bg-black rounded p-2 sm:p-3">
            Tecnológico
          </Link>
        </li>

      </ul>
    </nav>
  );
}
