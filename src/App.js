import React, { useState } from "react";
import Card from "./component/Card";

function App() {
  const [allData, setAllData] = useState([
    {
      id: 1,
      text: "Benimaru",
      image: "https://c4.wallpaperflare.com/wallpaper/820/580/901/anime-that-time-i-got-reincarnated-as-a-slime-benimaru-that-time-i-got-reincarnated-as-a-slime-tensei-shitara-slime-datta-ken-hd-wallpaper-preview.jpg",
    },
    {
      id: 2,
      text: "Geld",
      image: "https://images8.alphacoders.com/122/thumb-1920-1226088.jpg",
    },
    {
      id: 3,
      text: "Gabiru",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ft7UHrYJaV3CzPhRP1i7-F--L9xQ98OIR-uddxKvAg&s",
    },
    {
      id: 4,
      text: "Ranga",
      image: "https://w0.peakpx.com/wallpaper/677/942/HD-wallpaper-ranga-tensei-shitara-slime.jpg",
    },
    {
      id: 5,
      text: "Kumara",
      image: "https://i.redd.it/frbxmwcrkl991.png",
    },
    {
      id: 6,
      text: "Zegion",
      image: "https://wallpapercave.com/wp/wp11107346.jpg",
    },
    {
      id: 7,
      text: "Adalman",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmYgbSQXrS91LcVrbr04pYwOb5x47m-FIsQw66ySA0BeAj9OaRfqGElNPG8xrN7OidJ90&usqp=CAU",
    },
    {
      id: 8,
      text: "Shion",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3cczOZ-cctRmIS8Em20JSSiZk8OgymK1Ggfw64EWR4g&s",
    },
    {
      id: 9,
      text: "Diablo",
      image: "https://i.pinimg.com/originals/3b/83/01/3b8301982da9ca88f1750cd8c2d26fcd.jpg",
    },
    {
      id: 10,
      text: "Testarossa",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpIl1dgzMXRpzRX-2nFb5LxYV-20mfvwgltvFlEopCMg&s",
    },
    {
      id: 11,
      text: "Ultima",
      image: "https://i.pinimg.com/originals/73/60/4d/73604d1ada398d9f394a3171cf33664c.jpg",
    },
    {
      id: 12,
      text: "Carrera",
      image: "https://i.pinimg.com/originals/cc/20/94/cc20942bb9f2ea99dfcde50420f579b7.png",
    },
  ]);

  const [allData2, setAllData2] = useState([
    {
      id: 1,
      text: "Rimuru",
      image: "https://s1.zerochan.net/Rimuru.Tempest.600.3580105.jpg",
    },
    {
      id: 2,
      text: "Milim",
      image: "https://i.pinimg.com/736x/f3/29/98/f32998419cc6c30b368a0a3c82838c85.jpg",
    },
    {
      id: 3,
      text: "Ramiris",
      image: "https://i.redd.it/02jdfn3p7yzb1.jpg",
    },
    {
      id: 4,
      text: "Guy",
      image: "https://i.pinimg.com/736x/33/63/4d/33634de13e917e812919aacfb9256463.jpg",
    },
    {
      id: 5,
      text: "Dino",
      image: "https://i.pinimg.com/originals/29/3c/13/293c137d27283fe4a0d8bceb86cbba47.jpg",
    },
    {
      id: 6,
      text: "Dagruel",
      image: "https://i.pinimg.com/736x/8a/24/f4/8a24f430b018d7836a42557de1deeaac.jpg",
    },
    {
      id: 7,
      text: "Luminas",
      image: "https://i.pinimg.com/originals/75/58/b2/7558b288dc9fe9a4128ebc2f403671c1.jpg",
    },
    {
      id: 8,
      text: "Leon",
      image: "https://i.pinimg.com/originals/c0/ec/ef/c0ecef4fb31fed9fb00168e9a3e7b17d.jpg",
    },
  ]);

  return (
    <div>
      <Card datav={allData} datav2={allData2} />
    </div>
  );
}

export default App;
