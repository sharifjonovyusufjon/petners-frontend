import useDeviceDetect from "../hooks/useDeviceDetect";

const Top = () => {
  const device = useDeviceDetect();
  if (device == "mobile") {
    return <div>Top Component - Mobile</div>;
  } else {
    return <div>Top Component - Desktop</div>;
  }
};

export default Top;
