import React from "react";
import { Button, Input, Table } from 'antd';
import '../css/Home.css';
import bg2 from "../images/bg1.png";
import webservice from "../images/web_development_services.jpg";
import webcompany1 from "../images/website-design-company-1.png";
import webcompany from "../images/website-design-company.png";
import ecommerceservice from "../images/E-Commerce-Website-Development_.png";
import seoservice from "../images/seo-services-top.jpg";
import webservicecheap from "../images/web-development-design-services-cheap.jpg";
import api from "../images/api.jpg";
import pwa from "../images/pwa.jpg";
import webapplication from "../images/web-application.jpg";
import webportal from "../images/web-portal.jpg";
import website from "../images/website.jpg";
import webprocess from "../images/web-design-and-development-services.png";

const columns = [
    {
      title: 'Question & Answer',
      dataIndex: 'name',
      key: 'name',
    },
    
  ];
  const data = [
    {
        key: 1,
        name: 'What domain name should I choose?',
        description: 'The choice of domain name depends on how you plan to use it. In most cases, it makes sense to choose one that is easy to pronounce and spell if you will be telling people about it over the phone. Above all, you should choose a name that is memorable and not confusing.',
    },
    {
        key: 2,
        name: 'How long will it take for my website to be designed?',
        description: 'The time it takes to build a site depends on the complexity of the site. If you have a deadline, I will work hard to meet it. The most common cause of delay is the content (text/images) from the client.',
    },
    {
        key: 3,
        name: 'Will I need to have a meeting to discuss the website design?',
        description: 'Most of the time, a meeting isn’t necessary and the work is completed with only discussions over phone and email. I upload my work to private websites that only clients can access. I then work with you to discuss the site and review changes. The site isn’t made available to the public until it looks and works exactly as you wish.',
    },
    {
        key: 4,
        name: 'How much will a website cost me?',
        description: 'The cost of a website varies depends on its complexity. I am happy to discuss your requirements and provide a quote at any time.',
    },
    {
        key: 5,
        name: 'Can I use my own images in my design?',
        description: "Yes. If you have any specific images (like a logo or product photos) that need to be included with your web page design, please submit them to designers with your brief.Unless you request otherwise, your designer may also use stock images (purchased from a third party) in your design. If a designer uses stock art in a design, they’ll tell you which images they are and use watermarked versions of them in their entries. Once you choose the winning design, you’ll need to purchase the stock art and provide it to the winning designer so they can complete the design.",
    },
    {
        key: 6,
        name: 'Do I have to keep my website with you forever? Can I move it to another provider?',
        description: 'You may move your site to another Web hosting service at any time. Once your design has been completed, I send you a copy of the site on CD.',
    },
    {
        key: 7,
        name: 'Will my website design be search-engine friendly?',
        description: 'All your websites are created with search engines in mind, and all designs are compliant with search engine guidelines. It is a good idea for your website to be re-evaluated from time to time as search engines do alter their rules and algorithms. This will ensure that your site is up to date and compliant with new rules.',
    },
    {
        key: 8,
        name: 'Who owns what copyright and when?',
        description: 'I agree to upload only original artwork, so I own the rights to my design submissions until you choose your contest’s winner. During the design handover stage, I agrees to transfer the rights, and you become the owner of the copyright of your winning web page design.',
    },
    {
        key: 9,
        name: 'Is there really a 100% money back guarantee?',
        description: 'I offer a 100% money-back guarantee within 60 days of payment on all Web Development services. You can also call us anytime to help you rewrite your brief, reopen your project to ensure you get a good result and help you pick a winning design. Remember, if I refund your contest, you aren’t legally entitled to use any of the designs submitted to you.',
    },
    {
        key: 10,
        name: 'Can I work with my designer once my website is completed from your end?',
        description: 'Absolutely (and I love it when that happens)! When your web page design has finished, you can start a 1-to-1 Project with your winning designer.',
    },
];

const { TextArea } = Input;

export default function Home(){

    // const [value, setValue] = useState('');

    return(
        <div>
            <div className="headBar">
                <div className="logo">Hello</div>
                <div className="mainBtnContainer divide-x divide-black">
                    <div className="mainBtn">Home</div>
                    <div className="mainBtn">Portfolio</div>
                    <div className="mainBtn">About Me</div>
                    <div className="mainBtn">Career</div>
                </div>
                <div className="meetContainer">
                    {/* <div className="meetBtn">schedule meeting</div> */}
                    <Button type="primary">Schedule Meeting</Button>
                </div>
            </div>
            <div className="bgContainer">
                {/* <img src={bg2} ></img> */}
                <div className="title">Web Design & Development</div>
            </div>
            <div className="bodyContainer">
                <div className="serviceHeader">
                    Get more sales by including on online business and lead with professional web development services to make your website to notch in the market place. I help you to get quality and professional web development services that will benefits you and your client to reach their full digital potential.
                </div>
                <div className="webServiceContainer">
                    <div className="textContainer">
                        <div className="webServiceTitle">Responsive Web Design Services</div>
                        <div>
                            The web development professionals at Digital Marketing Visech employ a sophisticated method that covers all aspect of the process, from mark-up and coding to web design and content. I take pride in my ability that not only achieves high rankings in search engine results pages but also really provides the finest experience to your users. my ability of front-end and back-end development is among the best at creating blazing-fast, robust web development solutions for your online presence.
                        </div>
                    </div>
                    <img className="imgContainer" src={webservice} />
                </div>
                <div className="webServiceContainer">
                    <img className="imgContainer" src={webcompany1} />
                    <div className="textContainer">
                        <div className="webServiceTitle">CMS Based Web Development Services</div>
                        <div>
                        I take on the obligation of offering clients cutting-edge CMS Web Development Services as a pioneer in producing amazing and dependable end-to-end IT deliverables. Based on the client’s real input, I create an optimal solution that takes into account the current business environment. I have been showcasing an outstanding performance in orchestrating Enterprise CMS Development solutions that are best suited for the client’s business and requirements, supported by the work-flow centric platform.                        </div>
                    </div>
                </div>
                <div className="webCompanyContainer">
                    <img src={webcompany} />
                </div>
                <div className="webServiceContainer">
                    <div className="textContainer">
                        <div className="webServiceTitle">E-Commerce Web Development Services</div>
                        <div>
                        With the newest web development features, such as current standards, search friendliness for search accessibility, compatibility with screen readers for the blind, web semantics, and rich snippets, I provide a wide range of web development services. I design websites that may function as an online portfolio to display your services and goods, such as e-commerce sites, online shops, shopping carts, full-fat websites, web platforms, web portals, native mobile websites, information hubs, forums, and blogs. Whatever form of development you require, I can help.                        </div>
                    </div>
                    <img className="imgContainer" src={ecommerceservice} />
                </div>
                <div className="webServiceContainer">
                    <img className="imgContainer" src={seoservice} />
                    <div className="textContainer">
                        <div className="webServiceTitle">SEO Optimized Web Development Services</div>
                        <div>
                        It might be difficult to combine SEO with web design because there are numerous elements on each side to take into account. The design, the content, the programming, the marketing, and the optimization strategies are in a perpetual state of conflict. The website’s designer must acknowledge that the site will ultimately be optimised. As a result, more room must be set aside for content. The programmer must be adaptable to take into account both the varied calls to action offered by marketing and the optimization strategies used. To ensure a seamless shift from web development to SEO web design, the SEO professional should coordinate with the designer and the programmer.                        </div>
                    </div>
                </div>
                <div className="webServiceContainer">
                    <div className="textContainer">
                        <div className="webServiceTitle">We Provide Elegant & Impressive Design Solutions</div>
                        <div>
                        I have the distinguished track record and in house ability to support your business websites accordingly! From website designing to website development, I am delighted to declare that I have an professional Front End & Backend Development experience to execute your defined requirements enthusiastically!                        </div>
                    </div>
                    <img className="imgContainer" src={webservicecheap} />
                </div>
                <div className="solutionContainer">
                    <div className="solutionHeader">Web Solutions I Develop</div>
                    <div className="solutionContent">
                        <div className="solutionLine">
                            <div className="solutionItem">
                                <div>
                                    <img className="solutionImg" src={website}/>
                                </div>
                                <div className="solutionText">Website</div>
                            </div>
                            <div>
                                <div>
                                    <img className="solutionImg" src={webportal}/>
                                </div>
                                <div className="solutionText">Web Portal</div>
                            </div>
                            <div>
                                <div>
                                    <img className="solutionImg" src={webapplication}/>
                                </div>
                                <div className="solutionText">Web Application</div>
                            </div>
                        </div>
                        <div className="solutionLine2">
                            <div>
                                <div>
                                    <img className="solutionImg" src={pwa}/>
                                </div>
                                <div className="solutionText">Progressive Web Apps (PWA)</div>
                            </div>
                            <div>
                                <div>
                                    <img className="solutionImg" src={api}/>
                                </div>
                                <div className="solutionText">Public Web Services (API)</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="processContainer">
                    <div className="processHeader">Our 5 Step Process</div>
                    <img className="processImg" src={webprocess} />
                </div>
                <div className="apiContainer">
                    <div className="apiTitle">I am the peerless third-party API integration company!</div>
                    <div>
                        With skilled professional’s involvement, I provide third party customer API integration services in almost all countries. I ensure you provide the best API integration services to work efficiently on all browsers and device width.
                        No matter if you need any third-party API integration like Payment gateway integration, SMS gateway, and social media API integration, I ensure to meet all of your demands. I make sure to deliver the following third-party integrations:
                        <br></br>
                        • Travel portal API integration
                        <br></br>
                        • Car Rental API integration
                        <br></br>
                        • Bitcoin API integration
                        <br></br>
                        • Email API integration
                        <br></br>
                        • Bandwidth API integration
                    </div>
                </div>
                <div className="faqContainer">
                    <div className="faqHeader">Web Development FAQs</div>
                </div>
                <div className="tableContainer">
                    <Table
                        columns={columns}
                        expandable={{
                        expandedRowRender: (record) => (
                            <p
                            style={{
                                margin: 0,
                            }}
                            >
                            {record.description}
                            </p>
                        ),
                        }}
                        dataSource={data}
                    />
                </div>
                <div className="messageContainer">
                    <div className="contactHeader">Contact Me</div>
                    <TextArea
                        // value={value}
                        // onChange={(e) => setValue(e.target.value)}
                        placeholder="Write here..."
                        autoSize={{ minRows: 10, maxRows: 20 }}
                    />
                    {/* <div className="submitBtn">Submit</div> */}
                    <Button type="primary" block>Submit</Button>
                </div>
            </div>
            <div className="footContainer">
                <div className="footContent">I always ensure to satisfy my clients with reliable services. I am willing to talk to you and explore various options for you. I know that your website is the most crucial business tool, so I always come up with a solution that matches your needs. Eventually, your satisfaction is above everything and anything!</div>
            </div>
        </div>
    )
}