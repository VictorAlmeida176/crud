import React from 'react'
import {HashRouter, Routes, Route } from 'react-router-dom'
import Home from './views/home'
import CadastroProduto from './views/produtos/cadastro'
import  ConsultaProdutos  from './views/produtos/consulta'


// eslint-disable-next-line import/no-anonymous-default-export
export default () =>{
    return(
        <HashRouter>
            <Routes>
                <Route  path = '/cadastro-produtos' element={<CadastroProduto/>} />
                <Route  path = '/consulta-produtos' element={<ConsultaProdutos/>} />
                <Route  path='/' element={<Home/>} />
            </Routes>
        </HashRouter>
    )
}