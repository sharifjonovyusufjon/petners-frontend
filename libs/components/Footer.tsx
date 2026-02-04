import useDeviceDetect from "../hooks/useDeviceDetect";

const Footer = () => {
  const device = useDeviceDetect();
  if (device == "mobile") {
    return <div>Footer Component - Mobile</div>;
  } else {
    return <div>Footer Component - Desktop</div>;
  }
};

export default Footer;
