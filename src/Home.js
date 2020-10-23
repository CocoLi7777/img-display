import React, { useState, useEffect } from 'react';
import { useWorksFetch } from './components/hooks/useWorkFetch';
import { GRAPHQL_API, GET_WORKS_QUERY } from './config';
import { Work } from './components/elements/Work';
import { Grid } from './components/elements/Grid';
import { ToolBar } from './components/elements/ToolBar';
import { FilterMake } from './components/elements/FilterMake';
import { FilterModel } from './components/elements/FilterModel';
import { Spinner } from './components/elements/Spinner';
import { Alert } from './components/elements/Alert';
import { Error } from './components/elements/Error';
const Home = () => {
  const [{ data, loading, error }, fetchWorks] = useWorksFetch();

  const [filter, setfilter] = useState([]);
  const [doFilter, setDoFilter] = useState(false);

  const handleMakeFilters = (filters) => {
    setDoFilter(true);
    let allWorks = [];

    if (filters == 'all') {
      allWorks = [...data.works];
      setfilter(allWorks);
    } else {
      if (filter.length === 0) {
        allWorks = data.works.filter(
          (item) =>
            item.exif.make.toUpperCase().indexOf(filters.toUpperCase()) >= 0
        );
      } else {
        allWorks = filter.filter(
          (item) =>
            item.exif.make.toUpperCase().indexOf(filters.toUpperCase()) >= 0
        );
      }
      setfilter(allWorks);
    }
  };
  const handleModelFilters = (filters) => {
    setDoFilter(true);
    let allWorks = [];

    console.log(filter);
    if (filters == 'all') {
      allWorks = [...data.works];
      setfilter(allWorks);
    } else {
      if (filter.length === 0) {
        allWorks = data.works.filter(
          (item) =>
            item.exif.model.toUpperCase().indexOf(filters.toUpperCase()) >= 0
        );
      } else {
        allWorks = filter.filter(
          (item) =>
            item.exif.model.toUpperCase().indexOf(filters.toUpperCase()) >= 0
        );
      }
      setfilter(allWorks);
    }
  };

  useEffect(() => {
    fetchWorks(GRAPHQL_API, GET_WORKS_QUERY);
  }, []);
  if (error === true) return <Error />;
  if (loading === true) return <Spinner />;
  return (
    <>
      <ToolBar>
        <FilterMake
          handleMakeFilters={(filters) => handleMakeFilters(filters)}
        />
        <FilterModel
          handleModelFilters={(filters) => handleModelFilters(filters)}
        />
      </ToolBar>
      {filter.length === 0 && doFilter === true && <Alert />}
      <Grid
        header={
          doFilter === true
            ? filter.length +
              (filter.length < 2 ? ' work ' : ' works ') +
              'found'
            : ' All works'
        }
      >
        {filter.length === 0
          ? data.works.map((item) => <Work key={item.id} item={item} />)
          : filter.map((item) => <Work key={item.id} item={item} />)}
      </Grid>
    </>
  );
};

export default Home;
