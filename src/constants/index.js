import price1 from "../assets/price1.png";
import price2 from "../assets/price2.png";
import price3 from "../assets/price3.png";
import price4 from "../assets/price4.png";
import bitcoin from "../assets/bitcoin.png";
import ethereum from "../assets/ethereum.png";
import ggcoin from "../assets/ggcoin.png";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import {
  RiGoogleFill,
  RiAppleFill,
  RiAmazonFill,
  RiBitCoinFill,
} from "react-icons/ri";

import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";

export const PricesData = [
  {
    name: "Bitcoin",
    image: bitcoin,
    short: "BTC",
    price: "$33,592.99",
    change: "+4.3%",
    marketCap: "$635.14B",
    chart: price1,
  },
  {
    name: "Ethereum",
    image: ethereum,
    short: "ETH",
    price: "$2,273.19",
    change: "+2.1%",
    marketCap: "$267.12B",
    chart: price2,
  },
  {
    name: "GGCoin",
    image: ggcoin,
    short: "GGC",
    price: "$349.47",
    change: "-7.9%",
    marketCap: "$57.16B",
    chart: price3,
  },
  {
    name: "Bitcoin",
    image: bitcoin,
    short: "BTC",
    price: "$0.9434",
    change: "0.0%",
    marketCap: "$27.12B",
    chart: price4,
  },
];

export const servicesData = [
  {
    image: service1,
    title: "Manage your portfolio",
    description:
      "Coinbase supports a variety of the most popular digital currencies.",
  },
  {
    image: service2,
    title: "Recurring buys",
    description:
      "Coinbase supports a variety of the most popular digital currencies.",
  },
  {
    image: service3,
    title: "Mobile apps",
    description:
      "Coinbase supports a variety of the most popular digital currencies.",
  },
];

export const roadMapData = [
  {
    date: "July 2012",
    name: "Google",
    description:
      "Let's say you invested $1,000 right before the 2008 crash and left your money there. Price for Vanguard 500 Index Fund Admiral Shares $143 (VFIAX), highest ever. Dropped to $68 in 2009. Current price $430.52.",
    icon: <RiGoogleFill />,
  },
  {
    date: "July 2014",
    name: "Apple",
    description:
      "Assume you invested $1,000 in Apple, the stock price has never been higher at this point in time at $9.05. Current price $173.07.",
    icon: <RiAppleFill />,
  },
  {
    date: "July 2018",
    name: "Amazon",
    description:
      "Assume you invested $1,000 in a Tech Vanguard ETF at a $52 cost (VITAX). Current price $221.94",
    icon: <RiAmazonFill />,
  },
  {
    date: "July 2022",
    name: "Bitcoin",
    description:
      "Assume you invested $1,000 in Bitcoin. Price for one Bitcoin was $17,098, later it dropped to $3,500 per Bitcoin before bouncing to over $60,000 in 2021. Current price over $42,629.",
    icon: <RiBitCoinFill />,
  },
  {
    date: "July 2012",
    name: "Google",
    description:
      "Let's say you invested $1,000 right before the 2008 crash and left your money there. Price for Vanguard 500 Index Fund Admiral Shares $143 (VFIAX), highest ever. Dropped to $68 in 2009. Current price $430.52.",
    icon: <RiGoogleFill />,
  },
  {
    date: "July 2014",
    name: "Apple",
    description:
      "Assume you invested $1,000 in Apple, the stock price has never been higher at this point in time at $9.05. Current price $173.07.",
    icon: <RiAppleFill />,
  },
  {
    date: "July 2018",
    name: "Amazon",
    description:
      "Assume you invested $1,000 in a Tech Vanguard ETF at a $52 cost (VITAX). Current price $221.94",
    icon: <RiAmazonFill />,
  },
  {
    date: "July 2022",
    name: "Bitcoin",
    description:
      "Assume you invested $1,000 in Bitcoin. Price for one Bitcoin was $17,098, later it dropped to $3,500 per Bitcoin before bouncing to over $60,000 in 2021. Current price over $42,629.",
    icon: <RiBitCoinFill />,
  },
];

export const companyLinks = [
  "About",
  "Careers",
  "Affiliates",
  "Blog",
  "Press",
  "Investors",
  "Legal & Privacy",
  "Cookie policy",
  "Cookie preferences",
];

export const LearnLinks = [
  "Browse crypto prices",
  "Coinbase Bytes newsletter",
  "Crypto basics",
  "Tips & Tutorials",
  "Market Updates",
  "What is Bitcoin?",
  "What is crypto?",
  "What is a blockchain?",
  "How to set up a crypto waller",
  "How to send crypto",
];
export const socialIcons = [<BsFacebook />, <BsTwitter />, <BsYoutube />];
