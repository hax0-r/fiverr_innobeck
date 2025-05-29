const navbar = document.getElementById("navbar");

navbar.innerHTML = `
 <nav class="navbar shadow-sm navbar-expand-lg bg-white fixed-top px-3 py-3" style="z-index: 1040;">
        <div class="container-xl d-flex justify-content-between align-items-center">
            <!-- Logo -->
<a class="navbar-brand d-flex align-items-center" href="./index.html">
  <!-- Small logo for mobile -->
  <img src="/docs/assets/images/logo.png" alt="logo" class="d-block d-md-none" style="height: 30px;">
  
  <!-- Larger logo for desktop -->
  <img src="/docs/assets/images/logo.png" alt="logo" class="d-none d-md-block" style="height: 45px;">
</a>


            <!-- Desktop Menu -->
            <div class="d-none d-lg-flex align-items-center gap-4">
                <ul class="navbar-nav me-3 text-light gap-4">
                    <li class="nav-item">
                        <a class="nav-link" href="./index.html" onmouseover="this.style.color='#004996'"
                            onmouseout="this.style.color=''" style="transition: all 0.5s;">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about" onmouseover="this.style.color='#004996'"
                            onmouseout="this.style.color=''" style="transition: all 0.5s;">How It Works</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#features" onmouseover="this.style.color='#004996'"
                            onmouseout="this.style.color=''" style="transition: all 0.5s;">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#features" onmouseover="this.style.color='#004996'"
                            onmouseout="this.style.color=''" style="transition: all 0.5s;">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/privacy-policy.html" onmouseover="this.style.color='#004996'"
                            onmouseout="this.style.color=''" style="transition: all 0.5s;">Privacy Policy</a>
                    </li>
                </ul>
                <!-- Contact Button -->
            </div>
            <a href="/contact-us.html"
                class="btn d-none d-lg-flex text-white py-2 rounded d-flex align-items-center justify-content-center"
                style="background-color: #e38e00; width: 170px; height: 55px; text-align: center; transition: background-color 0.3s;"
                onmouseover="this.style.backgroundColor='#f9a61d';" onmouseout="this.style.backgroundColor='#e38e00';">
                Contact Us
            </a>



            <!-- Mobile Menu Toggle -->
            <i id="mobileMenuBtn" class="fas fa-bars text-black d-lg-none fs-3 cursor-pointer"></i>
        </div>
    </nav>

    <!-- Mobile Menu -->
    <div id="mobileMenu" class="position-fixed top-0 start-0 bg-white"
        style="width: 0; height: 100vh; overflow: hidden; z-index: 1050; transition: all 0.5s;">
        <div class="d-flex justify-content-end p-3">
            <i class="fas fa-xmark text-black fs-4 mobileMenuCloseBtn cursor-pointer"></i>
        </div>
        <div class="p-4">
            <ul class="list-unstyled text-black">
                <li class="mb-4">
                    <a href="./index.html" class="mobileMenuCloseBtn text-nowrap text-black d-block text-decoration-none"
                        onmouseover="this.style.color='#f5e474'" onmouseout="this.style.color=''"
                        style="transition: all 0.5s;">Home</a>
                </li>
                <li class="mb-4">
                    <a href="#about" class="mobileMenuCloseBtn text-nowrap text-black d-block text-decoration-none"
                        onmouseover="this.style.color='#f5e474'" onmouseout="this.style.color=''"
                        style="transition: all 0.5s;">How It Works</a>
                </li>
                <li class="mb-4">
                    <a href="#features" class="mobileMenuCloseBtn text-nowrap text-black d-block text-decoration-none"
                        onmouseover="this.style.color='#f5e474'" onmouseout="this.style.color=''"
                        style="transition: all 0.5s;">Portfolio</a>
                </li>
                <li class="mb-4">
                    <a href="#features" class="mobileMenuCloseBtn text-nowrap text-black d-block text-decoration-none"
                        onmouseover="this.style.color='#f5e474'" onmouseout="this.style.color=''"
                        style="transition: all 0.5s;">Pricing</a>
                </li>
                <li class="mb-4">
                    <a href="/privacy-policy.html" class="mobileMenuCloseBtn text-nowrap text-black d-block text-decoration-none"
                        onmouseover="this.style.color='#f5e474'" onmouseout="this.style.color=''"
                        style="transition: all 0.5s;">Privacy Policy</a>
                </li>
            </ul>
            <a href="/contact-us.html"
                class="btn text-white py-2 rounded d-flex align-items-center justify-content-center"
                style="background-color: #e38e00; height: 55px; text-align: center; transition: background-color 0.3s;"
                onmouseover="this.style.backgroundColor='#cc7a00';" onmouseout="this.style.backgroundColor='#e38e00';">
                Contact Us
            </a>
        </div>
    </div>

    <!-- Spacer div -->
    <div style="height: 6rem;"></div>
`


const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuCloseBtns = document.querySelectorAll(".mobileMenuCloseBtn");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.style.width = "100%";
});

mobileMenuCloseBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        mobileMenu.style.width = "0";
    });
});