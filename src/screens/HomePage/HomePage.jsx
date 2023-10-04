import React from "react";
import { ArrowNarrowRight } from "../../components/ArrowNarrowRight";
import { ArrowRightWrapper } from "../../components/ArrowRightWrapper";
import { Arrow } from "../../icons/Arrow";
import { ArrowRight4 } from "../../icons/ArrowRight4";
import { ChevronRight } from "../../icons/ChevronRight";
import { ChevronRight1 } from "../../icons/ChevronRight1";
import { IconOutlineSearch } from "../../icons/IconOutlineSearch";
import "./style.css";

export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="div">
        <div className="frame">
          <div className="overlap-group">
            <div className="frame-2">
              <div className="frame-3">
                <p className="discover-top-tech">Discover Top Tech Professionals In Minutes.</p>
                <p className="streamline-your">
                  Streamline Your Business Needs with Ricoz&#39;s All-in-One Tech Service Hub.
                </p>
              </div>
              <div className="div-wrapper">
                <div className="text-wrapper">Get Started</div>
              </div>
            </div>
            <img className="unsplash" alt="Unsplash" src="/img/unsplash-ytwxplo5haa-3.png" />
            <img className="unsplash-ytwxplohaa" alt="Unsplash" src="/img/unsplash-ytwxplo5haa-2.png" />
          </div>
        </div>
        <div className="frame-wrapper">
          <div className="frame-4">
            <div className="frame-5">
              <p className="explore-our-platform">Explore Our Platform&#39;s Unique Features</p>
              <div className="frame-6">
                <div className="chevron-right-wrapper">
                  <ChevronRight1 className="chevron-right" />
                </div>
                <div className="chevron-right-2-wrapper">
                  <ChevronRight className="chevron-right-2" color="white" />
                </div>
              </div>
            </div>
            <div className="group-wrapper">
              <div className="group">
                <div className="a-service-content">
                  <img className="img" alt="Div icon wrapper" src="/img/div-icon-wrapper-3.svg" />
                  <div className="text-wrapper-2">Wide Range Of Services</div>
                  <div className="overlap-group-2">
                    <p className="p">
                      Find everything from web development to marketing under one roof. Our platform offers a diverse
                      array of tech services
                    </p>
                    <ArrowNarrowRight />
                  </div>
                </div>
                <div className="a-service-content-2">
                  <img className="img" alt="Div icon wrapper" src="/img/div-icon-wrapper-2.svg" />
                  <div className="text-wrapper-2">Instant Search</div>
                  <div className="overlap-group-2">
                    <p className="p">
                      Get connected to top tech professionals within moments. Our intuitive search function ensures
                      quick access.
                    </p>
                    <ArrowNarrowRight />
                  </div>
                </div>
                <div className="a-service-content-3">
                  <img className="img" alt="Div icon wrapper" src="/img/div-icon-wrapper-1.svg" />
                  <div className="text-wrapper-2">Quality Scoring</div>
                  <div className="overlap-group-2">
                    <p className="p">
                      We maintain high service standards. Our unique scoring system ensures you receive top-notch
                      quality from professionals.
                    </p>
                    <ArrowNarrowRight />
                  </div>
                </div>
                <div className="a-service-content-4">
                  <img className="img" alt="Div icon wrapper" src="/img/div-icon-wrapper.png" />
                  <div className="text-wrapper-2"> Integrated Tools</div>
                  <div className="overlap">
                    <p className="text-wrapper-3">
                      Enhance collaboration with built-in tools. Our platform integrates messaging, CRM, and calendars
                      for seamless communication.
                    </p>
                    <ArrowNarrowRight />
                  </div>
                </div>
                <div className="a-service-content-5">
                  <img
                    className="img"
                    alt="Img"
                    src="/img/630cd8051fc37f5b7201d0d8-paid-advertising-service-icon-svg.png"
                  />
                  <div className="text-wrapper-2">Refer and Earn</div>
                  <div className="overlap">
                    <p className="text-wrapper-3">
                      Spread the word and be rewarded. Invite others to join, and both you and your referrals can enjoy
                      the benefits of our refer-and-earn.
                    </p>
                    <ArrowNarrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-7">
          <img className="ricoz" alt="Ricoz" src="/img/ricoz-4-1.png" />
          <div className="frame-8">
            <div className="frame-9">
              <div className="text-wrapper-4">About Us</div>
              <div className="text-wrapper-4">Services</div>
              <div className="text-wrapper-4">Courses</div>
            </div>
            <div className="text-wrapper-4">Contact</div>
          </div>
          <div className="frame-10">
            <div className="text-wrapper-4">Sign Up</div>
          </div>
        </div>
        <div className="frame-11">
          <img className="unsplash-2" alt="Unsplash" src="/img/unsplash-ytwxplo5haa-1.png" />
          <div className="group-2">
            <div className="text-wrapper-5">Name</div>
            <div className="text-wrapper-6">Email</div>
            <div className="text-wrapper-7">Message</div>
            <div className="text-wrapper-8">Phone number</div>
            <div className="frame-12">
              <div className="text-wrapper-4">Submit Now</div>
            </div>
            <img className="vector" alt="Vector" src="/img/vector-1.svg" />
            <img className="vector-2" alt="Vector" src="/img/vector-2.svg" />
            <img className="vector-3" alt="Vector" src="/img/vector-4.svg" />
            <img className="vector-4" alt="Vector" src="/img/vector-3.svg" />
            <div className="text-wrapper-9">Get in Touch</div>
          </div>
        </div>
        <img className="line" alt="Line" src="/img/line-12.png" />
        <div className="frame-13">
          <div className="rectangle" />
          <p className="text-wrapper-10">© 2023 Ricoz. All Rights Reserved.</p>
          <img className="ricoz-2" alt="Ricoz" src="/img/ricoz-4.png" />
          <div className="frame-14">
            <div className="frame-15">
              <div className="frame-15">
                <div className="nav-list-item">
                  <div className="text-wrapper-11">Company</div>
                  <div className="frame-16">
                    <div className="text-wrapper-12">About Us</div>
                    <div className="text-wrapper-13">Services</div>
                    <div className="text-wrapper-13">Courses</div>
                    <div className="text-wrapper-13">Contact us</div>
                  </div>
                </div>
                <div className="frame-17">
                  <div className="nav-list-item-2">
                    <div className="text-wrapper-14">Services</div>
                  </div>
                  <div className="frame-18">
                    <div className="text-wrapper-15">Web Development</div>
                    <div className="text-wrapper-16">Performance Marketing</div>
                    <div className="text-wrapper-16">Social Media Marketing</div>
                    <div className="text-wrapper-16">App Development</div>
                    <div className="text-wrapper-16">Graphic Design</div>
                    <div className="text-wrapper-16">UI/UX Design</div>
                  </div>
                </div>
              </div>
              <div className="frame-19">
                <div className="frame-19">
                  <div className="frame-20">
                    <div className="text-wrapper-17">Email Us</div>
                    <div className="text-wrapper-18">Ricoz1234@gmail.com</div>
                  </div>
                  <div className="frame-20">
                    <div className="text-wrapper-17">Contact Us</div>
                    <div className="text-wrapper-19">+91 9098885099</div>
                  </div>
                </div>
                <div className="logos">
                  <div className="svg" />
                  <div className="svg-2" />
                  <div className="svg-3" />
                  <div className="svg-4" />
                  <img className="logos-spotify-icon" alt="Logos spotify icon" src="/img/logos-spotify-icon.svg" />
                </div>
              </div>
            </div>
            <div className="frame-21">
              <div className="text-wrapper-20">SUBSCRIBE TO NEWSLETTER</div>
              <div className="overlap-group-wrapper">
                <div className="overlap-group-3">
                  <div className="arrow-wrapper">
                    <Arrow className="arrow-1" color="white" />
                  </div>
                  <div className="frame-22">
                    <div className="icon">
                      <IconOutlineSearch className="icon-outline-search" />
                    </div>
                    <div className="text-wrapper-21">Enter email</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-2">
          <div className="frame-23">
            <div className="frame-24">
              <div className="frame-25">
                <p className="text-wrapper-22">Unlock New Skills with Our Courses</p>
                <p className="text-wrapper-23">Learn and Grow at Your Own Pace.</p>
              </div>
              <div className="frame-26">
                <div className="text-wrapper-24">Explore More</div>
              </div>
            </div>
            <div className="frame-27">
              <div className="group-3">
                <div className="component">
                  <div className="a-link-content-blog">
                    <div className="div-blog-post-item">
                      <div className="frame-28">
                        <div className="frame-29">
                          <div className="text-wrapper-25">Web Development Mastery</div>
                          <div className="text-wrapper-26">₹ 60,000</div>
                          <p className="text-wrapper-27">
                            Master the art of web development with our comprehensive course. Learn coding, design, and
                            deployment.
                          </p>
                        </div>
                        <div className="frame-30">
                          <div className="text-wrapper-28">Learn more</div>
                          <ArrowRight4 className="arrow-right-4" />
                        </div>
                      </div>
                    </div>
                    <div className="div-relative" />
                  </div>
                </div>
                <div className="a-link-content-blog-wrapper">
                  <div className="a-link-content-blog">
                    <div className="div-blog-post-item">
                      <div className="frame-28">
                        <div className="frame-29">
                          <div className="text-wrapper-25">Digital Marketing Fundamentals</div>
                          <div className="text-wrapper-26">₹ 80,000</div>
                          <p className="text-wrapper-27">
                            Navigate the Digital Landscape. Explore the world of digital marketing. Acquire skills in
                            SEO, social media, and online advertising.
                          </p>
                        </div>
                        <div className="frame-30">
                          <div className="text-wrapper-28">Learn more</div>
                          <ArrowRight4 className="arrow-right-4" />
                        </div>
                      </div>
                    </div>
                    <div className="div-relative-2" />
                  </div>
                </div>
                <div className="a-link-content-blog-2">
                  <div className="div-blog-post-item">
                    <div className="frame-31">
                      <div className="frame-29">
                        <div className="text-wrapper-29">Graphic Design Fundamentals</div>
                        <div className="text-wrapper-26">₹ 60,000</div>
                        <p className="text-wrapper-27">
                          Unleash your creativity with graphic design. Learn layout, typography, and visual
                          communication.
                        </p>
                      </div>
                      <div className="frame-30">
                        <div className="text-wrapper-28">Learn more</div>
                        <ArrowRight4 className="arrow-right-4" />
                      </div>
                    </div>
                  </div>
                  <div className="div-relative-3" />
                </div>
                <div className="a-link-content-blog-3">
                  <div className="div-blog-post-item">
                    <div className="frame-31">
                      <div className="frame-29">
                        <p className="text-wrapper-29">Data Science Basics and data analysis</p>
                        <div className="text-wrapper-26">₹ 60,000</div>
                        <p className="text-wrapper-27">
                          Dive into the world of data science. Learn to analyze data, make predictions, and draw
                          insights.
                        </p>
                      </div>
                      <div className="frame-30">
                        <div className="text-wrapper-28">Learn more</div>
                        <ArrowRightWrapper />
                      </div>
                    </div>
                  </div>
                  <div className="div-relative-4" />
                </div>
                <div className="a-link-content-blog-4">
                  <div className="div-blog-post-item">
                    <div className="frame-31">
                      <div className="frame-29">
                        <p className="text-wrapper-29">App Development with React Native</p>
                        <div className="text-wrapper-26">₹ 60,000</div>
                        <p className="text-wrapper-27">
                          Create cross-platform mobile apps using React Native. Build efficient and user-friendly
                          applications.
                        </p>
                      </div>
                      <div className="frame-30">
                        <div className="text-wrapper-28">Learn more</div>
                        <ArrowRightWrapper />
                      </div>
                    </div>
                  </div>
                  <div className="div-relative-5" />
                </div>
                <div className="component-2">
                  <div className="a-link-content-blog">
                    <div className="div-blog-post-item">
                      <div className="frame-31">
                        <div className="frame-29">
                          <div className="text-wrapper-29">UI/UX Design Essentials</div>
                          <div className="text-wrapper-26">₹ 60,000</div>
                          <p className="text-wrapper-27">
                            Unlock the secrets of creating user-friendly interfaces and seamless user experiences.
                          </p>
                        </div>
                        <div className="frame-30">
                          <div className="text-wrapper-28">Learn more</div>
                          <ArrowRightWrapper />
                        </div>
                      </div>
                    </div>
                    <div className="div-relative-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-32">
          <p className="text-wrapper-30">Real Stories from Real Professionals</p>
          <div className="frame-33">
            <div className="div-w-node">
              <div className="frame-34">
                <div className="frame-35">
                  <div className="div-testimonial" />
                  <div className="frame-36">
                    <div className="text-wrapper-31">John Doe</div>
                    <div className="text-wrapper-32">Graduated</div>
                  </div>
                </div>
                <p className="text-wrapper-33">&#34;I recommend this to All&#34;</p>
                <div className="p-text-size-small">
                  <p className="text-wrapper-34">
                    Ricoz connected me with amazing clients. The quality scoring system ensures I work on exciting
                    projects while maintaining my reputation.
                  </p>
                </div>
                <img className="frame-37" alt="Frame" src="/img/frame-615-2.svg" />
              </div>
            </div>
            <div className="div-w-node">
              <div className="frame-34">
                <div className="frame-35">
                  <div className="div-testimonial-2" />
                  <div className="frame-36">
                    <div className="text-wrapper-31">Alice Smith</div>
                    <div className="text-wrapper-32">Ui/UX designer</div>
                  </div>
                </div>
                <div className="text-wrapper-33">“The Support is Awesome”</div>
                <div className="p-text-size-small">
                  <p className="as-a-freelancer">
                    As a freelancer, Ricoz&#39;s instant search feature saves me time. It&#39;s a one-stop platform for
                    all my degital marketing needs.
                  </p>
                </div>
                <img className="frame-37" alt="Frame" src="/img/frame-615-1.svg" />
              </div>
            </div>
            <div className="div-w-node-a">
              <div className="frame-34">
                <div className="frame-35">
                  <div className="div-testimonial-3" />
                  <div className="frame-36">
                    <div className="text-wrapper-31">Sophia Miller</div>
                    <div className="text-wrapper-32">Student</div>
                  </div>
                </div>
                <p className="text-wrapper-33">“A Game Changer For Us”</p>
                <div className="p-text-size-small">
                  <p className="i-ve-learned-and">
                    I&#39;ve learned and earned on Ricoz. The courses are well-designed, and the integrated tools
                    streamline communication with clients.
                  </p>
                </div>
                <img className="frame-37" alt="Frame" src="/img/frame-615.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="frame-38">
          <p className="text-wrapper-35">Enhance Your Workflow with Integrated Tools</p>
          <div className="group-4">
            <div className="overlap-3">
              <img className="ellipse" alt="Ellipse" src="/img/ellipse-7146.png" />
              <div className="overlap-group-4">
                <div className="frame-39">
                  <div className="text-wrapper-36">📬</div>
                  <div className="frame-40">
                    <div className="text-wrapper-37">Messaging Platform</div>
                    <p className="text-wrapper-38">
                      Stay connected and collaborate seamlessly with clients and team members.
                    </p>
                  </div>
                </div>
                <img className="vector-5" alt="Vector" src="/img/vector-46.svg" />
              </div>
              <div className="overlap-4">
                <div className="frame-39">
                  <div className="text-wrapper-36">📊</div>
                  <div className="frame-40">
                    <div className="text-wrapper-37">CRM System</div>
                    <p className="text-wrapper-39">
                      Manage client relationships effectively with our user-friendly CRM system.
                    </p>
                  </div>
                </div>
                <img className="vector-6" alt="Vector" src="/img/vector-47.svg" />
              </div>
            </div>
            <div className="frame-41">
              <div className="text-wrapper-36">🗓️</div>
              <div className="frame-40">
                <div className="text-wrapper-37">Calendar Integration</div>
                <p className="text-wrapper-40">
                  Simplify your scheduling and time management with our calendar integration.
                </p>
              </div>
            </div>
            <div className="frame-42">
              <div className="text-wrapper-36">🤝</div>
              <div className="frame-40">
                <div className="text-wrapper-37">Collaborative Workspace</div>
                <p className="text-wrapper-41">
                  Experience the power of collaboration in our shared workspace together.
                </p>
              </div>
            </div>
          </div>
          <div className="frame-43">
            <div className="text-wrapper-24">Explore Tools</div>
          </div>
        </div>
        <div className="frame-44">
          <div className="frame-45">
            <img className="openmoji-telephone" alt="Openmoji telephone" src="/img/openmoji-telephone-2.svg" />
            <div className="frame-46">
              <img className="element" alt="Element" src="/img/91-7011112666.png" />
            </div>
          </div>
          <div className="frame-45">
            <img className="openmoji-telephone" alt="Openmoji telephone" src="/img/openmoji-telephone-1.svg" />
            <div className="frame-46">
              <div className="info-ricoz-in-wrapper">
                <img className="info-ricoz-in" alt="Info ricoz in" src="/img/info-ricoz-in.png" />
              </div>
            </div>
          </div>
          <div className="frame-45">
            <img className="openmoji-telephone" alt="Openmoji telephone" src="/img/openmoji-telephone.svg" />
            <div className="frame-46">
              <img className="ricoz-in" alt="Ricoz in" src="/img/ricoz-in.png" />
            </div>
          </div>
        </div>
        <div className="text-wrapper-42">Why Choose Ricoz?</div>
        <div className="frame-47">
          <img className="unsplash-3" alt="Unsplash" src="/img/unsplash-ytwxplo5haa.png" />
          <div className="frame-48">
            <div className="frame-49">
              <div className="frame-50">
                <div className="image-wrapper">
                  <img className="image" alt="Image" src="/img/image-89.png" />
                </div>
                <div className="frame-51">
                  <div className="text-wrapper-43">Vast Professional Network</div>
                  <p className="text-wrapper-44">
                    Access a wide range of skilled tech professionals, all in one platform.
                  </p>
                </div>
              </div>
              <div className="frame-52">
                <div className="image-wrapper">
                  <img className="image-2" alt="Image" src="/img/image-90.png" />
                </div>
                <div className="frame-51">
                  <div className="text-wrapper-43">Quality You Can Trust</div>
                  <p className="text-wrapper-45">
                    Our stringent quality scoring system ensures that you receive exceptional services.
                  </p>
                </div>
              </div>
              <div className="frame-52">
                <div className="img-wrapper">
                  <img className="image-3" alt="Image" src="/img/image-91.png" />
                </div>
                <div className="frame-51">
                  <div className="text-wrapper-43">Effortless Collaboration</div>
                  <p className="text-wrapper-46">
                    Our integrated tools facilitate seamless communication and collaboration
                  </p>
                </div>
              </div>
              <div className="frame-52">
                <img className="image-4" alt="Image" src="/img/image-288.png" />
                <div className="frame-51">
                  <div className="text-wrapper-43">Save Time and Effort</div>
                  <p className="text-wrapper-46">
                    With our platform, finding professionals and managing projects becomes effortless.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
