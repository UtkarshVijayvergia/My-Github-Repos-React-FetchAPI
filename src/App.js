// momentjs for date formating

import './App.css';
import FetchAPI from './components/FetchAPI'
import Projects from './components/projects/Projects';

import RepoOrder from './components/RepoOrder';

function App() {
    return (
        <div className="App">
            {/* <FetchAPI/>
            <RepoOrder/> */}
            <Projects/>
        </div>
    );
}

export default App;