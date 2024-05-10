import Head from "next/head";
import FolderPage from "./folder";
import { Router } from "next/router";
import SharedPage from "./shared";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Linkbrary</title>
      </Head>
      메인페이지
      <br></br>
      <Link href="/folder">Folder</Link>
      <br></br>
      <Link href="/shared">Shared</Link>
    </>
  );
}
