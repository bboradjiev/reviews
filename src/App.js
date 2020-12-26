import Review from './Review';
 
function App() {
  return (
      <section>
        <section className='container'>
            <div className='title'>
                <h2>Our Reviews</h2>
                <div className='underline'></div>
            </div>
            <Review/>
        </section>  
      </section>
  );
}

export default App;
