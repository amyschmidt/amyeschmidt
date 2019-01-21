import React from 'react'
import { Switch, Route } from 'react-router'
import Header from 'components/Header'
import LandingPage from 'scenes/LandingPage'
import Projects from 'scenes/Projects'
import NotFoundPage from 'components/NotFoundPage'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="Content">
          <Switch>
            <Route path="/projects" component={Projects} />
            <Route path="/" component={LandingPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App