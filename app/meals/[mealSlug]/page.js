import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";

export default async function MealDetailsPage({ params }) {
  // const meal = await getMeal(params.mealSlug);

  const meal = {
    title: "Test Meal",
    image: "/images/burger.jpg", // Must start with "/"
    creator: "Chef John",
    creator_email: "chef@example.com",
    summary: "A tasty burger",
    instructions: "<p>Cook the patty. Add cheese. Serve.</p>",
  };

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />

          {/* <Image
            src={
              meal?.image ? (
                <Image src={meal.image} alt={meal.title} fill />
              ) : (
                <p style={{ color: "red" }}>⚠ No image found for this meal</p>
              )
            }
            alt={meal.title}
            fill
          /> */}
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
// import classes from "./page.module.css";

// export default function MealDetailsPage({ params }) {
//   const meal = {
//     title: "Test Meal",
//     image: "/some-image.jpg",
//     creator: "John Doe",
//     creator_email: "john@example.com",
//     summary: "A tasty test meal.",
//     instructions: "<p>Step 1: Eat. Step 2: Smile.</p>",
//   };

//   return (
//     <>
//       <header className={classes.header}>
//         <div className={classes.image}>
//           <Image src={meal.image} alt={meal.title} fill />
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
//           dangerouslySetInnerHTML={{ __html: meal.instructions }}
//         ></p>
//       </main>
//     </>
//   );
// }
