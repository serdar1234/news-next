import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";
import { News } from "@/lib/types";

export default function NewsPage() {
  const news: News[] = getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
