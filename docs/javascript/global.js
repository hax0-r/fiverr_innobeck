const lenis = new Lenis({
    autoRaf: true,
});

document.addEventListener("DOMContentLoaded", function () {
    const bottomToTopScroll = document.getElementById("bottomToTopScroll");

    bottomToTopScroll.innerHTML = `
    <div
      class="bottomToTop position-fixed bottom-0 end-0 me-3 mb-3 text-white d-flex align-items-center justify-content-center rounded d-none"
      style="width: 40px; height: 40px; cursor: pointer; z-index: 1040; background-color:#e38e00; transition: all 0.5s;"
      id="scrollToTopBtn"
      onmouseover="this.style.opacity='0.8'"
      onmouseout="this.style.opacity='1'">
      <i class="fa-solid fa-angle-up"></i>
    </div>
  `;

    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollToTopBtn.classList.remove("d-none");
        } else {
            scrollToTopBtn.classList.add("d-none");
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});



AOS.init({
    once: true,
    duration: 1000
});