import * as React from "react";
import Link from "next/link"; // Import Link from next/link
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

interface BasicButtonProps {
  text: string;
  href: string;
}

const BasicButton: React.FC<BasicButtonProps> = ({ text, href }) => (
  <Stack spacing={2} direction="row">
    <Link href={href} passHref>
      {" "}
      <Button
        variant="contained"
        color="warning"
        size="large"
        sx={{ padding: "12px 60px" }}
      >
        {text}
      </Button>
    </Link>
  </Stack>
);

export default BasicButton;
