"use client";

export default function FilterError({ error }: { error: Error }) {
  return (
    <div id="error">
      <h2 style={{ color: "gold" }}>Filter Error</h2>
      <p>Error message: {error.message}</p>
    </div>
  );
}
