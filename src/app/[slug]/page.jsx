import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

// const getData = async (slug) => {
//   const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>The title of the article will be placed here.</h1>
          <div className={styles.user}>
              <div className={styles.userImageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
              </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doerr</span>
              <span className={styles.date}>01.01.2025</span>
            </div>
          </div>
        </div>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quo quidem quaerat eligendi voluptatem excepturi cum, quos, 
              iusto laudantium dignissimos aspernatur ullam enim quis nesciunt 
              totam eos! Corrupti natus omnis sapiente!
            </p>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quo quidem quaerat eligendi voluptatem excepturi cum, quos, 
              iusto laudantium dignissimos aspernatur ullam enim quis nesciunt 
              totam eos! Corrupti natus omnis sapiente!
            </p>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quo quidem quaerat eligendi voluptatem excepturi cum, quos, 
              iusto laudantium dignissimos aspernatur ullam enim quis nesciunt 
              totam eos! Corrupti natus omnis sapiente!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quo quidem quaerat eligendi voluptatem excepturi cum, quos, 
              iusto laudantium dignissimos aspernatur ullam enim quis nesciunt 
              totam eos! Corrupti natus omnis sapiente!
            </p>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quo quidem quaerat eligendi voluptatem excepturi cum, quos, 
              iusto laudantium dignissimos aspernatur ullam enim quis nesciunt 
              totam eos! Corrupti natus omnis sapiente!
            </p>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Quo quidem quaerat eligendi voluptatem excepturi cum, quos, 
              iusto laudantium dignissimos aspernatur ullam enim quis nesciunt 
              totam eos! Corrupti natus omnis sapiente!
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;