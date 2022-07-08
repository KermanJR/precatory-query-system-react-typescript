import React from 'react'
import {
    Route as ReactDOMRoute,
    RouteProps as ReactDOMRouteProps,
    Navigate,
  } from "react-router-dom";

interface RouteProps extends ReactDOMRouteProps {
    isPrivate?: boolean;
    component: React.ComponentType;
}

const Route = () => {
  return (
    <div>Route</div>
  )
}


export default Route;