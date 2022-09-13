import { extendTheme } from "native-base";

export const theme = extendTheme({
  fontConfig: {
    GTWalsheimPro: {
      400: {
        normal: "GTWalsheimPro-Regular",
      },
      500: {
        normal: "GTWalsheimPro-Bold",
      },
      700: {
        normal: "GTWalsheimPro-Bold",
      },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: "GTWalsheimPro",
    body: "GTWalsheimPro",
  },
  // components: {
  //   Button: {
  //     variants: {
  //       black: {
  //         backgroundColor: "#000",
  //         color: "#fff",
  //       },
  //       white: {
  //         backgroundColor: "#fff",
  //         color: "#000",
  //       },
  //     },
  //   },
  // },
});
