const template = document.createElement("template");

template.innerHTML = `
<nav>
<div class="hide">
  <div></div>
  <div></div>
  <div></div>
  <div id="navContainer2" class="hide">
    <a href="./index.html">
      <img src="./images/icons/home.png" alt="home" />
      <div class="textDiv">Home</div>
    </a>
    <a href="./html/about.html">
      <img src="./images/icons/info.png" alt="information" />
      <div>About</div>
    </a>
    <a href="./html/classes.html">
      <img src="./images/icons/yoga.png" alt="yoga" />
      <div>Classes</div>
    </a>
    <a href="./html/contact.html">
      <img src="./images/icons/communicate.png" alt="communicate" />
      <div>Contact</div>
    </a>
    <a href="./html/philosophy.html">
      <img src="./images/icons/reviews.png" alt="reviews" />
      <div>Philosophy</div>
    </a>
  </div>
</div>
  <ul>
    <li>
      <a href="./index.html">
        <img src="./images/icons/home.png" alt="home" />
        <div class="textDiv">Home</div>
      </a>
    </li>
    <li>
      <a href="./html/about.html">
        <img src="./images/icons/info.png" alt="information" />
        <div>About</div>
      </a>
    </li>
    <li>
      <a href="./html/classes.html">
        <img src="./images/icons/yoga.png" alt="yoga" />
        <div>Classes</div>
      </a>
    </li>
    <li>
      <a href="./html/contact.html">
        <img src="./images/icons/communicate.png" alt="communicate" />
        <div>Contact</div>
      </a>
    </li>
    <li>
      <a href="./html/philosophy.html">
        <img src="./images/icons/reviews.png" alt="reviews" />
        <div>Philosophy</div>
      </a>
    </li>
  </ul>
</nav>
<footer>
  <div>C</div>
  <div>
    Copyright ML Strength 2023 - Jason Sheriff - Student Number:
    464056902
  </div>
  <div>
    <a class="footerIcon" href="http://jigsaw.w3.org/css-validator/check/referer">
      <img 
        src="http://jigsaw.w3.org/css-validator/images/vcss"
        alt="Valid CSS!">
    </a>
    <a class="footerIcon" href="http://jigsaw.w3.org/css-validator/check/referer">
      <img 
        src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
        alt="Valid CSS!">
    </a>
    <img class="footerIcon" src="./images/W3C-Accessibility-logo.png" alt="W3C-Accessibility-logo">
  </div>
</footer>
`;

document.body.appendChild(template.content);
