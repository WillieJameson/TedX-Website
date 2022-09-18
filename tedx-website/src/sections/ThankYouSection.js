import React from 'react'
import { Link } from 'react-router-dom'

export default function ThankSection() {
    return (<div>
        <div className="section is-medium three" style={{marginTop: '50px'}}>
                <div className="columns is-centered is-vcentered">
                    <div className="column is-3 has-text-centered"
                        data-aos="fade-down"
                        data-aos-offset="0"
                        data-aos-delay="0"
                        data-aos-duration="1500"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        data-aos-anchor-placement="top-center">
                        <h1 className="is-size-4 has-text-weight-bold is-hidden-mobile">Thank you for Registering!</h1>
                        <h1 className="is-size-3 has-text-weight-bold mb-3 is-hidden-tablet" style={{lineHeight:1.4}}>Thank you for Registering!</h1>
                        <p className="is-size-5">
                            We will be looking forward for your presence in TEDxYouth@SMAKONE 2021. More details will be sent to you via email 1 day before our event, make sure to check your email!
                            If you have not received the email until then, please contact Jesselyne Gratia <br />(+62-813-1495-7597)
                        </p>
                        <br />
                        <p className="is-size-5">
                            Back to <Link to="/" style={{textDecoration: 'underline'}}>Home</Link>
                        </p>
                </div>
            </div>
        </div>
    </div>
    )
}
