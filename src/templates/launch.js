import * as React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

const GoBackBtn = styled(Link)`
  color: #000;
  text-decoration: none;

  padding: 5px 20px;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: #808080;
  transition: 0.1s color linear;
  font-size: 40px;
  text-align: center;
  &:hover,
  &:focus {
    color: #ccff66;
  }
`;
const Label = styled.div`
  font-size: 24px;
  padding: 5px 0;
  margin: 0;
  color: #696969;
`;
const Value = styled.span`
  color: #000;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

const List = styled.div`
  margin: 10px auto;
  list-style: none;
`;

const Rocket = (props) => {
  if (props.errors) {
    return (
      <div>
        <GoBackBtn to="/">Go back</GoBackBtn>
        {props.errors.map((err) => (
          <p key={err.message}>{err.message}</p>
        ))}
      </div>
    );
  }

  const { launch_year, mission_id, mission_name, ships, rocket } =
    props.data.SpaceX.launch;

  return (
    <>
      <title>{mission_name}</title>
      <Main>
        <GoBackBtn to="/">Go back</GoBackBtn>
        <List>
          {launch_year && (
            <Label>
              Year: <Value>{launch_year}</Value>
            </Label>
          )}
          {mission_name && (
            <Label>
              Name: <Value>{mission_name}</Value>
            </Label>
          )}
          {mission_id.length > 0 && (
            <Label>
              Mission id: <Value>{mission_id}</Value>
            </Label>
          )}
          <Label>
            Rocket name: <Value>{rocket.rocket_name}</Value>
          </Label>
          <Label>
            Rocket type: <Value>{rocket.rocket_type}</Value>
          </Label>
          {ships.length > 0 && (
            <Label>
              Ships:
              {ships.map((ship) => (
                <List key={ship.name}>
                  <li>
                    Home port: <Value>{ship.home_port}</Value>
                  </li>
                  {ship.model && (
                    <li>
                      Model: <Value>{ship.model}</Value>
                    </li>
                  )}
                  <li>
                    Name: <Value>{ship.name}</Value>
                  </li>
                </List>
              ))}
            </Label>
          )}
        </List>
      </Main>
    </>
  );
};

export default Rocket;

export const query = graphql`
  query RocketQuery($id: ID!) {
    SpaceX {
      launch(id: $id) {
        launch_year
        mission_id
        mission_name
        ships {
          home_port
          name
          model
        }
        rocket {
          rocket_name
          rocket_type
        }
      }
    }
  }
`;
