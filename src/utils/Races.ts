export const typesColors = {
    "Aqua": "rgb(0,119,255)",
    "Beast": "#CD7F32",
    "Beast-Warrior": "#B2BEB5",
    "Creator-God": "#C5B358",
    "Cyberse": "#ACACAC",
    "Dinosaur": "#006B3C",
    "Divine-Beast": "rgb(218,230,26)",
    "Dragon": "rgb(217,164,38)",
    "Fairy": "rgb(206,38,217)",
    "Fiend": "rgb(38,217,185)",
    "Fish": "rgb(51,177,204)",
    "Insect": "rgb(51,204,123)",
    "Machine": "rgb(102,144,153)",
    "Plant": "rgb(13,242,121)",
    "Psychic": "rgb(184,191,64)",
    "Pyro": "rgb(217,164,38)",
    "Reptile": "rgb(137,179,77)",
    "Rock": "#a7bcc9",
    "Sea Serpent": "rgb(64,169,191)",
    "Spellcaster": "rgb(141,51,204)",
    "Thunder": "rgb(195,204,51)",
    "Warrior": "#ff5555",
    "Winged Beast": "rgb(51,204,123)",
    "Wyrm": "rgb(143,38,217)",
    "Zombie": "#a8b2b6",
    "Normal": "rgb(51,204,177)",
    "Field": "rgb(38,217,122)",
    "Equip": "rgb(51,177,204)",
    "Continuous": "#5ac54f",
    "Quick-Play": "rgb(242,175,13)",
    "Ritual": "#a39bd6",
    "Counter": "hsl(34, 100%, 71%)"
};

export const getTypeColor=(type: string)=>{
    return typesColors[type as keyof typeof typesColors ] || '#6F00FF';
        
    

}
