import React from "react";
import styles from "./CarPage.module.css";
import { useGetCarListQuery } from "../../api/makeRequest";
import { CarDetails } from "../car-list/CarList";
import { useSelector } from "react-redux";
import footerCar from "./../../UI/images/img.svg";
import { Container } from "../../UI/Container";
import year from "./../../UI/images/year.svg";
import engine from "./../../UI/images/engine.svg";
import transmission from "./../../UI/images/transmission.svg";
import label from "./../../UI/images/label.svg";

export const CarPage = () => {
  const carId = window.location.pathname.slice(5);
  const brand = useSelector(
    (state: { car: { brand: string } }) => state.car.brand
  );

  const { data, isLoading } = useGetCarListQuery(brand);
  const car = data?.find((car: CarDetails) => car.car_id === carId);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Container containerType="body">
            <div className={styles.main}>
              <div className={styles.description__block}>
                <div className={styles.sale__block}>
                  <div className={styles.price}>1 890 000</div>
                  <div className={styles.guarantee}>
                    <img src={label} alt="" />
                    Гарантия юр. чистоты.
                  </div>
                </div>

                <div className={styles.car__description}>
                  <div className={styles.block_title}>Характеристики</div>
                  <div className={styles.about__block}>
                    <div className={styles.characteristics}>
                      <img src={year} alt="" />
                      <p>2020 год выпуска</p>
                    </div>
                    <div className={styles.characteristics}>
                      <img src={engine} alt="" />
                      <p>1,5 л / 147 л.с / Бензин</p>
                    </div>
                    <div className={styles.characteristics}>
                      <img src={transmission} alt="" />
                      <p>КП - Вариатор</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.car__img__block}>
                <img src={car.photos.imgs[0].url} alt="" />
              </div>
            </div>
          </Container>

          <footer className={styles.footer}>
            <div className={styles.footer__block}>
              <div className={styles.footer__text_block}>
                <div className={styles.footer__text_title}>
                  Кредит на новый {car.brandName} {car.modelName}
                </div>
                <div className={styles.footer__text_description}>
                  Оформите кредит на любой автомобиль ассортимента дилерского
                  центра «Максимум»
                </div>
                <button className={styles.footer__btn}>Оформить</button>
              </div>
              <div className={styles.footer__img_block}>
                <img src={footerCar} alt="" />
              </div>
            </div>
          </footer>
        </>
      )}
    </>
  );
};
