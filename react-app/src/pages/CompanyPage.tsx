import React from "react";
import { MAP_URLS } from "../constants/urls";
import { COMPANY_INFO } from "../constants/data";

const CompanyPage: React.FC = () => {
  return (
    <section id="company" className="section">
      <div className="container">
        <h2>会社概要・アクセスマップ</h2>
        <p>会社名: {COMPANY_INFO.name}</p>
        <p>代表者: {COMPANY_INFO.representative}</p>
        <p>所在地: {COMPANY_INFO.address}</p>
        <p>電話番号: {COMPANY_INFO.phone}</p>
        <p>FAX 番号: {COMPANY_INFO.fax}</p>
        <p>事業内容: {COMPANY_INFO.businessContent}</p>
        <div className="map-placeholder">
          <iframe
            src={MAP_URLS.GOOGLE_MAPS_EMBED}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default CompanyPage;
