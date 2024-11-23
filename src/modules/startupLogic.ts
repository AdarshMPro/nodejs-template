import axios from "axios";

export const fetchDataAndLog = async () => {
  console.log("Fetching data on startup...");

  try {
    const response = await axios.get("https://www.tnp3.xyz/api/homepage/");
    const data = response.data;

    if (data.ok === 1) {
      const formattedMovies = data.movies.map((movie: any) => ({
        id: movie.id,
        name: movie.NAME,
        language: movie.LANGUAGE,
        size: movie.SIZE,
        note: movie.NOTE,
        tag: movie.TAG,
        date: movie.date,
        screenshot: movie.SCREENSHOT,
        download: Object.values(movie).find((value: any) =>
          typeof value === "string" && value.includes("clicknupload.space")
        ),
        page: movie.table_name,
        print: movie.PRINT,
        genre: movie.GENRES,
        trailer: movie.TRAILER,
        image: movie.IMAGE,
      }));

      console.log("Formatted Movies Data:", JSON.stringify(formattedMovies, null, 2));
    } else {
      console.error("Error: Unable to fetch data from API.");
    }
  } catch (error: any) {
    console.error("Error:", error.message);
  }
};
