<script context="module">
  const APIKey = import.meta.env.VITE_APIKey;
  const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&language=en-US&include_adult=false`;

  export async function load({ fetch, params }) {
    const response = await fetch(`${searchURL}&query=${params.name}`);
    const data = await response.json();

    if (response.ok) {
      return {
        props: {
          searchedMovies: data.results,
        },
      };
    }
  }
</script>

<script>
  import Movies from "$lib/components/Movies.svelte";

  export let searchedMovies;
</script>

<section>
  <Movies movies={searchedMovies} />
</section>
