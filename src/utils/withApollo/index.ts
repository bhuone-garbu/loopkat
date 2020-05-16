import ApolloClient, { InMemoryCache } from 'apollo-boost';
import withApollo from 'next-with-apollo';

import { GRAPHQL_URL } from '../../config/urls';

export default withApollo(
  ({ initialState = {} }) =>
    new ApolloClient({
      cache: new InMemoryCache().restore(initialState),
      uri: GRAPHQL_URL,
    }),
);
