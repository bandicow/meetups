import { useRouter } from "next/router";
import Head from "next/head";
import { Fragment } from "react";

import NewMeetupForm from "./../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    console.log(data); // 201

    router.push("/");
  }

  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="너만의 모임을 추가하고 새로운 만남의 기회로 만드세요!"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler}> </NewMeetupForm>;
    </Fragment>
  );
};

export default NewMeetupPage;
