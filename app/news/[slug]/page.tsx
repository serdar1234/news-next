"use client";

import { Usable, use } from "react";
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function NewsDetailPage({
  params,
}: {
  params: Usable<{ slug: string }>;
}) {
  const { slug } = use(params);
  const newsArticle = DUMMY_NEWS.find((news) => news.slug === slug);

  if (!newsArticle) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsArticle.slug}/image`}>
          <img
            src={`/images/news/${newsArticle.image}`}
            alt={newsArticle.title}
          />
        </Link>
        <h1>{newsArticle?.title}</h1>
        <time dateTime={newsArticle.date}>{newsArticle.date}</time>
      </header>
      <p>{newsArticle.content}</p>
    </article>
  );
}
