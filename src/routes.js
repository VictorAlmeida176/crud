import React from 'react'
import {HashRouter, Routes, Route } from 'react-router-dom'
import Home from './views/home'
import CadastroProduto from './views/produtos/cadastro'


// eslint-disable-next-line import/no-anonymous-default-export
export default () =>{
    return(
        <HashRouter>
            <Routes>
                <Route  path = '/cadastro-produto' element={<CadastroProduto/>} />
                <Route  path='/' element={<Home/>} />
            </Routes>
        </HashRouter>
    )
}