
export interface HomeData{
    _id:number,
    title:Title,
    cont:Cont
}

interface Title{
    ti:string,
    hot:TitleHot[]
}
interface TitleHot{
    class:string,
    des:string
}

interface Cont{
    left:{src:string},
    middle:ContMiddle,
    right:ContRight,
    hotbands:Object,
}
interface ContMiddle{
    title:string,
    des:string,
    src:string
}
interface ContRight{
    src:string,
    des:string,
    price:number,
    price2:number
}
interface ContHotBands{
    title:string,
    msg:{src:string}[]
}