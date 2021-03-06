import { writable } from "svelte/store";

export const categories = writable(["Popular", "Top Rated", "Upcoming"]);

export let selectedCategory = writable("popular");

export const APIKey = import.meta.env.VITE_APIKey;
// link for popular movies
export const popular = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`;
// link for top-rated movies
export const topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKey}&language=en-US&page=1`;
// link for upcoming movies
export const upcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKey}&language=en-US&page=1`;
