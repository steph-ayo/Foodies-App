import Link from "next/link";
import Image from "next/image";

import classes from "./meal-item.module.css";

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className={classes.meal}>
      {/* Header section of article */}
      <header>
        <div className={classes.image}>
          <Image
            src={`https://maxschwarzmueller-nextjs-demo-users-image.s3.amazonaws.com/${image}`}
            alt={title}
            fill
          />
        </div>

        {/* Title and creator's name section */}
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>

      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
