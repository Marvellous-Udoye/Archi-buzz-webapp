"use client"

import { useEffect, useState } from "react";
import Input from "../component/common/archi-input";
import ArticleCard, { ArticlecardProp } from "./components/articleCards";

const Article = () => {
  const [search, setSearch] = useState('')

  const [articles, setArticles] = useState<ArticlecardProp[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchArticles = async (): Promise<ArticlecardProp[] | undefined> => {
    try {
      const response = await fetch('/articlesData.json');
      if (!response.ok) {
        throw new Error('Failed to fetch article data');
      }
      const article = await response.json();
      return article;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };

  useEffect(() => {
    const articlesData = async () => {
      const fetchedArticle = await fetchArticles();
      if (fetchedArticle) {
        setArticles(fetchedArticle);
      } else {
        setError('Failed to fetch articles');
      }
      setLoading(false);
    };
    articlesData();
  }, []);

  if (loading) return <p className="px-4 lg:px-0 max-w-[1266px] mx-auto mt-6">Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-[1266px] mx-auto px-4 lg:px-0 mb-6 sm:mb-8">
      <form className="max-w-[593px] relative mt-8 mb-6">
        <Input
          id="searchBar"
          value={search}
          type="text"
          styles="pl-[46px] sm:pl-16"
          handleChange={(e) => setSearch(e.target.value)}
          placeholder="Search article by name"
        >
          <svg className="absolute top-1/2 left-5 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 15L19 19" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M1 9C1 13.4183 4.58172 17 9 17C11.213 17 13.2161 16.1015 14.6644 14.6493C16.1077 13.2022 17 11.2053 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </Input>
      </form>

      <p className="text-[24px] sm:text-[2.5rem] leading-6 sm:leading-[48.8px] font-medium mb-4">Today’s Trending Articles</p>
      <div className="flex flex-col lg:flex-row justify-between gap-6">
        <div>
          <ArticleCard
            sm={false}
            articleTitle="The Future of Architectural Design"
          >
            Artificial Intelligence is revolutionizing the field of
            architecture, enabling designers to create innovative solutions that
            were previously unimaginable. Through machine learning algorithms,
            architects can analyze vast amounts of data to derive insights that
            guide their design processes. This technology can enhance
            creativity, improve efficiency, and lead to sustainable building
            practices. <span className="text-black">Read More</span>
          </ArticleCard>
        </div>

        <div className="flex overflow-hidden overflow-x-auto sm:grid gap-4 sm:gap-6">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              articleTitle="The Future of Architectural Design"
              articlePicture={article.articlePicture}
              profilePicture={article.profilePicture}
              style="flex flex-col items-start mb-4 sm:mb-0"
              sm={true}
            />
          ))}
        </div>
      </div>

      <div>
        <p className="text-[24px] sm:text-[2.5rem] leading-[48.8px] font-medium mt-5 sm:my-4">Other articles</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <ArticleCard
            sm={false}
            articleTitle="Exploring the Intersection of Architecture and Artificial Intelligence: A New Era of Design">
            Artificial Intelligence is revolutionizing the field of
            architecture, enabling designers to create innovative solutions that
            were previously unimaginable. Through machine learning algorithms,
            architects can analyze vast amounts of data to derive insights that
            guide their design processes. This technology can enhance
            creativity, improve efficiency, and lead to sustainable building
            practices. <span className="text-black">Read More</span>
          </ArticleCard>
          <ArticleCard
            sm={false}
            articleTitle="Exploring the Intersection of Architecture and Artificial Intelligence: A New Era of Design">
            Artificial Intelligence is revolutionizing the field of
            architecture, enabling designers to create innovative solutions that
            were previously unimaginable. Through machine learning algorithms,
            architects can analyze vast amounts of data to derive insights that
            guide their design processes. This technology can enhance
            creativity, improve efficiency, and lead to sustainable building
            practices. <span className="text-black">Read More</span>
          </ArticleCard>
          <ArticleCard
            sm={false}
            articleTitle="Exploring the Intersection of Architecture and Artificial Intelligence: A New Era of Design"
          >
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
