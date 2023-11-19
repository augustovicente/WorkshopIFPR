import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Main = lazy(() => import('pages/Main').then((module) => ({ default: module.Main })));

export const Router = () => {
    return (
        <Routes>
            <Route path="main" element={<Main />} />
            <Route path="*" element={<Main />} />
        </Routes>
    )
}
