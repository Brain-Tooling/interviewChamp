import React from "react"

const NavBarOption = (props) => {
  return (
      <button onClick={props.onClick}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >{props.label}</button> 
               
               
      
  )
};

export default NavBarOption;
