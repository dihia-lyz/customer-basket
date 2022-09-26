export const data= [
    {   
        id : "1",
        name : "Whole french bread",
        image : "bread.jpg", 
        rating : "stars.png",
        description: "Made in Paris and destinated to the whole world",
        price : "1.00",
        oldPrice : "0.5",
    },
    {   
        id: '2',
        name : "Fresh Suiss milk",
        image : "cow-milk.jpg", 
        rating : "stars.png",
        description: 'Semi skimmed milk that comes straight from the alpes farmers',
        price : "1.15",
        oldPrice : "",
    },
    {   
        id: '3',
        name : "Butter",
        image : "butter3.png",
        rating : "stars.png",
        description: "Produced by us to insure a high quality butter",
        price : "0.8",
        oldPrice : "",
    }
]

export const offers = [
    {
        id : 'of1',
        description : 'Buy two butters get one bread at 50%',
        id_1: '3',
        qty_1 : 2,
        id_2 : '1',
        remise : 50,
    },
    {
        id : 'of2',
        description : 'Buy three milks get 4th free',
        id_1: '2',
        qty_1 : 4,
        id_2 : '2',
        remise : 100,
    }
]
