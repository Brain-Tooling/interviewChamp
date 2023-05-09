import React from "react"
import NavBarOption from './NavBarOption'
import { NavBarProps, NavBarItem } from "../../types/interfaces";

//TODO: replace
const mockNavBarData = [{id: 0,name:'React'},{id: 1,name:'Redux'},{id: 2,name:'Node'}]

/*
    The NavBar component accepts a list of clickable types for filtering the dashboard.
    The following properties are supported:
    navBarData (array)
        Each item in the array is an object with:
            id (number)
            name (string)
*/
const NavBar = (props: NavBarProps) => {
  
  const navBarOptions = mockNavBarData; //TODO: use props instead of mockNavBarData once we can rely on it
  const opts: JSX.Element[] = [];
  navBarOptions.forEach( (o: NavBarItem) => {
    opts.push(<NavBarOption key={o.name + Math.random()} label={o.name} onClick={() => {console.log('click')}} />);
  })

  return (
    <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        {opts}
      </div>
    </aside>
  )
};

export default NavBar;
