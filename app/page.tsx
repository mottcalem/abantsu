"use client";

import Image from "next/image";
import type { MouseEvent } from "react";
import { useEffect, useState } from "react";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dealerOpen, setDealerOpen] = useState(false);
  const [dealerSent, setDealerSent] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") { setDealerOpen(false); setReportOpen(false); } };
    window.addEventListener("keydown", close);
    document.body.style.overflow = dealerOpen || reportOpen ? "hidden" : "";
    return () => { window.removeEventListener("keydown", close); document.body.style.overflow = ""; };
  }, [dealerOpen, reportOpen]);
  const moveWater = (event: MouseEvent<HTMLElement>) => {
    const box = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - box.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - box.top}px`);
    event.currentTarget.style.setProperty("--rx", `${((event.clientY - box.top) / box.height - .5) * -8}deg`);
    event.currentTarget.style.setProperty("--ry", `${((event.clientX - box.left) / box.width - .5) * 8}deg`);
  };
  return (
    <main>
      <header className="stage-header">
        <a href="#top" className="stage-logo" aria-label="Abant ana sayfa"><Image src="/abant-logo.png" alt="Abant Rare & Pure" width={200} height={200} priority /></a>
        <div className="stage-status"><i/><span>Kaynak aktif</span><b>Abant · Bolu</b></div>
        <a className="stage-order" href="https://order.abantsu.com.tr/" target="_blank" rel="noreferrer"><span>Online sipariş</span><b>↗</b></a>
        <button className="stage-menu" aria-label="Menüyü aç" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span>MENÜ</span><b><i/><i/></b></button>
        <nav className={menuOpen ? "stage-nav open" : "stage-nav"} aria-label="Ana menü">
          <div className="stage-nav-top"><small>MENÜ / 2026</small><button onClick={() => setMenuOpen(false)} aria-label="Menüyü kapat">×</button></div>
          {[["01","Abant Su","#hikaye"],["02","Ürünler","#urunler"],["03","Kaynağımız","#kaynak"],["04","Kalite","#kalite"],["05","İletişim","#iletisim"]].map(([no,label,href]) => <a href={href} key={no} onClick={() => setMenuOpen(false)}><small>{no}</small><span>{label}</span><b>↗</b></a>)}
        </nav>
      </header>
      <button className="dealer-fab" onClick={() => { setDealerOpen(true); setDealerSent(false); }} aria-label="Bayilik başvurusu formunu aç">
        <span><small>ABANT AİLESİNE</small>Bayimiz Olun</span><b>↗</b><i>Başvuru<br/>Yapın</i>
      </button>
      {dealerOpen && <div className="dealer-modal" role="dialog" aria-modal="true" aria-labelledby="dealer-title" onMouseDown={(e) => e.target === e.currentTarget && setDealerOpen(false)}>
        <div className="dealer-dialog">
          <aside className="dealer-aside"><Image src="/abant-logo.png" alt="Abant Rare & Pure" width={200} height={200}/><div><small>ABANT BAYİLİK AĞI</small><h2>Doğallığı<br/><i>birlikte</i><br/>büyütelim.</h2><p>Abant Su ailesine katılın, bölgenizde doğanın en saf hâlini temsil edin.</p></div><span>40° 36&apos; N · 31° 16&apos; E</span></aside>
          <section className="dealer-form-wrap">
            <div className="dealer-form-head"><div><small>BAŞVURU / 01</small><h3 id="dealer-title">Bayimiz Olun</h3></div><button type="button" onClick={() => setDealerOpen(false)} aria-label="Formu kapat">×</button></div>
            {dealerSent ? <div className="dealer-success"><b>✓</b><h3>Başvurunuz alındı.</h3><p>Ekibimiz değerlendirme sonrasında sizinle iletişime geçecek.</p><button type="button" onClick={() => setDealerOpen(false)}>Kapat</button></div> :
            <form className="dealer-form" onSubmit={(e) => { e.preventDefault(); setDealerSent(true); }}>
              <label><span>Ad Soyad *</span><input name="name" required placeholder="Adınız ve soyadınız" autoFocus/></label>
              <div className="form-row"><label><span>E-posta *</span><input name="email" type="email" required placeholder="ornek@email.com"/></label><label><span>Cep Telefonu *</span><input name="phone" type="tel" required placeholder="05__ ___ __ __"/></label></div>
              <div className="form-row"><label><span>Bayilik İli *</span><input name="city" required placeholder="İl"/></label><label><span>Bayilik İlçesi *</span><input name="district" required placeholder="İlçe"/></label></div>
              <label><span>Mevcut su bayiliğiniz var mı?</span><select name="existing"><option value="">Seçiniz</option><option>Evet</option><option>Hayır</option></select></label>
              <label><span>Başvurulan bayilik tipi *</span><select name="type" required><option value="">Seçiniz</option><option>Ev ve Ofis Dağıtım Bayiliği</option><option>Perakende Satış Bayiliği</option><option>Bölge Distribütörlüğü</option></select></label>
              <label><span>Kendinizden ve yatırım planınızdan bahsedin</span><textarea name="message" rows={3} placeholder="Kısaca bilgi verin..."/></label>
              <label className="consent"><input type="checkbox" required/><span>Kişisel verilerimin başvuru süreci kapsamında işlenmesini kabul ediyorum.</span></label>
              <button className="dealer-submit" type="submit"><span>Başvuruyu gönder</span><b>↗</b></button>
            </form>}
          </section>
        </div>
      </div>}
      {reportOpen && <div className="report-modal" role="dialog" aria-modal="true" aria-labelledby="report-title" onMouseDown={(e) => e.target === e.currentTarget && setReportOpen(false)}>
        <div className="report-dialog">
          <div className="report-head"><div><span>ABANT SU · KALİTE LABORATUVARI</span><h2 id="report-title">Örnek Analiz Raporu</h2></div><button onClick={() => setReportOpen(false)} aria-label="Raporu kapat">×</button></div>
          <div className="sample-alert"><b>ÖRNEKTİR</b><p>Bu belge yalnızca arayüz gösterimi için hazırlanmıştır. Resmî analiz raporu veya laboratuvar sonucu değildir.</p></div>
          <div className="report-meta"><div><small>NUMUNE</small><strong>Doğal Kaynak Suyu</strong></div><div><small>RAPOR NO</small><strong>ÖRNEK-2026-001</strong></div><div><small>RAPOR TARİHİ</small><strong>20.08.2026</strong></div><div><small>DURUM</small><strong className="status-ok">Temsili ✓</strong></div></div>
          <div className="report-table-wrap"><table className="report-table"><thead><tr><th>Parametre</th><th>Temsili sonuç</th><th>Birim</th><th>Referans aralığı</th></tr></thead><tbody>
            <ReportRow name="pH" result="7,42" unit="pH" range="6,5 – 9,5"/><ReportRow name="İletkenlik" result="184" unit="µS/cm" range="≤ 2500"/><ReportRow name="Kalsiyum" result="32,6" unit="mg/L" range="Bilgilendirme"/><ReportRow name="Magnezyum" result="7,8" unit="mg/L" range="Bilgilendirme"/><ReportRow name="Sodyum" result="4,1" unit="mg/L" range="≤ 200"/><ReportRow name="Nitrat" result="2,3" unit="mg/L" range="≤ 50"/><ReportRow name="Florür" result="0,08" unit="mg/L" range="≤ 1,5"/><ReportRow name="Bulanıklık" result="0,12" unit="NTU" range="≤ 1"/>
          </tbody></table></div>
          <div className="report-foot"><span>Değerlerin tamamı temsili örnek veridir.</span><a href="https://abantsu.com.tr/Uploads/020725-tse-detayl-analiz.73iqx.pdf" target="_blank" rel="noreferrer">Resmî raporları görüntüle ↗</a></div>
        </div>
      </div>}

      <section className="stage-hero" id="top" onMouseMove={moveWater}>
        <div className="stage-grid"/>
        <div className="stage-title"><span className="title-a">RARE</span><span className="title-b">&amp; PURE</span></div>
        <div className="portal"><div className="portal-ring r1"/><div className="portal-ring r2"/><div className="portal-ring r3"/><div className="portal-glass"/><Image src="/abant-cam-siseler.png" alt="Abant cam şişe ürünleri" width={439} height={419} className="portal-bottles" priority /></div>
        <div className="stage-intro"><span>01 / DOĞAL KAYNAK SUYU</span><p>Tabiat parkının korunan doğasından, yaşamın en değerli anlarına.</p><a href="#urunler">Koleksiyonu keşfet <b>↓</b></a></div>
        <div className="stage-ticket"><small>ABANT / BOLU</small><strong>NADİR.<br/>SAF.<br/>ABANT&apos;TAN.</strong><span>40° 36&apos; N<br/>31° 16&apos; E</span></div>
        <div className="stage-scroll"><i/><span>KAYDIR</span></div>
      </section>

      <div className="marquee" aria-hidden="true"><div><span>DOĞADAN GELEN İYİLİK</span><b>✦</b><span>RARE & PURE</span><b>✦</b><span>ABANT&apos;IN KALBİNDEN</span><b>✦</b><span>DOĞADAN GELEN İYİLİK</span><b>✦</b><span>RARE & PURE</span><b>✦</b></div></div>

      <section className="manifesto" id="hikaye">
        <div className="manifesto-index">01</div>
        <div><p className="kicker">BİR KAYNAKTAN DAHA FAZLASI</p><h2>Sadelik,<br/>doğanın en büyük<br/><i>lüksüdür.</i></h2></div>
        <div className="manifesto-copy"><p>Abant Su, adını Türkiye&apos;nin en geniş floralarından birine sahip, tabiat parkı unvanıyla korunan Abant&apos;tan alıyor.</p><p>Doğanın karakterini değiştirmeden; saflığını, dengesini ve kendine özgü lezzetini her şişede koruyoruz.</p><a href="#kaynak" className="line-link">Kaynağımızı keşfedin <Arrow /></a></div>
      </section>

      <section className="products" id="urunler">
        <div className="products-top"><div><p className="kicker">KOLEKSİYON</p><h2>Her ana,<br/><i>doğal bir eşlikçi.</i></h2></div><p>Farklı yaşam ritimleri için tasarlanmış Abant Su ailesi.</p></div>
        <div className="product-showcase">
          <article className="product-panel blue">
            <div className="panel-head"><span>01 / CAM SERİSİ</span><span>RARE & PURE</span></div>
            <Image src="/abant-cam-siseler.png" alt="Abant 33 cl ve 75 cl cam şişeleri" width={439} height={419}/>
            <div className="panel-info"><div><h3>Cam Şişe</h3><p>33 cl · 75 cl</p></div><a href="https://order.abantsu.com.tr/" aria-label="Cam şişe siparişi">↗</a></div>
          </article>
          <article className="product-panel light">
            <div className="panel-head"><span>02 / CAM DAMACANA</span><span>19 L</span></div>
            <Image src="/abant-cam-damacana.jpg" alt="Abant 19 litre cam damacana" width={520} height={483}/>
            <div className="panel-info"><div><h3>Cam Damacana</h3><p>Türkiye&apos;nin ilk 19 L cam damacanası</p></div><a href="https://order.abantsu.com.tr/" aria-label="Cam damacana siparişi">↗</a></div>
          </article>
        </div>
      </section>

      <section className="source" id="kaynak">
        <div className="source-art"><div className="rings"><span>ABANT</span><small>40° 36&apos; N · 31° 16&apos; E</small></div></div>
        <div className="source-copy"><p className="kicker">KORUNAN COĞRAFYA</p><h2>Doğduğu yere<br/><i>sadık bir su.</i></h2><p>Abant&apos;ın benzersiz jeolojik yapısı ve zengin florası içinde yolculuk eden su, doğal karakterini kaynağından alır.</p><div className="facts"><div><strong>%100</strong><span>Doğal kaynak suyu</span></div><div><strong>7/24</strong><span>Kalite kontrolü</span></div></div></div>
      </section>

      <section className="quality" id="kalite">
        <div><p className="kicker">ŞEFFAFLIK & GÜVEN</p><h2>Her damlada<br/><i>aynı özen.</i></h2></div>
        <div className="quality-copy"><p>Modern, hijyenik ve çevreye duyarlı sistemlerle üretiyor; suyun doğal yapısını düzenli analizlerle güvence altına alıyoruz.</p><button className="button outline" onClick={() => setReportOpen(true)}>Analiz raporları <Arrow /></button></div>
        <div className="quality-items"><span>01 <b>Kaynak koruma</b></span><span>02 <b>Hijyenik dolum</b></span><span>03 <b>Düzenli analiz</b></span><span>04 <b>Çevreci yaklaşım</b></span></div>
      </section>

      <section className="order" id="iletisim"><Image src="/abant-logo.png" alt="" width={200} height={200}/><p className="kicker">ABANT SU YANINIZDA</p><h2>Saflığı<br/><i>kapınıza getirelim.</i></h2><div className="order-actions"><a className="button red" href="https://order.abantsu.com.tr/" target="_blank" rel="noreferrer">Online sipariş <Arrow /></a><a className="phone" href="tel:4440743"><small>SİPARİŞ HATTI</small>444 0 743</a></div></section>

      <footer><div className="footer-logo"><Image src="/abant-logo.png" alt="Abant Rare & Pure" width={200} height={200}/><p>Doğanın en saf hâli.</p></div><FooterCol title="Abant Su" links={["Hakkımızda","Kaynaklarımız","Kalite Politikamız"]}/><FooterCol title="Ürünler" links={["Cam Şişe","Cam Damacana","Pet Ürünler"]}/><FooterCol title="İletişim" links={["Bayiler","Bayilik Başvurusu","Bize Ulaşın"]}/><div className="footer-bottom"><span>© 2026 Abant Su</span><span>KVKK · Çerez Politikası</span><span>Instagram · LinkedIn · YouTube</span></div></footer>
    </main>
  );
}

function FooterCol({title, links}:{title:string; links:string[]}) { return <div className="footer-col"><h4>{title}</h4>{links.map(link => <a key={link} href="#">{link}</a>)}</div> }
function ReportRow({name,result,unit,range}:{name:string;result:string;unit:string;range:string}) { return <tr><td>{name}</td><td><strong>{result}</strong></td><td>{unit}</td><td>{range}</td></tr> }
