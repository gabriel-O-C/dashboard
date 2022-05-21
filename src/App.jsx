import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {
  NavBar, Footer, SiderBar, ThemeSettings,
} from './components';
import {
  Ecommerce,
  Editor,
  Employees,
  Calendar,
  ColorMapping,
  ColorPicker,
  Customers,
  Stacked,
  Pie,
  Pyramid,
  Line,
  Kanban,
  Area,
  Financial,
  Orders,
  Bar,
} from './pages';

import './App.css';

function App() {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4 z-10">
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: 'blue', borderRadius: '50%' }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <SiderBar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <SiderBar />
            </div>
          )}
          <div
            className={
              `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`
            }
          >
            <div className="w-0 dark:bg-secondary-dark-bg">
              <NavBar />
            </div>
          </div>
          <div>
            <Routes>
              <Route path="/" element={Ecommerce} />
              <Route path="/ecommerce" element={Ecommerce} />
              <Route path="/orders" element={Orders} />
              <Route path="/employees" element={Employees} />
              <Route path="/customers" element={Customers} />
              <Route path="/kanban" element={Kanban} />
              <Route path="/calendar" element={Calendar} />
              <Route path="/editor" element={Editor} />
              <Route path="/color-picker" element={ColorPicker} />
              <Route path="/pie" element={Pie} />
              <Route path="/line" element={Line} />
              <Route path="/area" element={Area} />
              <Route path="/bar" element={Bar} />
              <Route path="/financial" element={Financial} />
              <Route path="/color-mapping" element={ColorMapping} />
              <Route path="/stacked" element={Stacked} />
              <Route path="/pyramid" element={Pyramid} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
