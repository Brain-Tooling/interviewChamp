import React from "react"
import NavBarOption from './NavBarOption.tsx'

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
const NavBar = (props) => {
  
  const navBarOptions = mockNavBarData;
  const opts = [];
  navBarOptions.forEach( (o) => {
    opts.push(<NavBarOption label={o.name} onClick={() => {console.log('click')}} />);
  })

/*
absolute left-0 top-0 z-[1035] h-full w-60 -translate-x-full 
                    overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] 
                    data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800"
*/

  return (
    <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        {opts}
      </div>
    </aside>
  )
};

export default NavBar;
