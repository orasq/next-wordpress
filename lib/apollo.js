import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://nextwordpress.local/graphql",
  cache: new InMemoryCache()
});
