import React from "react";
import styles from "./CarPage.module.css";
import { Container } from "../../UI/Container";
import { TitleBlock } from "../../UI/TitleBlock";
import { useGetCarListQuery } from "../../api/makeRequest";
import { CarDetails } from "../car-list/CarList";
import { useSelector } from "react-redux";
import footerCar from "./../../UI/images/footercar.svg";

export const CarPage = () => {
  const carId = window.location.pathname.slice(5);
  const brand = useSelector(
    (state: { car: { brand: string } }) => state.car.brand
  );

  const { data } = useGetCarListQuery(brand);
  const car = data?.find((car: CarDetails) => car.car_id === carId);

  return (
    <>
      <Container containerType="body">
        <TitleBlock />

        <div className={styles.main}>
          <div className={styles.description__block}>
            <div className={styles.sale__block}>
              <div className={styles.price}>{car.Price}</div>
              <div className={styles.guarantee}>
                <img src="" alt="" />
                Гарантия юр. чистоты.
              </div>
            </div>

            <div className={styles.car__description}>
              <div className={styles.block_title}>Характеристики</div>
              <div className={styles.about__block}>
                <div className={styles.characteristics}></div>
                <div className={styles.characteristics}></div>
                <div className={styles.characteristics}></div>
              </div>
            </div>
          </div>

          <div className={styles.car__img__block}>
            <img src={car.photos.imgs[0].url} alt="" />
          </div>
        </div>
      </Container>

      <footer className={styles.footer__block}>
        <img
          className={styles.footer__img}
          src={footerCar}
          alt=""
        />
        <div className={styles.footer__text_block}>
          <div className={styles.footer__text_title}>
            Кредит на новый {car.brandName} {car.modelName}
          </div>
          <div className={styles.footer__text_description}>
            Оформите кредит на любой автомобиль ассортимента дилерского центра
            «Максимум»
          </div>
          <button className={styles.footer__btn}>Оформить</button>
        </div>
      </footer>
    </>
  );
};
