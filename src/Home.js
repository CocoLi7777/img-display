import React, { useState, useEffect } from 'react';
import { GRAPHQL_API, GET_WORKS_QUERY } from './config';
import { useWorksFetch } from './components/hooks/useWorkFetch';
import { Work } from './components/elements/Work';
import { Grid } from './components/elements/Grid';
import { ToolBar } from './components/elements/ToolBar';
import { FilterMake } from './components/elements/FilterMake';
import { FilterModel } from './components/elements/FilterModel';
import { Spinner } from './components/elements/Spinner';
import { Alert } from './components/elements/Alert';
import { Error } from './components/elements/Error';
import { ResetBtn } from './components/elements/ResetBtn';

const Home = () => {
  const [{ data, loading, error }, fetchWorks] = useWorksFetch();
  const [filter, setfilter] = useState([]);
  const [makeFilter, setMakeFilter] = useState([]);
  const [modelFilter, setModelFilter] = useState([]);
  const [isMakeAll, setIsMakeAll] = useState(false);
  const [isModelAll, setIsModelAll] = useState(false);

  const handleMakeFilters = (filters) => {
    let allWorks = [];

    if (filters == 'all' && (modelFilter.length === 0 || isModelAll === true)) {
      setIsMakeAll(true);
      allWorks = [...data.works];
      setfilter(allWorks);
      setMakeFilter(allWorks);
    } else if (
      filters == 'all' &&
      modelFilter.length > 0 &&
      filter.length === 0
    ) {
      setfilter(modelFilter);
    } else if (filters == 'all' && modelFilter.length > 0) {
      setIsMakeAll(true);
      return;
    } else if (filters !== 'all' && modelFilter.length === 0) {
      setIsMakeAll(false);
      allWorks = data.works.filter(
        (item) =>
          item.exif.make.toUpperCase().indexOf(filters.toUpperCase()) >= 0
      );
      setfilter(allWorks);
      setMakeFilter(allWorks);
    } else if (filters !== 'all' && modelFilter.length > 0) {
      setIsMakeAll(false);
      allWorks = filter.filter(
        (item) =>
          item.exif.make.toUpperCase().indexOf(filters.toUpperCase()) >= 0
      );
      setfilter(allWorks);
      setMakeFilter(allWorks);
    }
  };
  const handleModelFilters = (filters) => {
    let allWorks = [];

    if (filters == 'all' && (makeFilter.length === 0 || isMakeAll === true)) {
      setIsModelAll(true);
      allWorks = [...data.works];
      setfilter(allWorks);
      setModelFilter(allWorks);
    } else if (
      filters == 'all' &&
      makeFilter.length > 0 &&
      filter.length === 0
    ) {
      setfilter(makeFilter);
    } else if (filters == 'all' && makeFilter.length > 0) {
      setIsModelAll(true);
      return;
    } else if (filters !== 'all' && makeFilter.length === 0) {
      setIsModelAll(false);
      allWorks = data.works.filter(
        (item) => item.exif.model.toUpperCase() === filters.toUpperCase()
      );
      setfilter(allWorks);
      setModelFilter(allWorks);
    } else if (filters !== 'all' && makeFilter.length > 0) {
      setIsModelAll(false);
      allWorks = filter.filter(
        (item) => item.exif.model.toUpperCase() == filters.toUpperCase()
      );
      setfilter(allWorks);
      setModelFilter(allWorks);
    }
  };

  const handleReset = () => {
    document.location.reload(true);
  };

  useEffect(() => {
    fetchWorks(GRAPHQL_API, GET_WORKS_QUERY);
  }, []);
  if (error === true) return <Error />;
  if (loading === true) return <Spinner />;

  return (
    <>
      <ToolBar data-test="toolbarComponent">
        <FilterMake
          data-test="makeFilter"
          callback={(filters) => handleMakeFilters(filters)}
        />
        <FilterModel
          data-test="modelFilter"
          callback={(filters) => handleModelFilters(filters)}
        />
        <ResetBtn text="Reset" data-test="resetBtn" callback={handleReset} />
      </ToolBar>
      {filter.length === 0 &&
        (modelFilter.length > 0 || makeFilter.length > 0) && <Alert />}
      <Grid
        data-test="works"
        header={
          modelFilter.length > 0 || makeFilter.length > 0
            ? filter.length +
              (filter.length < 2 ? ' work ' : ' works ') +
              'found'
            : ' All works'
        }
      >
        {filter.length === 0 &&
        modelFilter.length === 0 &&
        makeFilter.length === 0
          ? data.works.map((item) => (
              <Work data-test="work" key={item.id} item={item} />
            ))
          : filter.map((item) => (
              <Work data-test="work" key={item.id} item={item} />
            ))}
      </Grid>
    </>
  );
};

export default Home;
