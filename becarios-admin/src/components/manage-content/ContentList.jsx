import { useEffect, useState } from 'react';
import ContentListItem from './ContentListItem';
import {
  fetchAllPendingArticlesWithDocID,
  fetchPostedArticles,
} from '../../server/API/ManageContentAPI';

function ContentList({ type }) {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fetchArticlesData() {
      const articlesData = await fetchPostedArticles();
      setArticles(articlesData);
      console.log(articlesData);
    }

    fetchArticlesData();
  }, []);

  return (
    <div className=" rounded-8 mt-[2rem] flex w-[100%] flex-col gap-2 sm:min-w-[100%] md:max-w-[100%] lg:min-w-[40vh] lg:max-w-[100%]">
      <div className="req-items -mt-5 mb-4 flex flex-col gap-6 md:grid md:grid-cols-3 ">
        {/* CONVERT INTO ARRAY.MAP */}
        {articles.map((article) => (
          <ContentListItem
            type={type}
            data={article.data}
            id={article.id}
            key={article.id}
          />
        ))}
        {/* <ContentListItem type={type} id={1} />
        <ContentListItem type={type} id={2} />
        <ContentListItem type={type} id={3} /> */}
      </div>
    </div>
  );
}

export default ContentList;
