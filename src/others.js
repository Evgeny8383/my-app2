import React from "react";
import Header from "./header"
import './App.css';



export default function Others(){
    return(
        <div>
           <Header/>
           <h2 className="up_header">Достопримечательности Барнаула</h2>
           <div className="col_1">
                <div className="col_2">
                    <div className="inner">
                      <h2>Страусиное ранчо</h2>
                      <p>Недалеко от города Барнаула, в живописном месте вот уже несколько лет расположилось Страусиное ранчо. Если Вы думаете, что это очередной зоопарк, то ошибаетесь, здесь больше создается ощущение, что приехал погостить «к дедушке на ферму», ведь животных можно потрогать и покормить. Не смотря на название, тут обитают не только страусы (хотя здесь их оооочень много), здесь также можно посмотреть на большое количество разных зверюшек: утки, куры и петухи различных пород, ослики, ламы, барсуки, ежики, павлины, свинки, фазаны, беркуты, утки, кролики, северные олени, пони, яки и даже верблюды! А сама ферма довольна большая и просторная, можно вдоволь погулять.</p><br/>  
                      <p><strong>Расположение:</strong>село Власиха, улице Сосновая, 27.</p>
                      <p><strong>Режим работы:</strong>ежедневно с 10:00 до 18:00 </p>
                    </div>
                    
                </div> 
                <div className="col_2"> <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/9c/95/c2/caption.jpg?w=500&h=400&s=1" alt="страус" /></div>  
           </div>
            <div className="col_1">
                <div className="col_2">
                  <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_600/https://aquaparkgo.ru/wp-content/uploads/2017/03/Evropa-Barnaul-3-600x365.jpg" alt="аквапарк" width="500" height="400"/>
                </div>
                <div className="col_2">
                    <div className="inner">
                       <h2>Аквапарк</h2>
                        <p>
                         Барнаул достаточно крупный город и здесь есть различные торгово-развлекательные центры, но вот ничего, связанного с водными аттракционами не было. Но ситуация изменилась и современный аквапарк Барнаула «Европа», разместившийся в одноименном торгово-развлекательном центре, известен далеко за пределами города. Это целый водный мир со своими загадками. Здесь есть все, чтобы зайти и потерять счет времени.    
                        </p> 
                        <p> 
                         Здесь можно увидеть останки затонувшего корабля и подводной башни, где обитают морские звезды разных цветов. Но самое главное, это аттракционы! Посетителей ждут 4 бассейна с пятью горками разной сложности и конфигураций. Самой длинной горкой является «Тобоган» — 62 метра. Самый скоростной спуск — «Камикадзе», на котором вы сможете разогнаться до 14 метров в секунду. Поверьте, времени испугаться у вас не будет, 26 метров горки вы преодолеете за несколько секунд. 
                        </p> 
                        <p>
                         Аквапарк в ТРЦ Европа в Барнауле находится в одноименном торговом центре, по адресу: ул. Павловский тракт, 251В. Доехать до центра можно на автобусе № 110, 144, 139, 20 или 19. Аквапарк работает по будням с 10 утра до 10 вечера, а в выходные дни — с 10 утра до 11 часов вечера. 
                        </p> 
                    </div>
                </div>
                
            </div>
            <div className="col_1">
                <div className="col_2">
                    <div className="inner">
                       <h2>Нагорный парк</h2>
                       <p>
                       Для тех, кто родился и вырос в Барнауле, Нагорный парк — место знаковое. Люди старшего поколения с ностальгией вспоминают парк культуры и отдыха, с озером, павильонами и старой лестницей, спроектированной известным барнаульским архитектором Виктором Казариновым.
                       У барнаульцев, взрослевших в 90-е, воспоминания о парке уже не такие радужные — помнятся годы запустения и заброшенности. 
                       </p>
                       <p>
                       В 2016 году в парке начались восстановительные работы, которые вызвали переполох не только среди рядовых горожан, но и среди архитекторов. Много споров вызывал проект новой лестницы.
                       </p>
                       
                       <p>
                       На протяжении двух лет администрация города вела напряжённую работу. Концепция туристического кластера, разработанная совместно со специалистами АлтГТУ, обсуждалась на градостроительном совете и общественном совете по развитию города. В итоге было принято решение создать в Нагорном парке место тишины и созерцания, а не развлечения. Большую часть территории занял храм Иоанна Предтечи и сопутствующие постройки. Остальная часть парка стала обзорной площадкой с видами на Обь
                       
                       </p>
                    </div>
                </div>
                <div className="col_2">
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/57/c7/ba/caption.jpg?w=1200&h=-1&s=1"width="500" height="400" alt="нагорный парк" />
                </div>
            </div>
        </div>
    )

    
}