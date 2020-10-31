import React from "react";
import styled from "styled-components";

interface PlateProps {
  name: string;
  categories: {}[];
}
const Content = styled.div`
  width: 100%;
  > div {
    height: calc(100% - 20px);
    margin: 10px;
    border-radius: 5px;
    display: block;
    border: 1px solid #eee;
    background-color: #fff;
    overflow: hidden;
    user-select: none;
    transition: ease all 0.3s;
  }
  figure {
    display: flex;
    width: 100%;
    height: auto;
    box-sizing: border-box;
    background-color: #eee;
    position: relative;
    margin: 0;
    overflow: hidden;
    vertical-align: top;
    display: inline-block;
    @media (min-width: 1001px) {
      width: 50%;
      height: 308px;
    }
  }
  .products {
    padding: 20px;
    text-align: center;
    display: block;
    box-sizing: border-box;
    color: #121618;
    @media (min-width: 1001px) {
      width: 50%;
      float: right;
      overflow: auto;
      height: 308px;
    }
    p {
      margin: 0.3em 0;
    }
  }
  .prodName {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    font-weight: 600;
  }
  .prodDesc {
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0 auto;
    max-width: 90%;
    font-size: 1.1rem;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;

    > p {
      font-weight: 600;
      color: #19a276;
    }
  }
  .price {
    font-size: 1rem;
    font-weight: 600;
    color: #232f3d;
    margin: 0;
  }
  .priceInfo {
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  @media (max-width: 767px) {
  }
`;
export function Plate({ ...props }: PlateProps) {
  return (
    <>
      <Content className="cards">
        <div>
          <figure>
            <img src={process.env.PUBLIC_URL + "/assets/mat1.jpeg"} alt="mat" />
          </figure>
          <div className="products">
            <p className="prodName">{props.name}</p>
            {props.categories.map((prop: any, key: any) => (
              <div key={key} className="prodDesc">
                <p>{prop.name}</p>
                {prop.products.map((prop: any, key: any) => (
                  <div className="priceInfo" key={key}>
                    <p>{prop.name}</p>
                    <p className="price">{prop.price}:-</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Content>
    </>
  );
}
