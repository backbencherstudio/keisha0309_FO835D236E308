/* eslint-disable react/no-unescaped-entities */
import React from "react";
import image from "@/public/image/ECar.png";
import Image from "next/image";
import DrugTestIcon from "@/public/icon/DrugTestIcon";
import PolicyIcon from "@/public/icon/PolicyIcon";
import WifiErrorIcon from "@/public/icon/WifiErrorIcon";
import DatabaseIcon from "@/public/icon/DatabaseIcon";

export default function ZeroToleranceDrug() {
  return (
    <div className="w-full max-w-[1320px] mx-auto px-4 lg:px-0 space-y-6 pb-[50px] lg:pb-[100px]">
      {/* Top */}
      <div className="flex flex-col lg:flex-row items-center gap-6">
        <Image src={image} alt="img" className="rounded-b-xl" />
        <div className="space-y-6">
          <div className="space-x-2">
            <h1 className="text-[48px] font-bold leading-[130%]">
              Zero Tolerance Drug & <br /> Alcohol Policy
            </h1>
            <p className="text-[#4A4C56] leading-[160%]">
              Scott's Transportation Co. maintains a strict zero tolerance
              policy regarding drug and alcohol use for all vehicle-for-hire
              drivers. This policy is enforced to ensure the safety of our
              passengers, drivers, & the communities we serve.
            </p>
          </div>
          <div className="border border-[#DFE1E7] rounded-xl">
            <div className="flex items-center gap-2 bg-white rounded-xl px-6 py-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F3E7E8]">
                <DrugTestIcon />
              </div>
              <h1 className="text-2xl font-bold leading-[130%]">
                Drug & Alcohol Testing
              </h1>
            </div>
            <hr className="text-[#DFE1E7]" />
            <div className="bg-[#F8FAFB] pt-[18px] pb-[24px] px-6 rounded-xl space-y-3">
              <h1 className="text-lg font-semibold leading-[160%]">
                We conduct testing under the following circumstances
              </h1>
              <div>
                <h1 className="font-semibold leading-[160%]">Random Testing</h1>
                <p className="text-lg text-[#4A4C56] leading-[160%]">
                  Drivers may be selected at any time.
                </p>
              </div>
              <div>
                <h1 className="font-semibold leading-[160%]">
                  For-Cause Testing
                </h1>
                <p className="text-lg text-[#4A4C56] leading-[160%]">
                  If there is evidence or behavior suggesting impairment.
                </p>
              </div>
              <div>
                <h1 className="font-semibold leading-[160%]">
                  Post-Accident Testing
                </h1>
                <p className="text-lg text-[#4A4C56] leading-[160%]">
                  After any incident involving injury or potential driver fault.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 border border-[#DFE1E7] rounded-xl">
          <div className="flex items-center gap-2 bg-white rounded-xl px-6 py-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F3E7E8]">
              <PolicyIcon />
            </div>
            <h1 className="text-2xl font-bold leading-[130%]">
              Policy Overview
            </h1>
          </div>
          <hr className="text-[#DFE1E7]" />
          <div className="bg-[#F8FAFB] pt-[18px] pb-[24px] px-6 rounded-xl space-y-3">
            <h1 className="text-lg font-semibold leading-[160%]">
              We conduct testing under the following circumstances
            </h1>
            <div>
              <h1 className="font-semibold leading-[160%]">
                Drivers are strictly prohibited from
              </h1>
              <p className="text-[#4A4C56] leading-[160%]">
                Using, possessing, soliciting, or selling illegal drugs,
                alcohol, or unauthorized prescription medications while on duty
                or on company/customer premises.
              </p>
              <p className="text-[#4A4C56] leading-[160%]">
                Operating a vehicle while impaired by any substance — legal or
                illegal — that affects performance or safety.
              </p>
              <p className="text-[#4A4C56] leading-[160%]">
                Having any detectable amount of prohibited substances in their
                system while working or representing the company.
              </p>
            </div>
            <div className="flex  gap-2 bg-[#ECEFF3] p-4 rounded-xl">
            <span className="pt-2">
              <WifiErrorIcon  className='text-2xl' />
            </span>
              <p className="text-[#4A4C56] leading-[160%]">
                Refusal to comply with testing or a confirmed violation may
                result in disciplinary action, including termination of the
                driver agreement. Drivers will have the opportunity to explain
                circumstances before any final decision is made.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 border h-fit border-[#DFE1E7] rounded-xl">
          <div className="flex  items-center gap-2 bg-white rounded-xl px-6 py-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F3E7E8]">
              <DatabaseIcon />
            </div>
            <h1 className="text-2xl font-bold leading-[130%]">
              Operating Authority’s Rate Information
            </h1>
          </div>
          <hr className="text-[#DFE1E7]" />
          <div className="bg-[#F8FAFB] pt-[18px] pb-[24px] px-6 rounded-b-xl space-y-3">
            <div>
              <h1 className="font-semibold leading-[160%]">
                Pricing Information
              </h1>
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1 space-y-2 bg-[#ECEFF3] p-4 rounded-xl">
                <h1>Rates</h1>
                <p className="text-[#4A4C56] leading-[160%]">
                  1. Free for children
                </p>
                <p className="text-[#4A4C56] leading-[160%]">
                  2. Free for elderly
                </p>
                <p className="flex gap-1.5">
                  Group Rate:{" "}
                  <span className="text-[#4A4C56] leading-[160%]">
                    $5 – $8 per person
                  </span>
                </p>
              </div>

              <div className="flex-1 space-y-2 bg-[#ECEFF3] p-4 rounded-xl">
                <h1>Wheelchair Accessibility</h1>
                <p className="text-[#4A4C56] leading-[160%]">
                  Wheelchair accessible vehicles are available upon request.
                </p>

                <p className="flex gap-1.5">
                  Rate:{" "}
                  <span className="text-[#4A4C56] leading-[160%]">
                    $10 per person
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
