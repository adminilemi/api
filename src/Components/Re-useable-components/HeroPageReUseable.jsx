import './HeroPageReUseable.css';

function HeroPageReUseable({ text }) {
  return (
    <div className='main-div d-flex justify-content-center align-items-center'>
      <h1 className='hero-text'> {text} </h1>
    </div>
  );
}
export default HeroPageReUseable;
