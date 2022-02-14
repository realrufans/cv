import Cv from "../components";

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
        <Cv.Body>12b, Adetayo Ogunaike, Berger Lagos Nigeria</Cv.Body>
        <Cv.Heading_Heading>Phone</Cv.Heading_Heading>
        <Cv.Body className="leftHeading">+234(0)8182590878</Cv.Body>
        <Cv.Heading_Heading>Email</Cv.Heading_Heading>
        <Cv.Body>Realboyswag9@gmail.com</Cv.Body>
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
        <Cv.Heading_Heading>Twitter</Cv.Heading_Heading>
        <a href="https://twitter.com/realrufans22">
          {" "}
          <Cv.Body>https://twitter.com/realrufans22</Cv.Body>
        </a>
        {/* skills */}
        <Cv.LeftView>
          {" "}
          <Cv.Heading>Skills</Cv.Heading>
        </Cv.LeftView>
        <Cv.Body>Html</Cv.Body>
        <Cv.Body>Css</Cv.Body>
        <Cv.Body>Javascript</Cv.Body>
        <Cv.Body>React</Cv.Body>
        <Cv.Body>Git</Cv.Body>
        <Cv.Body>Styled-Components</Cv.Body>
        <Cv.LeftView>
          {" "}
          <Cv.Heading>Language</Cv.Heading>
        </Cv.LeftView>
        <Cv.Body>English</Cv.Body>
      </Cv.LeftViewContainer>
      <Cv.RightView>
        <Cv.Introduction>
          Tech profession, with expertise in Front-End developing. I have bagged
          one year and five months of experience and maximum results working
          with either HTML, CSS, Vanilla, JavaScript, or Reactjs and
          styled-components.
        </Cv.Introduction>

        {/* Work history */}
        <Cv.RightHeading>Experience</Cv.RightHeading>
        <Cv.RightDetailsContainer>
          <Cv.Duration>2020/05-Pressent</Cv.Duration>
          <Cv.RightDetails>
            <Cv.RightHeading_Heading>
              Front End Developer
            </Cv.RightHeading_Heading>
            <Cv.RightBody>
              @{<a href="https://telostask.app/">Telostask.app</a>}
            </Cv.RightBody>
            <Cv.RightBody>
              <Cv.Dot></Cv.Dot> Employed coding practices based on commonly
              accepted standards to establish site layout and user experience.
            </Cv.RightBody>
            <Cv.RightBody>
              <Cv.Dot></Cv.Dot> Creating responsive interfaces and reusable
              codes with Reactjs and styled-components.
            </Cv.RightBody>
            <Cv.RightBody>
              <Cv.Dot></Cv.Dot> I make use of HTML, JavaScript, and CSS to bring
              concepts to life.
            </Cv.RightBody>
            <Cv.RightBody>
              <Cv.Dot></Cv.Dot> Fixing bugs and testing for usability.
            </Cv.RightBody>
          </Cv.RightDetails>
        </Cv.RightDetailsContainer>

        <Cv.RightDetailsContainer>
          <Cv.Duration>2020/02-Pressent</Cv.Duration>
          <Cv.RightDetails>
            <Cv.RightHeading_Heading>
              Quality Assurance Analyst
            </Cv.RightHeading_Heading>
            <Cv.RightBody>
              @{<a href="https://mydappr.io/">MyDappr.io</a>}
            </Cv.RightBody>

            <Cv.RightBody>
              <Cv.Dot></Cv.Dot> I create quality measurements to track
              improvement in products and services being worked on by several
              sections of the company.
            </Cv.RightBody>
            <Cv.RightBody>
              <Cv.Dot></Cv.Dot> I Inspect products or services to meet company
              regulatory requirements.
            </Cv.RightBody>
            <Cv.RightBody>
              <Cv.Dot></Cv.Dot> I work closely with the development team to
              improve existing products.
            </Cv.RightBody>
            <Cv.RightBody>
              <Cv.Dot></Cv.Dot> I sometimes assist with Front-end development
              which includes the creation of landing-page with, testing, and
              debugging.
            </Cv.RightBody>
          </Cv.RightDetails>
        </Cv.RightDetailsContainer>

        {/* Education */}
        <Cv.RightHeading>Education</Cv.RightHeading>

        <Cv.RightDetailsContainer className="scrimba">
          <Cv.Duration>2021/03-2021/09</Cv.Duration>
          <Cv.RightDetails>
            <Cv.RightHeading_Heading>
              Frontend Developer Career Path at{" "}
              <a href="https://scrimba.com/">Scrimba.com</a>
            </Cv.RightHeading_Heading>

            <Cv.RightBody>
              Contains over 70 hours of top-notch tutorials, hundreds of coding
              challenges, and dozens of real-world projects.
            </Cv.RightBody>
          </Cv.RightDetails>
        </Cv.RightDetailsContainer>

        <Cv.RightDetailsContainer className="Hnd">
          <Cv.Duration>2018/01-2020/04</Cv.Duration>
          <Cv.RightDetails>
            <Cv.RightHeading_Heading>
              Higher National Diploma: Computer Enginerring
            </Cv.RightHeading_Heading>

            <Cv.RightBody>
              Moshood Abiola Polytechnic - Abeokuta, Ogun State Nigeria
            </Cv.RightBody>
          </Cv.RightDetails>
        </Cv.RightDetailsContainer>

        <Cv.RightDetailsContainer className="ong">
          <Cv.Duration>2014/01-2016/02</Cv.Duration>
          <Cv.RightDetails>
            <Cv.RightHeading_Heading>
              Ordinary National Diploma: Computer Enginerring
            </Cv.RightHeading_Heading>

            <Cv.RightBody>
              Moshood Abiola Polytechnic - Abeokuta, Ogun State Nigeria
            </Cv.RightBody>
          </Cv.RightDetails>
        </Cv.RightDetailsContainer>

        {/* Activities/Interests */}
        <Cv.RightHeading className="Activities">
          Activities/Interests
        </Cv.RightHeading>
        <Cv.RightDetailsContainer>
          <Cv.RightDetails>
            <Cv.RightBody>
              <Cv.Dot></Cv.Dot> Writing and bloging Technical/personal contents.
            </Cv.RightBody>
            <Cv.RightBody>
              <Cv.Dot></Cv.Dot> Reading latest news on Web3 and its products.
            </Cv.RightBody>
          </Cv.RightDetails>
        </Cv.RightDetailsContainer>

        {/*  */}
      </Cv.RightView>
    </Cv>
  );
}

export default FullCV;
