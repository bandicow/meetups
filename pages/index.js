import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

import MeetupList from "./../components/meetups/MeetupList";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="활발한 리액트 모임 리스트를 찾아보세요!"
        />
      </Head>
      <MeetupList meetups={props.meetups}></MeetupList>;
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   //   //fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  //fetch data from an API

  const client = await MongoClient.connect(
    "mongodb+srv://tester:1234@cluster0.fyd7hrj.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;
