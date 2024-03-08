import React from 'react'
import { useTheme } from './themeContext'
import "./DarkMode.css"
import "./lightMode.css"

function themeComponet() {
        const {isDarkmode} = useTheme();
  return (
    <div className={isDarkmode ? 'dark-mode' : 'light-mode'}>

    </div>
  )
}

export default themeComponet