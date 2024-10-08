import './About.css';

export default function About() {
  return (
    <div className="about hidden">
         
      <div style={{ zIndex: '2' }}>
        <h2>
          What sets us apart, and how <span>can you take next steps with us</span>?
        </h2>
        <p>our focus on democratizing real estate investment through tokenization, offering global access, fractional ownership, enhanced liquidity, and blockchain transparency for secure transactions.
        </p>
      </div>
      {/* <div className="lock" style={{background: `url('${new URL('/src/assets/gradient.svg', import.meta.url)}')`}}>
        <img src={new URL('/src/assets/lock.svg', import.meta.url)} alt="" />
      </div> */}
      
    </div>
  );
}
