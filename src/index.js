import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {LOAD_MOVIES, SEARCH_MOVIE_BY_TITLE} from "./redux/actions";
// import {loadMoviesActionCreate, searchMovieTitleActionCreate} from "./redux/actionCreators";


let initialState = {moviesResponse: {}};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_MOVIES:
            // console.log(action.payload.data)
            return {...state, moviesResponse: {...action.payload.data}}
        case SEARCH_MOVIE_BY_TITLE:
            let searchByTitleResult = action.payload
            return {...state, allMovies: [...searchByTitleResult]}
        default:
            return state;
    }
}

let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
