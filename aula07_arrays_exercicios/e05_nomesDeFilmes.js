const tvShows = [
    { name: 'Breaking Bad', releaseYear: 2008 },
    { name: 'Mr. Robot', releaseYear: 2015 },
    { name: 'True Detective', releaseYear: 2014 },
    { name: 'Hannibal', releaseYear: 2013 },
    { name: 'The Handmaid\'s Tale', releaseYear: 2017 },
    { name: 'House M.D.', releaseYear: 2004 },
    { name: 'Watchmen', releaseYear: 2019 },
    { name: 'Revenge', releaseYear: 2011 }
]

//const nomesSeries = tvShows.map(serie => serie.name);

//const nomesSeries = tvShows.map(({name}) => name);

//const nomesSeries = tvShows.map(({name})=> name).filter(nome => nome.includes('r') || nome.includes('R'));

const nomesSeries = tvShows.map(({name})=> name).filter(nome => nome.match(/R|r/));

console.log(nomesSeries);