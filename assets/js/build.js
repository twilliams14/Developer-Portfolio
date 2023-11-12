// Header
class Navigation extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `          
      <!-- Navbar -->
      <nav>
        <h1><a href="build.html" class="none">Trish Young</a></h1>
        <ul class="navigation">
          <li><a href="build.html" class="nav-link">About</a></li>
          <li><a href="professional_work.html" class="nav-link">Code</a></li>
          <li><a href="personal_work.html" class="nav-link">Art</a></li>
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
        <a href="https://www.instagram.com/patriciawilliams.art/" aria-label="Instagram" target="_blank"><i class="fa-brands fa-instagram" style="color: #ffffff;"></i></a>
        <a href="https://www.linkedin.com/in/patriciayoung14/" aria-label="LinkedIn" target="_blank"><i class="fa-brands fa-linkedin-in" style="color: #ffffff;"></i></a> 
        <a href="https://github.com/twilliams14" aria-label="Github" target="_blank"><i class="fa-brands fa-github" style="color: #ffffff;"></i></a>
      </div>
    `;
  }
}

customElements.define('navigation-header', Navigation);
customElements.define('main-footer', Footer);
customElements.define('social-icons', SocialIcons);
