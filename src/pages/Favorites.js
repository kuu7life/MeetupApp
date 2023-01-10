import { useContext } from "react";
import FavoritesContext from "../store/favorite-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favContext = useContext(FavoritesContext);
  let content;
  if (favContext.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favContext.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;