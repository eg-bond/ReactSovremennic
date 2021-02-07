import React from 'react';
import ScrollToTop from "../../Template/ScrollToTop";

function Advertising() {
    return (
        <div>
            <ScrollToTop/>
            <div className="col-lg-9 col-md-9 col-sm-9 padding_15xs">
                <div className="rules white">
                    <h3>Реклама в кинотеатре "Современник"</h3>
                    <p>• Ролик перед сеансом 30 сек. - <b>4000 руб./неделя</b></p>
                    <p>• Распространение листовок - <b>1000-4000 шт./2 руб.</b> за листовку, <b>5000-9000 шт/1,5 руб.</b> за листовку, <b>10000 шт и более/1 руб.</b> за листовку</p>
                    <p>• Размещение в лайтбоксах, плакат 70 см*100 см - <b>3000 руб./неделя</b></p>
                    <p>• Реклама на сайте - <b>???</b></p>
                    <br/>
                    <p><b>Контакты по вопросам размещения рекламы:</b></p>
                    <p>• Электронная почта - <b>....</b></p>
                    <p>• Телефон - <b>....</b></p>
                </div>
            </div>
        </div>
    );
}

export default Advertising;