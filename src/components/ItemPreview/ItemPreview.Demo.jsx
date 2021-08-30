import React from "react";
import { ItemPreview } from "./ItemPreview";

const MOCK_IMAGE_URL =
  "https://www.google.com/imgres?imgurl=https%3A%2F%2F149366112.v2.pressablecdn.com%2Fwp-content%2Fuploads%2F2019%2F03%2Fshutterstock_1693785667-scaled.jpg&imgrefurl=https%3A%2F%2Fwww.onegreenplanet.org%2Fanimalsandnature%2F5-big-causes-of-deforestation-and-how-you-can-stop-it%2F&tbnid=QDuKjcOnGm4SfM&vet=12ahUKEwiJucOy28byAhUJQhoKHUzvBfUQMygAegUIARDIAQ..i&docid=lO9r6LBYNQZ7WM&w=2560&h=1703&q=forest&client=safari&ved=2ahUKEwiJucOy28byAhUJQhoKHUzvBfUQMygAegUIARDIAQ";

export const Demo = () => {
  return (
    <div>
      <ItemPreview tittle="Hello World" />

      <ItemPreview tittle="Hello World" size="m" />

      <ItemPreview tittle="Hello World" size="m" image={MOCK_IMAGE_URL} />

      <ItemPreview tittle="Hello World" starred image={MOCK_IMAGE_URL} />

      <ItemPreview
        tittle="frcxfh hfcdfh vjv  fyghjfv jgcdfxjhm htfgjkhg dfghjk dfghjk wsderftgyuhij;kljhg dfk.,
       dfgh dfgh dfgh sdfgh kjhgf kjhg mnbv mjnbhgv oiuyt kjhg mjnhbgvf asdcfvb ertg ertyb knb werty iuytb kjhg
       jhn kjh dfg sdfgh ertyun oijuh uyn iu rdtfygiuoljk wesrtiuojk berdtyuilk szdfxhjk sdxcrtvfuygh .k,jmbnv
        kjhg ujygtf wertyb wert wertyuhgfvcbn wertyujhgf sdfghj sdfgh xcvbn dfghj"
        image={MOCK_IMAGE_URL}
      />

      <ItemPreview
        tittle="hello world"
        helper="This is a helper text"
        image={MOCK_IMAGE_URL}
      />

      <ItemPreview
        tittle="Hello World"
        helper="This is a helper text"
        image={MOCK_IMAGE_URL}
      >
        This is a child
      </ItemPreview>
    </div>
  );
};

export default Demo;
