import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

class ThemeToggle extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div>
          <label for="themeToggle" class="themeSwitch"></label>
            <input id="themeToggle"
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />
            <div class="themeToggleButton"></div>
          </div>
        )}
      </ThemeToggler>
    )
  }
}

export default ThemeToggle
