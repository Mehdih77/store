import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './contactpage.css'
import '../../Style/main-style.css'

export default function ContactPage() {
    return (
        <>
        <Header/>
        <section>
                <div className='container my-4'>
                    <div className='aboutus-custom-style'>
                    <p className='aboutus-title'> فروشگاه آنلاین شاپ</p>
                   <div className='aboutus'>
                   <p>تلفن پشتیبانی : 34567 - 012</p>
                   <p>هفت روز هفته، 24 ساعت شبانه‌روز پاسخگوی شما هستیم.</p>
                    </div>
                    </div>
                </div>
            </section>
        <Footer/>
        </>
    )
}