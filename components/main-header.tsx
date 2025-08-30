import Link from "next/link";
import NavigationLink from "./nav-link";

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavigationLink href="/news">News</NavigationLink>
          </li>
          <li>
            <NavigationLink href="/archive">Archive</NavigationLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
