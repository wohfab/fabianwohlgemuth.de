import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

class ThemeToggle extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div role="hidden">
          <label for="themeToggle" class="themeSwitch">
            <input id="themeToggle"
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />
            <div class="themeToggleButton"></div>
          </label>
          </div>
        )}
      </ThemeToggler>
    )
  }
}

export default ThemeToggle
