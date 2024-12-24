import { ITour } from "../models/Itour";

const tourData = (): ITour[] => {
  const data: ITour[] = [
    {
      id: "AA0011",
      name: "India",
      img: "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
    },
    {
      id: "AA0012",
      name: "Russia",
      img: "https://media.istockphoto.com/id/496034328/photo/good-morning-moscow.jpg?s=612x612&w=0&k=20&c=QQtGSnSRDN50ie6C5kOfnxz38HTDOrIiNG21j1ecpyk=",
    },
    {
      id: "AA0013",
      name: "China",
      img: "https://media.istockphoto.com/id/497572532/photo/cityscape-of-guiyang-at-night.jpg?s=612x612&w=0&k=20&c=iZ2avxaTDglVbfygFduRdxADXI-KqUO1nhX4DlPgFZs=",
    },
    {
      id: "AA0014",
      name: "Singapore",
      img: "https://etimg.etb2bimg.com/photo/97052424.cms",
    },
  ];

  return data;
};

export default tourData;
