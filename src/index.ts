const axios = require('axios');

// Set the content type to JSON
console.log('Content-Type: application/json');

// Send GET request
axios.get('https://www.tnp3.xyz/api/homepage/')
  .then(response => {
    const data = response.data;

    // Check if the response is successful
    if (data.ok === 1) {
      const formattedMovies = [];

      // Loop through each movie
      data.movies.forEach(movie => {
        // Extract relevant information
        const formattedMovie = {
          id: movie.id,
          name: movie.NAME,
          language: movie.LANGUAGE,
          size: movie.SIZE,
          note: movie.NOTE,
          tag: movie.TAG,
          date: movie.date,
          screenshot: movie.SCREENSHOT,
          download: null, // Placeholder for download link
          page: movie.table_name,
          print: movie.PRINT,
          genre: movie.GENRES,
          trailer: movie.TRAILER,
          image: movie.IMAGE,
        };

        // Loop through each parameter to find the download link
        for (const param in movie) {
          if (typeof movie[param] === 'string' && movie[param].includes('clicknupload.space')) {
            formattedMovie.download = movie[param];
            break;
          }
        }

        // Add formatted movie to the array
        formattedMovies.push(formattedMovie);
      });

      // Output formatted movies as JSON
      console.log(JSON.stringify(formattedMovies, null, 2));
    } else {
      console.error('Error: Unable to fetch data from API.');
    }
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
