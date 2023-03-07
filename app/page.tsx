// 'use client'
import React from "react";
import { apolloClient } from "./ApolloClient";
import { gql } from './__generated__/gql';


const LAUNCHES_PAST: any = gql(`
  query getPastLaunches($limit: Int) {
    launchesPast(limit: $limit) {
      id
      mission_name
      links {
        mission_patch
      }
    }
  }
`);

export default async function Home() {

  let data: any = {}

  try {
    data = await apolloClient.query({ query: LAUNCHES_PAST });
    console.log(data)
    // setData(data["data"])
  } catch (error) {
    console.log(error)
  }

  return (
    <>
      <div>
        <p>Testing data...</p>
        {data ? data['data']['launchesPast'].map((item:any) =>
          <p key={item.id}>{item.id}</p>
        ) : null}
      </div>
    </>
  )
}
