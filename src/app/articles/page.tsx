import React from "react";
import ArticleCard from "./components/articleCards";

const Article = () => {
  const searchIconPath =
    "M15 15L19 19M1 9C1 13.4183 4.58172 17 9 17C11.213 17 13.2161 16.1015 14.6644 14.6493C16.1077 13.2022 17 11.2053 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9Z";

  return (
    <div className="max-w-[1328px] mx-auto px-4 pt-4">
      <form className="max-w-[593px] relative mb-10  mt-16">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-1/2 -translate-y-1/2 left-4 z-10"
        >
          <path
            d={searchIconPath}
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <input type="text" placeholder="Search Article by name" className="h-full w-full py-3 px-4 pl-12 border-2 border-[#E3E3E3] rounded-[20px]" />
      </form>
      <p className="text-[2.5rem] leading-[48.8px] font-medium mb-5">Today’s Trending Articles</p>
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        <div>
          <ArticleCard sm={false}>
              Artificial Intelligence is revolutionizing the field of
              architecture, enabling designers to create innovative solutions that
              were previously unimaginable. Through machine learning algorithms,
              architects can analyze vast amounts of data to derive insights that
              guide their design processes. This technology can enhance
              creativity, improve efficiency, and lead to sustainable building
              practices. <span className="text-black">Read More</span>
          </ArticleCard>
        </div>
        <div className="grid gap-6">
          <ArticleCard sm={true}></ArticleCard>
          <ArticleCard sm={true}></ArticleCard>
          <ArticleCard sm={true}></ArticleCard>
          <ArticleCard sm={true}></ArticleCard>
        </div>
      </div>

      <div>
        <p className="text-[2.5rem] leading-[48.8px] font-medium mb-5">other articles</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ArticleCard sm={false}>
              Artificial Intelligence is revolutionizing the field of
              architecture, enabling designers to create innovative solutions that
              were previously unimaginable. Through machine learning algorithms,
              architects can analyze vast amounts of data to derive insights that
              guide their design processes. This technology can enhance
              creativity, improve efficiency, and lead to sustainable building
              practices. <span className="text-black">Read More</span>
          </ArticleCard>
          <ArticleCard sm={false}>
              Artificial Intelligence is revolutionizing the field of
              architecture, enabling designers to create innovative solutions that
              were previously unimaginable. Through machine learning algorithms,
              architects can analyze vast amounts of data to derive insights that
              guide their design processes. This technology can enhance
              creativity, improve efficiency, and lead to sustainable building
              practices. <span className="text-black">Read More</span>
          </ArticleCard>
          <ArticleCard sm={false}>
              Artificial Intelligence is revolutionizing the field of
              architecture, enabling designers to create innovative solutions that
              were previously unimaginable. Through machine learning algorithms,
              architects can analyze vast amounts of data to derive insights that
              guide their design processes. This technology can enhance
              creativity, improve efficiency, and lead to sustainable building
              practices. <span className="text-black">Read More</span>
          </ArticleCard>
        </div>
      </div>
    </div>
  );
};

export default Article;
