export const GRAPHQL_API = 'https://take-home-test-gql.herokuapp.com/query';

export const GET_WORKS_QUERY = `
 query works {
   works {
    id
    filename
    imageWidth
    imageHeight
    urls {
      link
    }
    exif {
      model
      make
    }
   }
 }

`;
