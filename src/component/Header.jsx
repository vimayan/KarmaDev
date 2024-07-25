import { Outlet } from "react-router-dom";
import Lexend_light from "../data/common/logo-light.svg";
import Lexend_mark from "../data/common/logo-mark.svg";
import Lexend_icon from "../data/common/logo-mark.svg";
import Lexend_dark from "../data/common/logo-dark.svg";
import React, { useEffect, useState } from "react";

const getInitialDarkMode = () => {
  const savedMode = localStorage.getItem("darkMode");
  return savedMode === "1";
};

function Header() {
  const [uc_open, SetUc_open] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode());

  useEffect(() => {
    if (isDarkMode) {
      localStorage.setItem("darkMode", "1");
      document.body.classList.add("uc-dark");
    } else {
      document.body.classList.remove("uc-dark");
      localStorage.setItem("darkMode", "0");
    }
  }, [isDarkMode, setIsDarkMode]);

  return (
    <>
      <div
        id="uc-menu-panel"
        data-uc-offcanvas="overlay: true;"
        tabIndex="-1"
        className={
          uc_open
            ? "d-block lg:d-none uc-offcanvas uc-offcanvas-overlay uc-open"
            : ""
        }
      >
        <div className="uc-offcanvas-bar bg-white text-dark dark:bg-gray-900 dark:text-white">
          <header className="uc-offcanvas-header hstack justify-between items-center pb-2 bg-white dark:bg-gray-900">
            <div className="uc-logo">
              <a
                className="h5 text-none text-gray-900 dark:text-white"
                href="#"
              >
                <img className="w-32px" src={Lexend_mark} alt="Lexend" />
              </a>
            </div>
            <button
              onClick={() => SetUc_open(false)}
              className="rtl:end-auto rtl:start-0 m-1 mt-2 icon-3 btn border-0 dark:text-white dark:text-opacity-50 hover:text-primary hover:rotate-90 duration-150 transition-all"
              type="button"
            >
              <i className="unicon-close"></i>
            </button>
          </header>

          <div className="panel">
            <div
              id="search-panel"
              className="form-icon-group vstack gap-1 mb-2"
            >
              <input
                type="email"
                className="form-control form-control-sm fs-7 rounded-default"
                placeholder="Search.."
              />
              <span className="form-icon text-gray">
                <i className="unicon-search icon-1"></i>
              </span>
            </div>

            <ul className="nav-y gap-narrow fw-medium fs-6" data-uc-nav>
              <li>
                <a href="page-features.html">Features</a>
              </li>
              <li>
                <a href="page-pricing.html">Pricing</a>
              </li>
              <li>
                <a href="page-about.html">About</a>
              </li>
              <li>
                <a href="page-career.html">Career</a>
              </li>
              <li>
                <a href="page-contact.html">Contact</a>
              </li>
              <li className="uc-parent">
                <a href="#">Inner Pages</a>
                <ul className="uc-nav-sub" data-uc-nav="">
                  <li className="uc-parent">
                    <a href="blog.html">Blog</a>
                    <ul className="uc-nav-sub">
                      <li>
                        <a href="blog.html">Full Width</a>
                      </li>
                      <li>
                        <a href="blog-2cols.html">Grid 2 Cols</a>
                      </li>
                      <li>
                        <a href="blog-3cols.html">Grid 3 Cols</a>
                      </li>
                      <li>
                        <a href="blog-4cols.html">Grid 4 Cols</a>
                      </li>
                    </ul>
                  </li>
                  <li className="uc-parent">
                    <a href="blog-details.html">Blog - detail</a>
                    <ul className="uc-nav-sub">
                      <li>
                        <a href="blog-details.html">Blog detail</a>
                      </li>
                      <li>
                        <a href="blog-details-2.html">Blog detail - v2</a>
                      </li>
                    </ul>
                  </li>
                  <li className="uc-parent">
                    <a href="#">Useful pages</a>
                    <ul className="uc-nav-sub">
                      <li>
                        <a href="sign-up.html">Sign up</a>
                      </li>
                      <li>
                        <a href="sign-in.html">Sign in</a>
                      </li>
                      <li>
                        <a href="reset-password.html">Reset password</a>
                      </li>
                      <li>
                        <a href="404.html">404 page</a>
                      </li>
                      <li>
                        <a href="coming-soon.html">Coming soon</a>
                      </li>
                    </ul>
                  </li>
                  <li className="uc-parent">
                    <a href="#">Other pages</a>
                    <ul className="uc-nav-sub">
                      <li>
                        <a href="page-faq.html">FAQ</a>
                      </li>
                      <li>
                        <a href="page-terms.html">Terms of use</a>
                      </li>
                      <li>
                        <a href="page-privacy.html">Privacy policy</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="uc-parent">
                <a href="shop.html">Shop</a>
                <ul className="uc-nav-sub" data-uc-nav="">
                  <li className="uc-parent">
                    <a href="shop.html">Shop layouts</a>
                    <ul className="uc-nav-sub">
                      <li>
                        <a href="shop.html">Shop 4 cols</a>
                      </li>
                      <li>
                        <a href="shop-3.html">Shop 3 cols</a>
                      </li>
                      <li>
                        <a href="shop-2.html">Shop 2 cols</a>
                      </li>
                      <li>
                        <a href="shop-sidebar.html">Shop with sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="shop-category.html">Archive category</a>
                  </li>
                  <li>
                    <a href="shop-product-detail.html">Product detail</a>
                  </li>
                  <li>
                    <a href="shop-product-detail-2.html">Product detail - v2</a>
                  </li>
                  <li>
                    <a href="shop-cart.html">Cart</a>
                  </li>
                  <li>
                    <a href="shop-cart-2.html">Cart - v2</a>
                  </li>
                  <li>
                    <a href="shop-checkout.html">Checkout</a>
                  </li>
                  <li>
                    <a href="shop-checkout-2.html">Checkout - v2</a>
                  </li>
                  <li>
                    <a href="shop-order.html">Order confirmation</a>
                  </li>
                </ul>
              </li>
              <li className="hr opacity-10 my-1"></li>
              <li>
                <a href="sign-up.html">Create an account</a>
              </li>
              <li>
                <a href="sign-in.html">Log in</a>
              </li>
              <li>
                <a href="https://themeforest.net/item/lexend-software-saas-startup-html5-template/51596504">
                  Buy Template
                </a>
              </li>
            </ul>
            <ul className="social-icons nav-x mt-4">
              <li>
                <a href="#">
                  <i className="unicon-logo-medium icon-2"></i>
                </a>
                <a href="#">
                  <i className="unicon-logo-x-filled icon-2"></i>
                </a>
                <a href="#">
                  <i className="unicon-logo-instagram icon-2"></i>
                </a>
                <a href="#">
                  <i className="unicon-logo-pinterest icon-2"></i>
                </a>
              </li>
            </ul>
            <div
              className="py-2 hstack gap-2 mt-auto bg-white dark:bg-gray-900"
              data-uc-sticky="position: bottom"
            >
              <div className="vstack gap-1">
                <span className="fs-7 opacity-60">Select theme:</span>
                <div className="darkmode-trigger" data-darkmode-switch="">
                  <label className="switch">
                    <input
                      type="checkbox"
                      onChange={() => setIsDarkMode(!isDarkMode)}
                    />
                    <span className="slider fs-5"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header
        className={
          !uc_open
            ? "uc-header header-default uc-navbar-sticky-wrap z-999 uc-dark"
            : "d-none lg:d-block  uc-header header-default uc-navbar-sticky-wrap z-999 uc-dark"
        }
        style={{ height: "80px" }}
        data-uc-sticky="start: 100vh; show-on-up: true; animation: uc-animation-slide-top; sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;"
      >
        <nav
          className="uc-navbar-container uc-navbar-float ft-tertiary z-1 bg-gray-900"
          data-anime="translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 0;"
        >
          <div className="container max-w-xl">
            <div
              className="uc-navbar min-h-64px lg:min-h-80px text-gray-900 dark:text-white"
              data-uc-navbar="mode: click; animation: uc-animation-slide-top-small; duration: 150;"
            >
              <div className="uc-navbar-left">
                <div className="uc-logo text-dark dark:text-white">
                  <a
                    className="panel text-none"
                    href="#"
                    style={{ width: "140px" }}
                  >
                    <img
                      className="dark:d-none"
                      src={Lexend_light}
                      alt="Lexend"
                    />
                    <img
                      className="d-none dark:d-block"
                      src={Lexend_dark}
                      alt="Lexend"
                    />
                  </a>
                </div>
                <ul className="uc-navbar-nav gap-3 xl:gap-4 d-none lg:d-flex fw-medium ms-2">
                  <li>
                    <a href="page-features.html">Features</a>
                  </li>
                  <li>
                    <a href="page-pricing.html">Pricing</a>
                  </li>
                  <li>
                    <a href="blog.html">Insights</a>
                  </li>
                  <li>
                    <a href="page-about.html">About</a>
                  </li>
                  <li>
                    <a href="page-contact.html">Contact</a>
                  </li>
                  <li>
                    <a href="#">
                      More <span data-uc-navbar-parent-icon></span>
                    </a>
                    <div
                      className="uc-navbar-dropdown"
                      data-uc-drop="mode: click; offset: 0; boundary: !.uc-navbar; stretch: x; animation: uc-animation-slide-top-small; duration: 150;"
                    >
                      <div
                        className="uc-drop-grid row child-cols g-4"
                        data-uc-grid
                      >
                        <div>
                          <div
                            className="uc-drop-grid row child-cols g-4"
                            data-uc-grid
                          >
                            <div>
                              <ul className="uc-nav uc-navbar-dropdown-nav">
                                <li className="uc-nav-header">Main Pages</li>
                                <li>
                                  <a href="index.html">Home 01</a>
                                </li>
                                <li>
                                  <a href="index-2.html">Home 02</a>
                                </li>
                                <li>
                                  <a href="index-3.html">Home 03</a>
                                </li>
                                <li>
                                  <a href="index-4.html">
                                    Home 04{" "}
                                    <span className="fw-bold text-primary fs-8 ms-1 px-1 border rounded-pill">
                                      New
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="index-5.html">
                                    Home 05{" "}
                                    <span className="fw-bold text-primary fs-8 ms-1 px-1 border rounded-pill">
                                      New
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="index-6.html">
                                    Home 06{" "}
                                    <span className="fw-bold text-primary fs-8 ms-1 px-1 border rounded-pill">
                                      New
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    Home 07{" "}
                                    <span className="fw-bold text-gray-400 fs-8 ms-1 px-1 border rounded-pill">
                                      Soon
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    Home 08{" "}
                                    <span className="fw-bold text-gray-400 fs-8 ms-1 px-1 border rounded-pill">
                                      Soon
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    Home 09{" "}
                                    <span className="fw-bold text-gray-400 fs-8 ms-1 px-1 border rounded-pill">
                                      Soon
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    Home 10{" "}
                                    <span className="fw-bold text-gray-400 fs-8 ms-1 px-1 border rounded-pill">
                                      Soon
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <ul className="uc-nav uc-navbar-dropdown-nav">
                                <li className="uc-nav-header">Inner Pages</li>
                                <li>
                                  <a href="page-features.html">Features</a>
                                </li>
                                <li>
                                  <a href="page-pricing.html">Pricing</a>
                                </li>
                                <li>
                                  <a href="page-integrations.html">
                                    Integrations
                                  </a>
                                </li>
                                <li>
                                  <a href="page-about.html">About</a>
                                </li>
                                <li>
                                  <a href="page-career.html">Career</a>
                                </li>
                                <li>
                                  <a href="page-team.html">
                                    Team{" "}
                                    <span className="fw-bold text-primary fs-8 ms-1 px-1 border rounded-pill">
                                      New
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="page-career-detail.html">
                                    Job details
                                  </a>
                                </li>
                                <li>
                                  <a href="page-contact.html">Contact</a>
                                </li>
                                <li>
                                  <a href="page-contact-2.html">Contact v2</a>
                                </li>
                                <li>
                                  <a href="#">
                                    Services{" "}
                                    <span className="fw-bold text-gray-400 fs-8 ms-1 px-1 border rounded-pill">
                                      Soon
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <ul className="uc-nav uc-navbar-dropdown-nav">
                                <li className="uc-nav-header">CMS Pages</li>
                                <li>
                                  <a href="blog.html">Modern</a>
                                </li>
                                <li>
                                  <a href="blog-classNameic.html">
                                    ClassNameic
                                  </a>
                                </li>
                                <li>
                                  <a href="blog-2cols.html">Grid 2 cols</a>
                                </li>
                                <li>
                                  <a href="blog-3cols.html">Grid 3 cols</a>
                                </li>
                                <li>
                                  <a href="blog-4cols.html">Grid 4 cols</a>
                                </li>
                                <li>
                                  <a href="blog-category.html">Category</a>
                                </li>
                                <li>
                                  <a href="blog-author.html">Author</a>
                                </li>
                                <li>
                                  <a href="blog-details.html">Blog single</a>
                                </li>
                                <li>
                                  <a href="blog-details-2.html">
                                    Blog single v2
                                  </a>
                                </li>
                                <li>
                                  <a href="blog-details-3.html">
                                    Blog single v3
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <ul className="uc-nav uc-navbar-dropdown-nav">
                                <li className="uc-nav-header">Shop Pages</li>
                                <li>
                                  <a href="shop.html">Grid 4 cols</a>
                                </li>
                                <li>
                                  <a href="shop-3.html">Grid 3 cols</a>
                                </li>
                                <li>
                                  <a href="shop-2.html">Grid 2 cols</a>
                                </li>
                                <li>
                                  <a href="shop-product-detail.html">
                                    Product detail
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-product-detail-2.html">
                                    Product detail v2
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-cart.html">Cart</a>
                                </li>
                                <li>
                                  <a href="shop-cart-2.html">Cart v2</a>
                                </li>
                                <li>
                                  <a href="shop-checkout.html">Checkout</a>
                                </li>
                                <li>
                                  <a href="shop-checkout-2.html">Checkout v2</a>
                                </li>
                                <li>
                                  <a href="shop-order.html">
                                    Order confirmation
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <ul className="uc-nav uc-navbar-dropdown-nav">
                                <li className="uc-nav-header">Other pages</li>
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
                                  <a href="reset-password.html">
                                    Reset password
                                  </a>
                                </li>
                                <li>
                                  <a href="reset-password-2.html">
                                    Reset password v2
                                  </a>
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
                        <div className="col-3">
                          <div className="panel w-100 overflow-hidden">
                            <div className="ratio ratio-3x4 overflow-hidden rounded">
                              <img
                                src="../data/template/menu-banner.jpg"
                                alt="Let's build anything with Lexend!"
                              />
                              <a
                                className="position-cover"
                                href="https://themeforest.net/item/lexend-software-saas-startup-html5-template/51596504"
                                target="_blank"
                              ></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="uc-navbar-right">
                <div className="d-none xl:d-block">
                  <a
                    className="text-none fw-medium"
                    href="#uc-contact-modal"
                    data-uc-toggle
                  >
                    <span>Request a demo</span>
                  </a>
                </div>
                <div className="d-none lg:d-block">
                  <a className="text-none fw-medium" href="sign-in.html">
                    <span>Log in</span>
                  </a>
                </div>
                <a
                  className="btn btn-sm btn-primary text-white text-none d-none lg:d-inline-flex"
                  href="page-pricing.html"
                >
                  Start free trial
                </a>
                <div className="d-inline-block">
                  <a href="#" className="hstack gap-narrow text-none fw-medium">
                    En <span data-uc-drop-parent-icon></span>
                  </a>
                  <div
                    className="p-2 bg-white dark:bg-gray-800 shadow-xs rounded w-150px"
                    data-uc-drop="mode: click; offset: 28; pos: bottom-left; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150;"
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
                <button
                  onClick={() => SetUc_open(true)}
                  className="d-block lg:d-none"
                  data-uc-navbar-toggle-icon
                  data-uc-toggle
                ></button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* <div
        id="uc-menu-panel"
        data-uc-offcanvas="overlay: true;"
        className="uc-offcanvas uc-offcanvas-overlay uc-open"
        tabindex="-1"
        style={{ display: "block" }}
      >
        <div
          className="uc-offcanvas-bar bg-white text-dark dark:bg-gray-900 dark:text-white uc-offcanvas-bar-animation uc-offcanvas-slide"
          role="dialog"
          aria-modal="true"
          style={{ maxWidth: "927px" }}
        >
          <header className="uc-offcanvas-header hstack justify-between items-center pb-2 bg-white dark:bg-gray-900">
            <div className="uc-logo">
              <a
                className="h5 text-none text-gray-900 dark:text-white"
                href="index.html"
              >
                <img
                  className="w-32px"
                  src="../assets/images/common/logo-mark.svg"
                  alt="Lexend"
                />
              </a>
            </div>
            <button
              className="uc-offcanvas-close rtl:end-auto rtl:start-0 m-1 mt-2 icon-3 btn border-0 dark:text-white dark:text-opacity-50 hover:text-primary hover:rotate-90 duration-150 transition-all"
              type="button"
            >
              <i className="unicon-close"></i>
            </button>
          </header>

          <div className="panel">
            <form
              id="search-panel"
              className="form-icon-group vstack gap-1 mb-2 uc-sticky"
              data-uc-sticky=""
            >
              <input
                type="email"
                className="form-control form-control-sm fs-7 rounded-default"
                placeholder="Search.."
              />
              <span className="form-icon text-gray">
                <i className="unicon-search icon-1"></i>
              </span>
            </form>
            <div
              className="uc-sticky-placeholder"
              style={{ height: "40px", width: "290px", margin: "0px 0px 16px" }}
              hidden=""
            ></div>
            <ul
              className="nav-y gap-narrow fw-medium fs-6 uc-nav"
              data-uc-nav=""
            >
              <li>
                <a href="page-features.html">Features</a>
              </li>
              <li>
                <a href="page-pricing.html">Pricing</a>
              </li>
              <li>
                <a href="page-about.html">About</a>
              </li>
              <li>
                <a href="page-career.html">Career</a>
              </li>
              <li>
                <a href="page-contact.html">Contact</a>
              </li>
              <li className="uc-parent">
                <a
                  href="#"
                  id="uc-nav-1"
                  role="button"
                  aria-controls="uc-nav-2"
                  aria-expanded="false"
                  aria-disabled="false"
                >
                  Inner Pages
                </a>
                <ul
                  className="uc-nav-sub uc-nav"
                  data-uc-nav=""
                  hidden=""
                  id="uc-nav-2"
                  role="region"
                  aria-labelledby="uc-nav-1"
                >
                  <li className="uc-parent" role="presentation">
                    <a
                      href="blog.html"
                      id="uc-nav-5"
                      role="button"
                      aria-controls="uc-nav-6"
                      aria-expanded="false"
                      aria-disabled="false"
                    >
                      Blog
                    </a>
                    <ul
                      className="uc-nav-sub"
                      hidden=""
                      id="uc-nav-6"
                      role="region"
                      aria-labelledby="uc-nav-5"
                    >
                      <li role="presentation">
                        <a href="blog.html">Full Width</a>
                      </li>
                      <li role="presentation">
                        <a href="blog-2cols.html">Grid 2 Cols</a>
                      </li>
                      <li role="presentation">
                        <a href="blog-3cols.html">Grid 3 Cols</a>
                      </li>
                      <li role="presentation">
                        <a href="blog-4cols.html">Grid 4 Cols</a>
                      </li>
                    </ul>
                  </li>
                  <li className="uc-parent" role="presentation">
                    <a
                      href="blog-details.html"
                      id="uc-nav-7"
                      role="button"
                      aria-controls="uc-nav-8"
                      aria-expanded="false"
                      aria-disabled="false"
                    >
                      Blog - detail
                    </a>
                    <ul
                      className="uc-nav-sub"
                      hidden=""
                      id="uc-nav-8"
                      role="region"
                      aria-labelledby="uc-nav-7"
                    >
                      <li role="presentation">
                        <a href="blog-details.html">Blog detail</a>
                      </li>
                      <li role="presentation">
                        <a href="blog-details-2.html">Blog detail - v2</a>
                      </li>
                    </ul>
                  </li>
                  <li className="uc-parent" role="presentation">
                    <a
                      href="#"
                      id="uc-nav-9"
                      role="button"
                      aria-controls="uc-nav-10"
                      aria-expanded="false"
                      aria-disabled="false"
                    >
                      Useful pages
                    </a>
                    <ul
                      className="uc-nav-sub"
                      hidden=""
                      id="uc-nav-10"
                      role="region"
                      aria-labelledby="uc-nav-9"
                    >
                      <li role="presentation">
                        <a href="sign-up.html">Sign up</a>
                      </li>
                      <li role="presentation">
                        <a href="sign-in.html">Sign in</a>
                      </li>
                      <li role="presentation">
                        <a href="reset-password.html">Reset password</a>
                      </li>
                      <li role="presentation">
                        <a href="404.html">404 page</a>
                      </li>
                      <li role="presentation">
                        <a href="coming-soon.html">Coming soon</a>
                      </li>
                    </ul>
                  </li>
                  <li className="uc-parent" role="presentation">
                    <a
                      href="#"
                      id="uc-nav-11"
                      role="button"
                      aria-controls="uc-nav-12"
                      aria-expanded="false"
                      aria-disabled="false"
                    >
                      Other pages
                    </a>
                    <ul
                      className="uc-nav-sub"
                      hidden=""
                      id="uc-nav-12"
                      role="region"
                      aria-labelledby="uc-nav-11"
                    >
                      <li role="presentation">
                        <a href="page-faq.html">FAQ</a>
                      </li>
                      <li role="presentation">
                        <a href="page-terms.html">Terms of use</a>
                      </li>
                      <li role="presentation">
                        <a href="page-privacy.html">Privacy policy</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="uc-parent">
                <a
                  href="shop.html"
                  id="uc-nav-3"
                  role="button"
                  aria-controls="uc-nav-4"
                  aria-expanded="false"
                  aria-disabled="false"
                >
                  Shop
                </a>
                <ul
                  className="uc-nav-sub uc-nav"
                  data-uc-nav=""
                  hidden=""
                  id="uc-nav-4"
                  role="region"
                  aria-labelledby="uc-nav-3"
                >
                  <li className="uc-parent" role="presentation">
                    <a
                      href="shop.html"
                      id="uc-nav-13"
                      role="button"
                      aria-controls="uc-nav-14"
                      aria-expanded="false"
                      aria-disabled="false"
                    >
                      Shop layouts
                    </a>
                    <ul
                      className="uc-nav-sub"
                      hidden=""
                      id="uc-nav-14"
                      role="region"
                      aria-labelledby="uc-nav-13"
                    >
                      <li role="presentation">
                        <a href="shop.html">Shop 4 cols</a>
                      </li>
                      <li role="presentation">
                        <a href="shop-3.html">Shop 3 cols</a>
                      </li>
                      <li role="presentation">
                        <a href="shop-2.html">Shop 2 cols</a>
                      </li>
                      <li role="presentation">
                        <a href="shop-sidebar.html">Shop with sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li role="presentation">
                    <a href="shop-category.html">Archive category</a>
                  </li>
                  <li role="presentation">
                    <a href="shop-product-detail.html">Product detail</a>
                  </li>
                  <li role="presentation">
                    <a href="shop-product-detail-2.html">Product detail - v2</a>
                  </li>
                  <li role="presentation">
                    <a href="shop-cart.html">Cart</a>
                  </li>
                  <li role="presentation">
                    <a href="shop-cart-2.html">Cart - v2</a>
                  </li>
                  <li role="presentation">
                    <a href="shop-checkout.html">Checkout</a>
                  </li>
                  <li role="presentation">
                    <a href="shop-checkout-2.html">Checkout - v2</a>
                  </li>
                  <li role="presentation">
                    <a href="shop-order.html">Order confirmation</a>
                  </li>
                </ul>
              </li>
              <li className="hr opacity-10 my-1"></li>
              <li>
                <a href="sign-up.html">Create an account</a>
              </li>
              <li>
                <a href="sign-in.html">Log in</a>
              </li>
              <li>
                <a href="https://themeforest.net/item/lexend-software-saas-startup-html5-template/51596504">
                  Buy Template
                </a>
              </li>
            </ul>
            <ul className="social-icons nav-x mt-4">
              <li>
                <a href="#">
                  <i className="unicon-logo-medium icon-2"></i>
                </a>
                <a href="#">
                  <i className="unicon-logo-x-filled icon-2"></i>
                </a>
                <a href="#">
                  <i className="unicon-logo-instagram icon-2"></i>
                </a>
                <a href="#">
                  <i className="unicon-logo-pinterest icon-2"></i>
                </a>
              </li>
            </ul>
            <div
              className="py-2 hstack gap-2 mt-4 bg-white dark:bg-gray-900 uc-sticky"
              data-uc-sticky="position: bottom"
            >
              <div className="vstack gap-1">
                <span className="fs-7 opacity-60">Select theme:</span>
                <div className="darkmode-trigger" data-darkmode-switch="">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider fs-5"></span>
                  </label>
                </div>
              </div>
            </div>
            <div
              className="uc-sticky-placeholder"
              style={{ height: "83px", width: "290px", margin: "32px 0px 0px" }}
              hidden=""
            ></div>
          </div>
        </div>
      </div> */}

      {/* <div id="uc-menu-panel" data-uc-offcanvas="overlay: true;">
        <div className="uc-offcanvas-bar bg-white text-dark dark:bg-gray-900 dark:text-white">
          <header className="uc-offcanvas-header hstack justify-between items-center pb-2 bg-white dark:bg-gray-900">
            <div className="uc-logo">
              <a
                className="h5 text-none text-gray-900 dark:text-white"
                href="index.html"
              >
                <img
                  className="w-32px"
                  src="../assets/images/common/logo-mark.svg"
                  alt="Lexend"
                />
              </a>
            </div>
            <button
              className="uc-offcanvas-close rtl:end-auto rtl:start-0 m-1 mt-2 icon-3 btn border-0 dark:text-white dark:text-opacity-50 hover:text-primary hover:rotate-90 duration-150 transition-all"
              type="button"
            >
              <i className="unicon-close"></i>
            </button>
          </header>

          <div className="panel">
            <form
              id="search-panel"
              className="form-icon-group vstack gap-1 mb-2"
              data-uc-sticky=""
            >
              <input
                type="email"
                className="form-control form-control-sm fs-7 rounded-default"
                placeholder="Search.."
              />
              <span className="form-icon text-gray">
                <i className="unicon-search icon-1"></i>
              </span>
            </form>
            <ul className="nav-y gap-narrow fw-medium fs-6" data-uc-nav>
              <li>
                <a href="page-features.html">Features</a>
              </li>
              <li>
                <a href="page-pricing.html">Pricing</a>
              </li>
              <li>
                <a href="page-about.html">About</a>
              </li>
              <li>
                <a href="page-career.html">Career</a>
              </li>
              <li>
                <a href="page-contact.html">Contact</a>
              </li>
              <li className="uc-parent">
                <a href="#">Inner Pages</a>
                <ul className="uc-nav-sub" data-uc-nav="">
                  <li className="uc-parent">
                    <a href="blog.html">Blog</a>
                    <ul className="uc-nav-sub">
                      <li>
                        <a href="blog.html">Full Width</a>
                      </li>
                      <li>
                        <a href="blog-2cols.html">Grid 2 Cols</a>
                      </li>
                      <li>
                        <a href="blog-3cols.html">Grid 3 Cols</a>
                      </li>
                      <li>
                        <a href="blog-4cols.html">Grid 4 Cols</a>
                      </li>
                    </ul>
                  </li>
                  <li className="uc-parent">
                    <a href="blog-details.html">Blog - detail</a>
                    <ul className="uc-nav-sub">
                      <li>
                        <a href="blog-details.html">Blog detail</a>
                      </li>
                      <li>
                        <a href="blog-details-2.html">Blog detail - v2</a>
                      </li>
                    </ul>
                  </li>
                  <li className="uc-parent">
                    <a href="#">Useful pages</a>
                    <ul className="uc-nav-sub">
                      <li>
                        <a href="sign-up.html">Sign up</a>
                      </li>
                      <li>
                        <a href="sign-in.html">Sign in</a>
                      </li>
                      <li>
                        <a href="reset-password.html">Reset password</a>
                      </li>
                      <li>
                        <a href="404.html">404 page</a>
                      </li>
                      <li>
                        <a href="coming-soon.html">Coming soon</a>
                      </li>
                    </ul>
                  </li>
                  <li className="uc-parent">
                    <a href="#">Other pages</a>
                    <ul className="uc-nav-sub">
                      <li>
                        <a href="page-faq.html">FAQ</a>
                      </li>
                      <li>
                        <a href="page-terms.html">Terms of use</a>
                      </li>
                      <li>
                        <a href="page-privacy.html">Privacy policy</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="uc-parent">
                <a href="shop.html">Shop</a>
                <ul className="uc-nav-sub" data-uc-nav="">
                  <li className="uc-parent">
                    <a href="shop.html">Shop layouts</a>
                    <ul className="uc-nav-sub">
                      <li>
                        <a href="shop.html">Shop 4 cols</a>
                      </li>
                      <li>
                        <a href="shop-3.html">Shop 3 cols</a>
                      </li>
                      <li>
                        <a href="shop-2.html">Shop 2 cols</a>
                      </li>
                      <li>
                        <a href="shop-sidebar.html">Shop with sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="shop-category.html">Archive category</a>
                  </li>
                  <li>
                    <a href="shop-product-detail.html">Product detail</a>
                  </li>
                  <li>
                    <a href="shop-product-detail-2.html">Product detail - v2</a>
                  </li>
                  <li>
                    <a href="shop-cart.html">Cart</a>
                  </li>
                  <li>
                    <a href="shop-cart-2.html">Cart - v2</a>
                  </li>
                  <li>
                    <a href="shop-checkout.html">Checkout</a>
                  </li>
                  <li>
                    <a href="shop-checkout-2.html">Checkout - v2</a>
                  </li>
                  <li>
                    <a href="shop-order.html">Order confirmation</a>
                  </li>
                </ul>
              </li>
              <li className="hr opacity-10 my-1"></li>
              <li>
                <a href="sign-up.html">Create an account</a>
              </li>
              <li>
                <a href="sign-in.html">Log in</a>
              </li>
              <li>
                <a href="https://themeforest.net/item/lexend-software-saas-startup-html5-template/51596504">
                  Buy Template
                </a>
              </li>
            </ul>
            <ul className="social-icons nav-x mt-4">
              <li>
                <a href="#">
                  <i className="unicon-logo-medium icon-2"></i>
                </a>
                <a href="#">
                  <i className="unicon-logo-x-filled icon-2"></i>
                </a>
                <a href="#">
                  <i className="unicon-logo-instagram icon-2"></i>
                </a>
                <a href="#">
                  <i className="unicon-logo-pinterest icon-2"></i>
                </a>
              </li>
            </ul>
            <div
              className="py-2 hstack gap-2 mt-4 bg-white dark:bg-gray-900"
              data-uc-sticky="position: bottom"
            >
              <div className="vstack gap-1">
                <span className="fs-7 opacity-60">Select theme:</span>
                <div className="darkmode-trigger" data-darkmode-switch="">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider fs-5"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header
        className="uc-header  header-default uc-navbar-sticky-wrap z-999 uc-dark"
        style={{ height: "80px" }}
        data-uc-sticky="start: 100vh; show-on-up: true; animation: uc-animation-slide-top; sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;"
      >
        <nav
          className="uc-navbar-container uc-navbar-float ft-tertiary z-1 bg-gray-900"
          data-anime="translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 0;"
        >
          <div className="container max-w-xl">
            <div
              className="uc-navbar min-h-64px lg:min-h-80px text-gray-900 dark:text-white"
              data-uc-navbar="mode: click; animation: uc-animation-slide-top-small; duration: 150;"
            >
              <div className="uc-navbar-left">
                <div className="uc-logo text-dark dark:text-white">
                  <a
                    className="panel text-none"
                    href="index.html"
                    style={{ width: "140px" }}
                  >
                    <img
                      className="dark:d-none"
                      src="../assets/images/common/logo-light.svg"
                      alt="Lexend"
                    />
                    <img
                      className="d-none dark:d-block"
                      src="../assets/images/common/logo-dark.svg"
                      alt="Lexend"
                    />
                  </a>
                </div>
                <ul className="uc-navbar-nav gap-3 xl:gap-4 d-none lg:d-flex fw-medium ms-2">
                  <li>
                    <a href="page-features.html">Features</a>
                  </li>
                  <li>
                    <a href="page-pricing.html">Pricing</a>
                  </li>
                  <li>
                    <a href="blog.html">Insights</a>
                  </li>
                  <li>
                    <a href="page-about.html">About</a>
                  </li>
                  <li>
                    <a href="page-contact.html">Contact</a>
                  </li>
                  <li>
                    <a href="#">
                      More <span data-uc-navbar-parent-icon></span>
                    </a>
                    <div
                      className="uc-navbar-dropdown"
                      data-uc-drop="mode: click; offset: 0; boundary: !.uc-navbar; stretch: x; animation: uc-animation-slide-top-small; duration: 150;"
                    >
                      <div
                        className="uc-drop-grid row child-cols g-4"
                        data-uc-grid
                      >
                        <div>
                          <div
                            className="uc-drop-grid row child-cols g-4"
                            data-uc-grid
                          >
                            <div>
                              <ul className="uc-nav uc-navbar-dropdown-nav">
                                <li className="uc-nav-header">Main Pages</li>
                                <li>
                                  <a href="index.html">Home 01</a>
                                </li>
                                <li>
                                  <a href="index-2.html">Home 02</a>
                                </li>
                                <li>
                                  <a href="index-3.html">Home 03</a>
                                </li>
                                <li>
                                  <a href="index-4.html">
                                    Home 04{" "}
                                    <span className="fw-bold text-primary fs-8 ms-1 px-1 border rounded-pill">
                                      New
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="index-5.html">
                                    Home 05{" "}
                                    <span className="fw-bold text-primary fs-8 ms-1 px-1 border rounded-pill">
                                      New
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="index-6.html">
                                    Home 06{" "}
                                    <span className="fw-bold text-primary fs-8 ms-1 px-1 border rounded-pill">
                                      New
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    Home 07{" "}
                                    <span className="fw-bold text-gray-400 fs-8 ms-1 px-1 border rounded-pill">
                                      Soon
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    Home 08{" "}
                                    <span className="fw-bold text-gray-400 fs-8 ms-1 px-1 border rounded-pill">
                                      Soon
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    Home 09{" "}
                                    <span className="fw-bold text-gray-400 fs-8 ms-1 px-1 border rounded-pill">
                                      Soon
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    Home 10{" "}
                                    <span className="fw-bold text-gray-400 fs-8 ms-1 px-1 border rounded-pill">
                                      Soon
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <ul className="uc-nav uc-navbar-dropdown-nav">
                                <li className="uc-nav-header">Inner Pages</li>
                                <li>
                                  <a href="page-features.html">Features</a>
                                </li>
                                <li>
                                  <a href="page-pricing.html">Pricing</a>
                                </li>
                                <li>
                                  <a href="page-integrations.html">
                                    Integrations
                                  </a>
                                </li>
                                <li>
                                  <a href="page-about.html">About</a>
                                </li>
                                <li>
                                  <a href="page-career.html">Career</a>
                                </li>
                                <li>
                                  <a href="page-team.html">
                                    Team{" "}
                                    <span className="fw-bold text-primary fs-8 ms-1 px-1 border rounded-pill">
                                      New
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="page-career-detail.html">
                                    Job details
                                  </a>
                                </li>
                                <li>
                                  <a href="page-contact.html">Contact</a>
                                </li>
                                <li>
                                  <a href="page-contact-2.html">Contact v2</a>
                                </li>
                                <li>
                                  <a href="#">
                                    Services{" "}
                                    <span className="fw-bold text-gray-400 fs-8 ms-1 px-1 border rounded-pill">
                                      Soon
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <ul className="uc-nav uc-navbar-dropdown-nav">
                                <li className="uc-nav-header">CMS Pages</li>
                                <li>
                                  <a href="blog.html">Modern</a>
                                </li>
                                <li>
                                  <a href="blog-classNameic.html">
                                    ClassNclassNameic
                                  </a>
                                </li>
                                <li>
                                  <a href="blog-2cols.html">Grid 2 cols</a>
                                </li>
                                <li>
                                  <a href="blog-3cols.html">Grid 3 cols</a>
                                </li>
                                <li>
                                  <a href="blog-4cols.html">Grid 4 cols</a>
                                </li>
                                <li>
                                  <a href="blog-category.html">Category</a>
                                </li>
                                <li>
                                  <a href="blog-author.html">Author</a>
                                </li>
                                <li>
                                  <a href="blog-details.html">Blog single</a>
                                </li>
                                <li>
                                  <a href="blog-details-2.html">
                                    Blog single v2
                                  </a>
                                </li>
                                <li>
                                  <a href="blog-details-3.html">
                                    Blog single v3
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <ul className="uc-nav uc-navbar-dropdown-nav">
                                <li className="uc-nav-header">Shop Pages</li>
                                <li>
                                  <a href="shop.html">Grid 4 cols</a>
                                </li>
                                <li>
                                  <a href="shop-3.html">Grid 3 cols</a>
                                </li>
                                <li>
                                  <a href="shop-2.html">Grid 2 cols</a>
                                </li>
                                <li>
                                  <a href="shop-product-detail.html">
                                    Product detail
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-product-detail-2.html">
                                    Product detail v2
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-cart.html">Cart</a>
                                </li>
                                <li>
                                  <a href="shop-cart-2.html">Cart v2</a>
                                </li>
                                <li>
                                  <a href="shop-checkout.html">Checkout</a>
                                </li>
                                <li>
                                  <a href="shop-checkout-2.html">Checkout v2</a>
                                </li>
                                <li>
                                  <a href="shop-order.html">
                                    Order confirmation
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <ul className="uc-nav uc-navbar-dropdown-nav">
                                <li className="uc-nav-header">Other pages</li>
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
                                  <a href="reset-password.html">
                                    Reset password
                                  </a>
                                </li>
                                <li>
                                  <a href="reset-password-2.html">
                                    Reset password v2
                                  </a>
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
                        <div className="col-3">
                          <div className="panel w-100 overflow-hidden">
                            <div className="ratio ratio-3x4 overflow-hidden rounded">
                              <img
                                src="../assets/images/template/menu-banner.jpg"
                                alt="Let's build anything with Lexend!"
                              />
                              <a
                                className="position-cover"
                                href="https://themeforest.net/item/lexend-software-saas-startup-html5-template/51596504"
                                target="_blank"
                              ></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="uc-navbar-right">
                <div className="d-none xl:d-block">
                  <a
                    className="text-none fw-medium"
                    href="#uc-contact-modal"
                    data-uc-toggle
                  >
                    <span>Request a demo</span>
                  </a>
                </div>
                <div className="d-none lg:d-block">
                  <a className="text-none fw-medium" href="sign-in.html">
                    <span>Log in</span>
                  </a>
                </div>
                <a
                  className="btn btn-sm btn-primary text-white text-none d-none lg:d-inline-flex"
                  href="page-pricing.html"
                >
                  Start free trial
                </a>
                <div className="d-inline-block">
                  <a href="#" className="hstack gap-narrow text-none fw-medium">
                    En <span data-uc-drop-parent-icon></span>
                  </a>
                  <div
                    className="p-2 bg-white dark:bg-gray-800 shadow-xs rounded w-150px"
                    data-uc-drop="mode: click; offset: 28; pos: bottom-left; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150;"
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
                <a
                  href="#uc-menu-panel"
                  className="d-block lg:d-none"
                  data-uc-navbar-toggle-icon
                  data-uc-toggle
                ></a>
              </div>
            </div>
          </div>
        </nav>
      </header> */}

      <Outlet />
    </>
  );
}

export default Header;
