# rup

Run React example without boilerplate.

## Installation

```
npm install rup -g
```

## Usage

Create `entry.js`.

``` js
import React from 'react'
import { render } from 'react-dom'

class App extends React.Component {
  render() {
    return (
      <h1>
        Hello World!
      </h1>
    )
  }
}

const rootDiv = document.createElement('div')
document.body.appendChild(rootDiv)
render(<App />, rootDiv)
```

Run `rup` in the same directory, then `open http://localhost:8080`.
