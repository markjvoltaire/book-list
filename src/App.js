import BookList from './views/Books/BookList';
import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import BookDetail from './views/Books/BookDetail';

function App() {
  // TODO: Add routes to books & views
  return (
    <BrowserRouter>
      <main className="container">
        <h1>Library Catalog</h1>

        <NavLink to="/books" data-testid="book-link">
          books
        </NavLink>

        <Switch>
          <Route exact path="/books/" component={BookList} />
          <Route exact path="/books/:id" component={BookDetail} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
