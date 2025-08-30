"use client";

import { Usable, use } from "react";

export default function NewsDetailPage({
  params,
}: {
  params: Usable<{ slug: string }>;
}) {
  const { slug } = use(params);
  return <h1>News Detail Page ~ {slug}</h1>;
}
