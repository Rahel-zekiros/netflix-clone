import React from "react";
import styles from "./MovieCard.module.css";
import { FaCirclePlay } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

// TMDB genre id -> name, covering both /discover/movie and /discover/tv ids
const GENRE_MAP = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
  10759: "Action & Adventure",
  10762: "Kids",
  10763: "News",
  10764: "Reality",
  10765: "Sci-Fi & Fantasy",
  10766: "Soap",
  10767: "Talk",
  10768: "War & Politics",
};

function MovieCard({ movie }) {
  const title = movie?.title || movie?.name || "Untitled";
  const mediaType = movie?.title ? "Movie" : movie?.name ? "TV Show" : "Movie";
  const genres =
    movie?.genre_ids
      ?.map((id) => GENRE_MAP[id])
      .filter(Boolean)
      .slice(0, 3) || [];

  return (
    <div className={styles.cardWrapper}>
      {/* poster image */}
      <img
        className={styles.poster}
        src={`${IMAGE_BASE}${movie?.poster_path}`}
        alt="poster image"
      />

      {/* hover card */}
      <div className={styles.hoverCard}>
        {/* img */}
        <img
          className={styles.hoverImage}
          src={`${IMAGE_BASE}${movie?.poster_path}`}
          alt="hover image"
        />
        {/* badge */}
        <div className={styles.badge}>Recently added</div>
        {/* title */}
        <h3 className={styles.cardTitle}>{title}</h3>
        {/* button row */}
        <div className={styles.buttonsRow}>
          <FaCirclePlay
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <BsPlusCircle
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <GoCheckCircleFill
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <IoIosArrowDropdownCircle
            className={styles.circleButtonSmall}
            color="white"
            size={40}
          />
        </div>
        {/* metadata row */}
        <div className={styles.metaRow}>
          <span className={styles.tag}>{movie?.adult ? "18+" : "U/A 16+"}</span>
          <span className={styles.tag}>{mediaType}</span>
          <span className={styles.tag}>HD</span>
        </div>

        {/* genres */}
        <div className={styles.genres}>
          {genres.length > 0
            ? genres.map((g, index) => (
                <span key={g}>
                  {g}
                  {index < genres.length - 1 && (
                    <span className={styles.dot}>•</span>
                  )}
                </span>
              ))
            : "Genre unavailable"}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
