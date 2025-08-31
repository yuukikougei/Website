import React from 'react';

const ServicesPage: React.FC = () => {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2>事業内容</h2>
        <div className="services-grid"> {/* Added grid container */}
          <div className="service-item"> {/* Added item wrapper */}
            <h3>・船舶内装</h3>
            <p>船舶木艤装内装工事を主に、木根太、シナベニヤ、アスベストボード、パネル等の壁材を使った施工や、居住区、トイレ等の什器の取り付けを行っています。年間 6〜8 隻の受注生産で、お客様のニーズに合わせた高品質な内装を提供します。</p>
          </div>
          <div className="service-item"> {/* Added item wrapper */}
            <h3>・オーダーメイド家具制作</h3>
            <p>お客様のニーズに応じたオーダー家具の製作も行っています。船舶家具で培った技術を活かし、デザイン性と耐久性を両立した家具を一つひとつ丁寧に製作します。</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;