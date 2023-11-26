import codImage from "../images/gameImages/cod.jpg";

function Content() {
    const games = [
        {
            name: "League of Legends",
            accroyn: "LoL",
            img: "nothing"
        },
        {
            name: "Naraka Bladepoint",
            accroyn: "Naraka Bladepoint",
            img: "nothing"
        },
        {
            name: "PUBG: Battlegrounds",
            accroyn: "PUBG",
            img: "nothing"
        },
        {
            name: "Tom Clancy's Rainbow Six Siege",
            accroyn: "Rainbow Six",
            img: "nothing"
        },
        {
            name: "Counter-Strike",
            accroyn: "CSGO",
            img: "nothing"
        },
        {
            name: "Overwatch",
            accroyn: "Overwatch",
            img: "nothing"
        },
        {
            name: "Call of Duty",
            accroyn: "COD",
            img: codImage
        },
        {
            name: "DOTA 2",
            accroyn: "DOTA 2",
            img: "nothing"
        },
        {
            name: "Monster Hunter",
            accroyn: "Monster Hunter",
            img: "nothing"
        },
    ];

    return (
        <section>
            <div className="container">
                <h2>Game List</h2>
                {games.map((game, index) => (
                    <div key={index}>
                        <p>{game.name}</p>
                        <img src={game.img} alt={game.name} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Content;