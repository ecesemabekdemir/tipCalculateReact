
import './App.css'

function App() {


  return (
<div className="container">
<Header />
<div className="calculate-container">
<Calculate />
<CalcTipContainer />
</div>
</div>
  )
}

function Header() {
  return(
      <div className="header">
         <img src="/img/SPLITTER.png" alt="" />
      </div>
  )
}


function Calculate() {
  return(
    <>
    <div className="calculate">
    <h5>Fatura</h5>
    <p class="alert-frame"></p>
    <input class="payCustom" required type="number" name="pay" placeholder="$" />
    <h5>Bahşiş %'sini Seçin</h5>
  <div class="select-tip">
  <button >5</button>
  <button >10</button>
  <button >15</button>
  <button >25</button>
  <button >50</button>
  <form class="customForm">
    <input className='customTip' type="number" placeholder="ÖZEL" />
  </form>
</div>
<h5>Kişi Sayısı Girin</h5>
<p class="alert-frame"></p>
<input className='numOfPeople' required type="number" name='person' />
    </div>
    </>


  )
}

function CalcTipContainer() {
  return(
    <div class="calc-tip-container">
    <div class="calc-tip-box">
      <div class="calc-text">
        <h3>Bahşiş Tutarı: <span class="personTip">0</span></h3>
        <h5>/Kişi</h5>
      </div>
      <div class="calc-text">
        <h3>Toplam :<span class="totalTip">0</span></h3>
        <h5>/Kişi</h5>
      </div>           
    </div>
    <button class="reset-btn">SIFIRLA</button>
  </div>
  )
}

export default App
