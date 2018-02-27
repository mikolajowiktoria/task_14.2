var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    src: 'https://image.ibb.co/cTX83H/harry_potter_820x490.jpg',  
    desc: 'film o czarodzieju'
  },
  {
    id: 2,  
    title: 'Król Lew',
    src: 'https://image.ibb.co/hFZMOH/Powstanie_aktorska_wersja_Krola_Lwa_article.jpg',  
    desc: 'Film o królu sawanny'
  },
    {
    id: 3,
    title: 'Forrest Gump',
    src: 'https://image.ibb.co/bZk6qx/Pinterest2_1.jpg',    
    desc:  'Run Forrest RUN !'   
    }
];
var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),         
      React.createElement('img', {src: movie.src}),                         
      React.createElement('p', {}, movie.desc),
                                
    );
});
var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));
                        