"use client";
import { useState } from "react";
const Arrow = () => <span aria-hidden="true">↗</span>;
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <main>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Abant Su ana sayfa"><span className="brand-mark">ABANT</span><span className="brand-sub">DOĞAL KAYNAK SUYU</span></a>
      <nav className={menuOpen ? "nav open" : "nav"} aria-label="Ana menü">
        <a href="#hikaye" onClick={()=>setMenuOpen(false)}>Hikâyemiz</a><a href="#urunler" onClick={()=>setMenuOpen(false)}>Ürünler</a><a href="#kalite" onClick={()=>setMenuOpen(false)}>Kalite</a><a href="#iletisim" onClick={()=>setMenuOpen(false)}>İletişim</a>
      </nav>
      <a className="order-button" href="https://order.abantsu.com.tr/" target="_blank" rel="noreferrer">Online sipariş <Arrow /></a>
      <button className="menu-button" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Menüyü aç" aria-expanded={menuOpen}><span/><span/></button>
    </header>
    <section className="hero" id="top">
      <div className="hero-content"><p className="eyebrow light">Abant&apos;ın kalbinden · 1974&apos;ten beri</p><h1>Doğanın<br/><em>en saf</em> hâli.</h1><p className="hero-copy">Koruma altındaki Abant coğrafyasının dinginliği, her damlasında.</p><div className="hero-actions"><a className="primary-button" href="#urunler">Ürünleri keşfet <span>↓</span></a><a className="text-link light" href="#hikaye">Kaynağımıza yolculuk <Arrow/></a></div></div>
      <div className="source-chip"><span className="pulse"/><div><small>Doğal kaynağımız</small><strong>Abant, Bolu</strong></div></div><div className="scroll-note">KEŞFET <span/></div>
    </section>
    <section className="intro" id="hikaye">
      <div><p className="eyebrow">01 · KAYNAĞIMIZ</p><h2>Bir suyun tadı,<br/>geldiği <em>yeri anlatır.</em></h2></div>
      <div className="intro-copy"><p>Abant Su, adını Türkiye&apos;nin en zengin floralarından birine ev sahipliği yapan, tabiat parkı unvanıyla korunan doğa harikası Abant&apos;tan alır.</p><a className="text-link" href="#kalite">Hikâyemizi keşfet <Arrow/></a></div>
      <div className="metrics"><div><strong>1974</strong><span>Doğadan sofralara</span></div><div><strong>%100</strong><span>Doğal kaynak suyu</span></div><div><strong>7/24</strong><span>Kalite kontrolü</span></div></div>
    </section>
    <section className="products" id="urunler">
      <div className="section-heading"><div><p className="eyebrow light">02 · ÜRÜNLERİMİZ</p><h2>Her ana eşlik eden<br/><em>doğal ferahlık.</em></h2></div><p>Evde, masada, yolda. Abant&apos;ın saflığı farklı ihtiyaçlara uygun seçeneklerle her zaman sizinle.</p></div>
      <div className="product-grid">
        <ProductCard no="01" type="glass" title="Cam Şişe" sizes="33 cl · 75 cl" tag="İKONİK SERİ"/>
        <ProductCard no="02" type="pet" title="Pet Şişe" sizes="33 cl'den 5 L'ye"/>
        <ProductCard no="03" type="carboy" title="Damacana" sizes="19 L · Cam & Pet"/>
      </div>
    </section>
    <section className="quality" id="kalite"><div className="quality-photo" role="img" aria-label="Sisler içindeki Abant ormanı"/><div className="quality-content"><p className="eyebrow light">03 · KALİTE YAKLAŞIMIMIZ</p><h2>Kaynağından<br/>şişesine, <em>özenle.</em></h2><p>Modern, hijyenik ve çevreye duyarlı üretim sistemlerimizle suyun doğal yapısını ve lezzetini koruyoruz.</p><div className="quality-list"><span>Uluslararası standartlar</span><span>Çevreci üretim</span><span>Düzenli analiz</span></div><a className="primary-button inverse" href="https://abantsu.com.tr/analiz-raporlari-kalite-politikalari/" target="_blank" rel="noreferrer">Analiz raporları <Arrow/></a></div></section>
    <section className="cta" id="iletisim"><p className="eyebrow">ABANT SU YANINIZDA</p><h2>Doğallığı<br/><em>kapınıza getirelim.</em></h2><div className="cta-actions"><a className="primary-button dark" href="https://order.abantsu.com.tr/" target="_blank" rel="noreferrer">Online sipariş <Arrow/></a><a className="phone" href="tel:4440743"><small>SİPARİŞ HATTI</small>444 0 743</a></div></section>
    <footer><div className="footer-brand"><span>ABANT</span><p>Doğadan gelen iyilik.</p></div><FooterCol title="Keşfet" links={["Hakkımızda","Ürünlerimiz","Kaynaklarımız"]}/><FooterCol title="Kurumsal" links={["Kalite politikamız","Bayilik","İletişim"]}/><FooterCol title="Bizi takip edin" links={["Instagram ↗","LinkedIn ↗","YouTube ↗"]}/><div className="footer-bottom"><span>© 2026 Abant Su</span><span>KVKK · Çerez Politikası</span><span>Doğaya saygıyla üretildi ♧</span></div></footer>
  </main>;
}
function ProductCard({no,type,title,sizes,tag}:{no:string,type:string,title:string,sizes:string,tag?:string}) { return <article className={`product-card ${type}`}><span className="product-no">{no}</span>{tag&&<span className="product-tag">{tag}</span>}<div className={`bottle ${type}`}><span className="cap"/><span className="label">ABANT<small>{type==="carboy"?"19 L CAM":"DOĞAL KAYNAK SUYU"}</small></span></div><div className="product-info"><div><h3>{title}</h3><p>{sizes}</p></div><button aria-label={`${title} ürününü incele`}>↗</button></div></article> }
function FooterCol({title,links}:{title:string,links:string[]}) { return <div><h4>{title}</h4>{links.map(x=><a href="#" key={x}>{x}</a>)}</div> }
