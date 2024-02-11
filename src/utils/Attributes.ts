export const typesAttributes = {
    "EARTH":require('../../assets/images/earth-attrib.png'),
    "DARK":require('../../assets/images/dark-attrib.png'),
    "DIVINE":require('../../assets/images/divine-attrib.png'),
    "TRAP":require('../../assets/images/trap-attrib.png'),
    "FIRE":require('../../assets/images/fire-attrib.png'),
    "LIGHT":require('../../assets/images/light-attrib.png'),
    "SPELL":require('../../assets/images/spell-attrib.png'),
    "WATER":require('../../assets/images/water-attrib.png'),
    "WIND":require('../../assets/images/wind-attrib.png'),
}

export const getTypeAttribute=(type: string)=>{
    return typesAttributes[type as keyof typeof typesAttributes ] || require('../../assets/images/wind-attrib.png') ;
        
    

}