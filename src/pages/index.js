import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  margin: auto;
  font-size: 24px;
`;

const Item = styled.li`
  padding: 8px 0;
`;

const StyledLink = styled(Link)`
  color: #262626;
  text-decoration: none;
  &:hover,
  &:focus {
    color: #778899;
  }
`;

const Index = ({
  data: {
    SpaceX: { launches },
  },
}) => {
  return (
    <>
      <title>Launches list by SpaceX</title>
      {launches && (
        <List>
          {launches.map((el) => (
            <Item key={el.mission_name}>
              <StyledLink to={`/launch/${el.id}`}>
                🛰 {el.mission_name} 🛰
              </StyledLink>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};
export default Index;

export const query = graphql`
  {
    SpaceX {
      launches(limit: 40) {
        id
        mission_name
      }
    }
  }
`;
