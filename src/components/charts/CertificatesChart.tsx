"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const certificates = [
  { description: "verified", number: 344, color: "#49dc1e" }, //bg-green
  { description: "expired", number: 44, color: "#FF0000" }, //bg-red
  { description: "expiring_in_one_week", number: 7, color: "#ff8333" }, //bg-orange
  {
    description: "expiring_in_on_week_thirty_days",
    number: 43,
    color: "#ffbb33",
  }, //bg-yellow
  {
    description: "expiring_in_thirity_ninety_days",
    number: 59,
    color: "#b89b23",
  },
  {
    description: "expiring_after_ninety_days",
    number: 159,
    color: "#1e9ddc",
  },
];
const CertificatesChart = () => {
  const { t } = useTranslation();
  const totalCertificates = certificates.reduce(
    (sum, certificate) => sum + certificate.number,
    0
  );
  return (
    <div className="w-100 h-113 p-4 bg-cyan-100 rounded-sm sm:p-8">
      <div className="flex flex-row items-center justify-between mb-4 w-65">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          {" "}
          {t("certificates")}
        </h5>
        <span className="bg-blue-400 text-cyan-100 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full border border-yellow-300">
          {totalCertificates}
        </span>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          {certificates.map((certificate, index) => {
            return (
              <li
                key={index}
                className="my-2 sm:py-4 rounded-sm h-11"
                style={{ background: certificate.color }}
              >
                <div className="flex items-center">
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-bold text-gray-900 truncate dark:text-white">
                      {t(certificate.description)}
                    </p>
                  </div>
                  <div className="inline-flex items-center mr-2 text-base font-semibold text-gray-900 dark:text-white">
                    {certificate.number}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CertificatesChart;
