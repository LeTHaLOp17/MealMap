import '../style/Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-section">
        <h1>MealMap</h1>
        <h3>Eating healthy is a form of self-respect</h3>
      </div>
      <div className="image-container">
        <img src="/models/dishes.png" alt="dish" height="400px" width="350px" />
      </div>
    </div>
  );
};

export default Home;
