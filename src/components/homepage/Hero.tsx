import { ThemeBtn } from '@/pages/_app'
import { Box, Typography, useTheme } from '@mui/material'

export default function Hero() {
  const theme = useTheme()

  return (
    <Box mb={5} height={['500px', '400px']} bgcolor='background.default'>
      <Box
        display={['flex']}
        flexDirection={['column', 'column', 'row']}
        height='100%'
      >
        <Box
          display={'flex'}
          flexDirection={['column', 'column']}
          width={['100%', '100%', '50%', '40%']}
          justifyContent={'center'}
        >
          <Typography
            marginTop={'34px'}
            color='text.primary'
            fontSize={['2.4rem', '40px', '48px']}
            fontWeight={'bold'}
            variant='h1'
            maxWidth={'21rem'}
            marginBottom={'24px'}
          >
            Saiba tudo em um só
            <span style={{ color: '#11B0C8' }}> lugar.</span>
          </Typography>

          <Typography
            color='text.primary'
            fontSize={['0.85rem', '1rem']}
            maxWidth={['17rem', '33rem']}
            lineHeight={1.4}
            fontWeight={'regular'}
            variant='h1'
            marginBottom={'54px'}
          >
            Personagens, localizações, episódios e muito mais.
          </Typography>

          <ThemeBtn />
        </Box>

        <Box
          sx={{
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundImage: `url(${
              theme.palette.mode === 'dark'
                ? '/homeimages/heroImage.png'
                : '/homeimages/herolightimage.png'
            })`,
          }}
          height='100%'
          m='auto'
          marginTop={['8px', '0']}
          width={['100%', '100%', '60%', '60%']}
        ></Box>
      </Box>
    </Box>
  )
}
