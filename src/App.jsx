import './App.css'
import { Footer,Header } from './components'
import { AllRoutes } from './routes/AllRoutes'


function App() {
  
// Commands to run this app locally
  // Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
  // json-server data/db.json -m ./node_modules/json-server-auth -r data/routes.json --port 8000

  return (
    <>
    <div className="App dark:bg-dark">
    <Header />
  <AllRoutes />
  <Footer />
  </div>
  
    </>
  )
}

export default App
