import { ApolloClient as BaseApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { ApolloClientOptions } from "@apollo/client/core/ApolloClient";

// Trying to find MVP
let global:any = {};

try {
    global = window;
} catch {

}

class ApolloClient<TCacheShape> extends BaseApolloClient<TCacheShape> {
    constructor(options: ApolloClientOptions<TCacheShape>) {
        super(options);
    }

    public activeQueries: ReturnType<ApolloClient<TCacheShape>["query"]>[] = [];

    query: BaseApolloClient<TCacheShape>["query"] = (options) => {
        const promise = super.query(options);
        this.activeQueries.push(promise);
        return promise;
    };
}

export const apolloClient = new ApolloClient({
    ssrMode: true,
    // uri: "https://main--spacex-l4uc6p.apollographos.net/graphql",
    cache: new InMemoryCache().restore(global.__APOLLO_STATE__),
    connectToDevTools: true,
    link: createHttpLink({
        uri: "https://main--spacex-l4uc6p.apollographos.net/graphql",
    }),
});