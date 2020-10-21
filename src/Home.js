import React, { useState, useEffect } from 'react';
import { useWorksFetch } from './components/hooks/useWorkFetch';
import { GRAPHQL_API, GET_WORKS_QUERY } from './config';
import { Work } from './components/elements/Work';
import { Grid } from './components/elements/Grid';

const Home = () => {
  const [{ data, loading, error }, fetchWorks] = useWorksFetch();

  useEffect(() => {
    fetchWorks(GRAPHQL_API, GET_WORKS_QUERY);
  }, []);
  console.log(data);
  return (
    <>
      <Grid header="Item">
        {data.works.map((item) => (
          <Work key={item.id} item={item} />
        ))}
      </Grid>
    </>
  );
};

export default Home;
