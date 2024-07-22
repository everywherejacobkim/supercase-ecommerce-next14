import LogoText from "@/components/blocks/LogoText";
import IconCard from "@/components/cards/IconCard";
import React from "react";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import Logo from "@/components/blocks/Logo";
import { Typography } from "@mui/material";
import handImage from "@/assets/images/hand-onboarding.png";
import arrowImage from "@/assets/images/arrow-image.png";
import Image from "next/image";
import BasicButton from "@/components/buttons/BasicButton";

type Props = {};

const OnBoarding = (props: Props) => {
  return (
    <div className="flex h-[100vh]">
      <div className="w-1/3 px-8 py-6 flex flex-col gap-5 bg-slate-300/30">
        <LogoText />
        <h1 className="text-xl text-gray-700 font-semibold font-sans mt-5 ml-5">
          Why Choose Super Case?
        </h1>
        <div className="flex flex-col gap-4 ml-5">
          <IconCard
            title="Customization"
            desc="Personalize your phone case with your own images, artwork, or text. Our easy-to-use design tool lets you create a case that is truly yours."
            Icon={FaceRetouchingNaturalIcon}
            className="animate-fade-left animate-ease-linear"
          />
          <IconCard
            title="Quality Materials"
            desc="We use high-quality materials to ensure durability and protection for your phone. Our cases are not only stylish but also designed to safeguard your device from everyday wear and tear."
            Icon={ThumbUpOffAltIcon}
            className="animate-fade-left animate-ease-linear animate-delay-[1000ms]"
          />
          <IconCard
            title="Customer Satisfaction"
            desc="Your satisfaction is our priority. Our dedicated customer support team is here to assist you every step of the way, from designing your case to answering any questions you may have."
            Icon={SentimentVerySatisfiedIcon}
            className="animate-fade-left animate-ease-linear animate-delay-[2000ms]"
          />
        </div>
      </div>
      <div className="w-2/3 flex justify-center">
        <div className="flex flex-col justify-center items-center gap-2">
          <Typography
            variant="h4"
            gutterBottom
            className="font-semibold text-gray-700"
          >
            Welcome to Super Case!
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            align="justify"
            className="text-gray-600 w-[60%]"
          >
            At Super Case, we believe your phone case should be as unique as you
            are. Our mission is to bring your creativity to life through
            custom-designed phone cases that reflect your personality and style.
            Whether you're looking to showcase your favorite memories, express
            your artistic side, or simply protect your device in style, we've
            got you covered.
          </Typography>
          <div className="relative flex ml-20 -mt-8">
            <Image src={handImage} alt="hand-image" width={500} height={500} />
            <div className="absolute -bottom-6 left-6 -rotate-45">
              <Image
                src={arrowImage}
                alt="arrow-image"
                width={200}
                height={200}
              />
            </div>
            <div className="absolute -left-24 bottom-14 animate-wiggle animate-delay-[3s] animate-ease-out">
              <Typography gutterBottom className="font-hand text-[28px]">
                Customize your style
              </Typography>
            </div>
          </div>
          <div className="mt-16">
            <BasicButton
              text={"Get Started Today!"}
              href="/dashboard"
              variant="contained"
              color="warning"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnBoarding;
