import React, { useState } from 'react';
import './App.css';

import Routes from './route';

import ThemeSitcher from "./components/ThemeSwitcher"

import * as themes from './styles/themes'
import ThemeContext from './styles/themes/context'

function App() {

  const [theme, setTheme] = useState(themes.dark)

  const toggleTheme = () => {

    setTheme(theme === themes.dark ? themes.light : themes.dark)

  };

  return (

    <div className="container">

      <ThemeContext.Provider value={theme}>

        <ThemeContext.Consumer>

          {
            theme => 
              <>
                <header style={{backgroundColor: theme.primaryColorBackground, color: theme.primaryColorTitle}}>
                  <div className="title">Where in the world?</div>
                  <ThemeSitcher toggleTheme={toggleTheme} />
                </header>

                <main>
                  <Routes theme={theme} />
                </main>
              </>
          }

        </ThemeContext.Consumer>

      </ThemeContext.Provider>

    </div>

  );
}

export default App;
