import { useState, useCallback } from "react";
import Dialog from "../components/dialog";
import PortalPopup from "../components/portal-popup";

const Index1 = () => {
  const [isDialogPopupOpen, setDialogPopupOpen] = useState(false);

  const openDialogPopup = useCallback(() => {
    setDialogPopupOpen(true);
  }, []);

  const closeDialogPopup = useCallback(() => {
    setDialogPopupOpen(false);
  }, []);

  return (
    <>
      <div className="w-full relative bg-wwwbankofamericacom-nero overflow-y-auto flex flex-col items-center justify-start [scrollbar-width:1px] text-left text-9xl-5 text-wwwbankofamericacom-black font-wwwbankofamericacom-inter-regular-966">
        <div className="w-[430.4px] bg-wwwbankofamericacom-nero flex flex-col items-start justify-start max-w-[1440px] min-h-[4586.43994140625px] z-[0]">
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="w-[430.4px] flex flex-col items-start justify-start max-w-[430.3999938964844px]">
              <div className="self-stretch relative h-[58.3px]">
                <div className="absolute w-full top-[0px] right-[0px] left-[0px] flex flex-col items-center justify-start">
                  <div className="w-[430.4px] relative h-px max-w-[1296px]" />
                </div>
                <div className="absolute top-[0px] left-[calc(50%_-_215.2px)] bg-wwwbankofamericacom-nero w-[430.4px] flex flex-row items-center justify-between py-[15px] px-5 box-border max-w-[1296px]">
                  <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[4.8px]">
                    <img
                      className="w-[234.2px] flex-1 relative max-h-full overflow-hidden max-w-[234.24000549316406px]"
                      alt=""
                      src="/assetsimagesgloballogosbaclogov2csx3648cbbbsvg.svg"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-start">
                    <div className="flex flex-col items-start justify-start py-0 pr-2 pl-0">
                      <div
                        className="flex flex-col items-start justify-start py-0 pr-[9.6px] pl-0 cursor-pointer border-r-[1.6px] border-solid border-wwwbankofamericacom-crimson"
                        onClick={openDialogPopup}
                      >
                        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-mini-4 leading-[24px] uppercase font-bold font-wwwbankofamericacom-inter-regular-966 text-wwwbankofamericacom-crimson text-left inline-block">
                          Login
                        </button>
                      </div>
                    </div>
                    <button className="cursor-pointer [border:none] p-0 bg-wwwbankofamericacom-nero w-6 relative h-6 overflow-hidden shrink-0">
                      <div className="absolute w-full top-[10px] right-[0%] left-[0%] bg-wwwbankofamericacom-crimson h-[3px]">
                        <div className="absolute top-[-6px] left-[0px] bg-wwwbankofamericacom-crimson w-6 h-[3px]" />
                        <div className="absolute bottom-[-6px] left-[0px] bg-wwwbankofamericacom-crimson w-6 h-[3px]" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="w-[430.4px] flex flex-col items-start justify-start max-w-[430.3999938964844px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch bg-wwwbankofamericacom-wild-sand overflow-hidden flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start relative min-h-[390px]">
                    <div className="w-full absolute !m-[0] h-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-wwwbankofamericacom-nero overflow-hidden z-[0]" />
                    <div className="self-stretch bg-wwwbankofamericacom-nero flex flex-col items-start justify-start z-[1]">
                      <div className="self-stretch flex flex-col items-center justify-start min-h-[390px]">
                        <div className="w-[430.4px] flex flex-col items-start justify-start pt-3.5 px-2.5 pb-2 box-border max-w-[430.3999938964844px] z-[1]">
                          <div className="self-stretch flex flex-col items-start justify-start">
                            <div className="self-stretch relative leading-[37.34px] font-light">
                              <p className="m-0">Choose the card that works</p>
                              <p className="m-0">for you</p>
                            </div>
                          </div>
                        </div>
                        <div className="w-[430.4px] flex flex-col items-center justify-start pt-0 px-[5px] pb-[30px] box-border max-w-[430.3999938964844px] z-[0] text-lg text-wwwbankofamericacom-science-blue">
                          <div className="w-[420.4px] flex flex-col items-start justify-start max-w-[430.3999938964844px]">
                            <div className="self-stretch flex flex-col items-start justify-start pt-[21.5px] px-0 pb-0">
                              <div className="self-stretch flex flex-col items-center justify-start text-mid">
                                <div className="w-[420.4px] relative h-[110.9px] max-w-[1296px]">
                                  <div className="absolute top-[calc(50%_-_0.05px)] left-[0px] w-px h-px" />
                                  <div className="absolute w-[calc(100%_-_210.2px)] top-[calc(50%_-_36.65px)] right-[0px] left-[210.2px] flex flex-col items-start justify-start pt-[23.4px] px-0 pb-[5px] box-border">
                                    <div className="self-stretch flex flex-col items-start justify-start py-[0.9px] px-0">
                                      <div className="self-stretch relative leading-[21.52px]">
                                        <p className="m-0">
                                          3% cash back in the
                                        </p>
                                        <p className="m-0">{`category of your choice >`}</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute top-[calc(50%_-_0.05px)] left-[420.4px] w-px h-px" />
                                  <img
                                    className="absolute w-[calc(100%_-_188.8px)] top-[calc(50%_-_74.25px)] right-[255.5px] left-[-66.7px] max-w-full overflow-hidden h-[170px] object-contain"
                                    alt=""
                                    src="/redcard.png"
                                  />
                                </div>
                              </div>
                              <div className="self-stretch flex flex-col items-center justify-start text-base-8">
                                <div className="w-[420.4px] relative h-[110.9px] max-w-[1296px]">
                                  <div className="absolute top-[calc(50%_-_0.05px)] left-[0px] w-px h-px" />
                                  <div className="absolute w-[calc(100%_-_210.2px)] top-[calc(50%_-_36.65px)] right-[0px] left-[210.2px] flex flex-col items-start justify-start pt-[23.4px] px-0 pb-[5px] box-border">
                                    <div className="self-stretch flex flex-col items-start justify-start py-[0.9px] px-0">
                                      <div className="self-stretch relative leading-[21.52px]">
                                        <p className="m-0">
                                          Unlimited 1.5% cash
                                        </p>
                                        <p className="m-0">{`back on all purchases >`}</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute top-[calc(50%_-_0.05px)] left-[420.4px] w-px h-px" />
                                  <img
                                    className="absolute w-[calc(100%_-_188.8px)] top-[calc(50%_-_74.25px)] right-[255.5px] left-[-66.7px] max-w-full overflow-hidden h-[170px] object-contain"
                                    alt=""
                                    src="/gray card.png"
                                  />
                                </div>
                              </div>
                              <div className="self-stretch flex flex-col items-center justify-start">
                                <div className="w-[420.4px] relative h-[110.9px] max-w-[1296px]">
                                  <div className="absolute top-[calc(50%_-_0.05px)] left-[0px] w-px h-px" />
                                  <div className="absolute w-[calc(100%_-_210.2px)] top-[calc(50%_-_36.65px)] right-[0px] left-[210.2px] flex flex-col items-start justify-start pt-[23.4px] px-0 pb-[5px] box-border">
                                    <div className="self-stretch flex flex-col items-start justify-start py-[0.9px] px-0">
                                      <div className="self-stretch relative leading-[21.52px]">
                                        <p className="m-0">
                                          Unlimited 1.5 points for
                                        </p>
                                        <p className="m-0">{`every $1 spent >`}</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute top-[calc(50%_-_0.05px)] left-[420.4px] w-px h-px" />
                                  <img
                                    className="absolute w-[calc(100%_-_188.8px)] top-[calc(50%_-_74.25px)] right-[255.5px] left-[-66.7px] max-w-full overflow-hidden h-[170.1px] object-contain"
                                    alt=""
                                    src="/blue card.png"
                                  />
                                </div>
                              </div>
                              <div className="self-stretch flex flex-col items-center justify-start">
                                <div className="w-[420.4px] relative h-[110.9px] max-w-[1296px]">
                                  <div className="absolute top-[calc(50%_-_0.05px)] left-[0px] w-px h-px" />
                                  <img
                                    className="absolute w-[calc(100%_-_188.8px)] top-[calc(50%_-_74.25px)] right-[255.5px] left-[-66.7px] max-w-full overflow-hidden h-[170px] object-contain"
                                    alt=""
                                    src="/container@2x.png"
                                  />
                                  <div className="absolute w-[calc(100%_-_210.2px)] top-[calc(50%_-_34.15px)] right-[0px] left-[210.2px] flex flex-col items-start justify-start pt-[23.4px] px-0 pb-0 box-border">
                                    <div className="self-stretch flex flex-col items-start justify-start py-[0.9px] px-0">
                                      <div className="self-stretch relative leading-[21.52px]">
                                        <p className="m-0">
                                          Intro APR offer for 18
                                        </p>
                                        <p className="m-0">{`billing cycles >`}</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute top-[calc(50%_-_0.05px)] left-[420.4px] w-px h-px" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="w-[767px] absolute !m-[0] right-[-1px] bottom-[0px] h-[19px] z-[2]"
                      alt=""
                      src="/svg.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start text-mini-3 text-wwwbankofamericacom-science-blue1">
                  <div className="w-[430.4px] flex flex-col items-center justify-start pt-7 px-[35.9px] pb-[60px] box-border max-w-[1296px]">
                    <div className="w-[358.7px] flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                        <div className="self-stretch relative h-[200px] z-[1]">
                          <div className="absolute w-[calc(100%_-_179.4px)] top-[0px] right-[179.4px] left-[0px] h-12 text-sm-8">
                            <div className="absolute h-[58.33%] top-[20.83%] bottom-[20.83%] left-[0px] w-7 flex flex-col items-center justify-center">
                              <img
                                className="w-7 flex-1 relative max-h-full"
                                alt=""
                                src="/svg1.svg"
                              />
                            </div>
                            <div className="absolute h-[37.5%] w-[58.62%] top-[31.67%] right-[41.38%] bottom-[30.83%] left-[0%] flex flex-col items-start justify-start py-0 pr-0 pl-11 box-border">
                              <div className="relative leading-[17.6px]">
                                Checking
                              </div>
                            </div>
                          </div>
                          <div className="absolute w-[calc(100%_-_179.4px)] top-[48px] right-[179.4px] left-[0px] h-12 text-mini-5">
                            <div className="absolute h-[58.33%] top-[20.83%] bottom-[20.83%] left-[0px] w-7 flex flex-col items-center justify-center">
                              <img
                                className="w-7 flex-1 relative max-h-full"
                                alt=""
                                src="/svg2.svg"
                              />
                            </div>
                            <div className="absolute h-[37.5%] w-[80.03%] top-[31.67%] right-[19.97%] bottom-[30.83%] left-[0%] flex flex-col items-start justify-start py-0 pr-0 pl-11 box-border">
                              <div className="relative leading-[17.6px]">{`Savings & CDs`}</div>
                            </div>
                          </div>
                          <div className="absolute w-[calc(100%_-_179.4px)] top-[96px] right-[179.4px] left-[0px] h-12 text-sm">
                            <div className="absolute h-[58.33%] top-[20.83%] bottom-[20.83%] left-[0px] w-7 flex flex-col items-center justify-center">
                              <img
                                className="w-7 flex-1 relative max-h-full"
                                alt=""
                                src="/svg3.svg"
                              />
                            </div>
                            <div className="absolute h-[37.5%] w-[71.05%] top-[31.67%] right-[28.95%] bottom-[30.83%] left-[0%] flex flex-col items-start justify-start py-0 pr-0 pl-11 box-border">
                              <div className="relative leading-[17.6px]">
                                Credit Cards
                              </div>
                            </div>
                          </div>
                          <div className="absolute w-[calc(100%_-_179.4px)] top-[144px] right-[179.4px] left-[0px] h-12">
                            <div className="absolute h-[58.33%] top-[20.83%] bottom-[20.83%] left-[0px] w-7 flex flex-col items-center justify-center">
                              <img
                                className="w-7 flex-1 relative max-h-full"
                                alt=""
                                src="/svg4.svg"
                              />
                            </div>
                            <div className="absolute h-[37.5%] w-[71.61%] top-[31.67%] right-[28.39%] bottom-[30.83%] left-[0%] flex flex-col items-start justify-start py-0 pr-0 pl-11 box-border">
                              <div className="relative leading-[17.6px]">
                                Home Loans
                              </div>
                            </div>
                          </div>
                          <div className="absolute w-[calc(100%_-_179.4px)] top-[0px] right-[0.1px] left-[179.3px] h-12">
                            <div className="absolute h-[58.33%] top-[20.83%] bottom-[20.83%] left-[0px] w-7 flex flex-col items-center justify-center">
                              <img
                                className="w-7 flex-1 relative max-h-full"
                                alt=""
                                src="/svg5.svg"
                              />
                            </div>
                            <div className="absolute h-[37.5%] w-[66.93%] top-[31.67%] right-[33.07%] bottom-[30.83%] left-[0%] flex flex-col items-start justify-start py-0 pr-0 pl-11 box-border">
                              <div className="relative leading-[17.6px]">
                                Auto Loans
                              </div>
                            </div>
                          </div>
                          <div className="absolute w-[calc(100%_-_179.4px)] top-[48px] right-[0.1px] left-[179.3px] h-12 text-mini-4">
                            <div className="absolute h-[58.33%] top-[20.83%] bottom-[20.83%] left-[0px] w-7 flex flex-col items-center justify-center">
                              <img
                                className="w-7 flex-1 relative max-h-full"
                                alt=""
                                src="/svg6.svg"
                              />
                            </div>
                            <div className="absolute h-[37.5%] w-[80.98%] top-[31.67%] right-[19.02%] bottom-[30.83%] left-[0%] flex flex-col items-start justify-start py-0 pr-0 pl-11 box-border">
                              <div className="relative leading-[17.6px]">
                                Small Business
                              </div>
                            </div>
                          </div>
                          <div className="absolute w-[calc(100%_-_179.4px)] top-[96px] right-[0.1px] left-[179.3px] h-12 text-mini-4">
                            <div className="absolute h-[58.33%] top-[20.83%] bottom-[20.83%] left-[0px] w-7 flex flex-col items-center justify-center">
                              <img
                                className="w-7 flex-1 relative max-h-full"
                                alt=""
                                src="/svg7.svg"
                              />
                            </div>
                            <div className="absolute h-[37.5%] w-[58.78%] top-[31.67%] right-[41.22%] bottom-[30.83%] left-[0%] flex flex-col items-start justify-start py-0 pr-0 pl-11 box-border">
                              <div className="relative leading-[17.6px]">
                                Investing
                              </div>
                            </div>
                          </div>
                          <div className="absolute w-[calc(100%_-_179.4px)] top-[144px] right-[0.1px] left-[179.3px] h-12">
                            <div className="absolute h-[58.33%] top-[20.83%] bottom-[20.83%] left-[0px] w-7 flex flex-col items-center justify-center">
                              <img
                                className="w-7 flex-1 relative max-h-full"
                                alt=""
                              />
                            </div>
                            <div className="absolute h-[37.5%] w-[86.73%] top-[31.67%] right-[13.27%] bottom-[30.83%] left-[0%] flex flex-col items-start justify-start py-0 pr-0 pl-11 box-border">
                              <div className="relative leading-[17.6px]">
                                Student Banking
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start z-[0] text-xs-6 text-wwwbankofamericacom-crimson">
                          <div className="self-stretch flex flex-col items-start justify-center py-0 pr-[15px] pl-0">
                            <div className="h-[38.2px] flex flex-col items-start justify-start">
                              <div className="rounded-8xs flex flex-row items-center justify-start p-[6.6px] border-[1px] border-solid border-wwwbankofamericacom-crimson">
                                <div className="w-[35px] h-[25px] flex flex-col items-start justify-start py-0 pr-2.5 pl-0 box-border">
                                  <div className="w-[25px] h-[25px] flex flex-col items-center justify-center">
                                    <img
                                      className="w-[25px] flex-1 relative max-h-full"
                                      alt=""
                                      src="/svg9.svg"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col items-start justify-start">
                                  <div className="relative leading-[14.3px]">
                                    Get the free app
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-start text-xs-5 text-wwwbankofamericacom-science-blue1">
                            <div className="rounded-8xs flex flex-row items-center justify-start p-[6.6px] border-[1px] border-solid border-wwwbankofamericacom-science-blue1">
                              <div className="w-[35px] h-[25px] flex flex-col items-start justify-start py-0 pr-2.5 pl-0 box-border">
                                <div className="w-[25px] h-[25px] flex flex-col items-center justify-center">
                                  <img
                                    className="w-[25px] flex-1 relative max-h-full"
                                    alt=""
                                    src="/svg10.svg"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start">
                                <div className="relative leading-[14.3px]">
                                  Schedule an appointment
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
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start text-2xl-4 text-wwwbankofamericacom-crimson">
            <div className="w-[430.4px] flex flex-col items-start justify-start max-w-[430.3999938964844px]">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[60px]">
                <div className="self-stretch h-[388px] overflow-x-auto shrink-0 flex flex-col items-start justify-start min-h-[100px]">
                  <div className="w-[2041.8px] flex flex-row items-start justify-start py-0 px-[15px] box-border gap-[15px]">
                    <div className="w-[322.8px] bg-wwwbankofamericacom-concrete h-[373px] overflow-hidden shrink-0 flex flex-col items-start justify-start max-w-[375px] min-h-[325px] text-[13.6px] text-wwwbankofamericacom-black">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="w-full h-40 overflow-hidden shrink-0 flex flex-col items-start justify-start relative max-w-[322.79998779296875px]">
                          <img
                            className="self-stretch relative max-w-full overflow-hidden h-[159.2px] shrink-0 object-cover z-[0]"
                            alt=""
                            src="/picture--assetsimagessitehpassetssuperhighlightsgraycurvecp-shl-bamd-5-375-4768121-ewebp@2x.png"
                          />
                          <div className="w-[322.8px] !m-[0] absolute top-[5.6px] left-[0px] flex flex-col items-start justify-start pt-0 pb-[185.6px] pr-[65.6px] pl-[63.5px] box-border z-[1]">
                            <img
                              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                              alt=""
                              src="/assetsimagessitehpassetssuperhighlightsconsumerotherencd-shl-200-offer-5846581-esvg.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start p-6 box-border gap-[14.4px] min-h-[170px]">
                          <div className="self-stretch flex flex-col items-start justify-start pt-[3.2px] px-0 pb-0">
                            <div className="relative leading-[24px]">
                              NEW CUSTOMER OFFER
                            </div>
                            <div className="relative text-2xl leading-[24px] text-wwwbankofamericacom-crimson">
                              Open a checking account
                            </div>
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-start text-smi-6">
                            <div className="self-stretch relative leading-[20px]">
                              <p className="m-0">
                                <b className="font-wwwbankofamericacom-inter-regular-966">
                                  Earn a $200 cash offer
                                </b>
                                <span> when you open a new</span>
                              </p>
                              <p className="m-0">
                                personal checking account and make
                              </p>
                              <p className="m-0">qualifying direct deposits.</p>
                            </div>
                          </div>
                          <div className="self-stretch relative h-[24.8px] text-mini-5 text-wwwbankofamericacom-science-blue">
                            <div className="absolute top-[4.4px] left-[0px] leading-[20px] flex items-center w-[112.5px] h-5">
                              See offer details
                            </div>
                            <img
                              className="absolute top-[5px] left-[122.3px] w-[11.9px] h-6"
                              alt=""
                              src="/image.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[322.8px] bg-wwwbankofamericacom-concrete h-[373px] overflow-hidden shrink-0 flex flex-col items-start justify-start max-w-[375px] min-h-[325px]">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="w-full h-40 overflow-hidden shrink-0 flex flex-col items-start justify-start relative max-w-[322.79998779296875px]">
                          <img
                            className="self-stretch relative max-w-full overflow-hidden h-[159.2px] shrink-0 object-cover z-[0]"
                            alt=""
                            src="/picture--assetsimagessitehpassetssuperhighlightsgraycurvedb-shl-sm-3746332-375-gcwebp@2x.png"
                          />
                          <div className="w-[322.8px] !m-[0] absolute top-[0px] left-[0px] flex flex-col items-start justify-start pt-0 pb-[15.3px] pr-[71px] pl-[64.6px] box-border z-[1]">
                            <img
                              className="self-stretch relative max-w-full overflow-hidden h-[144.7px] shrink-0 object-cover"
                              alt=""
                              src="/assetsimagessitehpassetssuperhighlightsconsumericonsandlogosent-shl-nantucket-5648060-gcsvg@2x.png"
                            />
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start p-6 box-border gap-[14.4px] min-h-[170px]">
                          <div className="self-stretch flex flex-col items-start justify-start">
                            <div className="self-stretch relative leading-[24px]">
                              <p className="m-0">Celebrate the magic of</p>
                              <p className="m-0">storytelling</p>
                            </div>
                          </div>
                          <div className="self-stretch relative h-[60px] text-smi-9 text-wwwbankofamericacom-black">
                            <div className="absolute top-[-0.4px] left-[0px] leading-[20px] flex items-center w-[100.1px] h-5">
                              Bank of America
                            </div>
                            <div className="absolute top-[-4.6px] left-[99.8px] text-2xs-8 leading-[20px] flex items-center w-[6.5px] h-5">
                              ®
                            </div>
                            <div className="absolute top-[-0.4px] left-[106.1px] text-smi-6 leading-[20px] flex items-center w-[121.9px] h-5">
                              {" "}
                              cardholders receive
                            </div>
                            <div className="absolute top-[19.6px] left-[0px] leading-[20px] flex items-center w-[247.5px] h-10">
                              <span className="w-full">
                                <p className="m-0">
                                  discounted tickets to the Nantucket Film
                                </p>
                                <p className="m-0">Festival</p>
                              </span>
                            </div>
                            <div className="absolute top-[35.4px] left-[46.6px] text-2xs-8 leading-[20px] flex items-center w-[6.5px] h-5">
                              ®
                            </div>
                            <div className="absolute top-[39.6px] left-[52.8px] text-mini-4 leading-[20px] flex items-center w-[3.2px] h-5">
                              .
                            </div>
                          </div>
                          <div className="self-stretch relative h-[24.8px] text-mini-5 text-wwwbankofamericacom-science-blue">
                            <div className="absolute top-[4.4px] left-[0px] leading-[20px] flex items-center w-[77.6px] h-5">
                              Learn more
                            </div>
                            <img
                              className="absolute top-[5px] left-[87.4px] w-[11.9px] h-6"
                              alt=""
                              src="/image1.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[322.8px] bg-wwwbankofamericacom-concrete h-[373px] flex flex-col items-start justify-start max-w-[375px] text-[21.9px]">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch relative h-40">
                          <img
                            className="absolute h-3/6 w-[18.59%] top-[25%] right-[40.71%] bottom-[25%] left-[40.71%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/assetsimagessitehpassetshighlightsconsumercardsenbofa-icon-card1-186svg.svg"
                          />
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start p-6 box-border gap-[14.4px] min-h-[170px]">
                          <div className="self-stretch flex flex-col items-start justify-start">
                            <div className="self-stretch relative leading-[24px]">
                              Intro APR offer
                            </div>
                          </div>
                          <div className="self-stretch relative h-[60px] text-[12.4px] text-wwwbankofamericacom-black">
                            <div className="absolute top-[-0.4px] left-[0px] leading-[20px] flex items-center w-[147.4px] h-5">
                              <span className="w-full">
                                <span>{`With the `}</span>
                                <b>BankAmericard</b>
                              </span>
                            </div>
                            <b className="absolute top-[-4.6px] left-[147.1px] text-2xs-8 leading-[20px] flex items-center w-[6.5px] h-5">
                              ®
                            </b>
                            <div className="absolute top-[-0.4px] left-[153.4px] text-smi-8 leading-[20px] flex items-center w-[107.1px] h-5">
                              {" "}
                              credit card, get a
                            </div>
                            <div className="absolute top-[19.6px] left-[0px] text-smi-9 leading-[20px] flex items-center w-[268.8px] h-10">
                              <span className="w-full">
                                <p className="m-0">
                                  <b className="font-wwwbankofamericacom-inter-regular-966">
                                    0% intro APR offer
                                  </b>
                                  <span> for 18 billing cycles, plus</span>
                                </p>
                                <p className="m-0">no annual fee.</p>
                              </span>
                            </div>
                          </div>
                          <div className="self-stretch relative h-[24.8px] text-sm text-wwwbankofamericacom-science-blue">
                            <div className="absolute top-[4.4px] left-[0px] leading-[20px] flex items-center w-[69.5px] h-5">
                              Apply now
                            </div>
                            <img
                              className="absolute top-[5px] left-[79.3px] w-[11.9px] h-6"
                              alt=""
                              src="/image.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[322.8px] bg-wwwbankofamericacom-concrete h-[373px] flex flex-col items-start justify-start max-w-[375px] text-2xl">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch relative h-40">
                          <img
                            className="absolute h-3/6 w-[24.78%] top-[25%] right-[37.61%] bottom-[25%] left-[37.61%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/assetsimagessitehpassetshighlightsconsumerotherenbofa-icon-rewards2-280rgbsvg.svg"
                          />
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start p-6 box-border gap-[14.4px] min-h-[170px]">
                          <div className="self-stretch flex flex-col items-start justify-start">
                            <div className="self-stretch relative leading-[24px]">
                              <p className="m-0">$200 checking</p>
                              <p className="m-0">cash offer</p>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-start text-smi-6 text-wwwbankofamericacom-black">
                            <div className="self-stretch relative leading-[20px]">
                              <p className="m-0">
                                <b className="font-wwwbankofamericacom-inter-regular-966">
                                  Earn a $200
                                </b>
                                <span> bonus when you open a new</span>
                              </p>
                              <p className="m-0">
                                personal checking account and make
                              </p>
                              <p className="m-0">qualifying direct deposits.</p>
                            </div>
                          </div>
                          <div className="self-stretch relative h-[24.8px] text-mini-5 text-wwwbankofamericacom-science-blue">
                            <div className="absolute top-[4.4px] left-[0px] leading-[20px] flex items-center w-[112.5px] h-5">
                              See offer details
                            </div>
                            <img
                              className="absolute top-[5px] left-[122.3px] w-[11.9px] h-6"
                              alt=""
                              src="/image.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[322.8px] bg-wwwbankofamericacom-concrete h-[373px] flex flex-col items-start justify-start max-w-[375px]">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch relative h-40">
                          <img
                            className="absolute h-3/6 w-[22.27%] top-[25%] right-[38.88%] bottom-[25%] left-[38.85%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/assetsimagessitehpassetshighlightsconsumermobilebankingbofa-icon-reminder1svg.svg"
                          />
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start pt-6 px-6 pb-[28.4px] box-border gap-[14.4px] min-h-[170px]">
                          <div className="self-stretch flex flex-col items-start justify-start">
                            <div className="self-stretch relative leading-[24px]">
                              Custom mobile alerts
                            </div>
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-start text-smi-8 text-wwwbankofamericacom-black">
                            <div className="self-stretch relative leading-[20px]">
                              <p className="m-0">
                                With our Mobile Banking app, prioritize what
                              </p>
                              <p className="m-0">
                                you see based on what matters most to you.
                              </p>
                            </div>
                          </div>
                          <div className="self-stretch relative h-[24.8px] text-mini-1 text-wwwbankofamericacom-science-blue">
                            <div className="absolute top-[4.4px] left-[0px] leading-[20px] flex items-center w-[79.2px] h-5">
                              Get the app
                            </div>
                            <img
                              className="absolute top-[5px] left-[89px] w-[11.9px] h-6"
                              alt=""
                              src="/image2.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[322.8px] bg-wwwbankofamericacom-concrete h-[373px] flex flex-col items-start justify-start max-w-[375px] text-[21.8px] text-wwwbankofamericacom-midnight-blue">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch relative h-40">
                          <img
                            className="absolute h-3/6 w-[79.99%] top-[25%] right-[10.01%] bottom-[25%] left-[10.01%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/assetsimagessitehpassetshighlightsconsumermerrillenmerrill-lo1-rgbsvg.svg"
                          />
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start p-6 box-border gap-[14.4px] min-h-[170px]">
                          <div className="self-stretch flex flex-col items-start justify-start">
                            <div className="self-stretch relative leading-[24px]">
                              <p className="m-0">Investment solutions for</p>
                              <p className="m-0">you</p>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-start text-[12.7px] text-wwwbankofamericacom-black">
                            <div className="self-stretch relative leading-[20px]">
                              <p className="m-0">
                                We offer a range of solutions to help you
                              </p>
                              <p className="m-0">
                                pursue your goals. Find the approach that fits
                              </p>
                              <p className="m-0">your needs.</p>
                            </div>
                          </div>
                          <div className="self-stretch relative h-[24.8px] text-mini-1 text-wwwbankofamericacom-science-blue">
                            <div className="absolute top-[4.4px] left-[0px] leading-[20px] flex items-center w-[76.5px] h-5">
                              Get started
                            </div>
                            <img
                              className="absolute top-[5px] left-[86.3px] w-[11.9px] h-6"
                              alt=""
                              src="/image3.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch relative h-[622px] text-[32.3px] text-wwwbankofamericacom-scorpion">
                  <div className="absolute top-[50px] left-[calc(50%_-_215.2px)] w-[430.4px] flex flex-col items-start justify-start py-0 px-[25px] box-border max-w-[1296px] text-center text-wwwbankofamericacom-mine-shaft">
                    <div className="self-stretch flex flex-col items-center justify-start py-0 px-[44.2px]">
                      <div className="self-stretch relative leading-[36px] font-light">
                        <p className="m-0">Your financial goals</p>
                        <p className="m-0">matter</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-full top-[142px] right-[0px] left-[0px] overflow-hidden flex flex-col items-start justify-start py-0 px-[35.9px] box-border min-h-[100px] text-mini-7">
                    <div className="self-stretch bg-wwwbankofamericacom-nero flex flex-col items-center justify-start z-[0]">
                      <div className="w-[358.7px] relative bg-wwwbankofamericacom-nero h-[360px] overflow-hidden shrink-0 max-w-[1296px]">
                        <div className="absolute top-[0px] left-[-1077px] w-[3590px] flex flex-col items-start justify-start py-0 pr-[2169px] pl-[1092px] box-border">
                          <div className="self-stretch h-[360px] flex flex-row items-end justify-center bg-[url('/item@3x.png')] bg-cover bg-no-repeat bg-[top]">
                            <div className="flex-1 bg-wwwbankofamericacom-concrete flex flex-col items-start justify-start pt-2 pb-[26.5px] pr-[15px] pl-[55px] box-border relative min-h-[100px]">
                              <div className="self-stretch flex flex-col items-start justify-start pt-[5.5px] px-0 pb-[0.6px] gap-[1.1px] z-[0]">
                                <div className="relative text-[14.9px] leading-[19px] font-extralight">
                                  Hello “Future Me”: A visualization
                                </div>
                                <div className="relative leading-[19px] font-extralight">
                                  technique to stick to your financial
                                </div>
                                <div className="relative leading-[19px] font-extralight">
                                  goals
                                </div>
                              </div>
                              <img
                                className="w-10 absolute !m-[0] top-[10px] left-[15px] h-10 overflow-hidden shrink-0 z-[1]"
                                alt=""
                                src="/assetsimagessitehomepageiconsent-edu-bac-5449395-icon-gc-bcsxa048e148svg.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[30px] absolute !m-[0] top-[155px] left-[17.9px] h-[50px] z-[1]">
                      <div className="absolute top-[3.1px] left-[16.5px] bg-wwwbankofamericacom-science-blue1 w-0.5 h-[26px] [transform:_rotate(45deg)] [transform-origin:0_0]" />
                      <div className="absolute top-[22.5px] left-[-1.9px] bg-wwwbankofamericacom-science-blue1 w-0.5 h-[26px] [transform:_rotate(-45deg)] [transform-origin:0_0]" />
                    </div>
                    <div className="w-[30px] absolute !m-[0] top-[155px] right-[17.9px] h-[50px] z-[2]">
                      <div className="absolute top-[4.5px] right-[15.9px] bg-wwwbankofamericacom-science-blue1 w-0.5 h-[26px] [transform:_rotate(-45deg)] [transform-origin:0_0]" />
                      <div className="absolute top-[21.1px] right-[-2.5px] bg-wwwbankofamericacom-science-blue1 w-0.5 h-[26px] [transform:_rotate(45deg)] [transform-origin:0_0]" />
                    </div>
                  </div>
                  <div className="absolute top-[502px] left-[calc(50%_-_215.2px)] w-[430.4px] flex flex-col items-start justify-start py-0 px-10 box-border max-w-[1296px] text-[16.2px]">
                    <div className="self-stretch flex flex-col items-start justify-start pt-5 px-2.5 pb-0 gap-[20px]">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch relative leading-[20px] font-light">
                          <p className="m-0">
                            Explore more topics and build your
                          </p>
                          <p className="m-0">financial know‑how.</p>
                        </div>
                      </div>
                      <div className="self-stretch bg-wwwbankofamericacom-science-blue flex flex-col items-center justify-center py-2.5 px-[50.6px] text-center text-lg text-wwwbankofamericacom-nero">
                        <div className="self-stretch relative leading-[20px]">
                          Visit Better Money Habits®
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start text-[32.8px]">
            <div className="w-[430.4px] flex flex-col items-start justify-start max-w-[430.3999938964844px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="w-[430.4px] flex flex-col items-start justify-start pt-[3.2px] px-2.5 pb-5 box-border max-w-[1296px] text-center">
                  <div className="self-stretch flex flex-col items-center justify-start py-0 px-[1.4px]">
                    <div className="self-stretch relative leading-[36px] font-light">
                      Your news and information
                    </div>
                  </div>
                </div>
                <div className="self-stretch relative h-[562px] overflow-hidden shrink-0 text-[26.1px] text-wwwbankofamericacom-mine-shaft1">
                  <div className="absolute w-full top-[-0.8px] right-[0px] left-[0px] flex flex-col items-start justify-start">
                    <div className="w-[430.4px] flex flex-col items-start justify-start py-0 pr-[5px] pl-10 box-border max-w-[1296px] z-[1]">
                      <div className="self-stretch flex flex-col items-start justify-start py-0 px-[5px] gap-[18.5px]">
                        <div className="self-stretch flex flex-col items-start justify-start">
                          <div className="flex flex-row items-start justify-start py-[0.8px] px-0">
                            <b className="relative leading-[36px]">
                              <p className="m-0">Level up your account</p>
                              <p className="m-0">security</p>
                            </b>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[0.7px] text-2xl-4 text-wwwbankofamericacom-soya-bean">
                          <div className="self-stretch relative leading-[34.99px]">
                            <p className="m-0">
                              Watch your security meter rise as
                            </p>
                            <p className="m-0">
                              you take action against fraud. See it
                            </p>
                            <p className="m-0">
                              in the Security Center in Mobile and
                            </p>
                            <p className="m-0">Online Banking.</p>
                          </div>
                        </div>
                        <div className="bg-wwwbankofamericacom-crimson flex flex-row items-center justify-start pt-[16.5px] px-5 pb-2.5 text-center text-[17.3px] text-wwwbankofamericacom-nero">
                          <div className="relative leading-[20px]">
                            Check your level
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-start py-0 pr-0 pl-[75px] z-[0]">
                      <div className="w-[250px] h-[515px] flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border">
                        <img
                          className="w-[250px] relative h-[500px] overflow-hidden shrink-0 object-cover"
                          alt=""
                          src="/assetsimagessitehomepagenewslifeservicesyni-sec-phone-4657392-ecsx8c7d2691webp@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <img
                    className="absolute top-[0px] right-[-1px] w-[767px] h-[19px]"
                    alt=""
                    src="/svg11.svg"
                  />
                  <img
                    className="absolute right-[-1px] bottom-[0px] w-[767px] h-[19px]"
                    alt=""
                    src="/svg12.svg"
                  />
                </div>
                <div className="self-stretch overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-[194.2px] box-border bg-[url('/background@3x.png')] bg-cover bg-no-repeat bg-[top] min-h-[342px] text-[21.2px] text-wwwbankofamericacom-nero">
                  <div className="w-[430.4px] flex flex-col items-start justify-start pt-[3.2px] pb-0 pr-[115.1px] pl-[45px] box-border max-w-[1296px]">
                    <div className="self-stretch flex flex-col items-start justify-start py-[15px] px-0">
                      <div className="self-stretch relative leading-[25px] font-light">
                        <p className="m-0">Secure, convenient</p>
                        <p className="m-0">banking with our</p>
                        <p className="m-0">Mobile app</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-[430.4px] flex flex-col items-start justify-start py-0 pr-2.5 pl-[45px] box-border max-w-[1296px] text-center text-[15.9px]">
                    <div className="self-stretch flex flex-col items-start justify-center">
                      <div className="bg-wwwbankofamericacom-madison flex flex-row items-center justify-start py-[10.8px] px-[20.8px] border-[1px] border-solid border-wwwbankofamericacom-nero">
                        <div className="relative leading-[18px]">
                          Explore our app
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-wwwbankofamericacom-spring-wood flex flex-col items-center justify-start text-sm text-wwwbankofamericacom-science-blue font-wwwbankofamericacom-roboto-regular-14-underline">
            <div className="w-[430.4px] flex flex-col items-start justify-start max-w-[430.3999938964844px]">
              <div className="self-stretch bg-wwwbankofamericacom-concrete flex flex-col items-start justify-start pt-[26px] px-0 pb-0">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[15px]">
                    <div className="w-[430.4px] flex flex-col items-start justify-start pt-0 px-2.5 pb-2.5 box-border max-w-[1296px]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                        <div className="self-stretch flex flex-col items-start justify-start">
                          <div className="self-stretch relative leading-[22.4px]">
                            Online Banking Service Agreement
                          </div>
                        </div>
                        <div className="self-stretch relative h-[694.4px] text-wwwbankofamericacom-scorpion">
                          <div className="absolute top-[-0.4px] left-[0px] leading-[22.4px] flex items-center w-[391.9px] h-[89.6px]">
                            <span className="w-full">
                              <p className="m-0">
                                Investing in securities involves risks, and
                                there is always the
                              </p>
                              <p className="m-0">
                                potential of losing money when you invest in
                                securities. You
                              </p>
                              <p className="m-0">
                                should review any planned financial transactions
                                that may have
                              </p>
                              <p className="m-0">
                                tax or legal implications with your personal tax
                                or legal advisor.
                              </p>
                            </span>
                          </div>
                          <div className="absolute top-[111.6px] left-[0px] leading-[22.4px] flex items-center w-[407.3px] h-[67.2px]">
                            <span className="w-full">
                              <p className="m-0">{`Securities products are provided by Merrill Lynch, Pierce, Fenner &`}</p>
                              <p className="m-0">{`Smith Incorporated (also referred to as "MLPF&S", or "Merrill"), a`}</p>
                              <p className="m-0">{`registered broker-dealer, registered investment adviser, `}</p>
                            </span>
                          </div>
                          <div className="absolute top-[159.2px] left-[0px] w-[393.9px] h-[39.2px] text-wwwbankofamericacom-science-blue">
                            <div className="absolute top-[-2.8px] left-[341.9px] leading-[22.4px] flex items-center w-[52.3px] h-[22.4px]">
                              Member
                            </div>
                            <div className="absolute top-[19.6px] left-[0px] leading-[22.4px] flex items-center w-[30.4px] h-[22.4px]">
                              SIPC
                            </div>
                          </div>
                          <div className="absolute top-[178.8px] left-[30.1px] leading-[22.4px] flex items-center w-[319.2px] h-[22.4px]">
                            , and a wholly-owned subsidiary of Bank of America
                          </div>
                          <div className="absolute top-[201.2px] left-[0px] leading-[22.4px] flex items-center w-[380px] h-[67.2px]">
                            <span className="w-full">
                              <p className="m-0">{`Corporation. MLPF&S makes available certain investment`}</p>
                              <p className="m-0">
                                products sponsored, managed, distributed or
                                provided by
                              </p>
                              <p className="m-0">
                                companies that are affiliates of Bank of America
                                Corporation.
                              </p>
                            </span>
                          </div>
                          <div className="absolute top-[290.8px] left-[0px] leading-[22.4px] flex items-center w-[404.7px] h-28">
                            <span className="w-full">
                              <p className="m-0">
                                Bank of America Private Bank is a division of
                                Bank of America,
                              </p>
                              <p className="m-0">
                                N.A., Member FDIC and a wholly owned subsidiary
                                of Bank of
                              </p>
                              <p className="m-0">
                                America Corporation. Trust and fiduciary
                                services are provided by
                              </p>
                              <p className="m-0">
                                Bank of America, N.A. and U.S. Trust Company of
                                Delaware. Both
                              </p>
                              <p className="m-0">
                                are indirect subsidiaries of Bank of America
                                Corporation.
                              </p>
                            </span>
                          </div>
                          <div className="absolute top-[425.2px] left-[0px] leading-[22.4px] flex items-center w-[408.2px] h-[89.6px]">
                            <span className="w-full">
                              <p className="m-0">
                                Insurance Products are offered through Merrill
                                Lynch Life Agency
                              </p>
                              <p className="m-0">
                                Inc. (MLLA) and/or Banc of America Insurance
                                Services, Inc., both
                              </p>
                              <p className="m-0">
                                of which are licensed insurance agencies and
                                wholly-owned
                              </p>
                              <p className="m-0">
                                subsidiaries of Bank of America Corporation.
                              </p>
                            </span>
                          </div>
                          <div className="absolute top-[537.2px] left-[0px] leading-[22.4px] flex items-center w-[410.3px] h-[156.8px]">
                            <span className="w-full">
                              <p className="m-0">
                                Banking, credit card, automobile loans, mortgage
                                and home equity
                              </p>
                              <p className="m-0">
                                products are provided by Bank of America, N.A.
                                and affiliated
                              </p>
                              <p className="m-0">
                                banks, Members FDIC and wholly owned
                                subsidiaries of Bank of
                              </p>
                              <p className="m-0">
                                America Corporation. Credit and collateral are
                                subject to approval.
                              </p>
                              <p className="m-0">
                                Terms and conditions apply. This is not a
                                commitment to lend.
                              </p>
                              <p className="m-0">
                                Programs, rates, terms and conditions are
                                subject to change
                              </p>
                              <p className="m-0">without notice.</p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[430.4px] flex flex-col items-start justify-start pt-0.5 px-2.5 pb-[50px] box-border max-w-[1296px] text-wwwbankofamericacom-scorpion">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                        <div className="self-stretch flex flex-col items-start justify-start">
                          <div className="self-stretch relative leading-[22.4px]">
                            Investment and insurance products:
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-center py-[0.4px] px-[0.8px] text-center text-xl text-wwwbankofamericacom-mine-shaft font-wwwbankofamericacom-arial-bold-16 border-[1px] border-solid border-wwwbankofamericacom-alto">
                          <div className="flex flex-col items-start justify-center">
                            <div className="flex flex-col items-start justify-start py-0 px-[0.4px]">
                              <div className="self-stretch flex flex-col items-center justify-center py-[9.8px] px-[103.3px] border-[1px] border-solid border-wwwbankofamericacom-black">
                                <b className="relative leading-[20px]">
                                  Are Not FDIC Insured
                                </b>
                              </div>
                              <div className="self-stretch flex flex-col items-center justify-center py-[9.8px] px-[82.7px] border-[1px] border-solid border-wwwbankofamericacom-black">
                                <b className="relative leading-[20px]">
                                  Are Not Bank Guaranteed
                                </b>
                              </div>
                              <div className="self-stretch flex flex-col items-center justify-center py-[9.8px] px-[129.9px] border-[1px] border-solid border-wwwbankofamericacom-black">
                                <b className="relative leading-[20px]">
                                  May Lose Value
                                </b>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start py-0 px-[0.4px]">
                              <div className="self-stretch flex flex-col items-center justify-center py-[9.8px] px-[123.3px] border-[1px] border-solid border-wwwbankofamericacom-black">
                                <b className="relative leading-[20px]">
                                  Are Not Deposits
                                </b>
                              </div>
                              <div className="self-stretch flex flex-col items-center justify-center py-[9.8px] px-[55.3px] border-[1px] border-solid border-wwwbankofamericacom-black">
                                <b className="relative leading-[20px]">
                                  <p className="m-0">
                                    Are Not Insured by Any Federal
                                  </p>
                                  <p className="m-0">Government Agency</p>
                                </b>
                              </div>
                              <div className="self-stretch flex flex-col items-center justify-center py-[9.8px] px-[34.8px] border-[1px] border-solid border-wwwbankofamericacom-black">
                                <b className="relative leading-[20px]">
                                  <p className="m-0">
                                    Are Not a Condition to Any Banking
                                  </p>
                                  <p className="m-0">Service or Activity</p>
                                </b>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-wwwbankofamericacom-midnight-blue h-[365px] flex flex-col items-center justify-start pt-0 px-0 pb-10 box-border text-center text-wwwbankofamericacom-nero">
                    <div className="w-[430.4px] flex flex-col items-start justify-start py-0 px-2.5 box-border max-w-[1296px]">
                      <div className="self-stretch h-[206px] flex flex-col items-start justify-start py-[30px] px-0 box-border relative gap-[20px]">
                        <div className="w-[409.7px] flex flex-row flex-wrap items-start justify-center py-0 px-[17px] box-border z-[0]">
                          <div className="h-[16.8px] flex flex-row items-center justify-start">
                            <div className="flex flex-row items-start justify-center">
                              <div className="relative leading-[20px]">
                                Locations
                              </div>
                            </div>
                            <div className="w-[28.7px] relative h-[16.8px] text-11xl text-wwwbankofamericacom-swirl font-wwwbankofamericacom-inter-regular-966">
                              <div className="absolute top-[0px] left-[0px] w-[28.7px] h-[16.8px] overflow-hidden">
                                <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_0.55px)] w-px h-[30px] overflow-hidden">
                                  <div className="absolute top-[0%] left-[-400%]">
                                    |
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="h-[16.8px] flex flex-row items-center justify-start">
                            <div className="flex flex-row items-start justify-center">
                              <div className="relative leading-[20px]">
                                Contact Us
                              </div>
                            </div>
                            <div className="w-[28.7px] relative h-[16.8px] text-11xl text-wwwbankofamericacom-swirl font-wwwbankofamericacom-inter-regular-966">
                              <div className="absolute top-[0px] left-[0px] w-[28.7px] h-[16.8px] overflow-hidden">
                                <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_0.55px)] w-px h-[30px] overflow-hidden">
                                  <div className="absolute top-[0%] left-[-400%]">
                                    |
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start">
                            <div className="flex flex-row items-start justify-center">
                              <div className="relative leading-[20px]">{`Help & Support`}</div>
                            </div>
                          </div>
                          <div className="h-[16.8px] flex flex-row items-center justify-start">
                            <div className="flex flex-row items-start justify-center">
                              <div className="relative leading-[20px]">
                                Browse with Specialist
                              </div>
                            </div>
                            <div className="w-[28.7px] relative h-[16.8px] text-11xl text-wwwbankofamericacom-swirl font-wwwbankofamericacom-inter-regular-966">
                              <div className="absolute top-[0px] left-[0px] w-[28.7px] h-[16.8px] overflow-hidden">
                                <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_0.55px)] w-px h-[30px] overflow-hidden">
                                  <div className="absolute top-[0%] left-[-400%]">
                                    |
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="h-[16.8px] flex flex-row items-center justify-start">
                            <div className="flex flex-row items-start justify-center">
                              <div className="relative leading-[20px]">
                                Accessible Banking
                              </div>
                            </div>
                            <div className="w-[28.7px] relative h-[16.8px] text-11xl text-wwwbankofamericacom-swirl font-wwwbankofamericacom-inter-regular-966">
                              <div className="absolute top-[0px] left-[0px] w-[28.7px] h-[16.8px] overflow-hidden">
                                <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_0.55px)] w-px h-[30px] overflow-hidden">
                                  <div className="absolute top-[0%] left-[-400%]">
                                    |
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start">
                            <div className="flex flex-row items-start justify-center">
                              <div className="relative leading-[20px]">
                                Privacy
                              </div>
                            </div>
                          </div>
                          <div className="h-[16.8px] flex flex-row items-center justify-start">
                            <div className="flex flex-row items-start justify-center">
                              <div className="relative leading-[20px]">
                                Children’s Privacy
                              </div>
                            </div>
                            <div className="w-[28.7px] relative h-[16.8px] text-11xl text-wwwbankofamericacom-swirl font-wwwbankofamericacom-inter-regular-966">
                              <div className="absolute top-[0px] left-[0px] w-[28.7px] h-[16.8px] overflow-hidden">
                                <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_0.55px)] w-px h-[30px] overflow-hidden">
                                  <div className="absolute top-[0%] left-[-400%]">
                                    |
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start">
                            <div className="flex flex-row items-start justify-center">
                              <div className="relative leading-[20px]">
                                Security
                              </div>
                            </div>
                          </div>
                          <div className="h-[16.8px] flex flex-row items-center justify-start">
                            <div className="flex flex-row items-start justify-center">
                              <div className="relative leading-[20px]">
                                Online Banking Service Agreement
                              </div>
                            </div>
                            <div className="w-[28.7px] relative h-[16.8px] text-11xl text-wwwbankofamericacom-swirl font-wwwbankofamericacom-inter-regular-966">
                              <div className="absolute top-[0px] left-[0px] w-[28.7px] h-[16.8px] overflow-hidden">
                                <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_0.55px)] w-px h-[30px] overflow-hidden">
                                  <div className="absolute top-[0%] left-[-400%]">
                                    |
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start">
                            <div className="flex flex-row items-start justify-center pt-0 px-0 pb-[2.8px] border-b-[0.8px] border-dashed border-wwwbankofamericacom-nero">
                              <div className="relative leading-[20px]">
                                Advertising Practices
                              </div>
                            </div>
                          </div>
                          <div className="w-[187.3px] relative h-[16.8px]">
                            <div className="absolute top-[-1.6px] left-[0px] flex flex-row items-start justify-center">
                              <div className="relative leading-[20px]">
                                Your Privacy Choices
                              </div>
                            </div>
                            <img
                              className="absolute top-[2.4px] left-[135.7px] w-[22.9px] h-3 overflow-hidden object-cover"
                              alt=""
                              src="/assetsimagesgloballogosbofa-icon-optout1-kocsx2fdcab0bpng@2x.png"
                            />
                            <div className="absolute top-[0px] left-[calc(50%_+_64.95px)] w-[28.7px] h-[16.8px] text-11xl text-wwwbankofamericacom-swirl font-wwwbankofamericacom-inter-regular-966">
                              <div className="absolute top-[0px] left-[0px] w-[28.7px] h-[16.8px] overflow-hidden">
                                <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_0.55px)] w-px h-[30px] overflow-hidden">
                                  <div className="absolute top-[0%] left-[-400%]">
                                    |
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="h-[16.8px] flex flex-row items-center justify-start">
                            <div className="flex flex-row items-start justify-center">
                              <div className="relative leading-[20px]">
                                Site Map
                              </div>
                            </div>
                            <div className="w-[28.7px] relative h-[16.8px] text-11xl text-wwwbankofamericacom-swirl font-wwwbankofamericacom-inter-regular-966">
                              <div className="absolute top-[0px] left-[0px] w-[28.7px] h-[16.8px] overflow-hidden">
                                <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_0.55px)] w-px h-[30px] overflow-hidden">
                                  <div className="absolute top-[0%] left-[-400%]">
                                    |
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start">
                            <div className="flex flex-row items-start justify-center">
                              <div className="relative leading-[20px]">
                                Careers
                              </div>
                            </div>
                          </div>
                          <div className="h-[16.8px] flex flex-row items-center justify-start">
                            <div className="flex flex-row items-start justify-center">
                              <div className="relative leading-[20px]">
                                Share Your Feedback
                              </div>
                            </div>
                            <div className="w-[28.7px] relative h-[16.8px] text-11xl text-wwwbankofamericacom-swirl font-wwwbankofamericacom-inter-regular-966">
                              <div className="absolute top-[0px] left-[0px] w-[28.7px] h-[16.8px] overflow-hidden">
                                <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_0.55px)] w-px h-[30px] overflow-hidden">
                                  <div className="absolute top-[0%] left-[-400%]">
                                    |
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start">
                            <div className="flex flex-row items-start justify-center">
                              <div className="relative leading-[20px]">
                                View Full Online Banking Site
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-center pt-0 px-0 pb-2.5 z-[1] text-base font-wwwbankofamericacom-arial-bold-16">
                          <div className="flex-1 relative h-[22.4px]">
                            <div className="absolute w-[calc(100%_-_0.4px)] top-[0px] right-[0.4px] left-[0px] flex flex-col items-center justify-start py-0 px-[69.7px] box-border">
                              <b className="relative leading-[22.4px]">
                                Connect with us
                              </b>
                            </div>
                            <div className="absolute top-[34.8px] left-[73px] flex flex-row items-start justify-start gap-[15px]">
                              <div className="w-[30px] h-[30px] flex flex-col items-center justify-start">
                                <img
                                  className="w-[30px] relative h-[30px]"
                                  alt=""
                                  src="/svg13.svg"
                                />
                              </div>
                              <div className="w-[30px] h-[30px] flex flex-col items-center justify-start">
                                <img
                                  className="w-[30px] relative h-[30px]"
                                  alt=""
                                  src="/svg14.svg"
                                />
                              </div>
                              <div className="w-[31px] h-[30px] flex flex-col items-center justify-start py-0 px-[0.5px] box-border">
                                <img
                                  className="w-[30px] relative h-[30px]"
                                  alt=""
                                  src="/svg15.svg"
                                />
                              </div>
                              <div className="w-[30px] h-[30px] flex flex-col items-center justify-start">
                                <img
                                  className="w-[30px] relative h-[30px]"
                                  alt=""
                                  src="/svg16.svg"
                                />
                              </div>
                              <div className="w-[37px] h-[30px] flex flex-col items-center justify-start py-0 pr-[0.1px] pl-0 box-border">
                                <img
                                  className="w-[36.9px] relative h-[30px]"
                                  alt=""
                                  src="/svg17.svg"
                                />
                              </div>
                              <div className="w-[30px] h-[30px] flex flex-col items-center justify-start">
                                <img
                                  className="w-[30px] relative h-[30px]"
                                  alt=""
                                  src="/svg18.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full !m-[0] absolute top-[262.2px] right-[0px] left-[0px] flex flex-col items-center justify-start z-[2]">
                          <div className="self-stretch flex flex-col items-center justify-start gap-[0.4px]">
                            <div className="relative leading-[22.4px]">
                              Bank of America, N.A. Member FDIC.
                            </div>
                            <div className="self-stretch flex flex-col items-center justify-start pt-[14.4px] px-[127.2px] pb-[3.2px]">
                              <div className="w-[156.1px] relative h-[16.8px]">
                                <img
                                  className="absolute top-[0px] left-[0px] w-[156.1px] h-[16.8px] overflow-hidden"
                                  alt=""
                                  src="/assetsimagesgloballogosiconehlwhitecsx189e8f4csvg-fill.svg"
                                />
                                <div className="absolute top-[-2.8px] left-[calc(50%_-_78.05px)] [text-decoration:underline] leading-[22.4px] flex items-center justify-center w-[136.4px] h-[22.4px]">
                                  Equal Housing Lender
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-col items-center justify-start py-0 px-[29.3px]">
                            <div className="self-stretch relative leading-[22.4px]">
                              © 2024 Bank of America Corporation. All rights
                              reserved.
                            </div>
                          </div>
                          <div className="self-stretch flex flex-col items-center justify-start pt-3 px-[93.7px] pb-0">
                            <div className="self-stretch relative [text-decoration:underline] leading-[22.4px]">
                              Patent: patents.bankofamerica.com
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
        </div>
        <div className="w-[430.4px] !m-[0] absolute bottom-[0.2px] left-[0px] flex flex-col items-start justify-start z-[1] text-3xs-7">
          <div className="self-stretch shadow-[0px_0px_1px_#787878] bg-wwwbankofamericacom-concrete flex flex-row items-center justify-center py-2.5 px-[15px] relative">
            <div className="flex flex-row items-center justify-start z-[0]">
              <div className="w-[45px] h-[30px] flex flex-col items-start justify-start py-0 pr-[15px] pl-0 box-border">
                <img
                  className="w-[30px] relative h-[30px] overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/assetsimagessitehpassetsengagementbannerconsumerbofa-trvsigcm-v-60x60csx79ffdbdcpng@2x.png"
                />
              </div>
              <div className="w-[355.4px] relative h-[24.8px]">
                <div className="absolute top-[-0.6px] left-[0px] flex flex-col items-start justify-start pt-0 pb-[0.6px] pr-[26.6px] pl-0">
                  <div className="relative leading-[12.4px] z-[0]">
                    <p className="m-0">
                      You pick the place and time. We'll deliver unlimited
                      travel rewards.
                    </p>
                    <p className="m-0 text-wwwbankofamericacom-science-blue1">{`Apply now >`}</p>
                  </div>
                  <div className="w-[398.4px] absolute !m-[0] h-[calc(100%_+_24.6px)] top-[-12px] bottom-[-12.6px] left-[-60px] z-[1]" />
                </div>
              </div>
            </div>
            <div className="!m-[0] absolute h-3/6 top-[20%] right-[7.4px] bottom-[30%] flex flex-col items-start justify-start z-[1] text-[25px] text-wwwbankofamericacom-scorpion">
              <div className="relative leading-[25px]">×</div>
            </div>
          </div>
        </div>
      </div>
      {isDialogPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDialogPopup}
        >
          <Dialog onClose={closeDialogPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Index1;
