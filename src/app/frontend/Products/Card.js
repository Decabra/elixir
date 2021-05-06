import React from 'react'
import styles from './Products.module.scss';

const Card = (pros) => (
    <div className={styles.adjustWidth}>
        <div class="card m-4">
            <div class="card-image">
                <div className={styles.cont}>
                    <figure class="image is-3by2">
                    <img src={pros.url} alt={pros.alt}  className={styles.image} />
                    </figure>
                    <div class={styles.middle}>
                        <button className="button is-primary mr-3">Cart</button>
                        <button className="button is-primary">Demo</button>
                    </div>
                </div>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-size-4">{pros.name}</p>
                        <p class="subtitle is-6">{pros.desc}</p>
                    </div>
                </div>
                <div className={styles.setMargin}>
                    <div className="is-flex is-justify-content-space-between"> 
                        <div className="is-flex">
                            <figure className="image is-5by1" style={{width: "5em"}}>
                                <img src={pros.rating} alt="rating" />
                            </figure>                
                            <p className="is-size-7">({pros.userRated})</p>
                        </div>
                        <p className="title is-size-5">{pros.cost}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Card;