import { useState } from "react";

const getLocalGif = (name) => {
  return new URL(`../assets/${name}`, import.meta.url).href;
};

const games = [
  {
    name: "Limbus Company",
    hoverColor: "#722F37",
    steamUrl: "https://store.steampowered.com/app/1973530/Limbus_Company/",
    gifs: [
      {
        url: getLocalGif("don.gif"),
        rotate: "-6deg",
        top: "-120px",
        left: "-160px",
      },
      {
        url: getLocalGif("vergilius.gif"),
        rotate: "4deg",
        top: "-140px",
        left: "50%",
        transform: "translateX(-50%)",
      },
      {
        url: getLocalGif("dante.gif"),
        rotate: "8deg",
        top: "-110px",
        right: "-160px",
      },
    ],
  },
  {
    name: "Terraria",
    hoverColor: "#00FF00",
    steamUrl: "https://store.steampowered.com/app/105600/Terraria/",
    gifs: [
      {
        url: getLocalGif("lawn-mowing.gif"),
        rotate: "5deg",
        top: "-120px",
        left: "-160px",
      },
      {
        url: getLocalGif("calamity.gif"),
        rotate: "-8deg",
        top: "-150px",
        left: "50%",
        transform: "translateX(-50%)",
      },
      {
        url: getLocalGif("calamity-book.gif"),
        rotate: "3deg",
        top: "-100px",
        right: "-160px",
      },
    ],
  },
  {
    name: "Devil May Cry",
    hoverColor: "#8B0000",
    steamUrl: "https://store.steampowered.com/app/601150/Devil_May_Cry_5/",
    gifs: [
      {
        url: getLocalGif("nero-devil-may-cry.gif"),
        rotate: "-8deg",
        top: "-130px",
        left: "-180px",
      },
      {
        url: getLocalGif("vergil-devil-may-cry.gif"),
        rotate: "12deg",
        top: "-170px",
        left: "50%",
        transform: "translateX(-50%)",
      },
      {
        url: getLocalGif("dante-devil-may-cry.gif"),
        rotate: "-3deg",
        top: "-100px",
        right: "-180px",
      },
    ],
  },
  {
    name: "Team Fortress 2",
    hoverColor: "#FFA500",
    steamUrl: "https://store.steampowered.com/app/440/Team_Fortress_2",
    gifs: [
      {
        url: getLocalGif("tf2-team-fortress-2.gif"),
        rotate: "7deg",
        top: "-140px",
        left: "-150px",
      },
      {
        url: getLocalGif("tf2-logo.gif"),
        rotate: "-5deg",
        top: "-155px",
        left: "50%",
        transform: "translateX(-50%)",
      },
      {
        url: getLocalGif("tf2-scout.gif"),
        rotate: "10deg",
        top: "-115px",
        right: "-150px",
      },
    ],
  },
  {
    name: "Left 4 Dead 2",
    hoverColor: "#8B8000",
    steamUrl: "https://store.steampowered.com/app/550/Left_4_Dead_2/",
    gifs: [
      {
        url: getLocalGif("l4d2-left-4-dead-2.gif"),
        rotate: "-12deg",
        top: "-125px",
        left: "-165px",
      },
      {
        url: getLocalGif("l4d2-l4d1.gif"),
        rotate: "3deg",
        top: "-165px",
        left: "50%",
        transform: "translateX(-50%)",
      },
      {
        url: getLocalGif("l4d2-zombies.gif"),
        rotate: "9deg",
        top: "-105px",
        right: "-165px",
      },
    ],
  },
];

function GameList() {
  const [hoveredGame, setHoveredGame] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <ul className="flex flex-col items-center gap-3">
        {games.map((game) => (
          <li
            key={game.name}
            onMouseEnter={() => setHoveredGame(game.name)}
            onMouseLeave={() => setHoveredGame(null)}
            className="relative cursor-pointer text-5xl font-bold uppercase tracking-widest transition-colors duration-300"
            style={{
              color: hoveredGame === game.name ? game.hoverColor : "white",
              transition: "color 0.3s ease",
            }}
          >
            {/* GIFs posicionados em volta do nome */}
            {game.gifs.map((gif, index) => (
              <img
                key={index}
                src={gif.url}
                alt={`${game.name} gif ${index + 1}`}
                style={{
                  position: "absolute",
                  top: gif.top ?? "auto",
                  left: gif.left ?? "auto",
                  right: gif.right ?? "auto",
                  transform: `rotate(${gif.rotate}) ${gif.transform ?? ""}`,
                  opacity: hoveredGame === game.name ? 1 : 0,
                  scale: hoveredGame === game.name ? "1" : "0.8",
                  transition: "opacity 0.3s ease, scale 0.3s ease",
                  width: "150px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  pointerEvents: "none",
                }}
              />
            ))}
            <a
              href={game.steamUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit" }}
            >
              {game.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameList;
