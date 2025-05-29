const footer = document.getElementById('footer')
footer.innerHTML = `
    <footer>
        <img src="/docs/assets/images/footer.png" class="img-fluid w-100 mt-5" alt="Image">
        <div class="container px-3 mt-5 mb-4">
            <h2 class="pb-1 clashBold pt-1 text-center" style="font-size: clamp(30px, 6vw, 56px);">Get in Touch</h2>
            <p class="text-center mx-auto" style="max-width: 820px;">
                We help small businesses attract more customers with professional, hassle-free websites—handling
                everything
                from design to hosting so you can focus on running your business. Our mission is to make sure you get
                found
                online, look credible, and grow without tech headaches or wasted ad spend.
            </p>
            <form class="border d-flex align-items-center justify-content-center rounded mx-auto mt-5 p-2 mb-5"
                style="max-width: 600px; width: 100%;">
                <input type="text" class="form-control form-control-lg text-secondary border-0" placeholder="EMAIL"
                    style="max-width: 400px; width: 100%; box-shadow: none !important; outline: none !important;">

                <button class="btn text-white py-1.5 rounded d-flex align-items-center justify-content-center"
                    style="background-color: #e38e00; width: 190px; height: 50px; text-align: center; transition: background-color 0.3s;"
                    onmouseover="this.style.backgroundColor='#f9a61d';"
                    onmouseout="this.style.backgroundColor='#e38e00';">
                    Subscribe
                </button>
            </form>

            <div class="ms-md-5">
                <div class="row pt-md-5 ms-md-5">
                    <div class="col-md-4">
                        <h2 class="pb-1 clashBold pt-1" style="font-size: clamp(20px, 6vw, 24px);">Explore</h2>
                        <ul class="list-unstyled">
                            <li class="mb-3"><a href="/docs/index.html"
                                    class="text-decoration-none text-secondary">Home</a></li>
                            <li class="mb-3"><a href="/docs/about-us.html"
                                    class="text-decoration-none text-secondary">Services</a></li>
                            <li class="mb-3"><a href="/docs/about-us.html"
                                    class="text-decoration-none text-secondary">About</a></li>
                            <li class="mb-3"><a href="/docs/contact-us.html"
                                    class="text-decoration-none text-secondary">Contact</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <h2 class="pb-1 clashBold pt-1" style="font-size: clamp(20px, 6vw, 24px);">Resources</h2>
                        <ul class="list-unstyled">
                            <li class="mb-3"><a href="/docs/index.html"
                                    class="text-decoration-none text-secondary">Terms & Conditions</a></li>
                            <li class="mb-3"><a href="/docs/about-us.html"
                                    class="text-decoration-none text-secondary">Privacy Policy</a></li>
                            <li class="mb-3"><a href="/docs/about-us.html"
                                    class="text-decoration-none text-secondary">Imprint</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <h2 class="pb-1 clashBold pt-1" style="font-size: clamp(20px, 6vw, 24px);">Address</h2>
                        <ul class="list-unstyled">
                            <li class="mb-3"><a href="/docs/index.html"
                                    class="text-decoration-none text-secondary">Möckernstr. 120, 10963 Berlin</a></li>
                            <h2 class="pb-1 clashBold pt-1" style="font-size: clamp(20px, 6vw, 24px);">Contact</h2>
                            <li class="mb-3"><a href="tel:+4915209350628"
                                    class="text-decoration-none text-secondary">+49 152 0935 0628</a></li>
                            <li class="mb-3"><a href="mailto:moritz.schwarzmann@web3-factory.com"
                                    class="text-decoration-none text-secondary">moritz.schwarzmann@web3-factory.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <p class="text-center border-top pt-4 mt-5 text-muted">Copyright <span id="copyright"></span>.All right Reserved</p>
        </div>

    </footer>
`

const year = new Date().getFullYear()
const copyright = document.getElementById('copyright').innerHTML = year