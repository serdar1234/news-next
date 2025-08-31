import NewsList from "@/components/news-list";
import { News } from "@/lib/types";

export default async function NewsPage() {
  const result = await fetch("http://localhost:8080/news");
  if (!result.ok) {
    throw new Error("Failed to fetch the data");
  }

  const news: News[] = await result.json();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
