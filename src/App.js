//import logo from './logo.svg';
//import './App.css';

import React, { Component, useState, useEffect } from 'react';

const App = () =>{
  const [news, setNews] = useState([]);
  const [searchResult, setsearchResult] = useState('react');

  const newFetch = () =>{
    let httpGet = window.location.protocol;
    fetch(`${httpGet}//hn.algolia.com/api/v1/search?query=${searchResult}`)
    .then(result => result.json())
    // .then(data => console.log(data))
    // .then(data => console.log('test'))
    .then(data => setNews(data.hits))
    .catch( error => console.log(error));
  }
useEffect(()=>{
  newFetch();
}, [searchResult])

const changeSerachResult = (e) =>{
  setsearchResult(e.target.value);
}

  return(
    <div>
      <h1>News</h1>
      <form>
        <input type="text" value={searchResult} onChange={changeSerachResult} />
        <button>Serach</button>
      </form>
      {
        //news.map((n,i)=>(<p key={i}>{n.title}</p>))
        news.map((n, i) => (<p key={i}>{n.title}</p>))
    
    }
    </div>
  )
}

// const App = () => {
//   const [count, setCount] = useState(0);

//   const increment = () =>{
//     setCount(count + 1);
//   }
// useEffect( () =>{
//   document.title = `clicked ${count} times`
// })
  

//   return (
//     <div>
//       <h2>Counter App</h2>
//       <button onClick={increment}>Clicked {count} times</button>
//     </div>
//   );

// }

// class App extends Component{
//   state ={
//     count : 0
//   };
// increment = () =>{
//   this.setState({
//     count: this.state.count + 1,
//   });
// }

// componentDidMount(){
//   document.title = `click ${this.state.count} times`
// }

// componentDidUpdate(){
//   document.title = `click ${this.state.count} times`
// }

//   render(){
//     return(
//       <div>
//         <h2>Counter App</h2>
//         <button onClick={this.increment}>Clicked {this.state.count} times</button>
//       </div>

//     )
//   }
// }

export default App;
