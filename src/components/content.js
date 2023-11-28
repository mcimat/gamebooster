import lolImage from "../images/gameImages/lol.jpg";
import narakaImage from "../images/gameImages/naraka.jpg";
import pubgImage from "../images/gameImages/pubg.jpg";
import rainbowSixImage from "../images/gameImages/rainbowsix.jpg";
import csgoImage from "../images/gameImages/csgo.jpg";
import overwatchImage from "../images/gameImages/overwatch2.jpg";
import codImage from "../images/gameImages/cod.jpg";
import dotaImage from "../images/gameImages/dota2.jpg";
import monsterHunterImage from "../images/gameImages/monsterhunter.jpg";

function Content() {
  const games = [
    {
      name: "League of Legends",
      acronym: "LoL",
      img: lolImage,
    },
    {
      name: "Naraka Bladepoint",
      acronym: "Naraka",
      img: narakaImage,
    },
    {
      name: "PUBG: Battlegrounds",
      acronym: "PUBG",
      img: pubgImage,
    },
    {
      name: "Tom Clancy's Rainbow Six Siege",
      acronym: "Rainbow Six",
      img: rainbowSixImage,
    },
    {
      name: "Counter-Strike",
      acronym: "CSGO",
      img: csgoImage,
    },
    {
      name: "Overwatch",
      acronym: "Overwatch",
      img: overwatchImage,
    },
    {
      name: "Call of Duty",
      acronym: "COD",
      img: codImage,
    },
    {
      name: "DOTA 2",
      acronym: "DOTA 2",
      img: dotaImage,
    },
    {
      name: "Monster Hunter",
      acronym: "Monster Hunter",
      img: monsterHunterImage,
    },
  ];

  return (
    <section className="my-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {games.map((game, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <img
                src={game.img}
                alt={game.name}
                className="object-cover h-48 w-full mb-4 rounded-md"
              />
              <p className="text-lg font-semibold">{game.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Content;