// 'use client'
import React from "react";
import { apolloClient } from "./ApolloClient";
import LaunchTimeline from "./Components/LaunchTimeline";
import { gql } from './__generated__/gql';


const LAUNCHES_PAST: any = gql(`
  query getPastLaunches($limit: Int) {
    launchesPast(limit: $limit) {
      id
      mission_name
      launch_date_utc
    }
  }
`);

export default async function Home() {

  let data: any = {}

  try {
    data = await apolloClient.query({ query: LAUNCHES_PAST });
  } catch (error) {
    console.log(error)
  }

  // Instantiate a dictionary to store values for launches/year
  var dict: Record<string, number> = {};
  for(let i = 0; i < data['data']['launchesPast'].length; i++) {
    let year = parseInt(data['data']['launchesPast'][i].launch_date_utc.substring(0,4)); // Convert the data point UTC to a year
    if( !(year in dict)) { // If the key (year) isn't in the dictionary, add it and include 1 launch on that key
      dict[year] = 1;
    }
    else { // Otherwise, increment the number of launches on the year
      dict[year] = dict[year] + 1
    }
  }

  return (
    <>
      <div>
        <h1>Test Data</h1>
        <LaunchTimeline data={dict}/>
      </div>
    </>
  )
}
