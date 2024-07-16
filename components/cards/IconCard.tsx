import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { SvgIconProps } from "@mui/material/SvgIcon";

interface IconCardProps {
  title: string;
  desc: string;
  Icon: React.ComponentType<SvgIconProps>;
}

const IconCard: React.FC<IconCardProps> = ({ title, desc, Icon }) => (
  <Card sx={{ minWidth: 275, borderRadius: 2 }}>
    <CardContent>
      <div className="flex gap-2 items-center">
        <Icon />
        <Typography variant="h6" component="div">
          {title}
        </Typography>
      </div>
      <Typography sx={{ mt: 1, ml: 0.7}} color="text.secondary">
        {desc}
      </Typography>
    </CardContent>
  </Card>
);

export default IconCard;
