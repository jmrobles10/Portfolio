import { Stack, Typography } from "@mui/material";
import { ReactElement } from 'react';

interface TechnologySectionProps {
    icon: ReactElement;
    title: string;
    technologies: string;
}

const TechnologySection = ({ icon, title, technologies }: TechnologySectionProps) => {
    const fontFamily = 'Inter, sans-serif';
    return (
        <Stack direction={'column'} spacing={2} flex={1}>
            {icon}
            <Typography fontFamily={fontFamily} fontSize={{ xs: '1.5rem', xl: '2rem' }} color={'#fff'}>
                {title}
            </Typography>
            <Typography fontFamily={fontFamily} fontSize={{ xs: '1.2rem', xl: '1.3rem' }} color={'rgb(211, 211, 211)'}
                noWrap
            >
                {technologies}
            </Typography>
        </Stack>
    )
}

export default TechnologySection