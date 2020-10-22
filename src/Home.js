import React, { useState, useEffect } from 'react';
import { useWorksFetch } from './components/hooks/useWorkFetch';
import { GRAPHQL_API, GET_WORKS_QUERY } from './config';
import { Work } from './components/elements/Work';
import { Grid } from './components/elements/Grid';
import { FilterMake } from './components/elements/FilterMake';
import { FilterModel } from './components/elements/FilterModel';

const Home = () => {
  const [{ data, loading, error }, fetchWorks] = useWorksFetch();

  const [filter, setfilter] = useState([]);
  const [modelFilter, setModelFilter] = useState([]);

  const handleMakeFilters = (filters) => {
    let allWorks = [];
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

    if (allWorks.length === 0) {
      console.log('no choose');
    }
  };
  const handleModelFilters = (filters) => {
    console.log(filter);
    let allWorks = [];
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
    if (allWorks.length === 0) {
      console.log('no choose');
    }
  };

  useEffect(() => {
    fetchWorks(GRAPHQL_API, GET_WORKS_QUERY);
  }, []);
  //console.log(data);
  return (
    <>
      <FilterMake handleMakeFilters={(filters) => handleMakeFilters(filters)} />
      <FilterModel
        handleModelFilters={(filters) => handleModelFilters(filters)}
      />
      <Grid header="Item">
        {filter.length === 0
          ? data.works.map((item) => <Work key={item.id} item={item} />)
          : filter.map((item) => <Work key={item.id} item={item} />)}
      </Grid>
    </>
  );
};

export default Home;
