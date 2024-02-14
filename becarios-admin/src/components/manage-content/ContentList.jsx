import { useEffect, useState } from 'react';
import ContentListItem from './ContentListItem';
import {
  fetchArchivedPost,
  fetchPostedArticles,
} from '../../server/API/ManageContentAPI';
import {
  fetchAllPostedArticlesAZ,
  fetchAllPostedArticles09,
  searchArticleByTitle
} from '../../server/API/GlobalAPI';
import { useManageContentContext } from '../../hooks/useManageContentContext';

function ContentList({ type }) {
  const context = useManageContentContext();
  console.log('Context:', context);
  const {
    sortOrder ='',
    searchQuery,
    setSortOrder,
    setSearchQuery,
  } = useManageContentContext() || {};
  const { articles = '', setArticles } =
    useManageContentContext() || {};

  useEffect(() => {
    // console.log('Sort Order:', sortOrder);
    // console.log('Search Query:', searchQuery);

    const fetchArticlesData = async () => {
      try {
        let articlesData;

         if (searchQuery && searchQuery !== '') {
          articlesData = await searchArticleByTitle(searchQuery,type);
        } else {
          articlesData = await (type === 'Posted' ? fetchPostedArticles() : fetchArchivedPost());
        }

        // console.log('Fetched Articles:', articlesData);

        let sortedArticles;

        switch (sortOrder) {
          case 'alpha-asc':
            sortedArticles = await fetchAllPostedArticlesAZ('asc', type);
            break;
          case 'alpha-desc':
            sortedArticles = await fetchAllPostedArticlesAZ('desc', type);
            break;
          case 'date-asc':
            sortedArticles = await fetchAllPostedArticles09('asc', type);
            break;
          case 'date-desc':
            sortedArticles = await fetchAllPostedArticles09('desc', type);
            break;
          default:
            sortedArticles = articlesData;
        }
        
        console.log('Current sortOrder:', sortOrder);
        // Ensure sortedArticles is an array
        sortedArticles = Array.isArray(sortedArticles) ? sortedArticles : [];

        console.log('sortedArticles: ', sortedArticles);

        setArticles(sortedArticles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    // Call the asynchronous function
    fetchArticlesData();
  }, [sortOrder, searchQuery, setArticles, type]);


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
        {articles.map((article) => {
          // date displayed would depend on type of article, for archived should be dateArchived
          let articleDate = type === 'Posted' ? article.data.datePosted : article.data.dateCreated;
          return (
          <ContentListItem
            type={type}
            data={{
            author: article.data.author,
            datePosted: articleDate,
            image: article.data.image,
            title: article.data.title
          }}
            id={article.id}
            key={article.id}
          />
          );
        })}
        {/* <ContentListItem type={type} id={1} />
        <ContentListItem type={type} id={2} />
        <ContentListItem type={type} id={3} />
        <ContentListItem type={type} id={3} /> */}
      </div>
    </div>
  );
}

export default ContentList;
