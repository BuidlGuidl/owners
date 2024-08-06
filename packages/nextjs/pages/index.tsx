import React from "react";
import Link from "next/link";
import type { NextPage } from "next";
import { StreamContractInfo } from "~~/components/StreamContractInfo";

const Home: NextPage = () => {
  return (
    <>
      <div className="max-w-3xl px-4 py-8">
        {/* <h1 className="text-4xl font-bold mb-8 text-primary-content bg-primary inline-block p-2">Owners</h1> */}
        <div>
          <p className="mt-0">
            Funding{" "}
            <Link href="/members" className="link link-primary">
              Project Owners
            </Link>{" "}
            with ETH streams for owning projects or cohorts within the BuidlGuidl.
          </p>
          {/* <p>
            <
              Members
            </Link>{" "}
          </p> */}
        </div>
        <div className="mb-10">
          <StreamContractInfo />
        </div>
      </div>
    </>
  );
};

export default Home;
