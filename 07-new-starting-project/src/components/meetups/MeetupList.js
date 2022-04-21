import classes from './MeetupList.module.css';
import MeetupItem from './MeetupItem';

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
        key={meetup.id}
        id={meetup.id}
        address={meetup.address}
        description={meetup.description}
        title={meetup.title}
        image={meetup.image}
      />
      ))}
    </ul>
  );
}

export default MeetupList;