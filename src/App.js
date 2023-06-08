import './App.css';
import firebase from './firebase'

function App() {
  return (
    <div className="App">
      <header className="App-header">DME Lookup</header>
      <header className="App-sub-header">Created by Lukasz Paul</header>
      <header className="App-sub-sub-header">github.com/lukaszpaul</header>

      {/*SEARCH Input & Button*/}
        <form className="SearchForm">
          <input type="text" className="SearchBar" id="search"></input>
        </form>
        <button class="custom-btn btn-1">Search</button>


      {/*RESULTS*/}

        <div className="Result"> 
            <div className='NDC'>
            LOL
            </div>
            <div className='ItemName'>

            </div>
            <div className='ItemCost'>

            </div>
            <div className='ItemRef'>

            </div>
            <div className='ItemSource'>

            </div>
        </div>

        <div className="Result"> 
            
        </div>



    </div>
  );
}

export default App;
