import Cv from "../components";
import { CheckCircleIcon } from "@heroicons/react/solid";

function FullCV() {
  return (
    <Cv>
      <Cv.LeftViewContainer>
        {" "}
        {/* contact */}
        <Cv.LeftTitle>Emetonjo Solomon</Cv.LeftTitle>
        <Cv.LeftView>
          {" "}
          <Cv.Heading>Contact</Cv.Heading>
        </Cv.LeftView>
        <Cv.Heading_Heading>Address</Cv.Heading_Heading>
        <Cv.Body>Lagos, Nigeria</Cv.Body>
        <Cv.Heading_Heading>Phone</Cv.Heading_Heading>
        <Cv.Body className="leftHeading">+234(0)8182590878</Cv.Body>
        <Cv.Heading_Heading>Email</Cv.Heading_Heading>
        <Cv.Body>solomonemetonjo@gmail.com</Cv.Body>
        <Cv.Heading_Heading>linkedin</Cv.Heading_Heading>
        <a href="https://www.linkedin.com/in/realrufans">
          {" "}
          <Cv.Body>https://www.linkedin.com/in/realrufans</Cv.Body>
        </a>
        <Cv.Heading_Heading>Github</Cv.Heading_Heading>
        <a href="https://github.com/realrufans">
          {" "}
          <Cv.Body>https://github.com/realrufans</Cv.Body>
        </a>
        {/* <Cv.Heading_Heading>Twitter</Cv.Heading_Heading>
        <a href="https://twitter.com/realrufans22">
          {" "}
          <Cv.Body>https://twitter.com/realrufans22</Cv.Body>
        </a> */}
        {/* skills */}
        <Cv.LeftView>
          {" "}
          <Cv.Heading>Skills</Cv.Heading>
        </Cv.LeftView>
        <Cv.Body>Html</Cv.Body>
        <Cv.Body>Css</Cv.Body>
        <Cv.Body>Javascript</Cv.Body>
        <Cv.Body>React</Cv.Body>
        <Cv.Body>Nextjs</Cv.Body>
        <Cv.Body>Git</Cv.Body>
        <Cv.Body>Styled-Components</Cv.Body>
        <Cv.Body>TailwindCss</Cv.Body>
        <Cv.Body>Firebase</Cv.Body>
        <Cv.Body>Etherjs & web3js</Cv.Body>
        <Cv.LeftView>
          {" "}
          <Cv.Heading>Language</Cv.Heading>
        </Cv.LeftView>
        <Cv.Body>English</Cv.Body>
      </Cv.LeftViewContainer>
      <Cv.RightView>
        <Cv.Introduction>
          A tech expert with experience in front-end web development. I have two
          years of experience, learning, and successful outcomes working with
          web development standards to build dynamic websites. I'm now embarking
          on a Web3 journey while working with Solidity and Nextjs or Vitejs to
          communicate with smart contracts.
        </Cv.Introduction>
        {/* Work history */}
        <Cv.RightHeading>Experience</Cv.RightHeading>
        <Cv.RightDetailsContainer>
          <Cv.Duration>2022/06-Present</Cv.Duration>
          <Cv.RightDetails>
            <Cv.RightHeading_Heading>
              Blockchain Front End Developer
            </Cv.RightHeading_Heading>
            <Cv.RightBody>{<a href="">CoinSino (coming soon)</a>}</Cv.RightBody>
            <Cv.RightBody>
              <CheckCircleIcon className="dotit" />
              With Nextjs and TailwindCss, I converted static design mockups
              into an entirely usable web3 interface.
            </Cv.RightBody>
            <Cv.RightBody>
              <CheckCircleIcon className="dotit" />
              Using SSR(ServerSideRendering) from Nextjs, I was able to interact
              with Blockchain on the fly.
            </Cv.RightBody>
            <Cv.RightBody>
              <CheckCircleIcon className="dotit" />
              Seamless handling of internal Etherjs events such as
              OnAccountChanged, onNetworkChanged, and so on.
            </Cv.RightBody>
            <Cv.RightBody>
              <CheckCircleIcon className="dotit" />
              Tricky bugs were properly handled.
            </Cv.RightBody>
          </Cv.RightDetails>
        </Cv.RightDetailsContainer>

        <Cv.RightDetailsContainer>
          <Cv.Duration>2020/05-Present</Cv.Duration>
          <Cv.RightDetails>
            <Cv.RightHeading_Heading>
              Front End Developer
            </Cv.RightHeading_Heading>
            <Cv.RightBody>
              @{<a href="https://telostask.app/">Telostask.app</a>}
            </Cv.RightBody>

            <Cv.RightBody>
              <CheckCircleIcon className="dotit" />
              Created responsive interfaces and reusable codes with Reactjs and
              styled-components for future use.
            </Cv.RightBody>
            <Cv.RightBody>
              <CheckCircleIcon className="dotit" /> Used the most commonly
              accepted standards to establish the site layout and user
              experience.
            </Cv.RightBody>

            <Cv.RightBody>
              <CheckCircleIcon className="dotit" /> HTML, JavaScript, and CSS
              were also used to bring the product designer's concepts to life.
            </Cv.RightBody>
            <Cv.RightBody>
              <CheckCircleIcon className="dotit" />
              Performed bug fixes and code reviews to improve UI
            </Cv.RightBody>
          </Cv.RightDetails>
        </Cv.RightDetailsContainer>
        <Cv.RightDetailsContainer>
          <Cv.Duration>2020/02-Present</Cv.Duration>
          <Cv.RightDetails>
            <Cv.RightHeading_Heading>
              Quality Assurance Analyst
            </Cv.RightHeading_Heading>
            <Cv.RightBody>
              @{<a href="https://mydappr.io/">MyDappr.io</a>}
            </Cv.RightBody>

            <Cv.RightBody>
              <CheckCircleIcon className="dotit" /> Created quality measurements
              to track improvement in products and services being worked on by
              several sections of the company.
            </Cv.RightBody>
            <Cv.RightBody>
              <CheckCircleIcon className="dotit" /> Inspected products or
              services to meet company regulatory requirements.
            </Cv.RightBody>
            <Cv.RightBody>
              <CheckCircleIcon className="dotit" /> Worked closely with the
              development team to improve existing products.
            </Cv.RightBody>
            <Cv.RightBody>
              <CheckCircleIcon className="dotit" /> Assisted with Front-end
              development which includes the creation of landing-page with,
              testing, and debugging.
            </Cv.RightBody>
          </Cv.RightDetails>
        </Cv.RightDetailsContainer>

        {/* djsljdlsjdlsjldkjsd */}
        <Cv.RightHeading>Education</Cv.RightHeading>
        <Cv.RightDetailsContainer>
          <Cv.Duration>22021/03-2021/09</Cv.Duration>
          <Cv.RightDetails>
            <Cv.RightHeading_Heading>
              Frontend Developer Career Path at Scrimba.com
            </Cv.RightHeading_Heading>

            <Cv.RightBody>
              <CheckCircleIcon className="dotit" /> Contains over 70 hours of
              top-notch tutorials, hundreds of coding challenges, and dozens of
              real-world projects.
            </Cv.RightBody>
          </Cv.RightDetails>
        </Cv.RightDetailsContainer>

        <Cv.RightDetailsContainer>
          <Cv.Duration>2018/01-2020/04</Cv.Duration>
          <Cv.RightDetails>
            <Cv.RightHeading_Heading>
              Higher National Diploma: Computer Enginerring
            </Cv.RightHeading_Heading>

            <Cv.RightBody>
              <CheckCircleIcon className="dotit" /> Moshood Abiola Polytechnic -
              Abeokuta, Ogun State Nigeria
            </Cv.RightBody>
          </Cv.RightDetails>
        </Cv.RightDetailsContainer>

        {/* seee */}

        <Cv.RightDetailsContainer>
          <Cv.Duration>2014/01-2016/02</Cv.Duration>
          <Cv.RightDetails>
            <Cv.RightHeading_Heading>
              Ordinary National Diploma: Computer Enginerring
            </Cv.RightHeading_Heading>

            <Cv.RightBody>
              <CheckCircleIcon className="dotit" /> Moshood Abiola Polytechnic -
              Abeokuta, Ogun State Nigeria
            </Cv.RightBody>
          </Cv.RightDetails>
        </Cv.RightDetailsContainer>

        {/* hsdkshkdhskdh */}

        <Cv.RightHeading>Activities/Interests</Cv.RightHeading>
        <Cv.RightDetailsContainer className="Activities">
          <Cv.RightDetails>
            <Cv.RightBody>
              <CheckCircleIcon className="dotit" /> Writing and bloging
              Technical/personal contents.
            </Cv.RightBody>
            <Cv.RightBody>
              <CheckCircleIcon className="dotit" /> Reading latest news on Web3
              and its products.
            </Cv.RightBody>
          </Cv.RightDetails>
        </Cv.RightDetailsContainer>
        {/*  */}
      </Cv.RightView>
    </Cv>
  );
}

export default FullCV;
