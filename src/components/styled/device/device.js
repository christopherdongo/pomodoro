const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    mobilex: '460.99px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    mobilex: `(max-width: ${size.mobilex})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    tablet: `(max-width: ${size.tablet})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
  };