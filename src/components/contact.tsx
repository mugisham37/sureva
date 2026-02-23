import React from 'react'

const contact = () => {
  return (
    <section className="section_hero">
                <div className="padding-global">
                    <div className="container-large">
                        <div className="w-layout-vflex vertical-center">
                            <div data-w-id="0a300f0c-7d82-a3ae-352f-7016ac44cab5"
                                style={{opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                                <div data-wf--tag--variant="base" className="tag">
                                    <div className="text-xs">contact us</div>
                                </div>
                            </div>
                            <div className="spacer-medium"></div>
                            <h1 data-w-id="c9847919-d2ed-20fc-1d2f-d990a68b0e17"
                                style={{opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}
                                className="h1">We're here to help</h1>
                            <div className="spacer-medium"></div>
                            <div className="max-description is-42rem">
                                <div data-w-id="c9847919-d2ed-20fc-1d2f-d990a68b0e1e"
                                    style={{opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}
                                    className="text-color-secondary">Reach out to our dedicated support team for any
                                    assistance you may need.</div>
                            </div>
                            <div className="gap-section-xsmall"></div>
                            <div data-w-id="813a4795-1a85-6d6c-c141-ee99c6f0e4de"
                                style={{opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}
                                className="contact_form w-form">
                                <div data-animation="arrow-pínk" className="contact_arrow-pink hide-mobile-landscape"><img
                                        src="https://cdn.prod.website-files.com/68ae0ab59eebc086d9d584e4/68b9d11a9112e6931301851d_Vector%2067.svg"
                                        loading="lazy" alt="" className="img" /></div>
                                <div data-animation="arrow-green" className="contact_arrow-green hide-mobile-landscape"
                                    style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate3d(0px, -0.6491%, 0px) rotate(-110.169deg)'}}>
                                    <img src="https://cdn.prod.website-files.com/68ae0ab59eebc086d9d584e4/68b7171f15def828a26df833_arrow%20green.svg"
                                        loading="lazy" alt="" className="img" /></div>
                                <form id="email-form" name="email-form" data-name="Email Form" method="get"
                                    className="form_form" data-wf-page-id="68bf4d646843efcbc789b886"
                                    data-wf-element-id="813a4795-1a85-6d6c-c141-ee99c6f0e4df" aria-label="Email Form">
                                    <div className="form_field-group">
                                        <div className="form_field-wrapper"><input className="form_input w-input"
                                                maxLength={256} name="name" data-name="Name" placeholder="First Name"
                                                type="text" id="name" required /></div>
                                        <div className="form_field-wrapper"><input className="form_input w-input"
                                                maxLength={256} name="name" data-name="Name" placeholder="Last Name"
                                                type="text" id="name" /></div>
                                    </div>
                                    <div className="form_field-group">
                                        <div className="form_field-wrapper"><input className="form_input w-input"
                                                maxLength={256} name="Phone" data-name="Phone"
                                                placeholder="Phone number" type="tel" id="Phone" /></div>
                                        <div className="form_field-wrapper"><input className="form_input w-input"
                                                maxLength={256} name="Email" data-name="Email"
                                                placeholder="Email address (required)" type="email" id="Email"
                                                required /></div>
                                    </div>
                                    <div className="form_field-wrapper"><textarea id="field" name="field" maxLength={5000}
                                            data-name="Field" placeholder="Your messages"
                                            className="form_input is-text-area w-input"></textarea></div><input
                                        type="submit" data-wait="Please wait..." className="button w-button"
                                        value="Contact us" />
                                </form>
                                <div className="form_message-success w-form-done" tabIndex={-1} role="region"
                                    aria-label="Email Form success">
                                    <div>Thank you! Your submission has been received!</div>
                                </div>
                                <div className="form_message-error w-form-fail" tabIndex={-1} role="region"
                                    aria-label="Email Form failure">
                                    <div>Oops! Something went wrong while submitting the form.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gap-section-small"></div>
            </section>
  )
}

export default contact