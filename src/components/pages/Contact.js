import React from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Contents from '../layouts/Contents';

function Info({text}){
    return <div>{text}</div>
}

const textInfo = [
    {text : "You are"},
    {text : "already"},
    {text : "doing well."},
]

function Contact() {
    return (
        <div>
            <Header />
            <Contents>
                <section id="mainCont">
                    <h2 className="sr-only">메인 컨텐츠 영역입니다.</h2>
                    <div className="main__cont tact">
                        {textInfo.map((info) => (
                            <Info text={info.text} key={info.text} />
                        ))}
                    </div>
                </section>
            </Contents>
            <Footer />
        </div>
    )
}

export default Contact;