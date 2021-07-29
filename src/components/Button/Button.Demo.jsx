import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { tokens } from "../../data/tokens";

const DarkBg = styled.div`
  width: 100%;
  background: rgb(${tokens.colors.turquoise});
`;

export const Demo = () => {
  return (
    <div>
      <div>
        <Button> Name </Button>
      </div>
      <div>
        <Button importance="secondary" action="#">
          Name
        </Button>
      </div>
      <div>
        <Button importance="secondary" action="#" full>
          Name
        </Button>
      </div>
      <div>
        <Button importance="primary" action="#">
          Surname
        </Button>
      </div>

      <div>
        <Button> Name </Button>
      </div>
      <div>
        <Button importance="secondary"> Name </Button>
      </div>
      <div>
        <Button importance="secondary" full>
          Name
        </Button>
      </div>
      <div>
        <Button importance="primary"> Surname </Button>
      </div>

      <DarkBg>
        <div>
          <Button importance="secondary" inverse>
            Age
          </Button>
        </div>
        <div>
          <Button importance="primary" inverse>
            Gender
          </Button>
        </div>
        <div>
          <Button importance="primary" full inverse>
            Gender
          </Button>
        </div>

        <div>
          <Button importance="secondary" action="#" inverse>
            Age
          </Button>
        </div>
        <div>
          <Button importance="primary" action="#" inverse>
            Gender
          </Button>
        </div>
        <div>
          <Button importance="primary" action="#" full inverse>
            Gender
          </Button>
        </div>
      </DarkBg>
    </div>
  );
};

export default Demo;
