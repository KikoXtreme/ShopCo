import "./about.css";

export const About = () => {
    return (
        // <div className="about-page">
        //     <img src="/assets/blaze.jpg" alt="Blaze Pic" />
        //     <p>
        //         <span>Blaze and the Monster Machines</span> is a computer-animated interactive children's TV series that revolves
        //         around Blaze, a monster truck, and his driver, AJ, as they have adventures in Axle City and learn about various
        //         science, technology, engineering, and mathematics concepts which help them on their way. Joining them is the human
        //         mechanic Gabby and their monster truck friends Stripes, Starla, Darington, Watts and Zeg as well as their rival
        //         Crusher and his sidekick Pickle.
        //     </p>
        // </div>
        <section class="about_section layout_padding ">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="img-box">
                            <img src="/assets/blazePic.jpg" alt="" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="detail-box">
                            <div class="heading_container">
                                <h2>
                                    About Us
                                </h2>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem eum consequuntur ipsam repellat dolor soluta aliquid laborum, eius odit consectetur vel quasi in quidem, eveniet ab est corporis tempore.
                            </p>
                            <a href="/">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}