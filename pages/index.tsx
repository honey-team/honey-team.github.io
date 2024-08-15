import type { NextPage } from "next";

import styles from "../styles/Home.module.css";

import NavBar from "../components/NavBar";
import HTHead, {Pages} from "../components/HTHead";

const Home: NextPage = () => {
  return (
    <div>
      <HTHead page={Pages.index} />
      <div style={{width: 1280, height: 3140, background: '#313131', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 49, display: 'inline-flex'}}>
  <div style={{alignSelf: 'stretch', height: 2902, paddingLeft: 20, paddingRight: 20, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 40, display: 'inline-flex'}}>
    <div style={{width: 1280, height: 720, position: 'relative', background: '#373737'}}>
      <div style={{width: 947, height: 200, left: 166, top: 260, position: 'absolute'}}>
        <div style={{left: 257, top: 0, position: 'absolute', textAlign: 'center', color: '#FF8E3F', fontSize: 128, fontFamily: 'Fredoka One', fontWeight: '400', wordWrap: 'break-word'}}>HoneyTeam</div>
        <div style={{width: 455, left: 263, top: 159, position: 'absolute', color: '#ECECEC', fontSize: 20, fontFamily: 'Nunito', fontWeight: '500', wordWrap: 'break-word'}}>Мы - команда разработчиков, которые создают различные проекты для помощи людям.</div>
        <img style={{width: 196, height: 208, left: -4, top: 0, position: 'absolute'}} src="https://via.placeholder.com/196x208" />
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
        <img style={{width: 130, height: 128}} src="/public/languages/Python.png" />
        <img style={{width: 130, height: 128}} src="/public/languages/HTML.png" />
        <img style={{width: 130, height: 128}} src="/public/languages/CSS.png" />
        <img style={{width: 130, height: 128}} src="/public/languages/JS.png" />
        <img style={{width: 130, height: 128}} src="/public/languages/SQL.png" />
        <img style={{width: 130, height: 128}} src="/public/languages/C.png" />
        <img style={{width: 130, height: 128}} src="/public/languages/CPP.png" />
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
