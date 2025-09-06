import React from "react";

const CompanyPage: React.FC = () => {
  return (
    <section id="company" className="section">
      <div className="container">
        <h2>会社概要・アクセスマップ</h2>
        <p>会社名: ゆうき工芸</p>
        <p>代表者: 伊東</p>
        <p>所在地: 〒 851-0301 長崎県長崎市深堀町 6 丁目 432 番地</p>
        <p>電話番号: 095-832-3871</p>
        <p>FAX 番号: 095-832-3872</p>
        <p>事業内容: 船舶家具、船舶内装工事、オーダー家具製作</p>
        <div className="map-placeholder">
          import { GOOGLE_MAPS_EMBED_URL } from "../constants/urls";

// ... (既存のコード)

          <iframe
            src={GOOGLE_MAPS_EMBED_URL}
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
