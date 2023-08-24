import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaFreeCodeCamp, FaFigma } from "react-icons/fa";

type socialLinkType = {
  title: string;
  url: string;
  icon: React.JSX.Element;
}[];

const socialLink: socialLinkType = [
  {
    title: "GitHub",
    url: "https://github.com/0me9a/FCCMde",
    icon: <BsGithub />,
  },
  {
    title: "Twitter",
    url: "https://twitter.com/omegaStrikes",
    icon: <BsTwitter />,
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/baliram-singh",
    icon: <BsLinkedin />,
  },
  {
    title: "Freecodecamp",
    url: "https://freecodecamp.com/ome9a",
    icon: <FaFreeCodeCamp />,
  },
  {
    title: "Figma",
    url: "https://www.figma.com/@ome9a",
    icon: <FaFigma />,
  },
];

export { socialLink };
export type { socialLinkType };
