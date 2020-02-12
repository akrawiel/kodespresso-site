<style>
  footer {
    align-items: center;
    background-color: var(--bg-dark-color);
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
    display: flex;
    height: 5rem;
    justify-content: space-between;
    padding: 1rem 2rem;
    width: 100%;
  }

  footer > * {
    align-items: center;
    display: flex;
    height: 100%;
  }

  footer > div > :not(:last-child) {
    margin-right: 0.5rem;
  }

  footer > *:nth-child(odd) {
    justify-content: flex-start;
  }

  footer > *:nth-child(even) {
    justify-content: flex-end;
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

<footer>
  <div>© 2020, Olek Krawiel</div>
  <div>
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
</footer>
