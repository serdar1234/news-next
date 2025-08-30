import Link from "next/link";

export default function MainHeader() {
  return (
    <header>
      <ul>
        <li style={{ display: "inline-block", margin: "0 16px" }}>
          <Link href="/">Home Page</Link>
        </li>
        <li style={{ display: "inline-block" }}>
          <Link href="/news">News</Link>
        </li>
      </ul>
    </header>
  );
}
