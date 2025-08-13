import { useState } from "react";
import EpisodeList from "../episodes/EpisodeList.jsx";
import EpisodeDetails from "../episodes/EpisodeDetails.jsx";

export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  if (!show) {
    return (
      <p className="pick-message">Please select a show to view episodes.</p>
    );
  }

  return (
    <section className="show-details">
      <h2>{show.name}</h2>
      <p>{show.description}</p>

      <EpisodeList
        episodes={show.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />

      {selectedEpisode ? (
        <EpisodeDetails episode={selectedEpisode} />
      ) : (
        <p className="choose-ep">Select an episode to see details.</p>
      )}
    </section>
  );
}
