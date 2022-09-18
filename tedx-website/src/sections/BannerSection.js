import React from 'react'

export default function BannerSection() {
    return (<div>
        <div className="section is-medium three">
                <div className="columns is-centered is-vcentered">
                    <div className="column is-8 has-text-centered"
                        data-aos="flip-left"
                        data-aos-offset="0"
                        data-aos-delay="0"
                        data-aos-duration="1500"
                        data-aos-mirror="true"
                        data-aos-once="true"
                        data-aos-anchor-placement="top-center">
                        <h1 className="is-size-4 has-text-weight-bold is-hidden-mobile">From The Youth | By The Youth | For The Youth</h1>
                        <h1 className="is-size-3 has-text-weight-bold mb-3 is-hidden-tablet" style={{lineHeight:1.4}}>From The Youth<br/>By The Youth<br/>For The Youth</h1>
                        <p className="is-size-5">TEDxYouth@SmakOne is a place for untamed minds, creative visionaries, and pioneers of change who find solace in creating sustainable solutions for long-standing problems in their communities. Youth isn't defined by age, it's defined by ideas.</p>
                </div>
            </div>
        </div>
    </div>
    )
}

