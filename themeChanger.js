    const themeToggle = document.getElementById('theme-toggle');
    const themeLink = document.getElementById('theme-link');
    const icon = document.getElementById('theme-toggle');

      themeToggle.addEventListener('click', () => {
        if (themeLink.getAttribute('href') === 'theme/light.css') {
          themeLink.setAttribute('href', 'theme/dark.css');
          icon.setAttribute('src', 'icon/New folder/icons8-sun-ios-16-glyph/icons8-sun-30.png');
        } else {
          themeLink.setAttribute('href', 'theme/light.css');
          icon.setAttribute('src', 'icon/New folder/icons8-moon-and-stars-material-filled/icons8-moon-and-stars-24.png');
        }
      });