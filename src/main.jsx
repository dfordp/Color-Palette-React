import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RecoilRoot } from 'recoil'
import { ColorLoader} from "./Components/elements/color-loader"
import { CustomToaster } from "./Components/elements/custom-toaster"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <ColorLoader />
          <App />
      <CustomToaster />
    </RecoilRoot>
  </React.StrictMode>,
)
