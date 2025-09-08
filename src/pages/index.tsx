import { ReactElement } from "react";

import Layout from "@/layout/layout";

import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="flex flex-col gap-2">
        <div className="text-3xl font-light tracking-tighter text-gray-700">
          The Next JS Template
        </div>

        <div className="max-w-md text-sm text-gray-700">
          A comprehensive frontend template built with Next JS 15, featuring the
          latest Tailwind CSS 4 and Shadcn for beautiful component primitives,
          and Prettier for consistent code formatting.
        </div>
      </div>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
