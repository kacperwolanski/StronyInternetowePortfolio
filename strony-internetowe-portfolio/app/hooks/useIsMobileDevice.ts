import { useEffect, useState } from "react";
import { mobileDeviceBreakpointPx } from "../appContacts";

const useIsMobileDevice = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      if (window.innerWidth <= mobileDeviceBreakpointPx) {
        setIsMobileDevice(true);
      } else {
        setIsMobileDevice(false);
      }
    };

    checkScreenWidth();

    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  return isMobileDevice;
};

export default useIsMobileDevice;
