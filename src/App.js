import { NewHomes, NavBar, MarketingFooter, HogehogeCollections } from './ui-components'

function App() {
return (


<div className="App">
<NavBar  width={"100vw"}/>
<HogehogeCollections  isPaginated itemsPerPage={3}/>
<MarketingFooter  width={"100vw"}/>
</div>


);
}

export default App;