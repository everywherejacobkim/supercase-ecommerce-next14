"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

type Props = {};

const STEPS = [
  {
    name: "Upload an image",
    url: "dashboard/upload",
  },
  {
    name: "Customize your case",
    url: "dashboard/customize",
  },
  {
    name: "Review your design",
    url: "dashboard/preview",
  },
];

const StepBar = (props: Props) => {
  const pathname = usePathname();

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={1} alternativeLabel>
        {STEPS.map((step, index) => {
          const isActive = pathname === step.url;
          return (
            <Step key={index}>
              <StepLabel>
                <p className="text-lg font-hand font-semibold">{step.name}</p>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
};

export default StepBar;
