import { useEffect, useState } from 'react';
import ContentListItem from './ContentListItem';
import {
  fetchAllPendingArticlesWithDocID,
  fetchAllPostedArticles09,
  fetchAllPostedArticlesAZ,
  fetchPostedArticles,
  searchArticleByTitle,
} from '../../server/API/ManageContentAPI';
import { useManageContentContext } from '../../hooks/useManageContentContext';

function ContentList({ type }) {
  const {
    sortOrder,
    searchQuery,
    setSortOrder,
    setSearchQuery,
  } = useManageContentContext();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    console.log('Sort Order:', sortOrder);
    console.log('Search Query:', searchQuery);

    const fetchArticlesData = async () => {
      try {
        let articlesData;

        if (searchQuery && searchQuery !== '') {
          articlesData =
            await searchArticleByTitle(searchQuery);
        } else {
          articlesData = await fetchPostedArticles();
        }

        console.log('Fetched Articles:', articlesData);

        let sortedArticles;

        switch (sortOrder) {
          case 'alpha-asc':
            sortedArticles =
              await fetchAllPostedArticlesAZ('asc');
            break;
          case 'alpha-desc':
            sortedArticles =
              await fetchAllPostedArticlesAZ('desc');
            break;
          case 'date-asc':
            sortedArticles =
              await fetchAllPostedArticles09('asc');
            break;
          case 'date-desc':
            sortedArticles =
              await fetchAllPostedArticles09('desc');
            break;
          default:
            sortedArticles = articlesData;
        }

        console.log('Current sortOrder:', sortOrder);
        // Ensure sortedArticles is an array
        sortedArticles = Array.isArray(sortedArticles)
          ? sortedArticles
          : [];

        console.log('sortedArticles: ', sortedArticles);

        setArticles(sortedArticles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    // Call the asynchronous function
    fetchArticlesData();
  }, [sortOrder, searchQuery]);

  // Handlers for sorting and searching
  const handleSortAlphaUp = () => setSortOrder('alpha-asc');
  const handleSortAlphaDown = () =>
    setSortOrder('alpha-desc');
  const handleSortDateAsc = () => setSortOrder('date-asc');
  const handleSortDateDesc = () =>
    setSortOrder('date-desc');
  const handleSearch = (query) => setSearchQuery(query);

  return (
    <div className=" rounded-8 mt-[2rem] flex w-[100%] flex-col gap-2 sm:min-w-[100%] md:max-w-[100%] lg:min-w-[40vh] lg:max-w-[100%]">
      <div className="req-items -mt-5 mb-4 flex flex-col gap-6 md:grid md:grid-cols-3 ">
        {/* CONVERT INTO ARRAY.MAP */}
        {articles.map((article) => (
          <ContentListItem
            type={type}
            data={{
              author: article.data.author,
              datePosted: article.data.datePosted,
              image: article.data.image,
              title: article.data.title,
            }}
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
