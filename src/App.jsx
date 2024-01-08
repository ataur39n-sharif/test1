/* eslint-disable react/no-unescaped-entities */
import { useCallback } from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import vector2x from "./images/vector@2x.png";
import b2x from "./images/b@2x.png";
import gooseberry from "./images/gooseberry-logo@2x.png";
import intro2024 from "./images/intro2024-2@2x.png";
import discoLight from "./images/disco-lights-background@2x.png";
import personalGrowth from "./images/personal-growth@2x.png";
import rectangle93 from "./images/rectangle-93@2x.png";
import rectangle92 from "./images/rectangle-92@2x.png";
import vision from "./images/vision@2x.png";
import goal from "./images/goal@2x.png";
import qiblaDirection from "./images/qibla-direction@2x.png";
import projectManagement from "./images/project-management@2x.png";
import guarantee from "./images/guarantee@2x.png";
import analyze from "./images/analyze@2x.png";
import passFail from "./images/pass-fail@2x.png";
import codeFail from "./images/code-file@2x.png";
import dataProvider from "./images/data-provider@2x.png";
import environment from "./images/environment@2x.png";
import test from "./images/test@2x.png";
import websiteBug from "./images/website-bug@2x.png";
import testPassed from "./images/test-passed@2x.png";
import syncSettings from "./images/sync-settings@2x.png";
import editGraphReport from "./images/edit-graph-report@2x.png";
import appLogoInspiration from "./images/app-logo-inspiraton-67@2x.png";
import maskGroup from "./images/mask-group@2x.png";
import logoShapes from "./images/logo-shapes-30@2x.png";
import ellipse9 from "./images/ellipse9.png";
import logoShapes41 from "./images/logo-shapes-41@2x.png";
import logoShapes51 from "./images/logo-shapes-51@2x.png";
import standardCollection from "./images/standard-collection-17@2x.png";
import mountainLake from "./images/mountain-lake@2x.png";
import rectangle62 from "./images/rectangle-62@2x.png";
import rectangle56 from "./images/rectangle-56@2x.png";
import rectangle57 from "./images/rectangle-57@2x.png";
import vector4 from "./images/vector4.png";
import vector5 from "./images/vector5.png";
import vector6 from "./images/vector6.png";
import vector7 from "./images/vector7.png";
import vector8 from "./images/vector8.png";
import contactBg from "./images/background-with-swirls-and-shapes@2x.png";
const App = () => {
  const [loading, setLoading] = useState(false);
  const onCTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='backgroundWithSwirlsAndSha1']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onBClick = useCallback(() => {
    window.open("https://medium.com/@mihrafel");
  }, []);

  const onVector2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='brokenWebWindow']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onVector3Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onVector7Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='backgroundWithSwirlsAndSha']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  // const onNameText5Click = useCallback(() => {
  //   // window.location.href = "mailto:info@icrew-tech.com";
  //   window.location.href = "rajdevullash111@gmail.com";
  // }, []);
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  // Event handler for form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Use the template ID from your EmailJS account
    const templateId = "template_uu0zq5e";

    try {
      const response = await emailjs.send(
        "service_vxcrt4t",
        templateId,
        {
          name: formData.name,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          message: formData.message,
        },
        "user_xIPcfJBJKtlEOuM0G16L3"
      );
      // Show a sweet alert on success
      Swal.fire({
        icon: "success",
        title: "Message Sent Successfully!",
        text: "Thank you for reaching out.",
      });

      // Reset the form
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
      setLoading(false);

      console.log("Email sent:", response);

      // Handle success (maybe show a success message to the user)
      console.log("Email sent:", response);
    } catch (error) {
      // Handle error (maybe show an error message to the user)
      console.error("Error sending email:", error);
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-white w-full h-[7002px] overflow-hidden text-left text-45xl text-white font-consolas">
      <div className="absolute top-[125px] left-[0px] bg-mediumslateblue w-[1512px] h-[982px]" />
      <div className="absolute top-[1107px] left-[0px] bg-plum w-[1512px] h-[1107px]" />
      <div className="absolute top-[1418px] left-[2486px] bg-thistle-100 w-96 h-[281px]" />
      <div className="absolute top-[1952px] left-[1531px] bg-thistle-100 w-[767px] h-[206px]" />
      <div className="absolute top-[2214px] left-[0px] bg-mediumpurple w-[1512px] h-[1107px]" />
      <div
        className="absolute top-[4428px] left-[0px] bg-mediumpurple w-[1512px] h-[1107px]"
        data-scroll-to="rectangle"
      />
      <img
        className="absolute top-[5087px] left-[1015px] w-[404px] h-[135px] object-cover"
        alt=""
        src={rectangle56}
      />
      <img
        className="absolute top-[5240px] left-[1217px] w-[202px] h-[247px] object-cover"
        alt=""
        src={rectangle57}
      />
      <img
        className="absolute top-[4920px] left-[1012px] w-[404px] h-[135px] object-cover"
        alt=""
        src={rectangle62}
      />
      <div className="absolute top-[4720px] left-[997px] text-13xl text-right inline-block w-[423px] h-[185px] text-springgreen-200">
        <p className="m-0">
          <b>{`<Our Clients & Partners>`}</b>
        </p>
        <p className="m-0 text-white">
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <b>{`<Bagpack & Accessories>`}</b>
          </span>
        </p>
        <p className="m-0">
          <span>
            <b>{`<Brand Wave>`}</b>
          </span>
        </p>
        <p className="m-0">
          <span>
            <b>{`<Penguin>`}</b>
          </span>
        </p>
      </div>
      <div className="absolute top-[2509px] left-[782px] bg-thistle-100 w-[607px] h-[333px]" />
      <div className="absolute top-[2878px] left-[782px] bg-thistle-100 w-[615px] h-[364px]" />
      <b className="absolute top-[2935px] left-[811px] text-base inline-block text-black whitespace-pre-wrap w-[558px] h-[292px]">
        <p className="m-0">SQA Project Management:</p>
        <p className="m-0">
          We start with scope finalization and requirement analysis in SQA
          perspective. According to the client agreement on our prescribed SQA
          activities we plan the whole SQA project. We conduct
        </p>
        <p className="m-0 ml-2 text-sm"> Test Analysis,</p>
        <p className="m-0 ml-2 text-sm mt-0.5"> Test Case Creation,</p>
        <p className="m-0 ml-2 text-sm mt-0.5"> Test Script Creation,</p>
        <p className="m-0 ml-2 text-sm"> Test Data Development,</p>
        <p className="m-0 ml-2 text-sm mt-0.5"> Test Environment Setup,</p>
        <p className="m-0 ml-2 text-sm"> Test Execution,</p>
        <p className="m-0 ml-2 text-sm">{` Bug Reporting & Fixation Monitoring,`}</p>
        <p className="m-0 ml-2 text-sm mt-0.5"> Retest,</p>
        <p className="m-0 ml-2 text-sm"> Automated Regression Test and</p>
        <p className="m-0 ml-2  text-sm"> Necessary Reporting.</p>
      </b>
      <div className="absolute top-[3321px] left-[0px] bg-thistle-200 w-[1512px] h-[1107px]" />
      <div className="absolute top-[0px] w-[1512px] h-[125px] bg-[#A75EF8] object-cover" />
      <img
        className="absolute top-[11px] left-[1250px] w-[234px] h-24 object-cover"
        alt=""
        src={gooseberry}
      />
      <div className="absolute top-[104px] left-[1108px] text-xs">{`<Contact Us>`}</div>
      <div className="absolute top-[104px] left-[534px] text-xs">{`<About Us>`}</div>
      <div className="absolute top-[104px] left-[981px] text-xs">{`<Blog>`}</div>
      <div className="absolute top-[104px] left-[821px] text-xs">{`<Portfolio>`}</div>
      <div className="absolute top-[104px] left-[678px] text-xs">{`<Services>`}</div>
      <img
        className="absolute h-[1.29%] w-[5.95%] top-[0.16%] right-[21.23%] bottom-[98.56%] left-[72.82%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={vector2x}
      />
      <div
        className="absolute top-[13px] left-[1122px] font-snap-itc cursor-pointer"
        onClick={onCTextClick}
      >
        C
      </div>
      <div className="absolute top-[5706px] left-[1345px] text-xs">{`<Contact Us>`}</div>
      <img
        className="absolute h-[1.29%] w-[5.95%] top-[0.16%] right-[30.82%] bottom-[98.56%] left-[63.23%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={vector2x}
      />
      <img
        className="absolute top-[31.41px] left-[971.72px] w-[52.59px] h-12 object-cover cursor-pointer"
        alt=""
        src={b2x}
        onClick={onBClick}
      />
      <img
        className="absolute h-[1.29%] w-[5.95%] top-[0.16%] right-[50%] bottom-[98.56%] left-[44.05%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
        alt=""
        src={vector2x}
        onClick={onVector2Click}
      />
      <img
        className="absolute h-[1.29%] w-[5.95%] top-[0.16%] right-[40.41%] bottom-[98.56%] left-[53.64%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
        alt=""
        src={vector2x}
        onClick={onVector3Click}
      />
      <div className="absolute top-[13px] left-[833px] font-snap-itc">P</div>
      <b className="absolute top-[4643px] left-[1202px] text-17xl text-black">{`<Portfolio>`}</b>
      <img
        className="absolute h-[1.29%] w-[5.95%] top-[65.02%] right-[6.15%] bottom-[33.69%] left-[87.9%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={vector2x}
      />
      <div className="absolute top-[4554px] left-[1351px] font-snap-itc">P</div>
      <div className="absolute h-[2%] w-[10.38%] top-[0%] right-[86.04%] bottom-[98%] left-[3.57%] text-21xl text-lime-300 font-magneto">
        {/* <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={vector2x}
        /> */}
        <img
          className="absolute h-[74.19%] w-[92.77%] top-[8.08%] right-[7.23%] bottom-[17.72%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={vector2x}
        />
        <img
          className="absolute h-[4.84%] w-[3.61%] top-[58.06%] right-[15.66%] bottom-[37.1%] left-[80.72%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={vector2x}
        />
        <div className="absolute top-[41.82px] left-[41.61px] inline-block w-[102.14px] h-[28.52px]">
          <b>i</b>
          <span className="text-5xl font-snap-itc text-yellow">
            <span>C</span>
            <span className="text-royalblue-100">r</span>
            <span className="text-orange">e</span>
            <span className="text-darkviolet">w</span>
          </span>
        </div>
      </div>
      <img
        className="absolute h-[1.29%] w-[5.95%] top-[0.16%] right-[59.52%] bottom-[98.56%] left-[34.52%] max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
        alt=""
        src={vector2x}
        onClick={onVector7Click}
      />
      <div className="absolute top-[13px] left-[538px] font-snap-itc">A</div>
      <div className="absolute top-[13px] left-[685px] font-snap-itc">S</div>
      <img
        className="absolute h-[1.29%] w-[5.95%] top-[17.59%] right-[-89.75%] bottom-[81.12%] left-[183.8%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={vector2x}
      />
      <img
        className="absolute h-[1.29%] w-[5.95%] top-[32.86%] right-[6.15%] bottom-[65.85%] left-[87.9%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={vector2x}
      />
      <div className="absolute top-[2305px] left-[1350px] font-snap-itc">A</div>
      <b className="absolute top-[2401px] left-[1221px] text-17xl inline-block text-darkslategray text-center w-[206px] h-[42px]">{`<About Us>`}</b>
      <div className="absolute top-[1418px] left-[1532px] bg-thistle-100 w-[476px] h-[455px]" />
      <img
        className="absolute top-[1419px] left-[2048px] w-[398px] h-[276px] object-cover"
        alt=""
        src="./assets/images/rectangle-84@2x.png"
      />
      <img
        className="absolute top-[1737px] left-[2338px] w-[537px] h-[421px] object-cover"
        alt=""
        src="./assets/images/rectangle-85@2x.png"
      />
      <b className="absolute top-[2557px] left-[807px] text-base inline-block text-black w-[558px] h-[266px]">
        <p className="m-0">{`Product & Project Development Process:`}</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">{`We start with our product development with Innovation and R&D including`}</p>
        <p className="m-0"> Business Feasibility,</p>
        <p className="m-0"> Technological Feasibility.</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">{`Then we proceed according to the Agile Approach specially we choose SCRUM methodology. We ensure all SCRUM event such as Sprint Planning, Daily SCRUM, Sprint, Sprint Review & Sprint Retrospective and all SCRUM Artifacts such as precise Product Backlog, Sprint Backlog & Product Increment. Throughout this life SCRUM journey SQA works accordingly and we ensure Clients & all Stakeholders are getting involved regularly.`}</p>
      </b>
      <img
        className="absolute top-[2631px] left-[797px] w-[18px] h-[18px] object-cover"
        alt=""
        src="./assets/images/stocks-growth@2x.png"
      />
      <img
        className="absolute top-[2652px] left-[798px] w-[18px] h-[18px] object-cover"
        alt=""
        src="./assets/images/shake-phone@2x.png"
      />
      <img
        className="absolute top-[2532px] left-[1295px] w-[50px] h-[50px] object-cover"
        alt=""
        src={projectManagement}
      />
      <img
        className="absolute top-[2885px] left-[1295px] w-[50px] h-[50px] object-cover"
        alt=""
        src={guarantee}
      />
      <img
        className="absolute top-[3029px] left-[807px] w-[17px] h-[17px] object-cover"
        alt=""
        src={analyze}
      />
      <img
        className="absolute top-[3048px] left-[807px] w-[17px] h-[17px] object-cover"
        alt=""
        src={passFail}
      />
      <img
        className="absolute top-[3067px] left-[807px] w-[17px] h-[17px] object-cover"
        alt=""
        src={codeFail}
      />
      <img
        className="absolute top-[3087px] left-[807px] w-[17px] h-[17px] object-cover"
        alt=""
        src={dataProvider}
      />
      <img
        className="absolute top-[3107px] left-[807px] w-[17px] h-[17px] object-cover"
        alt=""
        src={environment}
      />
      <img
        className="absolute top-[3125px] left-[807px] w-[17px] h-[17px] object-cover"
        alt=""
        src={test}
      />
      <img
        className="absolute top-[3144px] left-[807px] w-[17px] h-[17px] object-cover"
        alt=""
        src={websiteBug}
      />
      <img
        className="absolute top-[3164px] left-[807px] w-[17px] h-[17px] object-cover"
        alt=""
        src={testPassed}
      />
      <img
        className="absolute top-[3182px] left-[807px] w-[17px] h-[17px] object-cover"
        alt=""
        src={syncSettings}
      />
      <img
        className="absolute top-[3200px] left-[807px] w-[17px] h-[17px] object-cover"
        alt=""
        src={editGraphReport}
      />
      <div className="absolute top-[2509px] left-[135px] bg-thistle-100 w-[412px] h-[733px]" />
      <b className="absolute top-[3040px] left-[173px] text-base inline-block text-black text-center w-[339px] h-[177px]">
        <p className="m-0">{`<Values>`}</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">{`<Innovation>`}</p>
        <p className="m-0">{`<Creativity with Out-of-Box Thinking>`}</p>
        <p className="m-0">{`<Responsible to ensure Quality & Commitment>`}</p>
        <p className="m-0">{`<Full of Energy to overcome challenges with Empathy>`}</p>
        <p className="m-0">{`<Wisdom tends to Collaboration>`}</p>
      </b>
      <b className="absolute top-[2720px] left-[173px] text-base inline-block text-darkslategray text-center w-[339px] h-[254px]">
        <p className="m-0">{`<Mission>`}</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">{`<Build relationship with clients by providing innovative and quality software services in order to increase their profitability.>`}</p>
        <p className="m-0">{`<Build collaborative relationship with congenial software firms and organizations to work together for the betterment of country and humanity.>`}</p>
        <p className="m-0">{`<Introduce and promote innovative and exclusive service ideas to raise the position of our country in GII.>`}</p>
      </b>
      <b className="absolute top-[2571px] left-[173px] text-base inline-block text-black text-center w-[339px] h-[81px]">
        <p className="m-0">{`<Vision>
`}</p>
        <p className="m-0"></p>
        <p className="m-0">
          To be the local industry leader and be a globally recognized Software
          Firm.
        </p>
      </b>
      <img
        className="absolute top-[2518px] left-[317px] w-12 h-12 object-cover"
        alt=""
        src={vision}
      />
      <img
        className="absolute top-[2667px] left-[317px] w-12 h-12 object-cover"
        alt=""
        src={goal}
      />
      <img
        className="absolute top-[2987px] left-[317px] w-12 h-12 object-cover"
        alt=""
        src={qiblaDirection}
      />
      <img
        className="absolute top-[125px] left-[2px] w-[1512px] h-[982px] object-cover"
        alt=""
        src={discoLight}
      />
      <img
        className="absolute top-[216px] left-[294px] w-[1173px] h-[779px] object-cover"
        alt=""
        src={intro2024}
      />
      <img
        className="absolute top-[1107px] left-[0px] w-[1512px] h-[1107px] object-cover"
        alt=""
        src={contactBg}
        data-scroll-to="backgroundWithSwirlsAndSha"
      />
      <img
        className="absolute top-[5535px] left-[0px] w-[1512px] h-[1107px] object-cover"
        alt=""
        src={contactBg}
        data-scroll-to="backgroundWithSwirlsAndSha1"
      />
      <img
        className="absolute h-[1.29%] w-[5.95%] top-[80.83%] right-[6.15%] bottom-[17.88%] left-[87.9%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={vector2x}
      />
      <div className="absolute top-[5661px] left-[1348px] font-snap-itc">C</div>
      <div className="absolute top-[1757px] left-[106px] bg-lavender-100 w-[535px] h-[378px]" />
      <b className="absolute top-[1332px] left-[1221px] text-17xl text-darkslategray text-center">{`<About Us>`}</b>
      <img
        className="absolute h-[1.29%] w-[5.95%] top-[17.59%] right-[6.15%] bottom-[81.12%] left-[87.9%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={vector2x}
      />
      <div className="absolute top-[1236px] left-[1348px] font-snap-itc">A</div>
      <div className="absolute top-[1353px] left-[99px] bg-lavender-200 w-[535px] h-[338px]" />
      <b className="absolute top-[1355px] left-[141px] text-base inline-block w-[500px] h-[323px] text-black">
        <p className="m-0 text-red-200">Warning!!</p>
        <p className="m-0">
          Don't be panic! We will start with bad news but later we will announce
          the good one.
        </p>
        <p className="m-0">Bad news are:</p>
        <p className="m-0">{`<According to Acqnotes, in 50%-80% cases firms are failed to meet customer requirements.>`}</p>
        <p className="m-0">{`<According to 360businesanalyst.com, about 70%-75% ERP projects are failed in 1st world countries. What's about in Bangladesh? May be in Bangladesh, it is about 90%-95% or even more. Most of the manufacturing companies in Bangladesh are getting failure in ERP projects as companies don't take the project ownership of the project. They just rely on the ERP vendors. At the end, ERP vendors make money and manufacturing companies get shit from the projects.>`}</p>
        <p className="m-0">{`<According to the Global Innovation index, Bangladesh placed at 102 among 132 economies.>`}</p>
      </b>
      <img
        className="absolute top-[1428px] left-[111px] w-[25px] h-[25px] object-cover"
        alt=""
        src="./assets/images/close-window@2x.png"
      />
      <img
        className="absolute top-[1466px] left-[111px] w-[25px] h-[25px] object-cover"
        alt=""
        src="./assets/images/close-window@2x.png"
      />
      <img
        className="absolute top-[1636px] left-[111px] w-[25px] h-[25px] object-cover"
        alt=""
        src="./assets/images/close-window@2x.png"
      />
      <div className="absolute top-[1398px] left-[1039px] bg-lavender-200 w-[366px] h-[35px]" />
      <img
        className="absolute top-[1789px] left-[964px] w-[441px] h-[346px] object-cover"
        alt=""
        src={rectangle92}
      />
      <img
        className="absolute top-[1441px] left-[916px] w-[503px] h-[327px] object-cover"
        alt=""
        src={rectangle93}
      />
      <b className="absolute top-[1406px] left-[1059px] text-base text-black">{`<CAUSES of FAILUER, what Experts said?>`}</b>
      <b className="absolute top-[1792px] left-[122px] inline-block w-[511px] h-[324px] text-lg text-black">
        <p className="m-0 text-3xl text-lime-200">
          <span className="text-lg text-black">{`Now `}</span>
          <span>{`<Good News>`}</span>
          <span className="text-lg text-black">{` is, `}</span>
        </p>
        <p className="m-0">
          <span className="text-lg text-black">{`we `}</span>
          <span className="text-3xl text-lime-100">{`<iCrew Technologies>`}</span>
          <span>{` came forward with full of `}</span>
        </p>
        <p className="m-0">{`confidence to overcome these issues to provide successful `}</p>
        <p className="m-0">{`(in true sense) products, projects and services by using `}</p>
        <p className="m-0">{`our innovation focused team of proven expertise on these `}</p>
        <p className="m-0">{`identified areas. Our Team is not only demonstrating `}</p>
        <p className="m-0">{`technical expertise with evidence but also worked on `}</p>
        <p className="m-0">{`various business domain and strong proficiency in `}</p>
        <p className="m-0">Technology, Project, SQA and Risk Management.</p>
      </b>
      <img
        className="absolute top-[1765px] left-[575px] w-12 h-12 object-cover"
        alt=""
        src={personalGrowth}
      />
      <img
        className="absolute top-[3647px] left-[1836px] w-[693px] h-[456px] object-cover"
        alt=""
        src="./assets/images/broken-web-window@2x.png"
      />
      <img
        className="absolute top-[3321px] left-[0px] w-[1512px] h-[1107px] object-cover"
        alt=""
        src="./assets/images/broken-web-window@2x.png"
        data-scroll-to="brokenWebWindow"
      />
      <b className="absolute top-[3536px] left-[1228px] text-17xl inline-block text-black w-[199px] h-[62px]">{`<Services>`}</b>
      <img
        className="absolute h-[1.29%] w-[5.95%] top-[49.21%] right-[6.15%] bottom-[49.5%] left-[87.9%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={vector2x}
      />
      <div className="absolute top-[3446px] left-[1350px] font-snap-itc">S</div>
      <div className="absolute top-[3534px] left-[145px] bg-thistle-200 w-[482px] h-[810px]" />
      <b className="absolute top-[3559px] left-[171px] inline-block whitespace-pre-wrap w-[440px] h-[767px] text-5xl text-black">
        <p className="m-0 text-13xl text-royalblue-200">{`<Innovative SaaS Service>`}</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">
          We will offer you a list of out-of-box, innovative software products
          and services to meet your desired solution on such business areas
          where revenue are leakages due to lack of automation to setup
          appropriate control point.
        </p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">Some SaaS Services are in pipeline:</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">{`<iDocker>    <calculuM>   <iNest>`}</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">{`     <iRaft>        <iNforU>`}</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">&nbsp;</p>
      </b>
      <img
        className="absolute h-[1.71%] w-[7.94%] top-[56.31%] right-[80.75%] bottom-[41.97%] left-[11.31%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={appLogoInspiration}
      />
      <div className="absolute top-[3962px] left-[196px] inline-block w-[83px] h-[58px] text-springgreen-100 font-magneto">
        <b>i</b>
        <span className="font-snap-itc text-blue">D</span>
      </div>
      <img
        className="absolute top-[3952px] left-[498px] rounded-[50%] bg-red-100 w-[120px] h-[101px]"
        src={ellipse9}
      />
      <b className="absolute top-[3964px] left-[521px] font-magneto text-mediumseagreen">
        i
      </b>
      <img
        className="absolute h-[0.71%] w-[2.65%] top-[56.81%] right-[61.04%] bottom-[42.47%] left-[36.31%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={logoShapes}
      />
      <div className="absolute h-[1.71%] w-[7.94%] top-[56.31%] right-[69.18%] bottom-[41.97%] left-[22.88%]">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={vector2x}
        />
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={maskGroup}
        />
      </div>
      <div className="absolute top-[4131px] left-[222px] rounded-3xl bg-darkslateblue w-[125px] h-[119px]" />
      <img
        className="absolute h-[0.96%] w-[3.64%] top-[59.37%] right-[81.22%] bottom-[39.67%] left-[15.15%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={logoShapes41}
      />
      <img
        className="absolute h-[0.96%] w-[3.64%] top-[59.38%] right-[77.51%] bottom-[39.66%] left-[18.85%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={logoShapes51}
      />
      <img
        className="absolute h-[1.71%] w-[8.27%] top-[59.03%] right-[63.69%] bottom-[39.26%] left-[28.04%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={standardCollection}
      />
      <div className="absolute top-[3623px] left-[937px] bg-thistle-200 w-[482px] h-[298px]" />
      <div className="absolute top-[3939px] left-[937px] bg-thistle-200 w-[482px] h-[419px]" />
      <b className="absolute top-[3944px] left-[946px] inline-block w-[464px] h-[393px] text-5xl text-royalblue-200">
        <p className="m-0">
          <span>
            <span>{`<Software Quality Assurance>`}</span>
          </span>
        </p>
        <p className="m-0 text-black">
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className="m-0 text-3xl">
          <span>
            <span>{`SQA is a vital part to deploy an up-to-the mark system & we provide SQA services all through the SDLC. In order to assure software quality, we provide below mentioned services:`}</span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span>{`<Process Improvement/Implementation>`}</span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span>{`<Work Product Review>`}</span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span>{`<Coding Standard & Review>`}</span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span>{`<Manual Testing>`}</span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span>{`<Automated Regression Testing> <Performance & Load Testing>`}</span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span>{`<Non-functional Testing>`}</span>
          </span>
        </p>
        <p className="m-0">
          <span>
            <span>{`<Bug Management>.`}</span>
          </span>
        </p>
      </b>
      <b className="absolute top-[3633px] left-[955px] inline-block w-[464px] h-[272px] text-5xl text-royalblue-200">
        <p className="m-0">
          <span>
            <span>{`<Project Development & Management>`}</span>
          </span>
        </p>
        <p className="m-0 text-black">
          <span>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className="m-0 text-3xl">
          <span>
            <span>{`We develop your project as per your requirement & manage full Software Development Life Cycle (SDLC), which includes: Requirement Analysis, Design, Development, Testing/SQA, Implementation and Maintenance. In addition, we follow SCRUM to manage project.`}</span>
          </span>
        </p>
      </b>
      <img
        className="absolute top-[4754px] left-[115px] w-[743px] h-[456px] object-cover"
        alt=""
        src={mountainLake}
      />
      <b className="absolute top-[5868px] left-[99px] text-21xl inline-block w-[685px] h-[532px] text-black">
        <p className="m-0">Keep in touch</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">{`You may send your massages through the form or, send mail to: `}</p>
        <p className="m-0 text-mediumblue">info@icrew-tech.com</p>
        <p className="m-0 text-gold-200">&nbsp;</p>
        <p className="m-0 text-gray">Happy to Connect with You.</p>
      </b>
      {/* <div className="absolute top-[5810px] left-[1059px] [background:linear-gradient(180deg,_#3da9fc,_rgba(217,_217,_217,_0))] w-[360px] h-[794px]" /> */}
      {/* <b className="absolute top-[5828px] left-[calc(50%_+_318px)] text-13xl leading-[40px] inline-block text-center w-[171px]">{`<Hello!>`}</b> */}
      <form onSubmit={handleSubmit}>
        <div className="absolute top-[5810px] left-[1059px] [background:linear-gradient(180deg,_#3da9fc,_rgba(217,_217,_217,_0))] w-[360px] h-[794px]" />
        <b className="absolute mt-5 top-[5828px] left-[calc(50%_+_318px)] text-13xl leading-[40px] inline-block text-center w-[171px]">{`<Hello!>`}</b>
        {/* Other elements in your design */}
        <div className="absolute mt-[20px] top-[5889px] left-[1089px] w-[300px] h-[120px] overflow-hidden text-xl text-gold-200">
          <b className="absolute h-[33.33%] w-full top-[0.83%] left-[0%] leading-[40px] inline-block">
            Name
          </b>
          <div className="absolute w-full top-[40px] right-[0%] left-[0%] rounded-6xs bg-white box-border overflow-hidden flex flex-col items-start justify-start pt-2.5 px-[15px] pb-2 text-lightgray border-[1px] border-solid border-gainsboro-100">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="relative leading-[40px] w-full border-none outline-none bg-transparent"
            />
          </div>
        </div>
        <div className="absolute mt-[150px] top-[5889px] left-[1089px] w-[300px] h-[120px] overflow-hidden text-xl text-gold-200">
          <b className="absolute h-[33.33%] w-full top-[0.83%] left-[0%] leading-[40px] inline-block">
            Email
          </b>
          <div className="absolute w-full top-[40px] right-[0%] left-[0%] rounded-6xs bg-white box-border overflow-hidden flex flex-col items-start justify-start pt-2.5 px-[15px] pb-2 text-lightgray border-[1px] border-solid border-gainsboro-100">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="relative leading-[40px] w-full border-none outline-none bg-transparent"
            />
          </div>
        </div>
        <div className="absolute mt-[270px] top-[5889px] left-[1089px] w-[300px] h-[120px] overflow-hidden text-xl text-gold-200">
          <b className="absolute h-[33.33%] w-full top-[0.83%] left-[0%] leading-[40px] inline-block">
            Phone Number
          </b>
          <div className="absolute w-full top-[40px] right-[0%] left-[0%] rounded-6xs bg-white box-border overflow-hidden flex flex-col items-start justify-start pt-2.5 px-[15px] pb-2 text-lightgray border-[1px] border-solid border-gainsboro-100">
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="relative leading-[40px] w-full border-none outline-none bg-transparent"
            />
          </div>
        </div>
        {/* <div className="absolute mt-[400px] top-[5889px] left-[1089px] w-[300px] h-[120px] overflow-hidden text-xl text-gold-200">
          <b className="absolute h-[33.33%] w-full top-[0.83%] left-[0%] leading-[40px] inline-block">
            Write your message here
          </b>
          <div className="absolute w-full top-[40px] right-[0%] left-[0%] rounded-6xs bg-white box-border overflow-hidden flex flex-col items-start justify-start pt-2.5 px-[15px] pb-2 text-lightgray border-[1px] border-solid border-gainsboro-100">
            <div className="rounded-6xs bg-white box-border w-[300px] overflow-hidden flex flex-col items-start justify-start pt-2.5 px-[15px] pb-2 text-lightgray border-[1px] border-solid border-gainsboro-100">
              <div className="relative w-px h-[120px]">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  // style={{ height: "200px !important" }}
                  className="self-stretch leading-[40px] w-full border-none outline-none bg-transparent resize-none"
                />
              </div>
            </div>
          </div>
        </div> */}
        <div className="absolute top-[6288px] left-[1089px] w-[300px] overflow-hidden flex flex-col items-start justify-start text-xl text-gold-200">
          <b className="relative leading-[40px] inline-block w-[300px] h-10 shrink-0">
            Write Your Message Here
          </b>
          <div className="rounded-6xs bg-white box-border w-[300px] overflow-hidden flex flex-col items-start justify-start pt-2.5 px-[15px] pb-2 text-lightgray border-[1px] border-solid border-gainsboro-100">
            <b className="self-stretch relative leading-[40px]">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                // style={{ height: "200px !important" }}
                className="self-stretch leading-[40px] w-full border-none outline-none bg-transparent resize-none"
              />
            </b>
            <div className="relative w-px h-[20px]" />
          </div>
        </div>
        {/* <button type="submit" className="absolute top-[20px] left-[5px]">
          Submit
        </button> */}
      </form>
      {/* <div className="absolute top-[6288px] left-[1089px] w-[300px] overflow-hidden flex flex-col items-start justify-start text-xl text-gold-200">
        <b className="relative leading-[40px] inline-block w-[300px] h-10 shrink-0">
          Write Your Message Here
        </b>
        <div className="rounded-6xs bg-white box-border w-[300px] overflow-hidden flex flex-col items-start justify-start pt-2.5 px-[15px] pb-2 text-lightgray border-[1px] border-solid border-gainsboro-100">
          <b className="self-stretch relative leading-[40px]">
            Write Your Message Here
          </b>
          <div className="relative w-px h-[120px]" />
        </div>
      </div> */}
      <b className="absolute top-[5756px] left-[1181px] text-17xl text-black">{`<Contact Us>`}</b>
      <div className="absolute top-[6642px] left-[0px] bg-gainsboro-200 w-[1512px] h-[359px]" />
      <div className="absolute top-[6674px] left-[768px] text-black whitespace-pre-wrap inline-block w-[651px] text-29xl">
        <p className="m-0">
          <b>
            <span>{`Pages>`}</span>
          </b>
        </p>
        <p className="m-0">
          <b>
            <span>&nbsp;</span>
          </b>
        </p>
        <p className="m-0 text-13xl">
          <span>
            <b>{`<`}</b>
            <span>{`About Us>                     <Blog>`}</span>
          </span>
        </p>
        <p className="m-0 text-13xl">
          <span>
            <span>{`<Services>                     <Contact Us>`}</span>
          </span>
        </p>
        <p className="m-0 text-13xl">
          <span>
            <span>{`<Portfolio>                     <FAQ>`}</span>
          </span>
        </p>
        <p className="m-0 text-13xl">
          <span>
            <span>{`<Sub-Business>`}</span>
          </span>
        </p>
      </div>
      <img
        className="absolute h-[1.48%] w-[9.63%] top-[95.09%] right-[86.8%] bottom-[3.43%] left-[3.57%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={vector2x}
      />
      <div className="absolute top-[6688.51px] left-[95.61px] inline-block w-[102.14px] h-[28.52px] text-21xl text-lime-300 font-magneto">
        <b>i</b>
        <span className="text-5xl font-snap-itc text-yellow">
          <span>C</span>
          <span className="text-royalblue-100">r</span>
          <span className="text-orange">e</span>
          <span className="text-darkviolet">w</span>
        </span>
      </div>
      <b className="absolute top-[6699px] left-[204px] text-13xl inline-block text-black w-[248px] h-[35px]">{`<Technologies>`}</b>
      <img
        className="absolute h-[1.03%] w-[4.76%] top-[97.59%] right-[84.99%] bottom-[1.39%] left-[10.25%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={vector4}
      />
      <img
        className="absolute h-[1.03%] w-[4.76%] top-[97.59%] right-[78.31%] bottom-[1.39%] left-[16.93%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={vector5}
      />
      <img
        className="absolute h-[1.03%] w-[4.76%] top-[97.59%] right-[91.67%] bottom-[1.39%] left-[3.57%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={vector6}
      />
      <img
        className="absolute h-[1.03%] w-[4.76%] top-[97.59%] right-[71.63%] bottom-[1.39%] left-[23.61%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={vector7}
      />
      <img
        className="absolute h-[0.91%] w-[5.29%] top-[97.64%] right-[64.42%] bottom-[1.44%] left-[30.29%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={vector8}
      />
      <b className="absolute top-[6774px] left-[54px] text-[14px] inline-block text-cornflowerblue w-[377px] h-[33px]">
        Profit Begins When Innovation Starts
      </b>
      <i className="absolute top-[6957px] left-[59px] text-xs inline-block font-inria-serif text-black w-[439px] h-7">
        © 2023 iCrew Technologies All rights reserved.
      </i>
      <div
        className="absolute top-[6519px] left-[1089px] rounded-3xl bg-gold-200 box-border w-[300px] h-[49px] flex flex-col items-start justify-center pt-2.5 px-[15px] pb-2 text-center text-xl border-[1px] border-solid border-darkolivegreen"
        onClick={handleSubmit}
      >
        <b
          className="self-stretch relative leading-[40px] cursor-pointer"
          disabled={loading}
        >
          {loading ? "Sending..." : "Message Us"}
        </b>
      </div>
      <div className="absolute top-[6783px] left-[768px] bg-gainsboro-300 w-[209px] h-8" />
    </div>
  );
};

export default App;
