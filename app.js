const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/movie/550?api_key=6f51c35c6666b062c5aba8b5f6df92e8&query=";



const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// initially get fav movies
getMovies( APIURL);


async function getMovies(url) {
    
        const resp = await fetch(url);
        const respData = await resp.json();

        showMovies(respData.results);
    
       
    }




function showMovies(movies){
    // clear main
    main.innerHTML = '';
    movies.forEach(movie => {
        const { title, vote_average, poster_path, overview } = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
            <img src="${IMGPATH + movie.poster_path}" alt="${movie.title}">
            <div class="movie-info">
            <h3>${movie.title}</h3>
            <span class="${getClassByRate(vote_average)}">${movie.vote_average}</span>
            </div>
            <div class="overview">
                        <h3>Overview:</h3>
                        <p>${overview}</p>
                    </div>
        `;
        main.appendChild(movieEl);
    });
};

function getClassByRate(vote) {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 5) {
        return "orange";
    } else {
        return "red";
    };
};




document.addEventListener('DOMContentLoaded', () => {
    const blinkingHeader = document.getElementById('blinkingHeader');
    blinkingHeader.classList.add('blinking');
});

form.addEventListener("submit", (e) => {
        e.preventDefault();
    
        const search = searchInput.value.trim();
        // const searchTerm = search.value;
    
        if (searchInput) {
            getMovies(SEARCHAPI + searchInput);
    
            search.value = "";
        }
    }); 









