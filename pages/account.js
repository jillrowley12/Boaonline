import { useCallback } from "react";
import { useRouter } from "next/router";

const Account = () => {
  const router = useRouter();

  const onFrameButton3Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onButtonClick = useCallback(() => {
    router.push("/main");
  }, [router]);

  const onButton1Click = useCallback(() => {
    router.push("/travel-reward");
  }, [router]);

  const onButton2Click = useCallback(() => {
    router.push("/cash-reward");
  }, [router]);

  return (
    <div className="w-full relative bg-wwwbankofamericacom-nero overflow-y-auto flex flex-col items-start justify-start text-center text-lg text-wwwbankofamericacom-lochmara font-wwwbankofamericacom-inter-regular-966">
      <div className="self-stretch flex flex-row items-start justify-between p-2.5">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-start">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/frame.svg"
          />
          <div className="relative text-sm font-wwwbankofamericacom-inter-regular-966 text-staticwebbankofamericacom-cod-gray text-left">
            Menu
          </div>
        </button>
        <div className="flex flex-row items-start justify-end gap-[9px]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-start">
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/frame1.svg"
            />
            <div className="relative text-sm font-wwwbankofamericacom-inter-regular-966 text-staticwebbankofamericacom-cod-gray text-left">
              Inbox
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-start">
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/frame2.svg"
            />
            <div className="relative text-sm font-wwwbankofamericacom-inter-regular-966 text-staticwebbankofamericacom-cod-gray text-left">
              Products
            </div>
          </button>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-start"
            onClick={onFrameButton3Click}
          >
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/frame3.svg"
            />
            <div className="relative text-sm font-wwwbankofamericacom-inter-regular-966 text-staticwebbankofamericacom-cod-gray text-left">
              Log out
            </div>
          </button>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-2 px-0 pb-0">
        <div className="self-stretch flex flex-col items-start justify-start gap-[18px]">
          <div className="self-stretch flex flex-row items-center justify-center py-0 px-2.5 gap-[4px]">
            <input
              className="[border:none] [outline:none] font-semibold font-wwwbankofamericacom-inter-regular-966 text-lg bg-gainsboro-100 flex-1 rounded-xl overflow-hidden flex flex-row items-center justify-start py-[17px] px-2.5 text-wwwbankofamericacom-scorpion"
              placeholder="Hello can we help?"
              type="search"
              height="48px"
            />
            <div className="w-[53px] rounded-81xl bg-wwwbankofamericacom-crimson h-[53px] overflow-hidden shrink-0 flex flex-row items-center justify-center p-2.5 box-border">
              <img
                className="w-[41px] relative h-[41px]"
                alt=""
                src="/svg19.svg"
              />
            </div>
          </div>
          <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-wwwbankofamericacom-nero overflow-hidden flex flex-col items-start justify-center pt-[5px] px-5 pb-[17px] gap-[10px]">
            <div className="self-stretch flex flex-row items-center justify-start pt-0 px-0 pb-[5px] text-xl">
              <div className="flex-1 flex flex-row items-start justify-start pt-2.5 px-0 pb-3.5 border-b-[1px] border-solid border-gainsboro-200">
                <div className="flex-1 flex flex-row items-start justify-start">
                  <b className="relative leading-[28px]">
                    Welcome Jafyson Limited
                  </b>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="flex-1 box-border h-20 flex flex-row items-start justify-start py-2.5 px-0 gap-[10px] border-b-[1px] border-solid border-gainsboro-200">
                <img
                  className="w-9 relative h-9 overflow-hidden shrink-0"
                  alt=""
                  src="/frame4.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
                  <div className="relative leading-[28px] font-semibold">
                    Bank of America Life Plan
                  </div>
                  <div className="self-stretch relative text-base leading-[20px] text-wwwbankofamericacom-black text-left">
                    Turn your dreams into action plan
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="flex-1 h-20 flex flex-row items-start justify-center py-2.5 px-0 box-border gap-[10px]">
                <img
                  className="w-9 relative h-9 overflow-hidden shrink-0"
                  alt=""
                  src="/frame5.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
                  <div className="relative leading-[28px] font-semibold">
                    My rewards
                  </div>
                  <div className="self-stretch relative text-base leading-[20px] text-wwwbankofamericacom-black text-left">
                    Platinum Rewards Menmber
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-left text-3xl text-wwwbankofamericacom-nero font-wwwbankofamericacom-arial-bold-16">
            <div className="self-stretch rounded-t-3xs rounded-b-none bg-staticwebbankofamericacom-monza flex flex-col items-start justify-start py-2.5 px-0 border-t-[0.8px] border-solid border-staticwebbankofamericacom-linear-carmine-stratos border-b-[0.8px]">
              <div className="w-[430.4px] overflow-hidden flex flex-row items-start justify-center py-0 pr-2.5 pl-[15px] box-border">
                <b className="flex-1 relative leading-[42px] [text-shadow:0px_1px_0px_rgba(0,_0,_0,_0.1)]">
                  Bank of America
                </b>
              </div>
            </div>
            <div className="self-stretch bg-wwwbankofamericacom-nero overflow-hidden flex flex-col items-start justify-center py-[17px] px-5 gap-[10px] text-base text-wwwbankofamericacom-black font-wwwbankofamericacom-inter-regular-966">
              <div className="self-stretch flex-1 flex flex-row items-start justify-between py-2.5 px-0 border-b-[1px] border-solid border-gainsboro-200">
                <div className="flex-1 flex flex-col items-center justify-start gap-[10px]">
                  <div className="self-stretch relative leading-[20px]">
                    Adv Plus Banking - 5403
                  </div>
                  <div className="self-stretch relative text-3xl leading-[28px] font-semibold text-wwwbankofamericacom-scorpion">
                    $391,023.80
                  </div>
                </div>
                <button
                  className="cursor-pointer [border:none] py-2.5 px-5 bg-whitesmoke-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-8xs overflow-hidden flex flex-row items-center justify-center"
                  onClick={onButtonClick}
                >
                  <b className="relative text-base leading-[20px] font-wwwbankofamericacom-inter-regular-966 text-darkslateblue text-left">
                    VIEW
                  </b>
                </button>
              </div>
              <div className="self-stretch flex-1 flex flex-row items-start justify-between py-2.5 px-0 border-b-[1px] border-solid border-gainsboro-200">
                <div className="flex-1 flex flex-col items-center justify-start gap-[10px]">
                  <div className="self-stretch relative leading-[20px]">
                    Bank of America Travel Rewards Visa Signature - 0349
                  </div>
                  <div className="self-stretch relative text-3xl leading-[28px] font-semibold text-wwwbankofamericacom-scorpion">
                    $139.20
                  </div>
                </div>
                <button
                  className="cursor-pointer [border:none] py-2.5 px-5 bg-whitesmoke-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-8xs overflow-hidden flex flex-row items-center justify-center"
                  onClick={onButton1Click}
                >
                  <b className="relative text-base leading-[20px] font-wwwbankofamericacom-inter-regular-966 text-darkslateblue text-left">
                    VIEW
                  </b>
                </button>
              </div>
              <div className="self-stretch flex-1 flex flex-row items-start justify-between py-2.5 px-0">
                <div className="flex-1 flex flex-col items-center justify-start gap-[10px]">
                  <div className="self-stretch relative leading-[20px]">
                    Customized Cash Rewards Visa Signature - 6778
                  </div>
                  <div className="self-stretch relative text-3xl leading-[28px] font-semibold text-wwwbankofamericacom-scorpion">
                    $138.20
                  </div>
                </div>
                <button
                  className="cursor-pointer [border:none] py-2.5 px-5 bg-whitesmoke-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-8xs overflow-hidden flex flex-row items-center justify-center"
                  onClick={onButton2Click}
                >
                  <b className="relative text-base leading-[20px] font-wwwbankofamericacom-inter-regular-966 text-darkslateblue text-left">
                    VIEW
                  </b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
