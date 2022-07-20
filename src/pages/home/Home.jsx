import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import LanguageContext from '../../contexts/LanguageContext'
import word from '../../data/home.json'
import history from '../../assets/pictures/history.jpg'
import queso from '../../assets/pictures/queso.jpg'
import { MdAccessTimeFilled } from 'react-icons/md'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BsTelephoneFill } from 'react-icons/bs'

const Home = () => {
  const icons = {
    0: <MdAccessTimeFilled />,
    1: <FaMapMarkerAlt />,
    2: <BsTelephoneFill />,
  }
  const { language } = useContext(LanguageContext)

  const texts = word[language]

  return (
    <div className={styles.container}>
      <section className={styles.welcome}>
        <h2>{texts.titleLove}</h2>
        <p>{texts.introLove}</p>
        <p>{texts.nodoLove}</p>
        <p>{texts.finalLove}</p>
        <h2>{texts.titleFavorite}</h2>
        <p>{texts.firstFavorite}</p>
        <p>{texts.secondFavorite}</p>
        <h2>{}</h2>
        <h2 className={styles.title}>{texts.welcome}</h2>
        <p className={styles.comment}>{texts.comment}</p>
        <span className={styles.store}>
          <b>
            <Link to="/store" className={styles.link}>
              {texts.store}
            </Link>
          </b>
        </span>
        <ul className={styles.list}>
          {texts.attentionInfo.map((e, i) => (
            <li key={i} className={styles.group}>
              <i className={styles.icons}>{icons[i]}</i>
              <span className={styles.item}>
                <b>{e[0]}</b>
                <em className={styles.text}>{e[1]}</em>
              </span>
            </li>
          ))}
        </ul>
      </section>
      <section id="Nosotros" className={styles.section}>
        <div className={styles.gallery}>
          <div className={styles.history}>
            <h2 className={styles.titleHistory}>Nuestros Inicios</h2>
            {texts.history.map((e, i) => (
              <p key={i} className={styles.data}>
                {e}
              </p>
            ))}
          </div>
          <figure className={styles.figure}>
            <img
              src={history}
              alt="quesos el rey"
              className={styles.imagen}
            ></img>
          </figure>
        </div>
      </section>
      <section id="Productos" className={styles.sectionGallery}>
        <div className={styles.titleGallery}>
          <h2>Nuestros Productos</h2>
        </div>
        <div className={styles.product}>
          <div className={styles.texts}>
            <h3>{texts.chess[0]}</h3>
            <p>{texts.chess[1]}</p>
            <Link to="/store" className={styles.link}>
              {texts.chess[2]}
            </Link>
          </div>
          <figure className={styles.figure}>
            <img
              className={styles.queso}
              src={queso}
              alt="queso enmantado"
            ></img>
          </figure>
        </div>
      </section>
      <section className={styles.sectionContact}>
        <h2 className={styles.titleContact}>
          ¡Estaremos encantados con sus comentarios!
        </h2>
        <form className={styles.formContact}>
          <fieldset className={styles.dataContact}>
            <label htmlFor="name">{texts.client}</label>
            <input id="name" type="text" autoComplete="off" required />
            <label htmlFor="email">{texts.email}</label>
            <input id="email" type="text" autoComplete="off" required />
            <label htmlFor="place">{texts.place}</label>
            <input id="place" type="text" autoComplete="off" required />
          </fieldset>
          <fieldset className={styles.dataContact}>
            <label htmlFor="message">{texts.message}</label>
            <textarea id="message" required />
            <button>{texts.submit}</button>
          </fieldset>
        </form>
        <hr className={styles.lineContact}></hr>
        <div className={styles.contact}>
          {texts.contact.map((e, i) => (
            <span key={i} className={styles.groupContact}>
              <h3 className={styles.titleContact}>{e[0]}</h3>
              <p>{e[1]}</p>
            </span>
          ))}
        </div>
        <hr className={styles.line}></hr>
      </section>
    </div>
  )
}

export default Home
