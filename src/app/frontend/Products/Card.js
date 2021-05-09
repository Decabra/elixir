import React from 'react'
import styles from './Products.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Card = (pros) => (
    <div className={styles.card}>
        <div class="card m-4">
            <div class="card-image">
                <div className={styles.cont}>
                    <figure class="image is-5by3">
                        <img src={pros.url} alt={pros.alt}  className={styles.image} />
                    </figure>
                    <div className={styles.middleLeft}>
                        <button className={`button is-link mr-3`}><FontAwesomeIcon icon={faShoppingCart} /></button>
                    </div>
                    <div className={styles.middleRight}>
                        <button className={`button is-link`}><FontAwesomeIcon icon={faEye} /></button>
                    </div>
                </div>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class={`title is-size-4 ${styles.orange}`}>{pros.name}</p>
                        <p class="subtitle is-6">{pros.desc}</p>
                    </div>
                </div>
                <div className={styles.setMargin}>
                    <div className="is-flex is-justify-content-space-between"> 
                        <div className="is-flex">
                            <figure className="image is-5by1" style={{width: "5em"}}>
                                <img src={pros.rating} alt="rating" />
                            </figure>                
                            <p className={`is-size-6 ${styles.orange}`}>({pros.userRated})</p>
                        </div>
                        <p className={`title is-size-5 ${styles.orange}`}>{pros.cost}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Card;