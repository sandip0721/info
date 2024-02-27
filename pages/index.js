import Head from "next/head";
import Feed from "../components/Feed"
export default function Home() {
  return (
    <div className="bg-gray-100 h-screen">
      <Head>
        <title>sandiprathod</title>
      </Head>
      <Feed/>
    </div>
  );
}
