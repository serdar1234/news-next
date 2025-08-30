import NewsList from "@/components/news-list";
import { getAvailableNewsYears, getNewsForYear } from "@/lib/news";
import Link from "next/link";
import { Usable, use } from "react";

export default function FilteredNewsPage({
  params,
}: {
  params: Usable<{ filter: string }>;
}) {
  const { filter } = use(params);
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
  }

  let newsContent = <p>There were no news in that year</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }
  const links = getAvailableNewsYears();

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link}>
                <Link href={`/archive/${link}`}>{link}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
