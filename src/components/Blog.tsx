

export default function Blog() {
    const blogItems: any = [
        {
            title: "STORIES, STYLES AND SPORTSWEAR AT ADIDAS, SINCE 1949",
            desc: `Sport keeps us fit. Keeps you mindful. Brings us together. Through sport we have the power to change lives. Whether it is through stories of inspiring athletes. Helping you to get up and get moving. Sportswear featuring the latest technologies, to up your performance. Beat your PB.adidas offers a home to the runner, the basketball player, the soccer kid, the fitness enthusiast. The weekend hiker that loves to escape the city. The yoga teacher that spreads the moves. The 3-Stripes are seen in the music scene. On stage, at festivals. Our sports clothing keeps you focused before that whistle blows. During the race. And at the finish lines. We’re here to supportcreators. Improve their game. Their lives. And change the world. ${<br />}
            Adidas is about more than sportswear and workout clothes. We partner with the best in the industry to co-create. This way we offer our fans the sports apparel and style that match their athletic needs, while keeping sustainability in mind. We’re here to support creators. Improve their game. Create change. And we think about the impact we have on our world.`
        },
        {
            title: "Workout clothes, for any sport",
            desc: `Adidas designs for and with athletes of all kinds. Creators, who love to change the game. Challenge conventions. Break the rules and define new ones. Then break them again. We supply teams and individuals with athletic clothing pre-match. To stay focussed. We design sports apparel that get you to the finish line. To win the match. We support women, with bras and tights made for purpose. From low to high support. Maximum comfort. We design, innovate and itterate. Testing new technologies in action. On the pitch, the tracks, the court, the pool. Retro workout clothes inspire new streetwear essentials. Like NMD, Ozweego and our Firebird tracksuits. Classic sports models are brought back to life. Like Stan Smith. And Superstar. Now seen on the streets and the stages. ${<br />}
            Through our collections we blur the borders between high fashion and high performance. Like our adidas by Stella McCartney athletic clothing collection – designed to look the part inside and outside of the gym. Or some of our adidas Originals lifestyle pieces, that can be worn as sportswear too. Our lives are constantly changing. Becoming more and more versatile. And adidas designs with that in mind.`
        },
    ];
    
    return (
        <div className="flex flex-wrap gap-14 py-10 px-14 bg-gray-100">
            { blogItems?.map((item: any, index: number) => 
                <div className="flex-1" key={index}>
                    <h2 className="text-4xl font-bold tracking-wide leading-[3rem] text-black uppercase "> {item.title} </h2>
                    <div className="py-3 text-[22px] tracking-wide leading-8 text-black"> {item.desc} </div>
                </div>
            ) }
        </div>
    );
}