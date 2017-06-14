import React from 'react'
import {Route} from 'react-router-dom'
import PropTypes from 'prop-types'

export default class RoutesWithSub extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const {route} = this.props;
    return <Route path={this.props.path} render={props => {
      console.log('[routes props]', props, route)
      return <route.component {...props} routes={route.routes}/>
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
