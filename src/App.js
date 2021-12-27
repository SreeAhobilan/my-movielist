import './App.css';
import 'animate.css';
import{useState,useEffect} from "react";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Route,Switch,useParams,useHistory } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AppBar, Toolbar } from '@mui/material';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import ButtonGroup from '@mui/material/ButtonGroup';
import RestartAltTwoToneIcon from '@mui/icons-material/RestartAltTwoTone';
import { createContext, useContext} from "react";

const themeCtx = createContext(null);
export default

function App(){
  // const movies=[
  //   {
  //     id:"100",
  //     name:"Spiderman No Way Home",
  //     trailer:"https://www.youtube.com/embed/ZYzbalQ6Lg8",
  //     poster:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-mannowayhome_lob_crd_03.jpg",
  //     rating:"7.8",
  //     summary:"With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
  //   },
  //   {
  //     id:"101",
  //     name:"Eternals",
  //     trailer:"https://www.youtube.com/embed/x_me3xsvDgk",
  //     poster:"https://wdwnt.com/wp-content/uploads/2021/02/Eternals-calendar-art-8557558-1200x1200.jpeg",
  //     rating:"6.8",
  //     summary:"The Eternals, a race of immortal beings with superhuman powers who have secretly lived on Earth for thousands of years, reunite to battle the evil Deviants."
  //   },
  //   {
  //     id:"102",
  //     name:"Shang-Chi",
  //     trailer:"https://www.youtube.com/embed/8YjFbMbfXaQ",
  //     poster:"https://www.themoviedb.org/t/p/original/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg",
  //     rating:"8.8",
  //     summary:"Martial-arts master Shang-Chi confronts the past he thought he left behind when he's drawn into the web of the mysterious Ten Rings organization."
  //   },
  //   {
  //     id:"103",
  //     name:"Black Widow",
  //     trailer:"https://www.youtube.com/embed/Fp9pNPdNwjI",
  //     poster:"https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
  //     rating:"6.7",
  //     summary:"Natasha Romanoff, a former KGB spy, is shocked to find out that her ex handler, General Dreykov, is still alive. While evading capture by Taskmaster, she is forced to confront her dark past."
  //   },
  //   {
  //     id:"104",
  //     name:"Spiderman Far Away From Home",
  //     trailer:"ttps://www.youtube.com/embed/Nt9L1jCKGnE",
  //     poster:"https://m.media-amazon.com/images/I/9113Gh15i2L._SL1500_.jpg",
  //     rating:"8.6",
  //     summary:"Peter Parker, the beloved superhero Spider-Man, faces four destructive elemental monsters while on holiday in Europe. Soon, he receives help from Mysterio, a fellow hero with mysterious origins."
  //   },
  //   {
  //     id:"105",
  //     name:"Avengers Endgame",
  //     trailer:"https://www.youtube.com/embed/TcMBFSGVi1c",
  //     poster:"https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
  //     rating:"9.2",
  //     summary:"After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance."
  //   },
  //   {
  //     id:"106",
  //     name:"Captain Marvel",
  //     trailer:"https://www.youtube.com/embed/Z1BCujX3pw8",
  //     poster:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/3-sam_gilbey.jpg",
  //     rating:"6.8",
  //     summary:"Amidst a mission, Vers, a Kree warrior, gets separated from her team and is stranded on Earth. However, her life takes an unusual turn after she teams up with Fury, a S.H.I.E.L.D. agent."
  //   }
  // ];
  const [theme, setTheme] = useState(false);
return(
  <themeCtx.Provider value={[theme, setTheme]}>
  <div className="App">
  <Appbar/>
  </div>
  </themeCtx.Provider>
);
}
function Details(){
  let {id} = useParams();
  const [movieViewed,setMovie]=useState([]);
  const history=useHistory();
  const gettingdetails=()=>{
    fetch(`https://619dc51f131c600017089034.mockapi.io/users/${id}`)
    .then((data)=>data.json())
    .then((movie)=>setMovie(movie))
  }
  useEffect(gettingdetails,[])
  return (
  <div>
        <iframe width="811" height="456" src={movieViewed.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h1>{movieViewed.name}</h1>
        <ArrowBackIcon color='primary' onClick={()=>history.goBack}></ArrowBackIcon>
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
function TickTacToe(){
  const { width, height } = useWindowSize();
  const defaultvalues=[
    null,null,null,null,null,null,null,null,null,
  ];
  const [board,setBoard]=useState(defaultvalues);
  const [isXTurn,setIsXturn]=useState("");
  const [theme] = useContext(themeCtx);
  const style1={background:(theme)?"white":"black",color:(theme)?"black":"white"}
  const handleClick=(index)=>{
    if(!winner && !board[index] && isXTurn!==""){
    console.log("clicked",index);
    const boardCopy=[...board];
    boardCopy[index]=isXTurn?"X":"O";
    setBoard(boardCopy);
    setIsXturn(!isXTurn);
    }
  };
  const decideWinner=board=>{
    const lines=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [3,4,5],
    ];
    for (let i=0;i < lines.length;i++){
      const [a,b,c]=lines[i];
      if(board[a]!==null &&board[a]===board[b]&&board[a]===board[c]){
      console.log("winner is",board[a]);
      return board[a];
      }
    }
    return null;
  };
  const winner=decideWinner(board);
  return (
    <div style={style1} className='theme'>
    <div className='game-head'>
      <h1 class="animate__animated animate__bounceInRight">Tick Tack Toe</h1>
      <div className='buttons-tag'>
        <div>
        <ButtonGroup  className="animate__animated animate__backInDown animate__delay-2s" disableElevation variant="contained">
        <Button onClick={()=>setIsXturn(true)}>
        X
        </Button>
        <Button onClick={()=>setIsXturn(false)}>
        O
        </Button>
        </ButtonGroup>
        </div>
        </div>
      {isXTurn===true?<p className='xbtn' style={{color:"blue"}}>It's X Turn</p>:isXTurn===false?<p className='obtn' style={{color:"blue"}}>Its O Turn</p>:""}
    <div className='board'>
    {board.map((val,index)=>(
      <GameBox val={val} onPlayerClick={()=>handleClick(index)}/>
    ))}
  <div>
  {winner?<div className='reset'><Confetti width={width} height={height}></Confetti><span>the winner is {winner}</span><span><RestartAltTwoToneIcon  onClick={()=>setBoard(defaultvalues)}>Reset</RestartAltTwoToneIcon></span></div>:""}
  </div>
  </div>
  </div>
  </div>
  );
}
function GameBox({val,onPlayerClick}){
  const styles={color:val==="X"?"blue":"red"}
  return <div style={styles} 
  onClick={()=>onPlayerClick()}
  className='game-box'>{val}
  </div>
}
function Movie({name,poster,rating,summary,id,deletion}){
  const history=useHistory();
  const check=(rating>=8.5)?"green" : "red";
  const style=(check==="green")?{background:"green",color:"white"} :{background:"red",color:"white"};
  const [show,setShow]=useState(false);

  return(
    <div className="movie-container">
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
      <Button color='primary' onClick={()=>history.push(`/edit-movies/${id}`)}>edit</Button>
      <IconButton onClick={()=>deletion(id)} color='error'aria-label="delete" size="large"><DeleteIcon fontSize="inherit" /></IconButton>
      </div>
      {show?<p className="movie-summary">{summary}</p>:""}
    </div>
  )
}
function Call(){
  const [list,setList]=useState([]);
  const getList=()=> {
    fetch("https://619dc51f131c600017089034.mockapi.io/users",{method:"GET"})
    .then((data)=>data.json())
    .then((mvs)=>setList(mvs))
  }
  const [theme] = useContext(themeCtx);
  const style1={background:(theme)?"white":"black",color:(theme)?"black":"white"};
  const items=(id)=>{
    fetch(`https://619dc51f131c600017089034.mockapi.io/users/${id}`,{method:"DELETE"})
    .then(()=>getList())
  }
  useEffect(getList,[]);
  return(
    <div style={style1} className='theme'>
    <h1  className="animate__animated animate__bounceInRight">Marvel Cinematic Universe</h1>
    <div className="list">
  {list.map(({name,poster,rating,summary,id},index)=>
    <Movie deletion={items} key={index} index={index} id={id} name={name} poster={poster} rating={rating} summary={summary}/>)}
    </div>
    </div>
  )
}
function Addmovie(){
const [name,setName]=useState("");
const [poster,setPoster]=useState("");
const [rating,setRating]=useState("");
const [summary,setSummary]=useState("");
const [trailer,setTrailer]=useState("");
const [theme] = useContext(themeCtx);
const history=useHistory();
const style1={background:(theme)?"white":"black",color:(theme)?"black":"white"}
const addedmovie=()=>{
  const newMovie={name,poster,rating,summary,trailer}
  fetch("https://619dc51f131c600017089034.mockapi.io/users",{method:"POST",
  body:JSON.stringify(newMovie),
  headers:{"Content-Type":"application/json"}
})
.then(()=>history.push("/movies"));
}
  return(
    <div style={style1} className='theme'>
      <div className='addmovielist'>
      <input onChange={(event)=>setName(event.target.value)} placeholder='Enter Movie Name'/>
      <input onChange={(event)=>setPoster(event.target.value)} placeholder='Enter Movie Image'/>
      <input onChange={(event)=>setTrailer(event.target.value)} placeholder='Enter Trailer URL'/>
      <input onChange={(event)=>setRating(event.target.value)} placeholder='Enter Movie Rating'/>
      <input onChange={(event)=>setSummary(event.target.value)} placeholder='Enter Movie Summary'/>
      <Button onClick={()=>addedmovie()} variant="contained" color="success">Add Movie</Button>
    </div>
    </div>
  )
}
function Edit(){
  const {id}=useParams();
  const history = useHistory();
  const[name,setName]=useState("");
  const[image,setImage] = useState("");
  const[trailer,setTrailer] = useState("");
  const[rating,setRating]=useState("");
  const[summary,setSummary]=useState("");
  const [theme] = useContext(themeCtx);
  const style1={background:(theme)?"white":"black",color:(theme)?"black":"white"}

  const reAssigning=({name,poster,trailer,rating,summary})=>{
      setName(name);
      setImage(poster);
      setTrailer(trailer);
      setRating(rating);
      setSummary(summary);
  }
  const editing=()=>{
    fetch(`https://619dc51f131c600017089034.mockapi.io/users/${id}`,{method:"GET"})
    .then((data)=>data.json())
    .then((movie)=>reAssigning(movie))

  }
  useEffect(editing,[]);

  const Edits=()=>{
    const editedMovie = {name,image,trailer,rating,summary};
    fetch(`https://619dc51f131c600017089034.mockapi.io/users/${id}`,
            {method:"PUT",
            body:JSON.stringify(editedMovie),
            headers:{"Content-Type":"application/json"}})
      .then(()=>history.push("/movies"));
  }

  return(
  <div>
    <div style={style1} className="editMovie">
        <h3 className="head">Edit your movies</h3>

        <input placeholder='enter movie name' value={name} onChange={(event)=>{setName(event.target.value);}}/>
        <br/>
        <input placeholder='enter movie image url' value={image} onChange={(event)=>{setImage(event.target.value);}}/>
        <br/>
        <input placeholder='enter the movie trailer url' value={trailer} onChange={(event)=>{setTrailer(event.target.value);}}/>
        <br/>
        <input placeholder='enter movie rating' value={rating} onChange={(event)=>{setRating(event.target.value);}}/>
        <br/>
        <input placeholder='enter movie summary' value={summary} onChange={(event)=>{setSummary(event.target.value);}}/>
        <br/>
      <Button className="button"  variant="contained" color="success" onClick={()=>Edits()}>Add Movie</Button>
      <Button className="cancelButton" variant="contained" color="error" onClick={()=>{history.push(`/movies`)}}>Cancel</Button>
    </div>
  </div>)
}
function Appbar(){
  const history=useHistory();
  const [theme, setTheme] = useContext(themeCtx);
  const style={background:(theme)?"black":"white",color:(theme)?"white":"black"}
  const style1={background:(theme)?"white":"black",color:(theme)?"black":"white"}
  return(
    <div>
      <AppBar position='static' sx={{background:"red"}}>
  <Toolbar>
    <Button color='inherit' onClick={()=>history.push("/")}>
      Home
    </Button>
    <Button color='inherit' onClick={()=>history.push("/movies")}>
      Movies
    </Button>
    <Button color='inherit' onClick={()=>history.push("/add-movies")}>
      Add Movie
    </Button>
    <Button color='inherit' onClick={()=>history.push("/game")}>
      Game
    </Button>
    <Button style={style} onClick={()=>setTheme(!theme)}>change theme</Button>
  </Toolbar>
</AppBar>

<Switch>
  <Route exact path="/">
    <div style={style1} className='theme'><h1 className="animate__animated animate__bounceInRight">Welcome To My Page</h1></div>
  </Route>
  <Route exact path="/movies">
    <div className='movies'><Call/></div>
  </Route>
  <Route exact path="/add-movies">
  <div className='add-movies'><Addmovie/></div>
  </Route>
  <Route exact path="/edit-movies/:id">
  <div className='edit-movies'><Edit/></div>
  </Route>
  <Route exact path="/movies/:id">
  <Details/>
  </Route>
  <Route exact path="/game">
  <div className='gaming'><TickTacToe/></div>
  </Route>
  <Route path="**">
    <Notfound/>
  </Route>
</Switch>
    </div>
  )
}
