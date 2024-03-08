import React, { useState } from 'react'
import { themeProvider } from './themeContext';

function themeMode({children}) {
    const [isDarkmode, setisDarkmode] = useState(false);

    const toggletheme = () => {
        setisDarkmode( (prev) => (!prev))
    }
  return (
    <themeProvider value={{isDarkmode, toggletheme}}>
        {children}
    </themeProvider>
  )
}

export default themeMode