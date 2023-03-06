import React from "react";
import { apolloClient } from './ApolloClient'

const ApolloExtractCache = async () => {
    await Promise.all(apolloClient.activeQueries);

    return (
        <script
            dangerouslySetInnerHTML={{
                __html: `window.__APOLLO_STATE__=${JSON.stringify(
                    apolloClient.extract()
                ).replace(/</g, "\\u003c")};`,
            }}
        />
    );
};

export default ApolloExtractCache;