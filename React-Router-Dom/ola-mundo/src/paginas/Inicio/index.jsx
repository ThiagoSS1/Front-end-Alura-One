import styles from "./Inicio.module.css";

import posts from "../../json/posts.json"
import PostCard from "../../componentes/PostCard";

export default function Inicio () {
    return (
        <>
                <ul className={`${styles.posts} custom-ul`}>
                    {posts.map((post) => (
                        <li key={post.id} className={styles.customLi}>
                            <PostCard post={post} />
                        </li>
                    ))}
                </ul>
        </>
    );
}