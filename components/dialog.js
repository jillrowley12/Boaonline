import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const Dialog = ({ className = "", onClose }) => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/login");
  }, [router]);

  return (
    <div
      className={`w-80 flex flex-col items-start justify-start p-2.5 box-border max-w-[408.8800048828125px] max-h-[503.20001220703125px] overflow-auto text-left text-[16.5px] text-wwwbankofamericacom-black font-wwwbankofamericacom-roboto-regular-14-underline ${className}`}
    >
      <div className="self-stretch bg-wwwbankofamericacom-nero overflow-hidden flex flex-col items-start justify-start relative max-h-[503.20001220703125px]">
        <div className="self-stretch relative h-5 z-[0]" />
        <div className="self-stretch flex flex-col items-center justify-start pt-2.5 px-[25px] pb-[30px] z-[1]">
          <div className="self-stretch overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-2.5 box-border gap-[7px] max-h-[352.239990234375px]">
            <img
              className="w-[250px] relative h-10 overflow-hidden shrink-0"
              alt=""
              src="/assetsimagessitehomepageiconsget-app-interstitial-iconcsxbef49635svg.svg"
            />
            <div className="w-[250px] flex flex-col items-center justify-start pt-0 px-[30.3px] pb-[5px] box-border text-center font-wwwbankofamericacom-inter-regular-966">
              <div className="relative leading-[28px] font-light">
                <p className="m-0">Do more with the Mobile</p>
                <p className="m-0">Banking app</p>
              </div>
            </div>
            <div className="w-[232.4px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border text-base text-wwwbankofamericacom-tundora">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2.5">
                <div className="self-stretch relative leading-[18px]">
                  Set customizable alerts
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2.5">
                <div className="self-stretch relative leading-[18px]">
                  <p className="m-0">Snap a photo to deposit a check,</p>
                  <p className="m-0">and get instant confirmation</p>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2.5">
                <div className="self-stretch relative leading-[18px]">
                  <p className="m-0">Use your fingerprint or Face ID for</p>
                  <p className="m-0">quicker access on the go</p>
                </div>
              </div>
            </div>
            <div className="w-[250px] flex flex-row items-start justify-center max-w-[1296px] text-sm text-wwwbankofamericacom-mine-shaft">
              <img
                className="w-[20.8px] relative h-px"
                alt=""
                src="/container.svg"
              />
              <div className="w-[229.2px] flex flex-col items-start justify-start pt-[1.3px] px-0 pb-[1.7px] box-border gap-[3px]">
                <div className="relative leading-[15px]">
                  Your activities are protected by industry-
                </div>
                <div className="relative leading-[15px]">
                  leading security features
                </div>
              </div>
            </div>
          </div>
          <button
            className="cursor-pointer [border:none] py-2.5 px-10 bg-wwwbankofamericacom-science-blue flex flex-col items-center justify-center"
            onClick={onButtonClick}
          >
            <div className="relative text-[17.7px] leading-[20px] font-wwwbankofamericacom-inter-regular-966 text-wwwbankofamericacom-nero text-center">
              Continue to login
            </div>
          </button>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] !m-[0] absolute top-[14px] left-[270px] overflow-hidden flex flex-col items-center justify-center z-[2]"
          onClick={onClose}
        >
          <div className="relative text-[40px] leading-[18px] font-wwwbankofamericacom-roboto-regular-14-underline text-wwwbankofamericacom-mine-shaft text-left">
            ×
          </div>
        </button>
      </div>
    </div>
  );
};

Dialog.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default Dialog;
