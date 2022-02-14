import styled from "styled-components";

// generall
export const Container = styled.div`
  background-color: #ebeef5;
  display: flex;
  justify-content: space-between;
  max-width:1500px;
  width: 100%;
   
  padding: 0;
  box-sizing: border-box;
  box-shadow: 8px 5px 30px grey;
  height: 100%;
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
  width: 100%;
`;

export const LeftView = styled.div`
  background: #01315c;
`;
export const LeftTitle = styled.h1`
  color: #ffffff;
  margin: 0.2em 0.4em;
  text-align: start;
`;

// right view
export const RightView = styled.div`
  padding: 0.5em;
  height: 100%;
`;

//  right biew details

export const RightDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 1em;

  gap: 2em;
`;
export const RightDetails = styled.div`
  font-size: 1.1rem;
`;
export const RightHeading = styled.h2`
  color: #003d73;
  border: solid 3px grey;
  border-right: 0;
  border-left: 0;
  text-align: start;
  border-radius: 0.2em;
`;
export const RightHeading_Heading = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  align-self: start;
  justify-self: start;
`;
export const RightBody = styled.p``;

export const Introduction = styled.p`
  line-height: 1.6;
  letter-spacing: 0.05rem;
  text-align: center;
  font-size: 1.2rem;
`;

export const Duration = styled.strong``;

export const Dot = styled.span`
  display: inline-block;
  height: 7px;
  width: 7px;
  border-radius: 50%;
  background: #003d73;
`;
