
import './App.css'
import FirstCom from './01component/FirstCom'
import { UserCom } from './01component/UserCom'
import {name} from './01component/ValueExport'

function App() {

  return (
    <>
      <h1>Hello React</h1>
      <FirstCom/>
      <UserCom/>
      {name}
    </>
  )
}

export default App
