const size = {
  extraSmallDevices: "350px",
  smallDevices: "576px",
  mediumDevices: "768px",
  largeDevices: "992px",
  extraLargeDevices: "1200px",
};

export const device = {
  extraSmallDevices: `(min-width: ${size.extraSmallDevices})`,
  smallDevices: `(min-width: ${size.smallDevices})`,
  mediumDevices: `(min-width: ${size.mediumDevices})`,
  largeDevices: `(min-width: ${size.largeDevices})`,
  extraLargeDevices: `(min-width: ${size.extraLargeDevices})`,
};
