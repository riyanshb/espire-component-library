import "@mui/material/styles"
import "@mui/material/Typography"

declare module '@mui/material/styles' {
  interface TypographyVariants {
    header: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    header?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    header: true;
  }
}
