import styled from "styled-components";
import { elevation, transition, black } from "components/utilities";

export const Card = styled.div`
  background-color: white;
  border-radius: 3px;
  padding: 15px;
  color: ${black};
  ${elevation[3]};
  ${transition({})};
  &:hover {
    ${elevation[5]};
  }
`;
