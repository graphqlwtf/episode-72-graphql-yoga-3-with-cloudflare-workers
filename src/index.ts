import { createYoga, createSchema } from "graphql-yoga";

export interface Env {}

const yoga = createYoga<Env & ExecutionContext>({
  schema: createSchema({
    typeDefs: /* GraphQL */ `
      type Query {
        hello: String!
      }
    `,
    resolvers: {
      Query: {
        hello: () => "Cloudflare Workers!",
      },
    },
  }),
  landingPage: false,
  graphqlEndpoint: "/",
});

export default {
  fetch: yoga.fetch,
};
