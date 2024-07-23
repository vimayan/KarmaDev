import Img1 from "../data/template/home-four-feature-01.png";
import Playstore from "../data/common/playstore.svg";
import Apple from "../data/common/appstore.svg";
function ProductDesign() {
  return (
    <div id="wrapper" className="wrap ">
      <div
        id="main_features"
        className="main-features section panel overflow-hidden "
      >
        <div className="section-outer panel py-4 md:py-6 xl:py-9 ">
          <div className="container sm:max-w-lg xl:max-w-xl  ">
            <div className="section-inner panel ">
              <div
                className="panel vstack items-center gap-2 xl:gap-3 mb-4 lg:mb-8 max-w-650px mx-auto text-center"
                data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <span className="fw-bold text-primary dark:text-secondary">
                  Main features
                </span>
                <h2 className="h3 lg:h2 xl:h1 m-0">
                  A CRM tools help you keep track of leads
                </h2>
                <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                  Join the thousands of satisfied users and take your business
                  to the next level. Trusted by over 2,500 startups.
                </p>
              </div>
              <div
                className="row child-cols-12 g-6 md:g-8 xl:g-6 "
                data-uc-scrollspy="target: >*; delay: 500; cls: uc-animation-slide-bottom-medium"
              >
                <div>
                  <div className="feature-item panel">
                    <div className="row child-cols items-center justify-between g-2 md:g-4">
                      <div className="col-12 md:col-6 lg:col-5">
                        <div className="panel overflow-hidden rounded-1-5 lg:rounded-2">
                          <figure className="featured-image m-0 rounded ratio ratio-1x1 rounded-2 overflow-hidden">
                            <img
                              className="media-cover image"
                              src={Img1}
                              alt="Ensuring timely delivery and maximum efficiency"
                            />
                          </figure>
                        </div>
                      </div>
                      <div className="col-12 md:col-6 lg:col-6">
                        <div className="panel">
                          <div className="panel vstack justify-center gap-4 h-100 sm:p-3 lg:p-4">
                            <div>
                              <div className="panel vstack gap-2">
                                <span className="cstack w-48px h-48px bg-primary text-secondary rounded-1-5 mb-2 d-none lg:d-inline-flex">
                                  <i className="icon-1 unicon-cloud-download"></i>
                                </span>
                                <h3 className="h4 sm:h3 xl:h2 m-0">
                                  Ensuring timely delivery and maximum
                                  efficiency
                                </h3>
                                <p className="fs-6 lg:fs-5 opacity-70 dark:opacity-80">
                                  We offers advanced project management features
                                  such as Gantt charts, task dependencies, and
                                  resource allocation
                                </p>
                                <a
                                  href="#"
                                  className="uc-link dark:text-secondary fw-bold hstack gap-narrow sm:mt-1 lg:mt-2"
                                >
                                  <span>Let's find out</span>
                                  <i className="position-relative icon icon-1 unicon-arrow-right rtl:rotate-180 translate-y-px"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="about_values"
        className="about-values section panel overflow-hidden"
      >
        <div className="section-outer panel py-6 xl:py-9">
          <div className="container max-w-lg">
            <div className="section-inner panel">
              <div className="panel vstack gap-4 sm:gap-6 xl:gap-8">
                <h2
                  className="h4 sm:h3 lg:h2 m-0 text-center"
                  data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
                >
                  Our Values it’s Simple!
                </h2>
                <div
                  className="row child-cols-12 sm:child-cols-6 g-2 lg:g-4 justify-between"
                  data-anime="onview: -100; targets: > *; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  <div>
                    <div className="panel vstack gap-2 p-4 lg:py-6 rounded-2 bg-secondary dark:bg-gray-800">
                      <img
                        className="w-64px lg:w-80px d-block dark:d-none"
                        src="../assets/images/template/icon-diamond.svg"
                        alt="impact-icon"
                      />
                      <img
                        className="w-64px lg:w-80px d-none dark:d-block"
                        src="../assets/images/template/icon-diamond-dark.svg"
                        alt="impact-icon"
                      />
                      <h5 className="h5 lg:h4 m-0">Make an impact</h5>
                      <p className="fs-6 opacity-70 dark:opacity-80">
                        We’re building something big. Something that has the
                        power to change the trajectory of any sized business for
                        the better.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="panel vstack gap-2 p-4 lg:py-6 rounded-2 bg-secondary dark:bg-gray-800">
                      <img
                        className="w-64px lg:w-80px d-block dark:d-none"
                        src="../assets/images/template/icon-trophy.svg"
                        alt="crown-icon"
                      />
                      <img
                        className="w-64px lg:w-80px d-none dark:d-block"
                        src="../assets/images/template/icon-trophy-dark.svg"
                        alt="crown-icon"
                      />
                      <h5 className="h5 lg:h4 m-0">Learn</h5>
                      <p className="fs-6 opacity-70 dark:opacity-80">
                        Lexend team are masters of their craft. Even though
                        we’re all experts in our respective fields, we always
                        make time to expand our minds.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="panel vstack gap-2 p-4 lg:py-6 rounded-2 bg-secondary dark:bg-gray-800">
                      <img
                        className="w-64px lg:w-80px d-block dark:d-none"
                        src="../assets/images/template/icon-globe.svg"
                        alt="fun-icon"
                      />
                      <img
                        className="w-64px lg:w-80px d-none dark:d-block"
                        src="../assets/images/template/icon-globe-dark.svg"
                        alt="fun-icon"
                      />
                      <h5 className="h5 lg:h4 m-0">Have fun</h5>
                      <p className="fs-6 opacity-70 dark:opacity-80">
                        We work hard and play harder. We believe in the
                        importance of celebrating wins big or small, for the
                        business or individuals.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="panel vstack gap-2 p-4 lg:py-6 rounded-2 bg-secondary dark:bg-gray-800">
                      <img
                        className="w-64px lg:w-80px d-block dark:d-none"
                        src="../assets/images/template/icon-crown.svg"
                        alt="empathy-icon"
                      />
                      <img
                        className="w-64px lg:w-80px d-none dark:d-block"
                        src="../assets/images/template/icon-crown-dark.svg"
                        alt="empathy-icon"
                      />
                      <h5 className="h5 lg:h4 m-0">Empathy</h5>
                      <p className="fs-6 opacity-70 dark:opacity-80">
                        We strive to be empathetic to every customer and
                        colleague and by doing so we can provide a better
                        experience for all.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="key_features"
        className="key-features section panel overflow-hidden bg-gray-900 uc-dark"
      >
        <div className="section-outer panel py-6 xl:py-9 dark:bg-gray-800">
          <div className="container sm:max-w-md lg:max-w-lg">
            <div className="section-inner panel">
              <div className="panel vstack gap-4 sm:gap-6 xl:gap-8">
                <h2
                  className="title h3 lg:h2 xl:h1 m-0 text-center max-w-550px mx-auto"
                  data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 250;"
                >
                  Review quickly and confidently using{" "}
                  <span className="text-primary">Lexend.</span>
                </h2>
                <div className="panel">
                  <div
                    className="row child-cols-12 sm:child-cols-6 lg:child-cols-6 col-match g-3"
                    data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                  >
                    <div>
                      <div className="feature-item panel p-4 border rounded hover:bg-white dark:hover:bg-primary dark:text-white hover:scale-105 duration-150 transition-all">
                        <div className="vstack panel min-h-250px">
                          <i className="position-absolute top-0 ltr:end-0 rtl:start-0 icon-2 unicon-arrow-up-right rtl:-rotate-90"></i>
                          <div className="vstack justify-between gap-2 h-100">
                            <i className="icon icon-4 unicon-document"></i>
                            <div className="panel">
                              <div className="vstack gap-1">
                                <h3 className="title h5 m-0 text-inherit">
                                  Proposals
                                </h3>
                                <p className="desc fs-6 opacity-70">
                                  Share Tools in minutes with pre-built,
                                  customizable templates.
                                </p>
                              </div>
                            </div>
                          </div>
                          <a
                            className="position-cover"
                            href="page-features.html"
                          ></a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="feature-item panel p-4 border rounded hover:bg-white dark:hover:bg-primary dark:text-white hover:scale-105 duration-150 transition-all">
                        <div className="vstack panel min-h-250px">
                          <i className="position-absolute top-0 ltr:end-0 rtl:start-0 icon-2 unicon-arrow-up-right rtl:-rotate-90"></i>
                          <div className="vstack justify-between gap-2 h-100">
                            <i className="icon icon-4 unicon-model"></i>
                            <div className="panel">
                              <div className="vstack gap-1">
                                <h3 className="title h5 m-0 text-inherit">
                                  Quotes
                                </h3>
                                <p className="desc fs-6 opacity-70">
                                  Find out in real time when they’re opened,
                                  viewed and signed.
                                </p>
                              </div>
                            </div>
                          </div>
                          <a
                            className="position-cover"
                            href="page-features.html"
                          ></a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="feature-item panel p-4 border rounded hover:bg-white dark:hover:bg-primary dark:text-white hover:scale-105 duration-150 transition-all">
                        <div className="vstack panel min-h-250px">
                          <i className="position-absolute top-0 ltr:end-0 rtl:start-0 icon-2 unicon-arrow-up-right rtl:-rotate-90"></i>
                          <div className="vstack justify-between gap-2 h-100">
                            <i className="icon icon-4 unicon-task-approved"></i>
                            <div className="panel">
                              <div className="vstack gap-1">
                                <h3 className="title h5 m-0 text-inherit">
                                  Contracts
                                </h3>
                                <p className="desc fs-6 opacity-70">
                                  Use our native CRM integrations to pull
                                  customer data into your Tools fast.
                                </p>
                              </div>
                            </div>
                          </div>
                          <a
                            className="position-cover"
                            href="page-features.html"
                          ></a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="feature-item panel p-4 border rounded hover:bg-white dark:hover:bg-primary dark:text-white hover:scale-105 duration-150 transition-all">
                        <div className="vstack panel min-h-250px">
                          <i className="position-absolute top-0 ltr:end-0 rtl:start-0 icon-2 unicon-arrow-up-right rtl:-rotate-90"></i>
                          <div className="vstack justify-between gap-2 h-100">
                            <i className="icon icon-4 unicon-touch-interaction"></i>
                            <div className="panel">
                              <div className="vstack gap-1">
                                <h3 className="title h5 m-0 text-inherit">
                                  eSignatures
                                </h3>
                                <p className="desc fs-6 opacity-70">
                                  Keep your data secure with our legally-binding
                                  e-Signature software.
                                </p>
                              </div>
                            </div>
                          </div>
                          <a
                            className="position-cover"
                            href="page-features.html"
                          ></a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="feature-item panel p-4 border rounded hover:bg-white dark:hover:bg-primary dark:text-white hover:scale-105 duration-150 transition-all">
                        <div className="vstack panel min-h-250px">
                          <i className="position-absolute top-0 ltr:end-0 rtl:start-0 icon-2 unicon-arrow-up-right rtl:-rotate-90"></i>
                          <div className="vstack justify-between gap-2 h-100">
                            <i className="icon icon-4 unicon-sub-volume"></i>
                            <div className="panel">
                              <div className="vstack gap-1">
                                <h3 className="title h5 m-0 text-inherit">
                                  Forms
                                </h3>
                                <p className="desc fs-6 opacity-70">
                                  Share via direct link or by embedding them on
                                  your website, no coding necessary.
                                </p>
                              </div>
                            </div>
                          </div>
                          <a
                            className="position-cover"
                            href="page-features.html"
                          ></a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="feature-item panel p-4 border rounded hover:bg-white dark:hover:bg-primary dark:text-white hover:scale-105 duration-150 transition-all">
                        <div className="vstack panel min-h-250px">
                          <i className="position-absolute top-0 ltr:end-0 rtl:start-0 icon-2 unicon-arrow-up-right rtl:-rotate-90"></i>
                          <div className="vstack justify-between gap-2 h-100">
                            <i className="icon icon-4 unicon-currency"></i>
                            <div className="panel">
                              <div className="vstack gap-1">
                                <h3 className="title h5 m-0 text-inherit">
                                  Payments
                                </h3>
                                <p className="desc fs-6 opacity-70">
                                  Collect them instantly right from your
                                  contract, while increasing your close rate by
                                  36%.
                                </p>
                              </div>
                            </div>
                          </div>
                          <a
                            className="position-cover"
                            href="page-features.html"
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="faq" className="section panel overflow-hidden">
        <div className="section-outer panel py-6 xl:py-9">
          <div className="container max-w-lg">
            <div
              className="section-inner panel"
              data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <div className="panel">
                <h2 className="h4 sm:h3 lg:h2 m-0 text-center">
                  Frequenlty asked questions:
                </h2>
                <div className="panel mt-4 sm:mt-6 lg:mt-8 p-3 sm:p-4 xl:p-6 lg:max-w-750px xl:w-auto m-auto rounded-2 bg-secondary dark:bg-gray-800">
                  <ul className="gap-4" data-uc-accordion="targets: > li;">
                    <li className="uc-open">
                      <a className="uc-accordion-title fs-5 sm:fs-4" href="#">
                        Do I need to know about how to code?
                      </a>
                      <div className="uc-accordion-content">
                        <p>
                          Yes, you need to have a fair amount of knowledge in
                          dealing with HTML/CSS as well as JavaScript in order to
                          be able to use Lexend.
                        </p>
                      </div>
                    </li>
                    <li>
                      <a className="uc-accordion-title fs-5 sm:fs-4" href="#">
                        Can I use it for commercial projects?
                      </a>
                      <div className="uc-accordion-content">
                        <p>
                          Feel free to do so. Lexend does exist to evolve every
                          commercial project. You can also use it to build
                          stunning websites for your own clients (we won’t breathe
                          a word).
                        </p>
                      </div>
                    </li>
                    <li>
                      <a className="uc-accordion-title fs-5 sm:fs-4" href="#">
                        Can I use it for multiple projects?
                      </a>
                      <div className="uc-accordion-content">
                        <p>
                          Definitely! Please use it however you like; we don’t
                          limit it.
                        </p>
                      </div>
                    </li>
                    <li>
                      <a className="uc-accordion-title fs-5 sm:fs-4" href="#">
                        Can I use this to create and sell a product?
                      </a>
                      <div className="uc-accordion-content">
                        <p>Do not ever consider doing it.</p>
                      </div>
                    </li>
                    <li>
                      <a className="uc-accordion-title fs-5 sm:fs-4" href="#">
                        What is your refund policy?
                      </a>
                      <div className="uc-accordion-content">
                        <p>
                          We understand the importance of customer satisfaction
                          and we strive to provide the best products and services.
                          However, please note that due to the nature of our
                          products and services, we do not offer refunds after a
                          purchase has been made.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer id="uc-footer" className="uc-footer panel overflow-hidden uc-dark">
        <div className="footer-outer py-4 lg:py-6 xl:py-9  dark:bg-gray-900 dark:text-white">
          <div className="container max-w-xl">
            <div className="footer-inner vstack gap-4 lg:gap-6 xl:gap-8">
              <div className="uc-footer-widgets panel">
                <div className="row child-cols-6 md:child-cols col-match g-4">
                  <div className="col-12 lg:col-4">
                    <div className="panel vstack items-start gap-4 ltr:md:pe-8 rtl:md:ps-8">
                      <div className="vstack gap-2">
                        <a href="index.html">
                          <img
                            className="w-32px text-primary"
                            src="../assets/images/common/logo-mark.svg"
                            alt="Lexend"
                          />
                        </a>
                        <p>
                          This powerfull tool eliminates the need to leave
                          Salesforce to get things done as I can create a custom
                          proposal with dynamic pricing tables.
                        </p>
                      </div>
                      <div className="hstack items-start gap-1">
                        <a href="#">
                          <img
                            className="dark:bg-white  dark:text-white hover:text-opacity-70 transition-all duration-150"
                            src={Playstore}
                            alt="Google Play Store"
                            data-uc-svg
                          />
                        </a>
                        <a href="#">
                          <img
                            className="dark:bg-white dark:text-white hover:text-opacity-70 transition-all duration-150"
                            src={Apple}
                            alt="Apple Store"
                            data-uc-svg
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ul className="nav-y gap-1 fw-medium">
                      <li>
                        <a href="page-about.html">About</a>
                      </li>
                      <li>
                        <a href="page-pricing.html">Pricing</a>
                      </li>
                      <li>
                        <a href="page-features.html">Features</a>
                      </li>
                      <li>
                        <a href="page-integrations.html">Integrations</a>
                      </li>
                      <li>
                        <a href="page-career.html">Career</a>
                      </li>
                      <li>
                        <a href="page-contact.html">Contact</a>
                      </li>
                      <li>
                        <a href="page-contact-2.html">Contact v2</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="nav-y gap-1 fw-medium">
                      <li>
                        <a href="shop.html">Shop</a>
                      </li>
                      <li>
                        <a href="shop-sidebar.html">With sidebar</a>
                      </li>
                      <li>
                        <a href="shop-product-detail.html">Product detail</a>
                      </li>
                      <li>
                        <a href="shop-product-detail-2.html">Product detail v2</a>
                      </li>
                      <li>
                        <a href="shop-cart.html">Cart</a>
                      </li>
                      <li>
                        <a href="shop-checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="shop-order.html">Order confirmation</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="nav-y gap-1 fw-medium">
                      <li>
                        <a href="request-demo.html">Request a demo</a>
                      </li>
                      <li>
                        <a href="sign-in.html">Sign in</a>
                      </li>
                      <li>
                        <a href="sign-in-2.html">Sign in v2</a>
                      </li>
                      <li>
                        <a href="sign-up.html">Sign up</a>
                      </li>
                      <li>
                        <a href="sign-up-2.html">Sign up v2</a>
                      </li>
                      <li>
                        <a href="reset-password.html">Reset password</a>
                      </li>
                      <li>
                        <a href="reset-password-2.html">Reset password v2</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="nav-y gap-1 fw-medium">
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog detail</a>
                      </li>
                      <li>
                        <a href="page-faq.html">FAQ</a>
                      </li>
                      <li>
                        <a href="404.html">404</a>
                      </li>
                      <li>
                        <a href="coming-soon.html">Coming Soon</a>
                      </li>
                      <li>
                        <a href="page-terms.html">Terms of service</a>
                      </li>
                      <li>
                        <a href="page-privacy.html">Privacy policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="uc-footer-bottom panel vstack lg:hstack gap-4 justify-center lg:justify-between pt-4 lg:pt-6 border-top dark:text-white">
                <div className="vstack sm:hstack justify-center lg:justify-start items-center lg:items-start gap-1 lg:gap-2">
                  <p className="opacity-60">
                    Lexend © 2024, All rights reserved.
                  </p>
                  <ul className="nav-x gap-2 fw-medium">
                    <li>
                      <a href="#">Privacy notice</a>
                    </li>
                    <li>
                      <a href="#">Legal</a>
                    </li>
                    <li>
                      <a href="#">Cookie settings</a>
                    </li>
                  </ul>
                </div>
                <div className="hstack justify-center lg:justify-end gap-2 lg:gap-3">
                  <ul className="nav-x gap-2">
                    <li>
                      <a href="#">
                        <i className="icon icon-2 unicon-logo-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon icon-2 unicon-logo-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon icon-2 unicon-logo-x-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon icon-2 unicon-logo-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon icon-2 unicon-logo-youtube"></i>
                      </a>
                    </li>
                  </ul>
                  <div className="vr"></div>
                  <div className="d-inline-block">
                    <a href="#" className="hstack gap-1 text-none fw-medium">
                      <i className="icon icon-1 unicon-earth-filled"></i>
                      <span>English</span>
                      <span data-uc-drop-parent-icon=""></span>
                    </a>
                    <div
                      className="p-2 bg-white dark:bg-gray-800 shadow-xs rounded w-150px"
                      data-uc-drop="mode: click; offset: 28; pos: top-right; boundary: !.uc-footer-bottom; animation: uc-animation-slide-top-small; duration: 150;"
                    >
                      <ul className="nav-y gap-1 fw-medium items-end">
                        <li>
                          <a href="#en">English</a>
                        </li>
                        <li>
                          <a href="#ar">العربية</a>
                        </li>
                        <li>
                          <a href="#ch">中文</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ProductDesign;
