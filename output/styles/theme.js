const theme = {
  fontWeights: {
    thin: 100,
    extraLight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },
  colors: {
    baseBlack: "hsl(0, 100%, 50%)",
    baseWhite: "hsl(0, 0%, 100%)",
    danger100: "hsl(0, 93%, 94%)",
    danger200: "hsl(0, 96%, 89%)",
    danger300: "hsl(0, 94%, 82%)",
    danger400: "hsl(0, 91%, 71%)",
    danger50: "hsl(0, 86%, 97%)",
    danger500: "hsl(0, 84%, 60%)",
    danger600: "hsl(0, 72%, 51%)",
    danger700: "hsl(0, 74%, 42%)",
    danger800: "hsl(0, 70%, 35%)",
    danger900: "hsl(0, 63%, 31%)",
    informative100: "hsl(214, 95%, 93%)",
    informative200: "hsl(213, 97%, 87%)",
    informative300: "hsl(212, 96%, 78%)",
    informative400: "hsl(213, 94%, 68%)",
    informative50: "hsl(214, 100%, 97%)",
    informative500: "hsl(217, 91%, 60%)",
    informative600: "hsl(221, 83%, 53%)",
    informative700: "hsl(224, 76%, 48%)",
    informative800: "hsl(226, 71%, 40%)",
    informative900: "hsl(224, 64%, 33%)",
    neutral100: "hsl(210, 40%, 96%)",
    neutral200: "hsl(214, 32%, 91%)",
    neutral300: "hsl(213, 27%, 84%)",
    neutral400: "hsl(215, 20%, 65%)",
    neutral50: "hsl(210, 40%, 98%)",
    neutral500: "hsl(215, 16%, 47%)",
    neutral600: "hsl(215, 19%, 35%)",
    neutral700: "hsl(215, 25%, 27%)",
    neutral800: "hsl(217, 33%, 17%)",
    neutral900: "hsl(222, 47%, 11%)",
    primary100: "hsl(251, 91%, 95%)",
    primary200: "hsl(251, 95%, 92%)",
    primary300: "hsl(252, 95%, 85%)",
    primary400: "hsl(255, 92%, 76%)",
    primary50: "hsl(250, 100%, 98%)",
    primary500: "hsl(258, 90%, 66%)",
    primary600: "hsl(262, 83%, 58%)",
    primary700: "hsl(263, 70%, 50%)",
    primary800: "hsl(263, 69%, 42%)",
    primary900: "hsl(264, 67%, 35%)",
    success100: "hsl(141, 84%, 93%)",
    success200: "hsl(141, 79%, 85%)",
    success300: "hsl(142, 77%, 73%)",
    success400: "hsl(142, 69%, 58%)",
    success50: "hsl(138, 76%, 97%)",
    success500: "hsl(142, 71%, 45%)",
    success600: "hsl(142, 76%, 36%)",
    success700: "hsl(142, 72%, 29%)",
    success800: "hsl(143, 64%, 24%)",
    success900: "hsl(144, 61%, 20%)",
    warning100: "hsl(48, 96%, 89%)",
    warning200: "hsl(48, 97%, 77%)",
    warning300: "hsl(46, 97%, 65%)",
    warning400: "hsl(43, 96%, 56%)",
    warning50: "hsl(48, 100%, 96%)",
    warning500: "hsl(38, 92%, 50%)",
    warning600: "hsl(32, 95%, 44%)",
    warning700: "hsl(26, 90%, 37%)",
    warning800: "hsl(23, 83%, 31%)",
    warning900: "hsl(22, 78%, 26%)",
  },
  fontSizes: ["0.75rem", "0.875rem", "1.125rem", "1.5rem", "2rem"],
  lineHeights: {
    bodyL: "20px",
    bodyM: "20px",
    bodyS: "20px",
    section: "20px",
    heading2: "32px",
    subtitle: "32px",
    heading1: "40px",
  },
  letterSpacings: { section: "0.5px" },
  fonts: {
    interMedium: "Inter-Medium",
    interRegular: "Inter-Regular",
    interSemiBold: "Inter-SemiBold",
  },
  text: {
    bodyL: {
      fontFamily: "interSemiBold",
      lineHeight: "section",
      fontSize: 1,
      fontWeight: "semiBold",
      textAlign: "left",
      verticalAlign: "top",
    },
    bodyM: {
      fontFamily: "interMedium",
      lineHeight: "section",
      fontSize: 1,
      fontWeight: "medium",
      textAlign: "left",
      verticalAlign: "top",
    },
    bodyS: {
      fontFamily: "interRegular",
      lineHeight: "section",
      fontSize: 1,
      fontWeight: "normal",
      textAlign: "left",
      verticalAlign: "top",
    },
    heading1: {
      fontFamily: "interSemiBold",
      lineHeight: "heading1",
      fontSize: 4,
      fontWeight: "semiBold",
      textAlign: "left",
      verticalAlign: "top",
    },
    heading2: {
      fontFamily: "interSemiBold",
      lineHeight: "subtitle",
      fontSize: 3,
      fontWeight: "semiBold",
      textAlign: "left",
      verticalAlign: "top",
    },
    section: {
      fontFamily: "interSemiBold",
      textTransform: "uppercase",
      letterSpacing: "section",
      lineHeight: "section",
      fontSize: 0,
      fontWeight: "semiBold",
      textAlign: "left",
      verticalAlign: "top",
    },
    subtitle: {
      fontFamily: "interMedium",
      lineHeight: "subtitle",
      fontSize: 2,
      fontWeight: "medium",
      textAlign: "left",
      verticalAlign: "top",
    },
  },
};

export default theme;
