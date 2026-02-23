import React from 'react'

const nav = () => {
    return (
        <div data-animation="default" data-collapse="medium" data-duration="500" data-easing="ease-out"
            data-easing2="ease-in-back" data-no-scroll="1" role="banner" className="navbar w-nav">
            <div className="padding-global is-navbar">
                <div className="container-full is-nav">
                    <div className="navbar_content"
                        style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate3d(0px, 0%, 0px)' }}>
                        <div className="nav_left"><a href="/" className="navbar_logo-link w-nav-brand" aria-label="home"><img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/68ae0ab59eebc086d9d584e4/68b9b823a50348f9a1ae6d78_Frame%202147227145%20(1).webp"
                            alt="" className="navbar_logo" /></a></div>
                        <div className="nav_wrap">
                            <nav role="navigation" className="nav_mobile w-nav-menu">
                                <div className="navbar_list"><a href="/home/home-v1" aria-current="page"
                                    className="nav_links w-nav-link w--current">Home V.1</a><a href="/about"
                                        className="nav_links w-nav-link">Home V.2</a><a href="/home/home-v3"
                                            className="nav_links w-nav-link">Home V.3</a>
                                    <div data-delay="0" data-hover="false"
                                        data-w-id="9edf84aa-1c78-d247-2c17-fa546717f193"
                                        className="nav_dropdown w-dropdown">
                                        <div className="nav_links is-dropdown w-dropdown-toggle" id="w-dropdown-toggle-0"
                                            aria-controls="w-dropdown-list-0" aria-haspopup="menu" aria-expanded="false"
                                            role="button" tabIndex={0}>
                                            <div className="text-block">Pages</div>
                                            <div className="nav_link-icon w-icon-dropdown-toggle"
                                                style={{ transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}
                                                aria-hidden="true"></div>
                                        </div>
                                        <nav className="nav_link-dropdown w-dropdown-list" id="w-dropdown-list-0"
                                            aria-labelledby="w-dropdown-toggle-0">
                                            <div className="nav_dropdown-wrap" style={{ height: '0px' }}>
                                                <div className="nav_dropdown-content">
                                                    <div className="nav_dropdown-column"><a href="/service/service-v1"
                                                        className="nav_dropdown-link hide-mobile-landscape w-dropdown-link"
                                                        tabIndex={0}>Services V.1</a><a href="/service/service-v2"
                                                            className="nav_dropdown-link w-dropdown-link"
                                                            tabIndex={0}>Services V.2</a><a href="/service/service-v3"
                                                                className="nav_dropdown-link w-dropdown-link"
                                                                tabIndex={0}>Services V.3</a></div>
                                                    <div className="nav_dropdown-column"><a href="/contact/contact-v1"
                                                        className="nav_dropdown-link hide-mobile-landscape w-dropdown-link"
                                                        tabIndex={0}>Contact V.1</a><a href="/contact/contact-v2"
                                                            className="nav_dropdown-link w-dropdown-link"
                                                            tabIndex={0}>Contact V.2</a><a href="/contact/contact-v3"
                                                                className="nav_dropdown-link w-dropdown-link"
                                                                tabIndex={0}>Contact V.3</a></div>
                                                    <div className="nav_dropdown-column"><a href="/blog"
                                                        className="nav_dropdown-link w-dropdown-link"
                                                        tabIndex={0}>Blog</a><a href="/get-a-quote"
                                                            className="nav_dropdown-link w-dropdown-link" tabIndex={0}>Get a
                                                            Quote</a><a href="/about"
                                                                className="nav_dropdown-link w-dropdown-link"
                                                                tabIndex={0}>About</a></div>
                                                </div>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className="nav_buttons-wrap">
                            <div className="login-wrap hide-mobile-landscape"><a data-wf--button--variant="base"
                                data-w-id="caf48538-73eb-964e-9931-20a2bd168177" href="https://temlis.com"
                                className="button w-inline-block">
                                <div className="button-content">
                                    <div className="button-text is-one"
                                        style={{ transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                                        Get your free quote</div>
                                    <div className="button-text is-two"
                                        style={{ transform: 'translate3d(0px, 150%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                                        Get your free quote</div>
                                </div>
                            </a></div>
                            <div className="menu-button w-nav-button" style={{ WebkitUserSelect: 'text' }} aria-label="menu"
                                role="button" tabIndex={0} aria-controls="w-nav-overlay-0" aria-haspopup="menu"
                                aria-expanded="false">
                                <div className="nav-button_component">
                                    <div className="nav-button_line is-first"></div>
                                    <div className="nav-button_line is-second"></div>
                                    <div className="nav-button_line is-third"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
        </div>
    )
}

export default nav