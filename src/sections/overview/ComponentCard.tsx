import { m } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Link, Paper, Typography, CardActionArea } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionInView, varFade, varHover, varTranHover } from '../../components/animate';

// ----------------------------------------------------------------------

type Props = {
  item: {
    name: string;
    icon: string;
    href: string;
  };
};

export default function ComponentCard({ item }: Props) {
  const { name, icon, href } = item;

  return (
    <MotionInView variants={varFade().inUp}>
      <Link component={RouterLink} to={href} underline="none">
        <Paper variant="outlined" sx={{ p: 1 }}>
          <CardActionArea
            component={m.div}
            whileHover="hover"
            sx={{
              p: 3,
              borderRadius: 1,
              color: 'primary.main',
              bgcolor: 'background.neutral',
            }}
          >
            <m.div variants={varHover(1.2)} transition={varTranHover()}>
              <Image src={icon} alt={name} effect="black-and-white" />
            </m.div>
          </CardActionArea>

          <Typography variant="subtitle2" sx={{ mt: 1, p: 1 }}>
            {name}
          </Typography>
        </Paper>
      </Link>
    </MotionInView>
  );
}
