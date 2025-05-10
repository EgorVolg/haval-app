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
        <Container containerType="body">Loading...</Container>
      ) : (
        <>
          <div className={styles.main}>
            <div className={styles.description__block}>
              <div className={styles.sale__block}>
                <div className={styles.price}>
                  {car.price.toLocaleString("ru-RU")} ₽
                </div>
                <div className={styles.guarantee}>
                  <img src={label} alt="" />
                  Гарантия юр. чистоты.
                </div>
              </div>

              <div className={styles.car__description}>
                <div className={styles.block__title}>Характеристики</div>
                <div className={styles.about__block}>
                  <div className={styles.characteristics}>
                    <img src={year} alt="" />
                    <p>{car.Year} год выпуска</p>
                  </div>
                  <div className={styles.characteristics}>
                    <img src={engine} alt="" />
                    <p>
                      {car.EngineSize} / {car.Power} Л.С. / {car.FuelType}
                    </p>
                  </div>
                  <div className={styles.characteristics}>
                    <img src={transmission} alt="" />
                    <p>КП - {car.Transmission}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.car__img__block}>
              <img src={car.photos.imgs[0].url} alt="" />
            </div>
          </div>

          <footer className={styles.footer}>
            <div className={styles.footer__promo}>
              <div className={styles.footer__image_container}>
                <img
                  src={footerCar}
                  alt="Chery Tiggo"
                  className={styles.footer__car_image}
                />
              </div>
              
              <div className={styles.footer__credit_content}>
                <h3 className={styles.footer__credit_title}>
                  Кредит на новый Chery Tiggo
                </h3>

                <p className={styles.footer__credit_text}>
                  Оформите кредит на любой автомобиль ассортимента дилерского
                  центра «Максимум»
                </p>

                <button className={styles.footer__credit_button}>
                  Оформить
                </button>
              </div>
            </div>
          </footer>
        </>
      )}
    </>
  );
};
