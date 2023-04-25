const createNav = () => {
  let nav = document.querySelector('.navbar');
  nav.innerHTML = `
    <nav>
    <div>
    <a href="#"><img src="pics/logo.png" alt="Logo" /></a> 
      <div>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li class="menu">
            <a href="index.html">Menu</a>
            <ul>
              <li><a href="starters.html">Starters</a></li>
              <li><a href="maindishes.html">Main Course</a></li>
              <li><a href="bmeals.html">Barkada Meals</a></li>
              <li><a href="beverages.html">Beverages</a></li>
            </ul>
          </li>
          <li><a href="reservation.html" target="_blank">Reservation</a></li>
          <li><a href="about.html">About</a></li>
        </ul>
      </div>
    </div>
  </nav>
    `;
}

createNav();