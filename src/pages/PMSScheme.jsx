import React from "react";

export default function PMSScheme() {
  return (
    <div className="px-4 sm:px-8 py-10 max-w-5xl mx-auto text-slate-800">

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">
        Procurement and Marketing Support (PMS) Scheme
      </h1>

      {/* Description */}
      <p className="text-sm sm:text-base leading-relaxed mb-8">
        The Procurement and Marketing Support (PMS) Scheme is an initiative by the Ministry of MSME 
        designed to enhance the market reach and competitiveness of Micro and Small Enterprises (MSEs). 
        It promotes awareness about modern marketing practices such as e-commerce, advanced packaging, 
        and participation in the Government e-Marketplace (GeM), while providing platforms like trade 
        fairs and exhibitions for businesses to showcase their products.
      </p>

      {/* Scheme Overview */}
      <h2 className="text-xl font-semibold mb-4">
        PMS Scheme Overview
      </h2>

      <div className="overflow-x-auto mb-10">
        <table className="min-w-full border border-black text-sm sm:text-base">
          <tbody>

            <tr>
              <td className="border border-black p-2 font-semibold w-1/3">
                Primary Objective
              </td>
              <td className="border border-black p-2">
                To promote new market access initiatives and educate MSMEs on packaging, 
                import-export policies, and trade developments.
              </td>
            </tr>

            <tr>
              <td className="border border-black p-2 font-semibold">
                Capacity Building
              </td>
              <td className="border border-black p-2">
                Supports adoption of Modern Packaging Techniques, Bar Codes, and e-Commerce Platforms.
              </td>
            </tr>

            <tr>
              <td className="border border-black p-2 font-semibold">
                Market Access
              </td>
              <td className="border border-black p-2">
                Facilitates participation in National/International Trade Fairs, Exhibitions, and MSME Expos.
              </td>
            </tr>

            <tr>
              <td className="border border-black p-2 font-semibold">
                Key Programs
              </td>
              <td className="border border-black p-2">
                Includes Vendor Development Programs (VDP) and organizing domestic/international exhibitions.
              </td>
            </tr>

            <tr>
              <td className="border border-black p-2 font-semibold">
                Infrastructure
              </td>
              <td className="border border-black p-2">
                Focuses on developing retail outlets to promote Geographical Indication (GI) products.
              </td>
            </tr>

            <tr>
              <td className="border border-black p-2 font-semibold">
                Eligibility
              </td>
              <td className="border border-black p-2">
                Open to Manufacturing and Service Sector MSEs with a valid Udyam Registration (UR) Certificate.
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      {/* How to Apply */}
      <h2 className="text-xl font-semibold mb-3">
        How to Apply
      </h2>

      <p className="text-sm sm:text-base leading-relaxed">
        Eligible Micro and Small Enterprises (MSEs) can apply online through the official 
        DCMSME or MyMSME portals by providing their valid Udyam Registration details.
      </p>

    </div>
  );
}