import styled from "styled-components";

// generall
export const Container = styled.div`
  background-color: #ebeef5;
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
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
  max-width: 20%;
`;

// right view
export const RightView = styled.div`
  padding: 0.5em;
  height: 100%;
`;

//  right biew details

export const RightDetailsContainer = styled.div`
  display: flex;
  margin-bottom: 1em;
  gap: 5em;
`;
export const RightDetails = styled.div`
  font-size: 1rem;
`;
export const RightHeading = styled.h2`
  color: #003d73;
  border: solid 1px grey;
  border-right: 0;
  border-left: 0;
  text-align: start;
  border-radius: 0.2em;
 
`;
export const RightHeading_Heading = styled.h3`
  font-size: 1.2rem;
 
 
`;
export const RightBody = styled.p`
 
text-align:start;
padding-right:2rem;

`;

export const Introduction = styled.p`
  line-height: 1.6;
  letter-spacing: 0.05rem;
  text-align: start;
  font-size: 1rem;
  padding-left:0.5rem;
  
  
`;

export const Duration = styled.strong`
 max-width:min-content;
 
`;

export const Dot = styled.span`
background:red;
`;
