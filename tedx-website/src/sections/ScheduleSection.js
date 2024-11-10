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
                                <p className="heading">09.00 - 09.08</p>
                                <p className="has-text-weight-bold">Opening</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">09.08 - 09.13</p>
                                <p className="has-text-weight-bold">Sambutan</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">09.14 - 09.32</p>
                                <p className="has-text-weight-bold">BRYANT KANDANI</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">09.33 - 09.43</p>
                                <p className="has-text-weight-bold">VALENCIA GABRIELLA</p>
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
                                <p className="heading">09.44 - 09.55</p>
                                <p className="has-text-weight-bold">NATASHA AURELIA</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">09.56 - 10.14</p>
                                <p className="has-text-weight-bold">BRYAN FERRYSIENANDA</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">09.15 - 10.20</p>
                                <p className="has-text-weight-bold">SERENITY PERFORMANCE</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">10.21 - 10.51</p>
                                <p className="has-text-weight-bold">TOILET BREAK</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">10.52 - 11.04</p>
                                <p className="has-text-weight-bold">KEZIA NANIA MANIK</p>
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
                                <p className="heading">11.05 - 11.23</p>
                                <p className="has-text-weight-bold">OSCAR DARMAWAN</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">11.24 - 11.39</p>
                                <p className="has-text-weight-bold">FILDA SALIM</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">11.40-11.50</p>
                                <p className="has-text-weight-bold">CRESSENDO PERFORMANCE</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">11.50-12.00</p>
                                <p className="has-text-weight-bold">CLOSING</p>
                            </div>
                        </div>
                        
                        {/* <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">11.32-11.47</p>
                                <p className="has-text-weight-bold">WINOLA SEBASTIAN</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">11.48 - 11.58</p>
                                <p className="has-text-weight-bold">CRESSENDO PERFORMANCE</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <p className="heading">11.58 - 12.00</p>
                                <p className="has-text-weight-bold">Closing</p>
                            </div>
                        </div> */}
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
