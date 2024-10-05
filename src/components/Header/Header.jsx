import './Header.css';
const solarStormImg = "https://t4.ftcdn.net/jpg/09/00/74/47/360_F_900744764_wBBFaUNjKMBB65wP6rKYKnspH0YCvwvO.jpg"

export default function Header() {
  return (
    <header>
      <img src={solarStormImg} alt="Solar storm visualization" />
      <h1>Solar Storm</h1>
      <p>
        Solar storms are significant disturbances in the solar wind that can affect satellites, communications, and power systems on Earth.
      </p>
    </header>
  );
}
