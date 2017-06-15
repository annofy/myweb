import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'

export default class RoutesWithSub extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const {route} = this.props;
    return <Route path={route.path} exact={route.exect} render={props => {
      if (route.redirect) {
        return <Redirect to={route.redirect}/>
      } else {
        return <route.component {...props} routes={route.routes}/>
      }
    }}/>
  }
}

RoutesWithSub.propsType = {
  route: PropTypes.shape({
    path: PropTypes.string.isRequired,
    component: PropTypes.func.isRequired,
    routes: PropTypes.array
  })
}

RoutesWithSub.defaultProps = {
  route: {
    path: '',
    component: () => <div></div>,
    routes: []
  }
}
