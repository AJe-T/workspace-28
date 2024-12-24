import {IWatch} from "../models/IWatch";
export class WartchServices {
  static products:IWatch[] = [
    {
      id: "AA0011",
      name: "Rolex",
      price: 18000,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfDht-eYarIK1LhVWn40AwgrqWX38Madnp2A&s",
      qty: 2,
    },
    {
      id: "AA0012",
      name: "Apple",
      price: 28000,
      imgUrl:
        "https://iplanet.one/cdn/shop/files/Apple_Watch_Series_10_46mm_GPS_Jet_Black_Aluminium_Sport_Band_Black_PDP_Image_Position_1__en-IN_fc927d39-c4c7-4a32-8aab-3eabea627c09.jpg?v=1727257373",
      qty: 3,
    },
    {
      id: "AA0013",
      name: "Fastrack",
      price: 10000,
      imgUrl:
        "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwcdd79649/images/Fastrack/Catalog/3089SL05_1.jpg?sw=800&sh=800",
      qty: 1,
    },
    {
      id: "AA0014",
      name: "Seiko",
      price: 48000,
      imgUrl:
        "https://www.seikowatches.com/in-en/-/media/Images/Product--Image/All/Seiko/2022/02/20/00/02/SNE583P1/SNE583P1.png?mh=1000&mw=1000&hash=CC6B8E099E8AB8680125B717929F9196",
      qty: 1,
    },
    {
      id: "AA0015",
      name: "Oppo",
      price: 8000,
      imgUrl:
        "https://opposhop.ie/media/catalog/product/w/a/watchx_1.png?width=560&height=560&store=default&image-type=image",
      qty: 6,
    },
  ];

  static getWatchs():IWatch[] {
    return this.products;
  }
}
