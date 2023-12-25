// Section1
import ShootingStarImage from "../assets/images/section1/main-bg-0-0.png";
import MainBG from "../assets/images/section1/milky-way-glows-mountain-peak-dusk-generated-by-ai.jpg";
import DiceImage from "../assets/images/section1/SDW1-removebg-preview.png";



// Section4
import NewsImg from "../assets/images/section4/6864937_23324-removebg-preview.png";
import Phone1Img from "../assets/images/section4/accdb808-5e93-4056-9b09-16d8a4a5df40-12291250_wavy_tech-30_single-03.png";


// Section5
import BannerBgImage from "../assets/images/section5/8562956_25550.jpg";
import BannerBgImageMobile from "../assets/images/section5/_9b850475-c821-45b3-bb35-023273b89761.jpg";

// Section6
import Sec6Image1 from "../assets/images/section6/_ffdcd54c-8814-4e96-a304-1ad0ed8d046c.jpg";



// Section10
import DiscordImage from "../assets/images/section10/discord.webp";
import RedditImage from "../assets/images/section10/reddit.webp";
import TelegramImage from "../assets/images/section10/telegram.webp";
import TwitterImage from "../assets/images/section10/twitter.webp";



// Footer
import BookIcon from "@mui/icons-material/Book";
import RedditIcon from "@mui/icons-material/Reddit";
import TwitterIcon from "@mui/icons-material/Twitter";
import ChatIcon from "@mui/icons-material/Chat";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";

// Navbar
import Logo from "../assets/logo.ico";

export const section1Content = {
  MainBG,
  DiceImage,
  ShootingStarImage,
  title: "StarkDice: Decentralized Multiplayer Ludo on StarkNet",
  subtitle: "Welcome to the Future of Gaming!",
};

export const section2Content = {
  items: [

  ],
};

export const section3Content = {
  title: "About StarkDice",
  text: "StarkDice is a revolutionary multiplayer Ludo game that leverages the power of StarkNet for a decentralized and transparent gaming experience. Roll the dice, strategize with friends, and enjoy a secure and tamper-proof gaming environment.",
};

export const section4Content = {
  top: {
    title: "Real-time multiplayer gameplay",
    subtitle:
      "Engage in Real-Time Multiplayer Adventures: Connect, Compete, Conquer!",
    image: NewsImg,
  },
  bottom: {
    title: "Decentralized identity and secure transactions.",
    TABS: [
      {
        name: "Transparency",
        image: Phone1Img,
        subtitle:
          "On-chain game state for transparency.",
      },
      {
        name: "Blockchain",
        image: Phone1Img,
        subtitle:
          "StarkNet Integration.",
      }
    ],
  },
};

export const section5Content = {
  BannerBgImage,
  BannerBgImageMobile,
  title: "Why StarkNet?",
  subtitle:
    "By building on StarkNet, StarkDice ensures decentralization, security, and transparency. Connect your wallet and experience the future of blockchain gaming.",
};

export const section6Content = {
  title: "Smart Contracts",
  ITEMS: [
    {
      title: "StarkDice",
      subtitle:
        "StarkDice utilizes smart contracts for fair gameplay and trustless interactions. Check out our smart contract addresses on the [StarkNet Explorer].",
      image: Sec6Image1,
    }
  ],
};

export const section7Content = {
  title: "Project Timeline",
  subtitle: "Development Phases:",
  timelines: [
    {
      title: "Phase 1 (Q1 2023 - Q2 2023)",
      subtitle:
        "Game concept and smart contract development.",
    },
    {
      title: "Phase 2 (Q3 2023 - Q4 2023)",
      subtitle:
        "Alpha testing with a closed group of players",
    },
    {
      title: "Phase 3 (Q1 2024)",
      subtitle:
        "Public beta release on StarkNet",
    },
    {
      title: "Phase 4 (Q2 2024)",
      subtitle:
        "Full game launch with additional features and community feedback.",
    },
  ],
};

export const section8Content = {
  title: "Meet the Team",
  subtitle:
    "Our Passionate Developers",
  caption:
    "Devs",
  teamMembers: [
      {
        name: 'Felix Awere',
        role: 'Lead Developer',
        image: 'https://via.placeholder.com/150', // Replace with actual image URL
      },
      {
        name: 'Dalmas Ogembo',
        role: 'CTO',
        image: 'https://via.placeholder.com/150', // Replace with actual image URL
      },
      {
        name: 'Peter Kagwe',
        role: 'Developer',
        image: 'https://via.placeholder.com/150', // Replace with actual image URL
      },
      {
        name: 'Emily Davis',
        role: 'Designer',
        image: 'https://via.placeholder.com/150', // Replace with actual image URL
      }, ],
};

export const section9Content = {
  title: "Get Involved!",

};

export const section10Content = {
  subtitle:"Connect with us on [Discord] to stay updated, share your feedback, and participate in the StarkDice community.",
  SOCIALS: [
    { name: "Telegram", image: TelegramImage },
    { name: "Discord", image: DiscordImage },
    { name: "Reddit", image: RedditImage },
    { name: "Twitter", image: TwitterImage },
  ],
};

export const Section11Content = {
  title: "Contact Us",

};

export const footerContent = {

  subscribe: {
    title: "Subscribe to StarkDice newsletter",
    subtitle: "Get the latest news and updates",
  },
  socials: [
    { icon: BookIcon },
    { icon: RedditIcon },
    { icon: TwitterIcon },
    { icon: ChatIcon },
    { icon: TelegramIcon },
    { icon: GitHubIcon },
  ],
  copyright: {
    left: "© 2023 StarkDice, All Rights Reserved.",
    center: "starkdice.stark",
    right: "STD",
  },
};

export const navbarContent = {
  Logo,
};
