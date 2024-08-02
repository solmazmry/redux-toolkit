import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "./darkModeSlice";
import { useEffect } from "react";

const DarkModeToggle = () => {
 const  dispatch =useDispatch()
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };


useEffect(()=>{
    if(isDarkMode){
        document.body.classList.add("dark-mode");
       
    }else{
        document.body.classList.remove("dark-mode")
    }
},[isDarkMode])

  return <button onClick={handleToggle}>
    {isDarkMode?'light Mode':'Dark Mode'}
  </button>;
};

export default DarkModeToggle;
