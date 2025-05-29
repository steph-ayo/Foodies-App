import Link from "next/link";

export default function Home() {
  return (
    <main style={{ color: "white", textAlign: "center" }}>
      <h1>Time to get started!</h1>

      <h3>All three routes</h3>
      <p>
        <Link href="/meals">Meals</Link>
      </p>
      <p>
        <Link href="/meals/share">Share Meal</Link>
      </p>
      <p>
        <Link href="/community">Community</Link>
      </p>

      <h3>A dynamic route</h3>
      <p></p>
    </main>
  );
}
