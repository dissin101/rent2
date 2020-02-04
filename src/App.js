import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Main, Rent, Sale, News, AddPublication, PersonalPanel, Registration, Login } from './pages';
import './App.css';

function App() {
  const publications = [{
    sale: [
      {mainInfo: 'Двухкомнатная квартира, 40кв. м.',
       country: 'Караганда',
       id: 1,
       firstImage: 'https://cdn.esoft.digital/12801024/photos/37dbe6d4ebaffe582bcd978a0a2ee7418b804604.jpg',
       floor: 2,
       price: 14000000,
       watches: 3000
      },
      {mainInfo: 'Трехкомнатная квартира, 65кв. м.',
       id: 2,
       firstImage: 'https://md-eksperiment.org/images/posts/a70ccf57-d401-4c48-9c6b-13affbcc9c8e.jpeg',
       floor: 5,
       country: 'Караганда',
       price: 45000000,
       watches: 7000
      },
      {mainInfo: 'Однокомнатная квартира, 34кв. м.',
       id: 3,
       firstImage: 'https://cdn.esoft.digital/12801024/photos/55b2b8a387a7884abc03fe07152fa44124c9c038.jpg',
       floor: 15,
       country: 'Караганда',
       price: 15000000,
       watches: 145
      },
      {mainInfo: 'Четырехкомнатная квартира, 65кв. м.',
       id: 4,
       firstImage: 'https://biz.liga.net/images/general/2019/04/03/thumbnail-nv-20190403102427-9550.jpg?v=1554282156',
       floor: 41,
       price: 75000000,
       country: 'Караганда',
       watches: 365
      },
    ]
  }]

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container main-container">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/sale">
            <Sale publications={publications}/>
          </Route>
          <Route path="/rent">
            <Rent />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/add-publication">
            <AddPublication />
          </Route>
          <Route path="/personal-panel">
            <PersonalPanel />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;