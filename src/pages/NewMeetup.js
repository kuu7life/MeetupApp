import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

function NewMeetupPage() {
  const navigate = useNavigate();

  function onAddNewMeetupHandler(meetupData) {
    fetch(
      "https://myreactapp-3522e-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
  }
  return (
    <section>
      <h1>Add new meetup</h1>
      <NewMeetupForm onAddNewMeetup={onAddNewMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
