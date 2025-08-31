"use client";

// import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";
import { News } from "@/lib/types";
import { useEffect, useState } from "react";

export default function NewsPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    async function getNews() {
      const result = await fetch("http://localhost:8080/news");
      if (!result.ok) {
        setIsLoading(false);
        setError(true);
      }

      setIsLoading(false);
      const data = await result.json();
      setNews(data);
    }

    getNews();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error occured while fetching the news</h1>;
  }

  let newsContent = null;
  if (news.length > 0) {
    newsContent = <NewsList news={news} />;
  }
  return (
    <>
      <h1>News Page</h1>
      {newsContent}
    </>
  );
}
