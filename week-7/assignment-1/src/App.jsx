
import './App.css';

function App() {
 return <>
 <ProfileComponent name={"Chayan"} place={"Siliguri"} posts={69} likes={69} photos={69} imglink={'./brain.svg'}></ProfileComponent>
 </>
}

function ProfileComponent({name, place, posts, likes, photos, imglink}) {
  return <div className="topDiv">
  <img src={imglink} id="img" alt ="image"></img>
  <h1 id="name">{name}</h1>
  <div id="place">{place}</div>

  <div className='numbersdiv'>

  <div className='posts'>
  <div className="number">{posts}</div>
  <div className="numberName">Posts</div>
  </div>

  <div className='likes'>
  <div className="number">{likes}</div>
  <div className="numberName">Likes</div>
  </div>

  <div className='photos'>
  <div className="number">{photos}</div>
  <div className="numberName">Photos</div>
  </div>

  </div>

</div>
}

export default App
