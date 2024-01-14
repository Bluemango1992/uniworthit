import Head from "next/head";
import { Caption, H1, H2, H3, H5, P } from "~/components/ui/Typography";
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

      <div className="navbar bg-base-100 border-b-2 border-slate-700 sticky top-0 z-10 flex justify-between items-center">
        <a className="btn btn-ghost text-xl">UniWorthit</a>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent w-96"
          />
        </div>
        <button className="btn btn-ghost">Login</button>
      </div>

      <main className="flex flex-col w-full flex-1 px-36 py-8 min-h-screen text-left">
        <div className="grid grid-cols-12 grid-rows-1 gap-8">
          <div className="col-span-3">
            <Caption light={true}>In Demand Jobs</Caption>
            <JobListing />
          </div>
          <div className="col-span-6 col-start-4">

          <Caption light={true}>The Data</Caption>

            <Card />
            <Card />  
            <Card />
            <Card />
          </div>
          <div className="col-span-3 col-start-10 flex flex-col">
            <Caption light={true}>Blog</Caption>
            <Blog />
            <Leaguetable />
          </div>
        </div>
      </main>
    </>
  );
}

interface BlogPost {
  id: number;
  title: string;
  content: string;
}

const Blog = () => {

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "First Blog Post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Second Blog Post",
      content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <Paper>
      <div className="flex flex-col w-full flex-1 min-h-[360px] text-left p-2 mb-4">
        <ul>
          {blogPosts.map((post) => (
            <li key={post.id} className="mb-4">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-gray-600">{post.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </Paper>
  );
};

const Card = () => {
  return (

      <div className="flex flex-col bg-slate-800 w-full flex-1 min-h-[30vh] text-left rounded-lg mb-4 p-4">
        Top job opportunities
      </div>
  );
};


import React from "react";

interface University {
  id: number;
  name: string;
  rank: number;
}

const Leaguetable = () => {
  const universityData: University[] = [
    {
      id: 1,
      name: "Cambridge University",
      rank: 1,
    },
    {
      id: 2,
      name: "Oxford University",
      rank: 2,
    },
    {
      id: 3,
      name: "Imperial College London",
      rank: 3,
    },
  ];

  return (
    <Paper>
      <div className="flex flex-col w-full flex-1 min-h-[360px] text-left p-2">
        <h3 className="text-lg font-semibold mb-4">University League Table</h3>
        <ul>
          {universityData.map((university) => (
            <li
              key={university.id}
              className="flex items-center mb-2"
              style={{ paddingLeft: "1rem" }}
            >
              <span className="font-semibold mr-2">{university.rank}.</span>
              <span>{university.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </Paper>
  );
};

interface JobListingProps {
  title: string; 
  company: string;
  location: string;
  description: string;
  applyUrl?: string;
}

const JobListing = () => {

  const jobListings: JobListingProps[] = [
    {
      title: "Software Engineer",
      company: "Google",
      location: "London",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Software Engineer",
      company: "Facebook",
      location: "London",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Software Engineer",
      company: "Amazon",
      location: "London",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <Paper>
      <div className="flex flex-col w-full flex-1 min-h-[360px] text-left">
        <ul className="mt-4">
          {jobListings.map((job) => (
            <li key={job.title} className="mb-4">
              <div className="flex items-center mb-2">
                <span className="font-semibold mr-2">{job.title}</span>
                <span className="text-gray-500">at</span>
                <span className="ml-2">{job.company}</span>
              </div>
              <div className="text-gray-600">
                <span className="mr-2">Location:</span>
                <span>{job.location}</span>
              </div>
              <div className="text-gray-600">
                <span className="mr-2">Description:</span>
                <P light={true}>{job.description}</P>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Paper>
  );
}


const Paper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" border-gray-600 rounded-md p-4 shadow-md border">
      {children}
    </div>
  );
};




