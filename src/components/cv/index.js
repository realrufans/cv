import {
  Container,
  LeftViewContainer,
  LeftView,
  RightView,
  LeftTitle,
  Heading,
  Heading_Heading,
  Body,
  RightDetailsContainer,
  RightDetails,
  RightHeading_Heading,
  RightBody,
  RightHeading,
  Introduction,
  Duration,
  Dot,
} from "./cv";

export default function Cv({ children, restprops }) {
  return <Container {...restprops}>{children}</Container>;
}

Cv.LeftViewContainer = function CvLeftViewContainer({ children }) {
  return <LeftViewContainer>{children}</LeftViewContainer>;
};

Cv.LeftView = function CvLeftView({ children }) {
  return <LeftView>{children}</LeftView>;
};

Cv.RightView = function CvRightView({ children }) {
  return <RightView>{children}</RightView>;
};
Cv.LeftTitle = function CvLeftTitle({ children }) {
  return <LeftTitle>{children}</LeftTitle>;
};

Cv.Heading = function CvHeading({ children }) {
  return <Heading>{children}</Heading>;
};

Cv.Heading_Heading = function CvHeading_Heading({ children }) {
  return <Heading_Heading>{children}</Heading_Heading>;
};

Cv.Body = function CvBody({ children }) {
  return <Body>{children}</Body>;
};

Cv.RightDetailsContainer = function CvRightDetailsContainer({
  children,
  ...restprops
}) {
  return (
    <RightDetailsContainer {...restprops}>{children}</RightDetailsContainer>
  );
};

Cv.RightDetails = function CvRightDetails({ children }) {
  return <RightDetails>{children}</RightDetails>;
};

Cv.RightBody = function CvRightBody({ children, ...restprops }) {
  return <RightBody {...restprops}>{children}</RightBody>;
};
Cv.RightHeading_Heading = function CvRightHeading_Heading({ children }) {
  return <RightHeading_Heading>{children}</RightHeading_Heading>;
};

Cv.RightHeading = function CvRightHeading({ children, ...restprops }) {
  return <RightHeading {...restprops}>{children}</RightHeading>;
};

Cv.Introduction = function CvRightIntroduction({ children }) {
  return <Introduction>{children}</Introduction>;
};

Cv.Dot = function CvRightDot({ children }) {
  return <Dot>{children}</Dot>;
};

Cv.Duration = function CvRightDuration({ children }) {
  return <Duration>{children}</Duration>;
};
