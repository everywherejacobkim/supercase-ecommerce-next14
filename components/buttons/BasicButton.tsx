import * as React from "react";
import Link from "next/link"; // Import Link from next/link
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

interface BasicButtonProps {
  text: string;
  href?: string;
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "warning" | "info" | "success" | "error";
}

const BasicButton: React.FC<BasicButtonProps> = ({
  text,
  href,
  variant,
  color,
}) => (
  <Stack spacing={2} direction="row">
    {href ? (
      <Link href={href} passHref>
        {" "}
        <Button
          variant={variant}
          color={color}
          size="large"
          sx={{ padding: "12px 60px" }}
        >
          {text}
        </Button>
      </Link>
    ) : (
      <Button
        variant={variant}
        color={color}
        size="large"
        sx={{ padding: "12px 48px" }}
      >
        {text}
      </Button>
    )}
  </Stack>
);

export default BasicButton;
