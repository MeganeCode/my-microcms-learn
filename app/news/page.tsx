import Image from "next/image";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "../_components/NewsList";
import styles from "./page.module.css";

export default async function Page() {
  const {contents : news} = await getNewsList();

  // return <div>{JSON.stringify(news)}</div>
  return <NewsList news={news} />
  // <div className={styles.container}>
  //   {data.contents.length === 0 ? (
  //     <p className={styles.empty}>現在、投稿はありません。</p>
  //   ) : (
  //     <NewsList news={data.contents} />
  //   )}
  // </div>
}
