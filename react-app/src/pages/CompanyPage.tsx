import React from 'react';

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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3358.50198769344!2d129.8202633151742!3d32.67256998099968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35155a9576555555%3A0x5e8e7a8b8f8e8e8e!2z44CSODUxLTAzMDE!5e0!3m2!1sja!2sjp!4v1692772285141!5m2!1sja!2sjp"
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