import Head from "next/head";
import { Caption, H1, H2, H3, P } from "~/components/ui/Typography";



import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Home</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      

      <div className="navbar bg-base-100 border-b-2 border-slate-700 sticky top-0 z-10">
        <a className="btn btn-ghost text-xl">UniWorthit</a>
      </div>

      <main className="flex flex-col w-full flex-1 px-36 py-8 min-h-screen text-left">

      <div className="grid grid-cols-12 grid-rows-1 gap-8">

          <div className="col-span-3"><Card /></div>
          <div className="col-span-6 col-start-4"><Jobs /></div>
          <div className="col-span-3 col-start-10 flex flex-col gap-4"><Blog /><Leaguetable /></div>
      </div>
      </main>      
    </>
  );
}

const Blog = () => {

  return (
    <Paper>
      <div className="flex flex-col w-full flex-1 min-h-[360px] text-left">
        Hello world
      </div>
    </Paper>
  );
}

const Leaguetable = () => {

  return (
    <Paper>
        <div className="flex flex-col w-full flex-1 min-h-[360px] text-left">
          Hello world
        </div>
    </Paper>
  );
}

const Jobs = () => {

  return (
    <Paper>
      <div className="flex flex-col w-full flex-1 min-h-screen text-left">
        Hello world
      </div>
    </Paper>
  );
}

const Card = () => {
  
    return (
      <div className="flex flex-col w-full flex-1 min-h-[360px] text-left bg-slate-100">
        Hello world
      </div>
    );
  }

  const Paper = ({ children }: { children: React.ReactNode }) => {
    
      return (
        <div className="border-2 border-slate-700">
          {children}
        </div>
      );
    }




