import React from 'react'
import {Element} from "react-scroll";
import Count from "../Components/Count";

function ScheduleSection() {
    return (
        <Element name="schedule" className="section mx-5">
            <div 
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center">
            <div className="columns">
                <div className="column">
                    <h1 className="section-title has-text-centered is-size-1-mobile">SCHEDULE</h1>
                </div>
            </div>
            <Count className="" />
            </div>
           
            
            <div className="xl:mx-4">
            <div className="columns">
                <div className="column"
                data-aos="fade-up"
                data-aos-offset="0"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center">
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">08.30 - 09.00</p>
                                <p className="has-text-weight-bold">Open Gate</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">09.00 - 09.15</p>
                                <p className="has-text-weight-bold">Opening</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">09.15 - 09.28</p>
                                <p className="has-text-weight-bold">IBRAHIM KHOLILUL</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">09.28 - 09.41</p>
                                <p className="has-text-weight-bold">ANGELO</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">09.41 - 09.46</p>
                                <p className="has-text-weight-bold">SERENITY PERFORMANCE ( 1 )			</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">09.46 - 09.59</p>
                                <p className="has-text-weight-bold">GRACE ANANDA	</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-center">
                    <div className="timeline">
                    <div className="timeline-item">
                    <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">09.59 - 10.12</p>
                                <p className="has-text-weight-bold">KARLINA OCTAVIANY</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">10.12 - 10.42</p>
                                <p className="has-text-weight-bold">TOILET BREAK			</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">10.42 - 10.55</p>
                                <p className="has-text-weight-bold">EUNIKE STELIA	</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">10.55 - 11.08</p>
                                <p className="has-text-weight-bold"> GABRIELLA TAN ATMAJA</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">11.08 - 11.13</p>
                                <p className="has-text-weight-bold">SERENITY PERFORMANCE (2)			</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">11.13-11.26</p>
                                <p className="has-text-weight-bold"> GABRIELLA CLARA</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-center">
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">11.26-11.39</p>
                                <p className="has-text-weight-bold"> GERALD SEBASTIAN</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">11.39-11.46</p>
                                <p className="has-text-weight-bold">Closing</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="column"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-center">
                    <div className="timeline">
                    <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">13.45-13.59</p>
                                <p className="has-text-weight-bold">Ayesha Felice</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">13.59-14.19</p>
                                <p className="has-text-weight-bold">QnA</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">14.19-14.29</p>
                                <p className="has-text-weight-bold">Kevin Frans</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">14.29-14.49</p>
                                <p className="has-text-weight-bold">QnA</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">14.49-14.54</p>
                                <p className="has-text-weight-bold">SEREN1TY Performance</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">14.54-15.03</p>
                                <p className="has-text-weight-bold">Timothy Ronald</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">15.03-15.20</p>
                                <p className="has-text-weight-bold">Closing</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            </div>
        </Element>
    )
}

export default ScheduleSection

/**/
