import styled from "styled-components";

// generall
export const Container = styled.div`
  background-color: #ebeef5;
  display: flex;
  justify-content: space-between;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  box-shadow: 8px 5px 30px grey;

  @media (max-width: 900px) {
    flex-direction: column;
  } ;
`;

export const Heading = styled.h2`
  color: #ffffff;
  margin-left: 0.5em;
  padding: 1em;
`;
export const Heading_Heading = styled.h3`
  color: #ffffff;
  margin: 0;
  margin-left: 0.7em;
`;
export const Body = styled.p`
  color: #c3d1de;

  margin: 0.2em 0.7em 1em 0.7em;
`;

// left view
export const LeftViewContainer = styled.div`
  background: #003d73;
  text-align: start;

  @media (max-width: 900px) {
    text-align: center;
    margin-left: 0;
  }
`;

export const LeftView = styled.div`
  background: #01315c;
`;
export const LeftTitle = styled.h1`
  color: #ffffff;
  margin: 0.2em 0.4em;
  text-align: start;
  @media (max-width: 900px) {
    text-align: center;
    margin-left: 0;
  }
`;

// right view
export const RightView = styled.div`
  padding: 0.5em;
`;

//  right biew details

export const RightDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 0;
  height: 20%;
  gap: 2em;
`;
export const RightDetails = styled.div``;
export const RightHeading = styled.h2`
  color: #003d73;
  border: solid 3px grey;
  border-right: 0;
  border-left: 0;
  text-align: start;
  border-radius: 0.2em;
`;
export const RightHeading_Heading = styled.h3``;
export const RightBody = styled.p`
  margin-top: 0.5em;
  margin-bottom: 0.3em;
  text-align: start;
  line-height: 1.6;
  letter-spacing: 0.05rem;
`;

export const Introduction = styled.p`
  line-height: 1.6;
  letter-spacing: 0.05rem;
  text-align: center;
`;

export const Duration = styled.strong`
  text-align: start;
  font-size: 0.7rem;
  margin-top: 2em;
  margin-bottom: 23em;
  align-self: start;
`;

export const Dot = styled.span`
  display: inline-block;
  height: 7px;
  width: 7px;
  border-radius: 50%;
  background: #003d73;
`;
