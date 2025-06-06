import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { useEffect } from "react";

export default async function MealsPage() {
  return (
    <>
      {/* Header Section */}
      <header className={classes.header}>
        <h1>
          Delicious meals, created{""}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourseld. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>

      {/* Main Section */}
      <main className={classes.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
