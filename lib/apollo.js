import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://nextwordpress.local/graphql",
  cache: new InMemoryCache()
});
