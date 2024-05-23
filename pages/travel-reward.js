import { useCallback } from "react";
import { useRouter } from "next/router";

const TravelReward = () => {
  const router = useRouter();

  const onFrameButton3Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onFrameContainerClick = useCallback(() => {
    router.push("/account");
  }, [router]);

  return (
    <div className="w-full relative bg-wwwbankofamericacom-nero overflow-y-auto flex flex-col items-start justify-start text-left text-sm text-wwwbankofamericacom-nero font-wwwbankofamericacom-arial-bold-16">
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
        <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
          <div className="self-stretch flex flex-row items-center justify-center py-0 px-2.5 gap-[4px]">
            <div
              className="flex flex-row items-center justify-center py-0 pr-2.5 pl-0 cursor-pointer"
              onClick={onFrameContainerClick}
            >
              <img
                className="w-[34px] relative h-[34px]"
                alt=""
                src="/vector.svg"
              />
            </div>
            <input
              className="[border:none] [outline:none] font-semibold font-wwwbankofamericacom-inter-regular-966 text-xl bg-gainsboro-100 flex-1 rounded-xl overflow-hidden flex flex-row items-center justify-start py-[17px] px-2.5 text-wwwbankofamericacom-scorpion"
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
          <div className="self-stretch rounded-8xs bg-whitesmoke-300 overflow-hidden flex flex-col items-start justify-center pt-[5px] px-5 pb-[17px] text-base text-wwwbankofamericacom-black font-wwwbankofamericacom-inter-regular-966">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="flex-1 flex flex-row items-start justify-start py-2.5 px-0">
                <div className="flex-1 flex flex-col items-center justify-start gap-[10px]">
                  <div className="self-stretch relative leading-[20px]">
                    Bank of America Travel Rewards Visa Signature - 0349
                  </div>
                  <div className="self-stretch relative text-5xl leading-[28px] font-semibold text-wwwbankofamericacom-scorpion">
                    $139.20
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start py-0 pr-2.5 pl-[15px] gap-[14px] text-wwwbankofamericacom-mine-shaft">
            <div className="flex flex-row items-center justify-start gap-[28px]">
              <b className="relative leading-[26px]">All Transaction</b>
              <div className="w-8 [background:linear-gradient(180deg,_#fff,_rgba(224,_234,_242,_0))] box-border h-8 overflow-hidden shrink-0 flex flex-col items-center justify-center py-[15px] px-3 border-[1px] border-solid border-gainsboro-300">
                <img
                  className="w-5 relative h-[15px]"
                  alt=""
                  src="/polygon-1.svg"
                />
              </div>
            </div>
            <b className="relative leading-[26px] text-steelblue">{`View Spending & Budgeting`}</b>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
            <div className="self-stretch [background:linear-gradient(180deg,_#6a6a6a_30.83%,_rgba(0,_0,_0,_0.63))] flex flex-row items-center justify-start p-2.5 gap-[20px]">
              <b className="relative leading-[26px]">
                Statement as of 05/08/2024
              </b>
              <div className="flex flex-row items-center justify-start gap-[4px] text-base">
                <b className="relative leading-[26px]">{`(view statements) `}</b>
                <img
                  className="w-[15px] relative h-[15px] overflow-hidden shrink-0"
                  alt=""
                  src="/frame6.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-base text-www-bankofamerica-com-1519199951171875x6432000122070312-default-dove-gray font-wwwbankofamericacom-roboto-regular-14-underline">
              <div className="self-stretch bg-wwwbankofamericacom-nero overflow-hidden flex flex-col items-start justify-center py-[17px] px-5 gap-[10px]">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch bg-whitesmoke-100 flex flex-col items-start justify-start p-2.5 gap-[10px] border-t-[1px] border-solid border-gainsboro-200 border-b-[1px]">
                    <div className="flex flex-row items-center justify-start gap-[6px] max-w-[120px]">
                      <div className="rounded [background:linear-gradient(175.91deg,_#fff,_#f0f5f7)] overflow-hidden flex flex-row items-center justify-center p-1 border-[1px] border-solid border-dimgray">
                        <img
                          className="w-[7px] relative h-[7px]"
                          alt=""
                          src="/vector1.svg"
                        />
                      </div>
                      <div className="w-[86px] relative leading-[26px] flex items-center shrink-0">
                        05/21/2024
                      </div>
                    </div>
                    <div className="self-stretch relative leading-[26px] text-steelblue">
                      Chase DES:$TRANSFER ID: XXXXXX9876 INON: Construction!
                      CO...
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-between">
                      <div className="w-[69px] flex flex-row items-center justify-center max-w-[69px]">
                        <img
                          className="w-[12.8px] relative h-[17.3px] object-contain"
                          alt=""
                          src="/group@2x.png"
                        />
                      </div>
                      <div className="w-[26px] [background:linear-gradient(180deg,_#fff,_rgba(224,_234,_242,_0))] box-border h-[26px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[7.7px] px-[6.1px] text-sm font-wwwbankofamericacom-arial-bold-16 border-[0.5px] border-solid border-gainsboro-300">
                        <b className="relative leading-[26px]">F</b>
                      </div>
                      <div className="relative leading-[26px]">
                        -$995,000.00
                      </div>
                      <div className="relative leading-[26px] text-right">
                        $375,123.80
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch bg-whitesmoke-100 flex flex-col items-start justify-start p-2.5 gap-[10px] border-t-[1px] border-solid border-gainsboro-200 border-b-[1px]">
                    <div className="flex flex-row items-center justify-start gap-[6px] max-w-[120px]">
                      <div className="rounded [background:linear-gradient(175.91deg,_#fff,_#f0f5f7)] overflow-hidden flex flex-row items-center justify-center p-1 border-[1px] border-solid border-dimgray">
                        <img
                          className="w-[7px] relative h-[7px]"
                          alt=""
                          src="/vector1.svg"
                        />
                      </div>
                      <div className="w-[86px] relative leading-[26px] flex items-center shrink-0">
                        05/15/2024
                      </div>
                    </div>
                    <div className="self-stretch relative leading-[26px] text-steelblue">
                      AMERICAN EXPRESS DES: ACH PMT ID:A9982 INON: Like this
                      video CO..
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-between">
                      <div className="w-[69px] flex flex-row items-center justify-center max-w-[69px]">
                        <img
                          className="w-[19px] relative h-[21px] overflow-hidden shrink-0"
                          alt=""
                          src="/converticon-1.svg"
                        />
                      </div>
                      <div className="w-[26px] [background:linear-gradient(180deg,_#fff,_rgba(224,_234,_242,_0))] box-border h-[26px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[7.7px] px-[6.1px] text-sm font-wwwbankofamericacom-arial-bold-16 border-[0.5px] border-solid border-gainsboro-300">
                        <b className="relative leading-[26px]">F</b>
                      </div>
                      <div className="relative leading-[26px]">-$45.00</div>
                      <div className="relative leading-[26px] text-right">
                        $227.50
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch bg-whitesmoke-100 flex flex-col items-start justify-start p-2.5 gap-[10px] border-t-[1px] border-solid border-gainsboro-200 border-b-[1px]">
                    <div className="flex flex-row items-center justify-start gap-[6px] max-w-[120px]">
                      <div className="rounded [background:linear-gradient(175.91deg,_#fff,_#f0f5f7)] overflow-hidden flex flex-row items-center justify-center p-1 border-[1px] border-solid border-dimgray">
                        <img
                          className="w-[7px] relative h-[7px]"
                          alt=""
                          src="/vector1.svg"
                        />
                      </div>
                      <div className="w-[86px] relative leading-[26px] flex items-center shrink-0">
                        05/08/2024
                      </div>
                    </div>
                    <div className="self-stretch relative leading-[26px] text-steelblue">
                      ADOBE INC DES PURCHASE 1234543 INON: Subscribe to my
                      channel..
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-between">
                      <div className="w-[69px] flex flex-row items-center justify-center max-w-[69px]">
                        <img
                          className="w-[12.8px] relative h-[17.3px] overflow-hidden shrink-0 object-contain"
                          alt=""
                          src="/group@2x.png"
                        />
                      </div>
                      <div className="w-[26px] [background:linear-gradient(180deg,_#fff,_rgba(224,_234,_242,_0))] box-border h-[26px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[7.7px] px-[6.1px] text-sm font-wwwbankofamericacom-arial-bold-16 border-[0.5px] border-solid border-gainsboro-300">
                        <b className="relative leading-[26px]">C</b>
                      </div>
                      <div className="relative leading-[26px]">$1,450.20</div>
                      <div className="relative leading-[26px] text-right">
                        $570,823.80
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
            <div className="self-stretch [background:linear-gradient(180deg,_#6a6a6a_30.83%,_rgba(0,_0,_0,_0.63))] flex flex-row items-center justify-start p-2.5 gap-[20px]">
              <b className="relative leading-[26px]">
                Statement as of 04/17/2023
              </b>
              <div className="flex flex-row items-center justify-start gap-[4px] text-base">
                <b className="relative leading-[26px]">{`(view statements) `}</b>
                <img
                  className="w-[15px] relative h-[15px] overflow-hidden shrink-0"
                  alt=""
                  src="/frame6.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-base text-www-bankofamerica-com-1519199951171875x6432000122070312-default-dove-gray font-wwwbankofamericacom-roboto-regular-14-underline">
              <div className="self-stretch bg-wwwbankofamericacom-nero overflow-hidden flex flex-col items-start justify-center py-[17px] px-5 gap-[10px]">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch bg-whitesmoke-100 flex flex-col items-start justify-start p-2.5 gap-[10px] border-t-[1px] border-solid border-gainsboro-200 border-b-[1px]">
                    <div className="flex flex-row items-center justify-start gap-[6px] max-w-[120px]">
                      <div className="rounded [background:linear-gradient(175.91deg,_#fff,_#f0f5f7)] overflow-hidden flex flex-row items-center justify-center p-1 border-[1px] border-solid border-dimgray">
                        <img
                          className="w-[7px] relative h-[7px]"
                          alt=""
                          src="/vector1.svg"
                        />
                      </div>
                      <div className="w-[86px] relative leading-[26px] flex items-center shrink-0">
                        04/23/2023
                      </div>
                    </div>
                    <div className="self-stretch relative leading-[26px] text-steelblue">
                      MICROSOFT INC DES PAYROLL 1234543 INON: Subscribe to my
                      channel..
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-between">
                      <div className="w-[69px] flex flex-row items-center justify-center max-w-[69px]">
                        <img
                          className="w-[12.8px] relative h-[17.3px] object-contain"
                          alt=""
                          src="/group@2x.png"
                        />
                      </div>
                      <div className="w-[26px] [background:linear-gradient(180deg,_#fff,_rgba(224,_234,_242,_0))] box-border h-[26px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[7.7px] px-[6.1px] text-sm font-wwwbankofamericacom-arial-bold-16 border-[0.5px] border-solid border-gainsboro-300">
                        <b className="relative leading-[26px]">F</b>
                      </div>
                      <div className="relative leading-[26px]">$800.60</div>
                      <div className="relative leading-[26px] text-right">
                        $439.20
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch bg-whitesmoke-100 flex flex-col items-start justify-start p-2.5 gap-[10px] border-t-[1px] border-solid border-gainsboro-200 border-b-[1px]">
                    <div className="flex flex-row items-center justify-start gap-[6px] max-w-[120px]">
                      <div className="rounded [background:linear-gradient(175.91deg,_#fff,_#f0f5f7)] overflow-hidden flex flex-row items-center justify-center p-1 border-[1px] border-solid border-dimgray">
                        <img
                          className="w-[7px] relative h-[7px]"
                          alt=""
                          src="/vector1.svg"
                        />
                      </div>
                      <div className="w-[86px] relative leading-[26px] flex items-center shrink-0">
                        04/17/2023
                      </div>
                    </div>
                    <div className="self-stretch relative leading-[26px] text-steelblue">
                      MICROSOFT INC DES PAYROLL 1234543 INON: Subscribe to my
                      channel..
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-between">
                      <div className="w-[69px] flex flex-row items-center justify-center max-w-[69px]">
                        <img
                          className="w-[19px] relative h-[21px] overflow-hidden shrink-0"
                          alt=""
                          src="/converticon-1.svg"
                        />
                      </div>
                      <div className="w-[26px] [background:linear-gradient(180deg,_#fff,_rgba(224,_234,_242,_0))] box-border h-[26px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[7.7px] px-[6.1px] text-sm font-wwwbankofamericacom-arial-bold-16 border-[0.5px] border-solid border-gainsboro-300">
                        <b className="relative leading-[26px]">F</b>
                      </div>
                      <div className="relative leading-[26px]">$2,000.20</div>
                      <div className="relative leading-[26px] text-right">
                        $1,239.80
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
            <div className="self-stretch [background:linear-gradient(180deg,_#6a6a6a_30.83%,_rgba(0,_0,_0,_0.63))] flex flex-row items-center justify-start p-2.5 gap-[20px]">
              <b className="relative leading-[26px]">
                Statement as of 05/28/2023
              </b>
              <div className="flex flex-row items-center justify-start gap-[4px] text-base">
                <b className="relative leading-[26px]">{`(view statements) `}</b>
                <img
                  className="w-[15px] relative h-[15px] overflow-hidden shrink-0"
                  alt=""
                  src="/frame6.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-base text-www-bankofamerica-com-1519199951171875x6432000122070312-default-dove-gray font-wwwbankofamericacom-roboto-regular-14-underline">
              <div className="self-stretch bg-wwwbankofamericacom-nero overflow-hidden flex flex-col items-start justify-center py-[17px] px-5">
                <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch bg-whitesmoke-100 flex flex-col items-start justify-start p-2.5 gap-[10px] border-t-[1px] border-solid border-gainsboro-200 border-b-[1px]">
                      <div className="flex flex-row items-center justify-start gap-[6px] max-w-[120px]">
                        <div className="rounded [background:linear-gradient(175.91deg,_#fff,_#f0f5f7)] overflow-hidden flex flex-row items-center justify-center p-1 border-[1px] border-solid border-dimgray">
                          <img
                            className="w-[7px] relative h-[7px]"
                            alt=""
                            src="/vector1.svg"
                          />
                        </div>
                        <div className="w-[86px] relative leading-[26px] flex items-center shrink-0">
                          05/30/2023
                        </div>
                      </div>
                      <div className="self-stretch relative leading-[26px] text-steelblue">
                        ALLY BANK DES:$TRANSFER ID: XXXXXX8480 INON: Thank you!
                        CO...
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-between">
                        <div className="w-[69px] flex flex-row items-center justify-center max-w-[69px]">
                          <img
                            className="w-[19px] relative h-[21px] overflow-hidden shrink-0"
                            alt=""
                            src="/converticon-1.svg"
                          />
                        </div>
                        <div className="w-[26px] [background:linear-gradient(180deg,_#fff,_rgba(224,_234,_242,_0))] box-border h-[26px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[7.7px] px-[6.1px] text-sm font-wwwbankofamericacom-arial-bold-16 border-[0.5px] border-solid border-gainsboro-300">
                          <b className="relative leading-[26px]">F</b>
                        </div>
                        <div className="relative leading-[26px]">$450.20</div>
                        <div className="relative leading-[26px] text-right">
                          $3,540.20
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-whitesmoke-100 flex flex-col items-start justify-start p-2.5 gap-[10px] border-t-[1px] border-solid border-gainsboro-200 border-b-[1px]">
                    <div className="flex flex-row items-center justify-start gap-[6px] max-w-[120px]">
                      <div className="rounded [background:linear-gradient(175.91deg,_#fff,_#f0f5f7)] overflow-hidden flex flex-row items-center justify-center p-1 border-[1px] border-solid border-dimgray">
                        <img
                          className="w-[7px] relative h-[7px]"
                          alt=""
                          src="/vector1.svg"
                        />
                      </div>
                      <div className="w-[86px] relative leading-[26px] flex items-center shrink-0">
                        05/28/2023
                      </div>
                    </div>
                    <div className="self-stretch relative leading-[26px] text-steelblue">
                      AMERICAN EXPRESS DES: CECK DEPOSIT PMT ID:A9982 CHASE:
                      Christopher Scott..
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-between">
                      <div className="w-[69px] flex flex-row items-center justify-center max-w-[69px]">
                        <img
                          className="w-[12.8px] relative h-[17.3px] object-contain"
                          alt=""
                          src="/group@2x.png"
                        />
                      </div>
                      <div className="w-[26px] [background:linear-gradient(180deg,_#fff,_rgba(224,_234,_242,_0))] box-border h-[26px] overflow-hidden shrink-0 flex flex-col items-center justify-center py-[7.7px] px-[6.1px] text-sm font-wwwbankofamericacom-arial-bold-16 border-[0.5px] border-solid border-gainsboro-300">
                        <b className="relative leading-[26px]">F</b>
                      </div>
                      <div className="relative leading-[26px]">$300.20</div>
                      <div className="relative leading-[26px] text-right">
                        $3,240.00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelReward;
