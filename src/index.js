import React from 'react'
import { render } from 'react-dom'

import { App } from './components'
import * as registerServiceWorker from './serviceWorker'

render(<App />, document.getElementById('root'))
registerServiceWorker.register()
