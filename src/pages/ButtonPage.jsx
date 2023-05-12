import React from 'react';
import Button from "../components/Button";

import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

const ButtonPage = (props) => {

  const handlePrimaryButtonClick = () => {
    console.log('Primary Button');
  }

  return (
    <>
      <Button primary onClick={handlePrimaryButtonClick} className="mb-5"><GoCloudDownload/>Primary</Button>
      <Button secondary><GoBell/>Secondary</Button>
      <Button success><GoDatabase/>Success</Button>
      <Button warning>Warning</Button>
      <Button danger>Danger</Button>
      <Button danger outline>Danger Outline</Button>
      <Button danger rounded>Danger Rounded</Button>
    </>
  );
}

export default ButtonPage;