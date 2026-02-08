import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import Article from './article/Article';
import Footer from './footer/Footer';
import Nav from './nav/Nav';
import data from './db.json';
import Card from './card/Card';

function App() {
  let items = {"Главная":"/index", "Новости":"/news", "Магазин":"/store", "About":"/about", "Контакты":"/contacts"};
  let db = data.people;
  return (
    <div className="App">
      <Header />
      <Nav navigation = {items}></Nav>
      <Article db = {db}/>
      <div className="article-container">{/* 1. Добавляем контейнер для статей/карточек */}
          <div className="cards-grid"> {/* 2. Внутри этого контейнера делаем сетку для людей */}
              {db.map((person, index) => (
                  <Card 
                      key={index}        // Обязательно для списков React
                      person={person}    // Передаем весь объект человека как проп 'person'
                  />
              ))}
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
