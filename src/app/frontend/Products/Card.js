import React, { useState } from 'react'
import styles from './Products.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Card = (pros) => {
    const [itemDetail, setItemDetail] = useState(localStorage.getItem("itemDetail")? JSON.parse(localStorage.getItem("itemDetail")): []);

    const addToCart = () => {
        const cartItem = itemDetail.slice();
        let alreadyInCart = false;
        cartItem.forEach((item) => {
            if(pros.name == item.name){
                alreadyInCart = true;
            }
        });
        if (! alreadyInCart){
            const prod = {Image: pros.url, name: pros.name, desc: pros.desc, price: pros.cost}
            cartItem.push(prod)
        }
        setItemDetail(cartItem);
        // details.push({Image: pros.url, name: pros.name, desc: pros.desc, price: pros.cost});
        localStorage.setItem("itemDetail",JSON.stringify(cartItem));
        console.log(JSON.parse(localStorage.getItem("itemDetail")));
    }

    return (
        <div className={styles.card}>
            <div className="card m-4">
                <div className="card-image">
                    <div className={styles.cont}>
                        <figure className="image is-5by3">
                            <img src={pros.url} alt={pros.alt}  className={styles.image} />
                        </figure>
                        <div className={styles.middleLeft}>
                            <button className={`button is-link mr-3`} onClick={addToCart} ><FontAwesomeIcon icon={faShoppingCart} /></button>
                        </div>
                        <div className={styles.middleRight}>
                            <button className={`button is-link`}><FontAwesomeIcon icon={faEye} /></button>
                        </div>
                    </div>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className={`title is-size-4 ${styles.orange}`}>{pros.name}</p>
                            <p className="subtitle is-6">{pros.desc}</p>
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
}

export default Card;