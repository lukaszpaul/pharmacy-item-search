import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">DME Lookup</header>
      <header className="App-sub-header">By: Lukasz Paul NYC</header>
      <header className="App-sub-sub-header">github.com/lukaszpaul</header>

      {/*SEARCH Input & Button*/}
        <form className="SearchForm">
          <input type="text" className="SearchBar" id="search"></input>
        </form>
        <button class="custom-btn btn-1">Search</button>


      {/*SEARCH Input & Button*/}

        <div className="Result"> 

        </div>



    </div>
  );
}

export default App;
