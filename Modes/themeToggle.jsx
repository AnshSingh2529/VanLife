import React from 'react'
import { useTheme } from './themeContext'

function themeToggle() {
    const {toggletheme, isDarkmode} = useTheme();

  return (
    <button onClick={toggletheme}>{isDarkmode ? "Switch to Light Mode" : "Switch to Dark Mode"}</button>
  )
}

export default themeToggle