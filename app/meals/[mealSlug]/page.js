import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export default function MealDetailsPage({ params }) {
  const meal = getMeal(params.mealSlug);

  // const meal = {
  //   title: "Test Meal",
  //   image: "/images/burger.jpg",
  //   creator: "Chef John",
  //   creator_email: "chef@example.com",
  //   summary: "A tasty burger",
  //   instructions: "<p>Cook the patty. Add cheese. Serve.</p>",
  // };

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill />
          {/* <Image src={meal.image} alt={meal.title} fill /> */}
        </div>

        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>

      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}

// import Image from "next/image";
// import { notFound } from "next/navigation";

// import { getMeal } from "@/lib/meals";
// import classes from "./page.module.css";

// export async function generateMetadata({ params }) {
//   const meal = getMeal(params.mealSlug);

//   if (!meal) {
//     notFound();
//   }

//   return {
//     title: meal.title,
//     description: meal.summary,
//   };
// }

// export default function MealDetailsPage({ params }) {
//   const meal = getMeal(params.mealSlug);

//   if (!meal) {
//     notFound();
//   }

//   meal.instructions = meal.instructions.replace(/\n/g, "<br />");

//   return (
//     <>
//       <header className={classes.header}>
//         <div className={classes.image}>
//           <Image
//             src={`https://maxschwarzmueller-nextjs-demo-users-image.s3.amazonaws.com/${meal.image}`}
//             alt={meal.title}
//             fill
//           />
//         </div>
//         <div className={classes.headerText}>
//           <h1>{meal.title}</h1>
//           <p className={classes.creator}>
//             by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
//           </p>
//           <p className={classes.summary}>{meal.summary}</p>
//         </div>
//       </header>
//       <main>
//         <p
//           className={classes.instructions}
//           dangerouslySetInnerHTML={{
//             __html: meal.instructions,
//           }}
//         ></p>
//       </main>
//     </>
//   );
// }
