import React from "react";
import { INSTAGRAM_URL, HELLOWORK_SHIP_CARPENTER_URL, HELLOWORK_FURNITURE_CRAFTSMAN_URL } from "../constants/urls";

const JobsPage: React.FC = () => {
  return (
    <section id="jobs" className="section">
      <div className="container">
        <h2>求人情報</h2>
        <p>
          ゆうき工芸では、ものづくりへの情熱を共有し、共に成長できる新しい仲間を募集しています。未経験の方も大歓迎です。
        </p>
        <div className="job-details-grid">
          <div className="job-detail-item">
            <h3>福利厚生</h3>
            <ul>
              <li>社会保険完備（健康保険、厚生年金、雇用保険、労災保険）</li>
              <li>資格取得支援制度</li>
              <li>健康診断</li>
            </ul>
          </div>
          <div className="job-detail-item">
            <h3>社員インタビュー</h3>
            <p>
              「入社して驚いたのは、先輩方がとても丁寧に教えてくれること。未経験の私でも、安心して技術を学ぶことができました。自分の作ったものが船の一部になるのは、本当にやりがいがあります。」（入社2年目・船舶内装担当）
            </p>
          </div>
          <div className="job-detail-item">
            <h3>仕事の1日の流れ（船舶現場大工の一例）</h3>
            <ol>
              <li>**8:00** 出社、朝礼、作業内容の確認</li>
              <li>
                **8:30** 現場へ移動、作業開始（木材加工、壁材の取り付けなど）
              </li>
              <li>**12:00** 昼休憩</li>
              <li>**13:00** 午後の作業開始、什器の取り付け、仕上げ作業</li>
              <li>**17:00** 作業終了、片付け、翌日の準備</li>
              <li>**17:30** 退社</li>
            </ol>
          </div>
        </div>

        <div className="job-links">
          import { INSTAGRAM_URL, HELLOWORK_SHIP_CARPENTER_URL, HELLOWORK_FURNITURE_CRAFTSMAN_URL } from "../constants/urls";

// ... (既存のコード)

          <a
            href={HELLOWORK_SHIP_CARPENTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            船舶現場大工応募へのリンク
          </a>
          <a
            href={HELLOWORK_FURNITURE_CRAFTSMAN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            家具職人応募へのリンク
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            インスタへのリンク
          </a>
        </div>
      </div>
    </section>
  );
};

export default JobsPage;
