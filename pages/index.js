// pages/index.js

import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

import MeetupList from "../components/meetups/MeetupList";

export async function getStaticProps() {
  const client = await MongoClient.connect("mongodb+srv://webmaker4115:1234@picapo.ojljofd.mongodb.net/picapo-items?retryWrites=true&w=majority");
  const db = client.db();
  const meetupsCollection = db.collection("picapo-items");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        name: meetup.name,
        description: meetup.description,
        price: meetup.price,
        stock: meetup.stock,
        category: meetup.category,
        createdAt: meetup.createdAt,
        imageurl: meetup.imageurl,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

const HomePage = (props) => {
  console.log(props.meetups);

  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="활발한 리액트 모임 리스트를 찾아보세요!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

export default HomePage;
