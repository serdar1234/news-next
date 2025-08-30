import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";
import { Usable, use } from "react";

export default function FilteredNewsPage({
  params,
}: {
  params: Usable<{ year: string }>;
}) {
  const { year } = use(params);
  const newsYear = getNewsForYear(year);

  return <NewsList news={newsYear} />;
}
