import type { NextPage } from "next";

import styles from "../styles/Home.module.css";

import NavBar from "../components/NavBar";
import HTHead, {Pages} from "../components/HTHead";

const Home: NextPage = () => {
  return (
    <div>
      <HTHead page={Pages.projects} />
      <div style={{width: 1280, height: 3140, background: '#313131', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 49, display: 'inline-flex'}}>
        <div style={{alignSelf: 'stretch', height: 2902, paddingLeft: 20, paddingRight: 20, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 40, display: 'inline-flex'}}>
      <div style={{width: 1280, height: 720, position: 'relative', background: '#373737'}}>
        <div style={{width: 947, height: 200, left: 166, top: 260, position: 'absolute'}}>
          <div style={{left: 257, top: 0, position: 'absolute', textAlign: 'center', color: '#FF8E3F', fontSize: 128, fontFamily: 'Fredoka One', fontWeight: '400', wordWrap: 'break-word'}}>HoneyTeam</div>
          <div style={{width: 455, left: 263, top: 159, position: 'absolute', color: '#ECECEC', fontSize: 20, fontFamily: 'Nunito', fontWeight: '500', wordWrap: 'break-word'}}>Мы - команда разработчиков, которые создают различные проекты для помощи людям.</div>
          <div style={{width: 188, height: 200, left: 0, top: 200, position: 'absolute', background: '#F58A3E', boxShadow: '1px 1px 3px rgba(255, 255, 255, 0.40) inset'}}></div>
        </div>
        <div style={{width: 847, height: 80, left: 203, top: 549, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 15, display: 'inline-flex'}}>
          <div style={{width: 200, height: 50, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div style={{width: 200, height: 50, paddingTop: 17, paddingBottom: 16, paddingLeft: 59, paddingRight: 61, background: 'linear-gradient(135deg, #FF8E3F 0%, #FF5A13 100%)', boxShadow: '0px 4px 6px rgba(255, 80.34, 0, 0.40)', borderRadius: 10, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
              <div style={{textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Nunito', fontWeight: '700', wordWrap: 'break-word'}}>GitHub</div>
            </div>
          </div>
          <div style={{width: 200, height: 50, paddingTop: 17, paddingBottom: 16, paddingLeft: 37, paddingRight: 39, borderRadius: 10, overflow: 'hidden', border: '2px white solid', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <div style={{textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Nunito', fontWeight: '700', wordWrap: 'break-word'}}>Участники</div>
          </div>
        </div>
        <div style={{width: 1280, height: 50, left: 0, top: 0, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
          <div style={{paddingTop: 9, paddingBottom: 9, background: 'linear-gradient(135deg, #FF8E3F 0%, #FF450B 100%)', justifyContent: 'center', alignItems: 'center', gap: 581.33, display: 'inline-flex'}}>
            <div style={{width: 516, alignSelf: 'stretch', paddingLeft: 30, paddingRight: 30, justifyContent: 'flex-start', alignItems: 'center', gap: 30, display: 'inline-flex'}}>
              <div style={{justifyContent: 'center', alignItems: 'center', gap: 7, display: 'flex'}}>
                <div style={{width: 32, height: 32, paddingTop: 2.67, paddingBottom: 2.65, paddingLeft: 3.10, paddingRight: 3.10, transform: 'rotate(180deg)', transformOrigin: '0 0', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                  <div style={{width: 25.79, height: 26.68, background: 'white'}}></div>
                </div>
                <div style={{textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Fredoka One', fontWeight: '400', wordWrap: 'break-word'}}>HoneyTeam</div>
              </div>
              <div style={{textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Nunito', fontWeight: '600', wordWrap: 'break-word'}}>Проекты</div>
              <div style={{textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Nunito', fontWeight: '600', wordWrap: 'break-word'}}>Участники</div>
              <div style={{textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Nunito', fontWeight: '600', wordWrap: 'break-word'}}>Блог</div>
            </div>
            <div style={{width: 182.67, alignSelf: 'stretch', paddingLeft: 30, paddingRight: 30, justifyContent: 'flex-end', alignItems: 'center', gap: 20, display: 'inline-flex'}}>
              <div style={{width: 28, height: 21.44, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                <div style={{width: 28, height: 21.44, background: 'white'}}></div>
              </div>
              <div style={{width: 28, height: 24, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                <div style={{width: 28, height: 24, background: 'white'}}></div>
              </div>
              <div style={{width: 26.67, height: 25.05, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                <div style={{width: 26.67, height: 25.05, background: 'white'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{width: 1240, height: 3, position: 'relative', borderRadius: 3, border: '2px rgba(255, 255, 255, 0.09) dotted'}} />
      <div style={{height: 797, paddingTop: 30, paddingBottom: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 40, display: 'flex'}}>
        <div style={{width: 1280, height: 458, paddingTop: 12, paddingBottom: 12, paddingLeft: 328, paddingRight: 327, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
          <div style={{width: 625, height: 434, position: 'relative'}}>
            <img style={{width: 550, height: 111, left: 37, top: 0, position: 'absolute'}} src="https://via.placeholder.com/550x111" />
            <img style={{width: 575, height: 117, left: 25, top: 17, position: 'absolute'}} src="https://via.placeholder.com/575x117" />
            <img style={{width: 600, height: 120.80, left: 12, top: 36, position: 'absolute'}} src="https://via.placeholder.com/600x121" />
            <img style={{width: 625, height: 378, left: 0, top: 56, position: 'absolute'}} src="https://via.placeholder.com/625x378" />
          </div>
        </div>
        <div style={{alignSelf: 'stretch', textAlign: 'center', color: '#FF8E3F', fontSize: 96, fontFamily: 'Nunito', fontWeight: '900', wordWrap: 'break-word'}}>Мы за OpenSource</div>
        <div style={{width: 626, textAlign: 'center', color: '#ECECEC', fontSize: 20, fontFamily: 'Nunito', fontWeight: '500', wordWrap: 'break-word'}}>Почти все наши проекты публикуются на GitHub. Даже этот сайт! Это дает возможность вам принять участие в разработке.</div>
        <div style={{width: 200, height: 50, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
          <div style={{width: 200, height: 50, paddingTop: 17, paddingBottom: 16, paddingLeft: 59, paddingRight: 61, background: 'linear-gradient(135deg, #FF8E3F 0%, #FF5A13 100%)', boxShadow: '0px 4px 6px rgba(255, 80.34, 0, 0.40)', borderRadius: 10, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
            <div style={{textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Nunito', fontWeight: '700', wordWrap: 'break-word'}}>GitHub</div>
          </div>
        </div>
      </div>
      <div style={{width: 1240, height: 3, position: 'relative', borderRadius: 3, border: '2px rgba(255, 255, 255, 0.09) dotted'}} />
      <div style={{height: 476, paddingTop: 30, paddingBottom: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 40, display: 'flex'}}>
        <img style={{width: 1118, height: 173}} src="https://via.placeholder.com/1118x173" />
        <div style={{alignSelf: 'stretch', textAlign: 'center', color: '#FF8E3F', fontSize: 96, fontFamily: 'Nunito', fontWeight: '900', wordWrap: 'break-word'}}>Мы активные</div>
        <div style={{width: 517, textAlign: 'center', color: '#ECECEC', fontSize: 20, fontFamily: 'Nunito', fontWeight: '500', wordWrap: 'break-word'}}>Наша команда старается выпускать обновления к проектам как можно чаще.<br/>Также, все желающие могут помогать с разработкой благодаря Issues и Pull requests!</div>
      </div>
      <div style={{width: 1240, height: 3, position: 'relative', borderRadius: 3, border: '2px rgba(255, 255, 255, 0.09) dotted'}} />
      <div style={{height: 404, paddingTop: 30, paddingBottom: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 40, display: 'flex'}}>
        <div style={{width: 1280, paddingLeft: 10, paddingRight: 10, justifyContent: 'center', alignItems: 'center', gap: 30, display: 'inline-flex'}}>
          <div style={{width: 129, height: 128, position: 'relative'}}>
            <div style={{width: 94.86, height: 95.27, left: 0.46, top: 0.04, position: 'absolute', background: 'linear-gradient(135deg, #387EB8 0%, #366994 100%)'}}></div>
            <div style={{width: 94.86, height: 95.27, left: 33.52, top: 32.29, position: 'absolute', background: 'linear-gradient(133deg, #FFE052 0%, #FFC331 100%)'}}></div>
          </div>
          <div style={{width: 128, height: 128, position: 'relative'}}>
            <div style={{width: 109.94, height: 124.68, left: 9.03, top: 1.66, position: 'absolute', background: '#E44D26'}}></div>
            <div style={{width: 44.94, height: 105.96, left: 64, top: 10.84, position: 'absolute', background: '#F16529'}}></div>
            <div style={{width: 34.51, height: 77.94, left: 29.49, top: 24.60, position: 'absolute', background: '#EBEBEB'}}></div>
            <div style={{width: 34.48, height: 77.93, left: 63.95, top: 24.60, position: 'absolute', background: 'white'}}></div>
          </div>
          <div style={{width: 128, height: 128, position: 'relative'}}>
            <div style={{width: 110.48, height: 125.30, left: 8.76, top: 1.35, position: 'absolute', background: '#1572B6'}}></div>
            <div style={{width: 45.16, height: 106.49, left: 64, top: 10.57, position: 'absolute', background: '#33A9DC'}}></div>
            <div style={{width: 34.68, height: 41.83, left: 64, top: 23.43, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 30.33, height: 29.58, left: 33.75, top: 72.18, position: 'absolute', background: '#EBEBEB'}}></div>
            <div style={{width: 30.97, height: 37.08, left: 64.04, top: 64.68, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 34.65, height: 41.83, left: 29.40, top: 23.43, position: 'absolute', background: '#EBEBEB'}}></div>
          </div>
          <div style={{width: 128, height: 128, position: 'relative'}}>
            <div style={{width: 112, height: 112, left: 8, top: 8, position: 'absolute', background: '#F5DE19'}}></div>
            <div style={{width: 73.82, height: 52.50, left: 37.49, top: 58.78, position: 'absolute', background: 'black'}}></div>
          </div>
          <div style={{width: 128, height: 128, paddingLeft: 24.15, paddingRight: 24.15, paddingTop: 8, paddingBottom: 8, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{width: 79.70, height: 31.15, background: '#969696'}}></div>
            <div style={{width: 79.70, height: 81.20, background: '#969696'}}></div>
          </div>
          <div style={{width: 128, height: 128, position: 'relative'}}>
            <div style={{width: 104.01, height: 112.01, left: 11.99, top: 7.99, position: 'absolute', background: '#A9B9CB'}}></div>
            <div style={{width: 51.99, height: 57.37, left: 64, top: 35.31, position: 'absolute', background: '#8B97A3'}}></div>
            <div style={{width: 100.39, height: 56, left: 13.80, top: 64, position: 'absolute', background: '#7F8B99'}}></div>
            <div style={{width: 62.04, height: 66.14, left: 30.80, top: 30.94, position: 'absolute', background: 'white'}}></div>
          </div>
          <div style={{width: 128, height: 128, position: 'relative'}}>
            <div style={{width: 104.01, height: 112.01, left: 11.99, top: 7.99, position: 'absolute', background: '#659AD2'}}></div>
            <div style={{width: 51.99, height: 57.37, left: 64, top: 35.31, position: 'absolute', background: '#00599C'}}></div>
            <div style={{width: 100.39, height: 56, left: 13.80, top: 64, position: 'absolute', background: '#004482'}}></div>
            <div style={{width: 62.04, height: 66.14, left: 30.80, top: 30.94, position: 'absolute', background: 'white'}}></div>
            <div style={{width: 25, height: 11.06, left: 85.20, top: 58.47, position: 'absolute', background: 'white'}}></div>
          </div>
        </div>
        <div style={{alignSelf: 'stretch', textAlign: 'center', color: '#FF8E3F', fontSize: 96, fontFamily: 'Nunito', fontWeight: '900', wordWrap: 'break-word'}}>Много участников</div>
        <div style={{width: 634, textAlign: 'center', color: '#ECECEC', fontSize: 20, fontFamily: 'Nunito', fontWeight: '500', wordWrap: 'break-word'}}>В нашей команде состоит уже более 15 человек.<br/>Мы все специализируемся в разных языках программирования, что позволяет создавать почти любые проекты.</div>
      </div>
      <div style={{width: 1240, height: 3, position: 'relative', borderRadius: 3, border: '2px rgba(255, 255, 255, 0.09) dotted'}} />
      <div style={{height: 173, paddingTop: 30, paddingBottom: 30, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 40, display: 'flex'}}>
        <div style={{width: 517, textAlign: 'center', color: '#ECECEC', fontSize: 32, fontFamily: 'Nunito', fontWeight: '700', wordWrap: 'break-word'}}>Чего же ты ждешь?</div>
        <div style={{width: 200, height: 50, justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
          <div style={{width: 200, height: 50, paddingTop: 17, paddingBottom: 16, paddingLeft: 13, paddingRight: 15, background: 'linear-gradient(135deg, #FF8E3F 0%, #FF5A13 100%)', boxShadow: '0px 4px 6px rgba(255, 80.34, 0, 0.40)', borderRadius: 10, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
            <div style={{textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Nunito', fontWeight: '700', wordWrap: 'break-word'}}>Подать заявку</div>
          </div>
        </div>
      </div>
        </div>
        <div style={{justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
      <div style={{height: 189, paddingTop: 30, paddingBottom: 15, paddingLeft: 10, paddingRight: 10, background: '#262626', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
        <div style={{width: 498, paddingTop: 10, paddingBottom: 9, paddingLeft: 9, paddingRight: 250, justifyContent: 'flex-start', alignItems: 'center', gap: 21, display: 'flex'}}>
          <div style={{width: 40, height: 41, transform: 'rotate(180deg)', transformOrigin: '0 0', background: 'rgba(255, 255, 255, 0.50)'}}></div>
          <div style={{textAlign: 'center', color: 'rgba(255, 255, 255, 0.50)', fontSize: 32, fontFamily: 'Fredoka One', fontWeight: '400', wordWrap: 'break-word'}}>HoneyTeam</div>
        </div>
        <div style={{width: 200, alignSelf: 'stretch', padding: 15, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex'}}>
          <div style={{color: 'white', fontSize: 16, fontFamily: 'Nunito', fontWeight: '700', wordWrap: 'break-word'}}>Страницы</div>
          <div style={{color: 'rgba(255, 255, 255, 0.53)', fontSize: 16, fontFamily: 'Nunito', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>Главная<br/>Проекты<br/>Участники<br/>Блог</div>
        </div>
        <div style={{width: 200, alignSelf: 'stretch', padding: 15, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex'}}>
          <div style={{color: 'white', fontSize: 16, fontFamily: 'Nunito', fontWeight: '700', wordWrap: 'break-word'}}>Команда</div>
          <div style={{color: 'rgba(255, 255, 255, 0.53)', fontSize: 16, fontFamily: 'Nunito', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>О нас<br/>Вступить<br/>Поддержка<br/>Источники</div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
