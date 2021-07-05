import React from 'react'
import Header from '../../components/Header/Header'
import MainDetails from './Main-Details/MainDetails'
import MoreDetails from './More_Details/MoreDetails'
import Footer from '../../components/Footer/Footer'
import '../../Style/main-style.css'
import { useParams } from 'react-router-dom'

export default function GoodsPage() {

    // Params came from App.js
    const {id} = useParams();

    return (
        <>
        <Header />
        <MainDetails id={id} />
        <MoreDetails id={id} />
        <div className='footer-in-goods-page'>
        <Footer/>
        </div>
    </>
    )
}