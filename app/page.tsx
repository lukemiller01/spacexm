import { ApolloQueryResult, TypedDocumentNode } from "@apollo/client/core/types";
import React, {Suspense} from "react";
import { apolloClient } from "./ApolloClient";
import LaunchTimeline from "./Components/LaunchTimeline";
import { gql } from './__generated__/gql';


const LAUNCHES_PAST: TypedDocumentNode = gql(`
  query getPastLaunches($limit: Int) {
    launchesPast(limit: $limit) {
      id
      mission_name
      launch_date_utc
    }
  }
`);

async function getData() {
  var data: ApolloQueryResult<{ [key: string]: any; }>;
  var dict: Record<string, number> = {};

  try {
    var data = await apolloClient.query({ query: LAUNCHES_PAST });
    // Instantiate a dictionary to store values for launches/year
    for(let i = 0; i < data['data']['launchesPast'].length; i++) {
      let year = parseInt(data['data']['launchesPast'][i].launch_date_utc.substring(0,4)); // Convert the data point UTC to a year
      if( !(year in dict)) { // If the key (year) isn't in the dictionary, add it and include 1 launch on that key
        dict[year] = 1;
      }
      else { // Otherwise, increment the number of launches on the year
        dict[year] = dict[year] + 1
      }
    }
    return dict;
  } catch (error) {
    console.log(error)
  }
}

// TODO: change the logic for an empty dictionary beign sent as a prop
export default async function Home() {

  // Get data from SpaceX API
  const dict = await getData();

  return (
    <>
    <div className=" flex mx-4 my-4 ">
      {dict? <LaunchTimeline data={dict}/> : null}
    </div>
    </>
  )
}
