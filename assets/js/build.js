// Stylesheet
class Stylesheet extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <!--CSS Styles -->
      <link rel="stylesheet" href="assets/css/style.css" />

      <!-- Fontawesome-->
      <script src="https://kit.fontawesome.com/e724f88ba2.js" crossorigin="anonymous"></script>

      <!-- Favicons -->
      <link rel="apple-touch-icon" sizes="180x180" href="assets/icons/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="assets/icons/favicon-32x32.png"/>

      <!-- Bootstrap CSS -->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
      rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
      crossorigin="anonymous" />

      <!-- Animate CSS CDN -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>

      <title>Trish Young | Front-End Web Developer | Digital Artist</title>
    `;
  }
}

// Header
class Navigation extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `          
      <!-- Navbar -->
      <nav>
        <h1><a href="build.html" class="none">Trish Young</a></h1>
        <ul class="navigation">
          <li><a href="build.html" class="nav-link">About</a></li>
          <li><a href="professional_work.html" class="nav-link">Professional</a></li>
          <li><a href="personal_work.html" class="nav-link">Personal</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
        <button class="burger-menu" id="burger-menu">
          <ion-icon class="bars" name="menu-outline"></ion-icon>
          <!-- <ion-icon class="times" name="close-outline"></ion-icon> -->
        </button>
      </nav>
    `;
  }
}

// Footer
class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <!-- Footer -->
      <footer>
        <p class="copy">&copy; Copyright 2023. Built with &#x2661; by Trish</p>
      </footer>
    `;
  }
}

// Social Icons
class SocialIcons extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <!-- Social accounts - Fixed to the right -->
      <div class="socials fa-2x">
        <a href="https://www.instagram.com/patriciawilliams.art/" target="_blank"><i class="fa-brands fa-instagram" style="color: #ffffff;"></i></a>
        <a href="https://www.linkedin.com/in/patriciayoung14/" target="_blank"><i class="fa-brands fa-linkedin-in" style="color: #ffffff;"></i></a> 
        <a href="https://github.com/twilliams14" target="_blank"><i class="fa-brands fa-github" style="color: #ffffff;"></i></a>
      </div>
    `;
  }
}

customElements.define('head-stylesheet', Stylesheet);
customElements.define('navigation-header', Navigation);
customElements.define('main-footer', Footer);
customElements.define('social-icons', SocialIcons);
