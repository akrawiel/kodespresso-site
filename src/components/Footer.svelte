<style>
  footer {
    align-content: center;
    background-color: var(--bg-dark-color);
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    height: 5rem;
    padding: 1rem;
    width: 100%;
  }

  .footer-container {
    align-items: center;
    display: flex;
  }

  @media only screen and (min-width: 35.5em) {
    .footer-container.to-right {
      justify-content: flex-end;
    }
  }

  .footer-container > :not(:last-child) {
    margin-right: 0.5rem;
  }

  a {
    height: 1.5rem;
  }

  ion-icon {
    font-size: 1.5rem;
    color: var(--fg-normal-color);
    cursor: pointer;
    filter: brightness(1);
  }

  ion-icon:hover {
    filter: brightness(1.5);
  }
</style>

<footer class="pure-g flex items-center">
  <div class="pure-u-1 pure-u-md-1-2">
    <div class="footer-container">© 2020, Olek Krawiel</div>
  </div>
  <div class="pure-u-1 pure-u-md-1-2">
    <div class="footer-container to-right">
      <span>Find me here</span>
      <a href="https://github.com/akrawiel" target="_blank" title="GitHub">
        <ion-icon name="logo-github" />
      </a>
      <a
        href="https://linkedin.com/in/aleksander-krawiel"
        target="_blank"
        title="LinkedIn">
        <ion-icon name="logo-linkedin" />
      </a>
    </div>
  </div>
</footer>
