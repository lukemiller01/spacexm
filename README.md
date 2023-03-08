# SpaceXM

SpaceXM tracks SpaceX's flight history between 2008-2022.

## Roadmap

- [x] Integrate the Apollo Client with NextJS 13
- [x] Use the GraphQL code generator to make a query to the SpaceX GraphQL endpoint
- [ ] Add granularity to the "Yearly Cadence" graph: type of rocket & mission
- [ ] Add dynamic pages for mission details
- [ ] Add Jest

## Tech Stack

This project is built on the [NextJS App Directory](https://beta.nextjs.org/docs). Next 13 uses React Server components to decrease client-side JS bundles, along with other improvements from Next 12.

This project uses [GraphQL](https://graphql.org/) and the [Apollo Client](https://www.apollographql.com/docs/react/).

This project receives its data from the [SpaceX GraphQL API](https://github.com/apollographql/spacex).

#### Other tech used:

- [Tailwind UI](https://tailwindui.com/)
- [React ChartJS](https://react-chartjs-2.js.org/)

## Constraints

- Awaiting React Server Components to be supported among both the Apollo Client & React component libraries.
    - Currently, using Tailwind for styling. Application loading state not available.
- Awaiting advanced routing patterns to implement modals of individual flights.

## Notes

#### Why did I choose Next 13?

Next is one of the [most popular](https://2022.stateofjs.com/en-US/libraries/) JavaScript rendering frameworks. The migration from Next 12 to Next 13 is monumental because of the change to the "app directory" structure.

Next 13 is in beta. Limitations to migrating from Next 12 to Next 13 exist, some of which have hindered SpaceXM.

## Resources

- [[Feedback] App Directory in Next.js 13](https://github.com/vercel/next.js/discussions/41745)
