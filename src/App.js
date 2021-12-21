// import logo from './logo.svg';
import './App.css';
import{useState} from "react";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
//import { Switch } from '@mui/material';
import { Route,Switch,Link,useParams,useHistory } from 'react-router-dom';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import InfoIcon from '@mui/icons-material/Info';


export default function App(){
  const [showData,showHiding]=useState(false);
  const styles={display:(showData)?"block":"none"}
return(
  <div className="App">
    <IconButton aria-label="menuBar" size="larger" color="error"
        onClick={()=>{showHiding(!showData);}}>
      <MenuTwoToneIcon/>
      </IconButton>
  <nav style={styles}>
    <div>
  <Link to="/">Home</Link>
  </div>
  <div>
  <Link to="/movies">Movies</Link>
  </div>
  <div>
  <Link to="/add-movies">Add Movies</Link>
  </div>
  </nav>

<Switch>
  <Route exact path="/">
    <div className='bg-img'><h1>welcome</h1></div>
  </Route>
  <Route exact path="/movies">
    <div className='movies'><Call/></div>
  </Route>
  <Route exact path="/add-movies">
  <div className='add-movies'><Addmovie/></div>
  </Route>
  <Route exact path="/movies/:id">
  <Details/>
  </Route>
  <Route path="**">
    <Notfound/>
  </Route>
</Switch>
</div>
);
}
function Details(){
  let {id} = useParams();
  const movieViewed = updatedmovies[id];
  return (<div>
        <iframe width="811" height="456" src={movieViewed.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h1>{movieViewed.name}</h1>
        <p style={{color:'white'}}>{movieViewed.rating}</p>
        <p style={{color:'white'}}>{movieViewed.summary}</p>
  </div>)
}
function Notfound(){
  return(
    <div className='not-found-container'>
    <h2>404</h2>
    <img className='not-found-img'
    src='https://kfg6bckb.media.zestyio.com/yalantis-interactive-404.gif'
    alt=""/>
    </div>
  )
}
const movies=[
  {
    name:"Spiderman No Way Home",
    trailer:"https://www.youtube.com/embed/ZYzbalQ6Lg8",
    poster:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-mannowayhome_lob_crd_03.jpg",
    rating:"7.8",
    summary:"With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
  },
  {
    name:"Eternals",
    trailer:"https://www.youtube.com/embed/x_me3xsvDgk",
    poster:"https://wdwnt.com/wp-content/uploads/2021/02/Eternals-calendar-art-8557558-1200x1200.jpeg",
    rating:"6.8",
    summary:"The Eternals, a race of immortal beings with superhuman powers who have secretly lived on Earth for thousands of years, reunite to battle the evil Deviants."
  },
  {
    name:"Shang-Chi",
    trailer:"https://www.youtube.com/embed/8YjFbMbfXaQ",
    poster:"https://www.themoviedb.org/t/p/original/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
    rating:"8.8",
    summary:"Martial-arts master Shang-Chi confronts the past he thought he left behind when he's drawn into the web of the mysterious Ten Rings organization."
  },
  {
    name:"Black Widow",
    trailer:"https://www.youtube.com/embed/Fp9pNPdNwjI",
    poster:"https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    rating:"6.7",
    summary:"Natasha Romanoff, a former KGB spy, is shocked to find out that her ex handler, General Dreykov, is still alive. While evading capture by Taskmaster, she is forced to confront her dark past."
  },
  {
    name:"Spiderman Far Away From Home",
    trailer:"ttps://www.youtube.com/embed/Nt9L1jCKGnE",
    poster:"https://m.media-amazon.com/images/I/9113Gh15i2L._SL1500_.jpg",
    rating:"8.6",
    summary:"Peter Parker, the beloved superhero Spider-Man, faces four destructive elemental monsters while on holiday in Europe. Soon, he receives help from Mysterio, a fellow hero with mysterious origins."
  },
  {
    name:"Avengers Endgame",
    trailer:"https://www.youtube.com/embed/TcMBFSGVi1c",
    poster:"https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
    rating:"9.2",
    summary:"After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance."
  },
  {
    name:"Captain Marvel",
    trailer:"https://www.youtube.com/embed/Z1BCujX3pw8",
    poster:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/3-sam_gilbey.jpg",
    rating:"6.8",
    summary:"Amidst a mission, Vers, a Kree warrior, gets separated from her team and is stranded on Earth. However, her life takes an unusual turn after she teams up with Fury, a S.H.I.E.L.D. agent."
  }
];
let updatedmovies=[...movies]
function Movie({name,poster,rating,summary,id}){
  const [remove,setRemove]=useState(false);
  const history=useHistory();
  const styles={display:remove?"none":"block"}
  const check=(rating>=8.5)?"green" : "red";
  const style=(check==="green")?{background:"green",color:"white"} :{background:"red",color:"white"};
  const [show,setShow]=useState(false);
  return(
    <div style={styles}className="movie-container">
      <img src={poster} 
      alt="" 
      className="movie-poster" />
      <div className="movie-specs">
      <h3 className="movie-name">{name}</h3>
      <p className="movie-rating"><span style={style}>{rating}</span></p>
      </div>
      <div className='buttons'>
      <Button onClick={()=>setShow(!show)} variant="text">Toggle Summary</Button>
      <IconButton color='primary' onClick={()=>history.push(`/movies/${id}`)}><InfoIcon/></IconButton>
      <IconButton onClick={()=>setRemove(!remove)} color='error'aria-label="delete" size="large"><DeleteIcon fontSize="inherit" /></IconButton>
      </div>
      {show?<p className="movie-summary">{summary}</p>:""}
    </div>
  )
}
function Call(){
  const movieList=(updatedmovies.length>movies.length)?updatedmovies:movies;
  return(
    <div>
    <h1>Marvel Cinematic Universe</h1>
    <div className="list">
  {movieList.map(({name,poster,rating,summary},index)=>
    <Movie key={index} id={index} name={name} poster={poster} rating={rating} summary={summary}/>)}
    </div>
    </div>
  )
}
function Addmovie(){
const [movieList,addMovie]=useState(movies);
updatedmovies=movieList;
const [name,setName]=useState("");
const [poster,setPoster]=useState("");
const [rating,setRating]=useState("");
const [summary,setSummary]=useState("");
const newMovie={name,poster,rating,summary}
  return(
    <div>
      <div className='addmovielist'>
      <input onChange={(event)=>setName(event.target.value)} placeholder='Enter Movie Name'/>
      <input onChange={(event)=>setPoster(event.target.value)} placeholder='Enter Movie Image'/>
      <input onChange={(event)=>setRating(event.target.value)} placeholder='Enter Movie Rating'/>
      <input onChange={(event)=>setSummary(event.target.value)} placeholder='Enter Movie Summary'/>
      <Button onClick={()=>{addMovie([...movieList,newMovie]);}} variant="contained" color="success">Add Movie</Button>
    </div>
    </div>
  )
}
