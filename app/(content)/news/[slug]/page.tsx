import { notFound } from "next/navigation";
import Link from "next/link";
import { getNewsItem } from "@/lib/news";

export default async function NewsDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const newsArticle = await getNewsItem(slug);

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
