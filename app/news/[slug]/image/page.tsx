import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import { Usable, use } from "react";

export default function ImagePage({
  params,
}: {
  params: Usable<{ slug: string }>;
}) {
  const { slug } = use(params);
  const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem?.image}`} alt={newsItem?.title} />
    </div>
  );
}
