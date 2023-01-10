import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((item) => (
        <MeetupItem
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
          address={item.address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
