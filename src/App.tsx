import React from 'react';
import { QueryClient } from 'react-query';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreateGamePage } from './pages/create-game-page';
import { EditGamePage } from './pages/edit-game-page';
import { GameDetailsPage } from './pages/game-details-page';
import { HomePage } from './pages/home-page';

const queryClient = new QueryClient();

function App() {
  return <>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<HomePage/>} />
          <Route path='/gamedetails/:gameId' element={<GameDetailsPage/>} />
          <Route path='/creategame' element={<CreateGamePage/>} />
          <Route path='/gameedit/:gameId' element={<EditGamePage/>} />

        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </>
}

export default App;
