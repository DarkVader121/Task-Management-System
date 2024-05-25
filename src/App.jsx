import { Button } from "@material-tailwind/react";
import './App.css'
import { Hero } from './components'
import { StoreProvider } from './stores';
function App() {
  return (
    <>
    <StoreProvider>
      <Hero/>
    </StoreProvider>
     
    </>
  )
}

export default App
