import React from 'react';

const JobsPage: React.FC = () => {
  return (
    <section id="jobs" className="section">
      <div className="container">
        <h2>求人情報</h2>
        <p>ゆうき工芸では、ものづくりへの情熱を共有し、共に成長できる新しい仲間を募集しています。未経験の方も大歓迎です。</p>
        <div className="job-details-grid"> {/* New grid container */}
          <div className="job-detail-item"> {/* Item for Welfare */}
            <h3>福利厚生</h3>
            <ul>
              <li>社会保険完備（健康保険、厚生年金、雇用保険、労災保険）</li>
              <li>交通費支給（上限あり）</li>
              <li>資格取得支援制度</li>
              <li>健康診断</li>
            </ul>
          </div>

          <div className="job-detail-item"> {/* Item for Interview */}
            <h3>社員インタビュー</h3>
            <p>「入社して驚いたのは、先輩方がとても丁寧に教えてくれること。未経験の私でも、安心して技術を学ぶことができました。自分の作ったものが船の一部になるのは、本当にやりがいがあります。」（入社2年目・船舶内装担当）</p>
          </div>

          <div className="job-detail-item"> {/* Item for Daily Flow */}
            <h3>仕事の1日の流れ（船舶現場大工の一例）</h3>
            <ol>
              <li>**8:00** 出社、朝礼、作業内容の確認</li>
              <li>**8:30** 現場へ移動、作業開始（木材加工、壁材の取り付けなど）</li>
              <li>**12:00** 昼休憩</li>
              <li>**13:00** 午後の作業開始、什器の取り付け、仕上げ作業</li>
              <li>**17:00** 作業終了、片付け、翌日の準備</li>
              <li>**17:30** 退社</li>
            </ol>
          </div>
        </div>

        <div className="job-links"> {/* New wrapper for buttons */}
          <a href="https://www.hellowork.careers/%E3%82%86%E3%81%83%E3%81%8D%E5%B7%A5%E8%8A%B8%E3%81%A7%E3%81%AE%E8%88%B9%E8%88%B6%E7%8F%BE%E5%A0%B4%E5%A4%A7%E5%B7%A5%EF%BC%88%E5%86%85%E8%A3%85%E5%8F%8A%E3%81%B3%E6%8D%AE%E4%BB%98%EF%BC%89%E3%81%AE%E3%83%8F%E3%83%AD%E3%83%BC%E3%83%AF%E3%83%BC%E3%82%AF%E6%B1%82%E4%BA%BA%E6%83%85%E5%A0%B1%EF%BC%88%E9%95%B7%E5%B4%8E%E7%9C%8C%E9%95%B7%E5%B4%8E%E5%B8%82%EF%BC%89-%2042010-13269151/" target="_blank" rel="noopener noreferrer" className="btn-secondary">船舶現場大工応募へのリンク</a>
          <a href="https://www.hellowork.careers/%E3%82%86%E3%81%83%E3%81%8D%E5%B7%A5%E8%8A%B8%E3%81%A7%E3%81%AE%E5%AE%B6%E5%85%B7%E8%81%B7%E4%BA%BA%EF%BC%88%E8%88%B6%E8%88%B6%E5%AE%B6%E5%85%B7%EF%BC%89%E3%81%AE%E3%83%8F%E3%83%AD%E3%83%BC%E3%83%AF%E3%83%BC%E3%82%AF%E6%B1%82%E4%BA%BA%E6%83%85%E5%A0%B1%EF%BC%88%E9%95%B7%E5%B4%8E%E7%9C%8C%E9%95%B7%E5%B4%8E%E5%B8%82%EF%BC%89-%2042010-13270551/" target="_blank" rel="noopener noreferrer" className="btn-secondary">家具職人応募へのリンク</a>
          <a href="https://www.instagram.com/yuukikougei_?igsh=c2xmNjJrajN2ZnA1" target="_blank" rel="noopener noreferrer" className="btn-secondary">インスタへのリンク</a>
        </div>
      </div>
    </section>
  );
};

export default JobsPage;