// components/meetups/MeetupList.js

import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          imageurl={meetup.imageurl}
          name={meetup.name}
          price={meetup.price}
          stock={meetup.stock}
          description={meetup.description}
          createdAt={meetup.createdAt}
          category={meetup.category} // 오타 수정: cateogry -> category
        />
      ))}
    </ul>
  );
}

export default MeetupList;
