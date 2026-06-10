const baseCars = [
  {
    id: 1,
    brand: "Kia",
    model: "EV9",
    trim: "Полная комплектация",
    year: 2024,
    engine: 0,
    fuel: "электро",
    mileage: 18000,
    transmission: "автомат",
    drive: "полный",
    color: "серый",
    priceKgs: 4400000,
    priceUsd: 50000,
    region: "Бишкек",
    status: "В наличии",
    bodyType: "внедорожник 5 дв.",
    steering: "руль слева",
    description: "Полностью электрический кроссовер на гарантии с запасом хода до 506 км и богатым оснащением.",
    image: "https://im.mashina.kg/tachka/images//d/8/e/d8e79acb6e491c8422e9fa049bb4cda5_640x480.jpg",
    images: [
      "https://im.mashina.kg/tachka/images//d/8/e/d8e79acb6e491c8422e9fa049bb4cda5_640x480.jpg",
      "https://im.mashina.kg/tachka/images//1/e/5/1e5233667f430c77e46b79a0ee24d435_640x480.jpg",
      "https://im.mashina.kg/tachka/images//1/e/5/1e5aa0222e13a63d46344ce8c034c92a_640x480.jpg",
      "https://im.mashina.kg/tachka/images//c/5/9/c594eac50959b3c45d3b20fd30512b4e_640x480.jpg",
      "https://im.mashina.kg/tachka/images//9/4/2/94268d6e340b323cebac653423cff060_640x480.jpg"
    ]
  },
  {
    id: 2,
    brand: "Mercedes-Benz",
    model: "G-Класс AMG",
    trim: "Nappa Exclusive",
    year: 2019,
    engine: 4.0,
    fuel: "бензин",
    mileage: 40500,
    transmission: "автомат",
    drive: "полный",
    color: "черный",
    priceKgs: 12684600,
    priceUsd: 145000,
    region: "Бишкек",
    status: "В наличии",
    bodyType: "внедорожник 5 дв.",
    steering: "руль слева",
    description: "Максимальная версия G-Class AMG с оригинальным пробегом, Night Package и дилерским обслуживанием.",
    image: "https://im.mashina.kg/tachka/images//7/d/a/7da3b9c54e5752491e4ebe245d61f46b_640x480.jpg",
    images: [
      "https://im.mashina.kg/tachka/images//7/d/a/7da3b9c54e5752491e4ebe245d61f46b_640x480.jpg",
      "https://im.mashina.kg/tachka/images//4/f/5/4f5a89fae9094b87f5ce1428fe91d816_640x480.jpg",
      "https://im.mashina.kg/tachka/images//7/e/c/7ec5bd2987053d620b65e360a3ea0e44_640x480.jpg",
      "https://im.mashina.kg/tachka/images//a/1/0/a10c1571814b1575556c602bf12f56f8_640x480.jpg",
      "https://im.mashina.kg/tachka/images//c/7/0/c703939e72d807e9a119a7ec44161b3b_640x480.jpg"
    ]
  },
  {
    id: 3,
    brand: "Toyota",
    model: "Camry",
    trim: "XLE (полная)",
    year: 2019,
    engine: 2.5,
    fuel: "гибрид",
    mileage: 115000,
    transmission: "вариатор",
    drive: "передний",
    color: "серебристый",
    priceKgs: 1565892,
    priceUsd: 17900,
    region: "Бишкек",
    status: "В наличии",
    bodyType: "седан",
    steering: "руль слева",
    description: "Состояние идеальное, без вложений. Гибридная батарея в отличном состоянии, салон чистый и ухоженный.",
    image: "https://im.mashina.kg/tachka/images//d/c/7/dc72a611e50011d0fd922979b94f5442_640x480.jpg",
    images: [
      "https://im.mashina.kg/tachka/images//d/c/7/dc72a611e50011d0fd922979b94f5442_640x480.jpg",
      "https://im.mashina.kg/tachka/images//7/c/4/7c46897fad7bc3a4ee675dea449f8972_640x480.jpg",
      "https://im.mashina.kg/tachka/images//9/d/d/9dd2b68970119c2b9f572e84fcd46d9f_640x480.jpg",
      "https://im.mashina.kg/tachka/images//6/c/f/6cf49a9df7d85368526819f4d0aeffac_640x480.jpg",
      "https://im.mashina.kg/tachka/images//c/d/5/cd582698844dffe3df5a7e1b400715c5_640x480.jpg"
    ]
  },
  {
    id: 4,
    brand: "Land Rover",
    model: "Range Rover",
    trim: "Supercharged",
    year: 2019,
    engine: 5.0,
    fuel: "бензин",
    mileage: 74000,
    transmission: "автомат",
    drive: "полный",
    color: "черный",
    priceKgs: 5423760,
    priceUsd: 62000,
    region: "Бишкек",
    status: "В наличии",
    bodyType: "внедорожник 5 дв.",
    steering: "руль слева",
    description: "Полноприводный Range Rover с мотором 5.0 Supercharged, родным окрасом и хорошим состоянием.",
    image: "https://im.mashina.kg/tachka/images//0/e/f/0ef8d80a38f922a088a78be585a4b4be_640x480.jpg",
    images: [
      "https://im.mashina.kg/tachka/images//0/e/f/0ef8d80a38f922a088a78be585a4b4be_640x480.jpg",
      "https://im.mashina.kg/tachka/images//d/3/4/d348875370123b5fa09d0cc787d1a24a_640x480.jpg",
      "https://im.mashina.kg/tachka/images//5/e/5/5e5d0928e91ddaea48d90feecf23d380_640x480.jpg",
      "https://im.mashina.kg/tachka/images//6/e/6/6e6b44b4217bde02ca3af312eaf99094_640x480.jpg",
      "https://im.mashina.kg/tachka/images//3/b/7/3b7ba93104a069cca8289d498305d65f_640x480.jpg"
    ]
  },
  {
    id: 5,
    brand: "Lexus",
    model: "LX",
    trim: "Black Vision",
    year: 2025,
    engine: 3.4,
    fuel: "бензин",
    mileage: 4900,
    transmission: "автомат",
    drive: "полный",
    color: "черный",
    priceKgs: 14434200,
    priceUsd: 165000,
    region: "Бишкек",
    status: "В наличии",
    bodyType: "внедорожник 5 дв.",
    steering: "руль слева",
    description: "Свежий Lexus LX 2025 года с шумоизоляцией, бронепленкой и дилерской гарантией.",
    image: "https://im.mashina.kg/tachka/images//4/a/4/4a4cdfd79fb7b4570e3fc3534f52a5b7_640x480.jpg",
    images: [
      "https://im.mashina.kg/tachka/images//4/a/4/4a4cdfd79fb7b4570e3fc3534f52a5b7_640x480.jpg",
      "https://im.mashina.kg/tachka/images//e/7/6/e761c98577d4abe6590e316ec33d91d0_640x480.jpg",
      "https://im.mashina.kg/tachka/images//0/1/5/0156de13e7facb098c93144946efa85b_640x480.jpg",
      "https://im.mashina.kg/tachka/images//b/f/c/bfc6e83b771adf728517b51222fcadf8_640x480.jpg",
      "https://im.mashina.kg/tachka/images//d/0/8/d08f50a62a3643be4b55bf3712768f8c_640x480.jpg"
    ]
  },
  {
    id: 6,
    brand: "BYD",
    model: "Yuan Up",
    trim: "EV",
    year: 2024,
    engine: 0,
    fuel: "электро",
    mileage: 15000,
    transmission: "автомат",
    drive: "передний",
    color: "серебристый",
    priceKgs: 1207224,
    priceUsd: 13800,
    region: "Бишкек",
    status: "В наличии",
    bodyType: "внедорожник 5 дв.",
    steering: "руль слева",
    description: "Компактный электрический кроссовер с небольшим пробегом и современным городским форматом.",
    image: "https://im.mashina.kg/tachka/images//e/5/3/e53f84e2c4d09f612d159ae7e9d7044f_640x480.jpg",
    images: [
      "https://im.mashina.kg/tachka/images//e/5/3/e53f84e2c4d09f612d159ae7e9d7044f_640x480.jpg",
      "https://im.mashina.kg/tachka/images//2/0/5/205e512089ecf46be762e221eb185462_640x480.jpg",
      "https://im.mashina.kg/tachka/images//c/8/1/c8183dba8416103d1c5178b986aaf104_640x480.jpg",
      "https://im.mashina.kg/tachka/images//7/8/4/7846495973c9e09e570b8749f664df92_640x480.jpg",
      "https://im.mashina.kg/tachka/images//b/c/0/bc069df994cacffd49b791b38820ee3e_640x480.jpg"
    ]
  },
  {
    id: 7,
    brand: "Kia",
    model: "Carnival",
    trim: "Hybrid",
    year: 2025,
    engine: 1.6,
    fuel: "гибрид",
    mileage: 6500,
    transmission: "автомат",
    drive: "передний",
    color: "белый",
    priceKgs: 3061713,
    priceUsd: 34999,
    region: "Бишкек",
    status: "В наличии",
    bodyType: "минивэн",
    steering: "руль слева",
    description: "Практичный семейный минивэн 2025 года в состоянии нового автомобиля и с гибридной силовой установкой.",
    image: "https://im.mashina.kg/tachka/images//5/3/2/532a97b82a3f2968be324dfca84ec8af_640x480.jpg",
    images: [
      "https://im.mashina.kg/tachka/images//5/3/2/532a97b82a3f2968be324dfca84ec8af_640x480.jpg",
      "https://im.mashina.kg/tachka/images//a/5/4/a544e8ab0997bb0b4f87915f5b769024_640x480.jpg",
      "https://im.mashina.kg/tachka/images//3/c/e/3ce4d0d470059bd074d7c1773c24057c_640x480.jpg",
      "https://im.mashina.kg/tachka/images//f/f/9/ff9e58f8ab2f74bf8787156ec94331fe_640x480.jpg",
      "https://im.mashina.kg/tachka/images//1/5/1/1515e56576155529d038c6efdde04bbd_640x480.jpg"
    ]
  },
  {
    id: 8,
    brand: "LiXiang",
    model: "L7",
    trim: "Рестайлинг",
    year: 2025,
    engine: 1.5,
    fuel: "гибрид",
    mileage: 5,
    transmission: "автомат",
    drive: "полный",
    color: "черный",
    priceKgs: 4365252,
    priceUsd: 49900,
    region: "Бишкек",
    status: "В наличии",
    bodyType: "внедорожник 5 дв.",
    steering: "руль слева",
    description: "Свежий гибридный кроссовер LiXiang L7 с полным приводом и минимальным пробегом.",
    image: "https://im.mashina.kg/tachka/images//d/3/f/d3f97d20e11de7aca67bcc36183717ce_640x480.jpg",
    images: [
      "https://im.mashina.kg/tachka/images//d/3/f/d3f97d20e11de7aca67bcc36183717ce_640x480.jpg",
      "https://im.mashina.kg/tachka/images//c/b/0/cb078d385bcc5442d8614ef10f708221_640x480.jpg",
      "https://im.mashina.kg/tachka/images//c/3/d/c3d389c39a30313f264c12f225c934a8_640x480.jpg",
      "https://im.mashina.kg/tachka/images//6/b/7/6b7abaeac38c5592813e4712f64a4668_640x480.jpg",
      "https://im.mashina.kg/tachka/images//0/4/6/046bc861837a20f99ef506b1fd191b85_640x480.jpg"
    ]
  },
  {
    id: 9,
    brand: "BMW",
    model: "X7",
    trim: "внедорожник 5 дв.",
    year: 2021,
    engine: 3.0,
    fuel: "дизель",
    mileage: 43000,
    transmission: "автомат",
    drive: "полный",
    color: "черный",
    priceKgs: 4811400,
    priceUsd: 55000,
    region: "Бишкек",
    status: "В наличии",
    bodyType: "внедорожник 5 дв.",
    steering: "руль слева",
    description: "Премиальный дизельный SUV из Кореи с небольшим пробегом и полным приводом.",
    image: "https://im.mashina.kg/tachka/images//e/6/d/e6dd58d2cc8599474be2dde1e5f7c39c_640x480.jpg",
    images: [
      "https://im.mashina.kg/tachka/images//e/6/d/e6dd58d2cc8599474be2dde1e5f7c39c_640x480.jpg",
      "https://im.mashina.kg/tachka/images//6/3/6/6365e83bd93ff38568e89653bd1a9aec_640x480.jpg",
      "https://im.mashina.kg/tachka/images//7/a/1/7a1613c11da83f5f4a276fcf139d2f52_640x480.jpg",
      "https://im.mashina.kg/tachka/images//3/e/e/3ee9cc2df7f67267ae0347f62e6c0cb9_640x480.jpg",
      "https://im.mashina.kg/tachka/images//6/4/e/64e84eef7089e31faeffd0c6b12f07ef_640x480.jpg"
    ]
  },
  {
    id: 10,
    brand: "BMW",
    model: "5 серии",
    trim: "седан",
    year: 2021,
    engine: 4.4,
    fuel: "бензин",
    mileage: 65000,
    transmission: "автомат",
    drive: "полный",
    color: "синий",
    priceKgs: 3367980,
    priceUsd: 38500,
    region: "Бишкек",
    status: "В наличии",
    bodyType: "седан",
    steering: "руль слева",
    description: "Динамичный полноприводный седан BMW с мотором 4.4 и хорошим запасом мощности.",
    image: "https://im.mashina.kg/tachka/images//5/2/1/521b842a8234d6216a6ed372c81a9854_640x480.jpg",
    images: [
      "https://im.mashina.kg/tachka/images//5/2/1/521b842a8234d6216a6ed372c81a9854_640x480.jpg",
      "https://im.mashina.kg/tachka/images//4/2/0/42035ea177865cb3bf683ec981560a89_640x480.jpg",
      "https://im.mashina.kg/tachka/images//5/e/4/5e4940e93cebcb8f06fedfbd1c535c00_640x480.jpg",
      "https://im.mashina.kg/tachka/images//0/0/e/00e834dcdbfafdb0b1f4b739db5fdd17_640x480.jpg",
      "https://im.mashina.kg/tachka/images//3/2/a/32a44470e5a35673b9319817eb135488_640x480.jpg"
    ]
  },
  {
    id: 11,
    brand: "BMW",
    model: "5 серии",
    trim: "Sport Line",
    year: 2017,
    engine: 3.0,
    fuel: "бензин",
    mileage: 130000,
    transmission: "автомат",
    drive: "полный",
    color: "черный",
    priceKgs: 2405700,
    priceUsd: 27500,
    region: "Бишкек",
    status: "В наличии",
    bodyType: "седан",
    steering: "руль слева",
    description: "Полноприводный седан с 3.0 Turbo, спортивными сиденьями и богатым пакетом Sport Line.",
    image: "https://im.mashina.kg/tachka/images//8/a/0/8a03671371fd931ac2fe8eb86b0d8c79_640x480.jpg",
    images: [
      "https://im.mashina.kg/tachka/images//8/a/0/8a03671371fd931ac2fe8eb86b0d8c79_640x480.jpg",
      "https://im.mashina.kg/tachka/images//c/f/0/cf0eed429da68511dfb41af9dd987e20_640x480.jpg",
      "https://im.mashina.kg/tachka/images//1/9/f/19fbbb6b19d56442df6f34fe174288b8_640x480.jpg",
      "https://im.mashina.kg/tachka/images//4/c/0/4c00f7fdbc9162515cd538287db81b15_640x480.jpg",
      "https://im.mashina.kg/tachka/images//1/3/9/139a1e36b5586809aed74977e455a00c_640x480.jpg"
    ]
  },
  {
    id: 12,
    brand: "Mercedes-Benz",
    model: "AMG GT",
    trim: "лифтбек",
    year: 2020,
    engine: 3.0,
    fuel: "бензин",
    mileage: 63000,
    transmission: "робот",
    drive: "полный",
    color: "черный",
    priceKgs: 5248713,
    priceUsd: 59999,
    region: "Бишкек",
    status: "В наличии",
    bodyType: "лифтбек",
    steering: "руль слева",
    description: "Эффектный лифтбек AMG GT с полным приводом, свежим ТО и аккуратным пробегом.",
    image: "https://im.mashina.kg/tachka/images//c/b/1/cb10db8f6a43a4df6ea3271fd2fd807a_640x480.jpg",
    images: [
      "https://im.mashina.kg/tachka/images//c/b/1/cb10db8f6a43a4df6ea3271fd2fd807a_640x480.jpg",
      "https://im.mashina.kg/tachka/images//f/a/6/fa66e87cd4409f2d3c2f498c5d169542_640x480.jpg",
      "https://im.mashina.kg/tachka/images//8/9/e/89eb3c9a5fa0a06dd940ab8cf0aec01e_640x480.jpg",
      "https://im.mashina.kg/tachka/images//0/5/5/05525ab982b249223b72e0a3d5006399_640x480.jpg",
      "https://im.mashina.kg/tachka/images//f/9/9/f992fe539aa3ae4a09592b05dba54eb0_640x480.jpg"
    ]
  },
  {
    id: 13,
    brand: "Mercedes-Benz",
    model: "C-Класс AMG",
    trim: "спортивная версия",
    year: 2015,
    engine: 4.0,
    fuel: "бензин",
    mileage: 132102,
    transmission: "автомат",
    drive: "задний",
    color: "белый",
    priceKgs: 3367980,
    priceUsd: 38500,
    region: "Бишкек",
    status: "В наличии",
    bodyType: "седан",
    steering: "руль слева",
    description: "Заднеприводный спортивный седан AMG в аккуратном состоянии и с живым пробегом.",
    image: "https://im.mashina.kg/tachka/images//6/8/4/684825e813efe357d6b2638b582a87cc_640x480.jpg",
    images: [
      "https://im.mashina.kg/tachka/images//6/8/4/684825e813efe357d6b2638b582a87cc_640x480.jpg",
      "https://im.mashina.kg/tachka/images//9/9/f/99f20706b84f5bf89f14d0a95870e4f7_640x480.jpg",
      "https://im.mashina.kg/tachka/images//d/e/2/de25bf35a45f7f45744f4ce048dad6c5_640x480.jpg",
      "https://im.mashina.kg/tachka/images//2/6/e/26e04d12a1281d7c770671b520fd5a14_640x480.jpg",
      "https://im.mashina.kg/tachka/images//2/a/d/2adc910df940978f5d0b739b81f18843_640x480.jpg"
    ]
  },
  {
    id: 14,
    brand: "BMW",
    model: "M4",
    trim: "кабриолет",
    year: 2023,
    engine: 3.0,
    fuel: "бензин",
    mileage: 26500,
    transmission: "автомат",
    drive: "полный",
    color: "белый",
    priceKgs: 8573040,
    priceUsd: 98000,
    region: "Бишкек",
    status: "В наличии",
    bodyType: "кабриолет",
    steering: "руль слева",
    description: "Свежий полноприводный кабриолет BMW M4 в идеальном состоянии и без вложений.",
    image: "https://im.mashina.kg/tachka/images//d/8/c/d8cbbdb0f36988ed1194c76c0eec120a_640x480.jpg",
    images: [
      "https://im.mashina.kg/tachka/images//d/8/c/d8cbbdb0f36988ed1194c76c0eec120a_640x480.jpg",
      "https://im.mashina.kg/tachka/images//c/0/0/c00ef234945ce01ac951b200da613b56_640x480.jpg",
      "https://im.mashina.kg/tachka/images//2/c/b/2cb928ceed3f0cee91a5bd4c799e1dd3_640x480.jpg",
      "https://im.mashina.kg/tachka/images//1/7/0/170dbbfda2fec42b4fe9c4058030c3b4_640x480.jpg",
      "https://im.mashina.kg/tachka/images//1/8/0/1800c30d0083530bdd36be4dbb972ebd_640x480.jpg"
    ]
  },
  {
    id: 15,
    brand: "Subaru",
    model: "Outback",
    trim: "Limited",
    year: 2016,
    engine: 2.5,
    fuel: "бензин",
    mileage: 181000,
    transmission: "вариатор",
    drive: "полный",
    color: "серый",
    priceKgs: 1268460,
    priceUsd: 14500,
    region: "Бишкек",
    status: "В наличии",
    bodyType: "универсал",
    steering: "руль слева",
    description: "Практичный полноприводный универсал в комплектации Limited с чистым салоном и хорошим состоянием.",
    image: "https://im.mashina.kg/tachka/images//c/4/c/c4c8b4bced4c3e003ff5d4d3c0bc2aa8_640x480.jpg",
    images: [
      "https://im.mashina.kg/tachka/images//c/4/c/c4c8b4bced4c3e003ff5d4d3c0bc2aa8_640x480.jpg",
      "https://im.mashina.kg/tachka/images//d/8/6/d864edd8b66e40867a5fac770803c77a_640x480.jpg",
      "https://im.mashina.kg/tachka/images//d/7/f/d7f21dd71e649e6d4de59ecccf33bee0_640x480.jpg",
      "https://im.mashina.kg/tachka/images//8/3/2/832aa6cf8e5eebc2a622250b6cb11e53_640x480.jpg",
      "https://im.mashina.kg/tachka/images//1/6/5/165694a98444a4143fee18a3e8ebe422_640x480.jpg"
    ]
  },
  {
    id: 16,
    brand: "Chevrolet",
    model: "Volt",
    trim: "Plug-in Hybrid",
    year: 2012,
    engine: 1.4,
    fuel: "гибрид",
    mileage: 122000,
    transmission: "вариатор",
    drive: "передний",
    color: "черный",
    priceKgs: 831060,
    priceUsd: 9500,
    region: "Бишкек",
    status: "В наличии",
    bodyType: "хэтчбек 5 дв.",
    steering: "руль слева",
    description: "Рестайлинговый Chevrolet Volt с гибридной установкой, хорошим состоянием и без срочных вложений.",
    image: "https://im.mashina.kg/tachka/images//e/1/a/e1a57d3053a23cbf5e95b8360fecf765_640x480.jpg",
    images: [
      "https://im.mashina.kg/tachka/images//e/1/a/e1a57d3053a23cbf5e95b8360fecf765_640x480.jpg",
      "https://im.mashina.kg/tachka/images//a/c/f/acf70e07061d19e9940f05469e216c94_640x480.jpg",
      "https://im.mashina.kg/tachka/images//8/b/5/8b5339cfd2442ac08504320404d23815_640x480.jpg",
      "https://im.mashina.kg/tachka/images//4/b/1/4b1f12fa2150e1b42536348f9acbb202_640x480.jpg",
      "https://im.mashina.kg/tachka/images//a/e/0/ae00dbf71e62dd3bb536ce0548fa43cc_640x480.jpg"
    ]
  },
  {
    id: 17,
    brand: "Lexus",
    model: "RX",
    trim: "внедорожник 5 дв.",
    year: 2013,
    engine: 3.5,
    fuel: "бензин",
    mileage: 112000,
    transmission: "автомат",
    drive: "полный",
    color: "белый",
    priceKgs: 2318220,
    priceUsd: 26500,
    region: "Бишкек",
    status: "В наличии",
    bodyType: "внедорожник 5 дв.",
    steering: "руль слева",
    description: "Европейский Lexus RX с оригинальным пробегом, двумя комплектами новой резины и чистым салоном.",
    image: "https://im.mashina.kg/tachka/images//2/d/a/2da7df0c86edbc41d54ca8599d43b120_640x480.jpg",
    images: [
      "https://im.mashina.kg/tachka/images//2/d/a/2da7df0c86edbc41d54ca8599d43b120_640x480.jpg",
      "https://im.mashina.kg/tachka/images//6/a/a/6aa52d8599c498fa9180baaab83dfc36_640x480.jpg",
      "https://im.mashina.kg/tachka/images//5/7/3/573f4f8ffd8af2eec274c03d16fe9061_640x480.jpg",
      "https://im.mashina.kg/tachka/images//a/5/5/a5547f9e6814592aa77d58dc2d48e6b7_640x480.jpg",
      "https://im.mashina.kg/tachka/images//6/8/0/6804c260a48ef1970ffc08933320bc78_640x480.jpg"
    ]
  },
  {
    id: 18,
    brand: "Lexus",
    model: "UX",
    trim: "гибрид AWD",
    year: 2021,
    engine: 2.0,
    fuel: "гибрид",
    mileage: 136794,
    transmission: "вариатор",
    drive: "полный",
    color: "черный",
    priceKgs: 2012040,
    priceUsd: 23000,
    region: "Ош",
    status: "В наличии",
    bodyType: "внедорожник 5 дв.",
    steering: "руль слева",
    description: "Компактный гибридный кроссовер Lexus с полным приводом и аккуратным состоянием.",
    image: "https://im.mashina.kg/tachka/images//4/1/c/41c9991515cfaf06ada81c6278efe32a_640x480.jpg",
    images: [
      "https://im.mashina.kg/tachka/images//4/1/c/41c9991515cfaf06ada81c6278efe32a_640x480.jpg",
      "https://im.mashina.kg/tachka/images//6/0/8/608125fba60dddf557b2e92b67e6db7d_640x480.jpg",
      "https://im.mashina.kg/tachka/images//c/5/f/c5fd2ac3135574d8c859384cd86dcb44_640x480.jpg",
      "https://im.mashina.kg/tachka/images//e/b/f/ebf3823fec61121cc419cb2447c4dfe0_640x480.jpg",
      "https://im.mashina.kg/tachka/images//b/0/7/b0751fab51f56ea3ba93ef05b3e9ac68_640x480.jpg"
    ]
  },
  {
    id: 19,
    brand: "Subaru",
    model: "Outback",
    trim: "универсал",
    year: 2019,
    engine: 2.5,
    fuel: "бензин",
    mileage: 266615,
    transmission: "вариатор",
    drive: "полный",
    color: "серебристый",
    priceKgs: 1312200,
    priceUsd: 15000,
    region: "Кочкорка",
    status: "В наличии",
    bodyType: "универсал",
    steering: "руль слева",
    description: "Полноприводный универсал Subaru для трассы и поездок по региону с практичным салоном.",
    image: "https://im.mashina.kg/tachka/images//f/4/3/f43914b5e4a24cb51d8c5098587a13a3_640x480.jpg",
    images: [
      "https://im.mashina.kg/tachka/images//f/4/3/f43914b5e4a24cb51d8c5098587a13a3_640x480.jpg",
      "https://im.mashina.kg/tachka/images//a/3/4/a34cd2f22bc1ecd9e8f981e35aea9c99_640x480.jpg",
      "https://im.mashina.kg/tachka/images//3/4/9/34959c7603cf838fb4fe71dfd42e6e04_640x480.jpg"
    ]
  },
  {
    id: 20,
    brand: "Kia",
    model: "K3",
    trim: "седан",
    year: 2019,
    engine: 1.6,
    fuel: "бензин",
    mileage: 73000,
    transmission: "вариатор",
    drive: "передний",
    color: "белый",
    priceKgs: 1084752,
    priceUsd: 12400,
    region: "Бишкек",
    status: "В наличии",
    bodyType: "седан",
    steering: "руль слева",
    description: "Свежепригнанный седан из Южной Кореи в родном окрасе и с оригинальным пробегом.",
    image: "https://im.mashina.kg/tachka/images//a/c/e/ace679d1e813ac6b490caf1c1a95af20_640x480.jpg",
    images: [
      "https://im.mashina.kg/tachka/images//a/c/e/ace679d1e813ac6b490caf1c1a95af20_640x480.jpg",
      "https://im.mashina.kg/tachka/images//3/6/a/36a35939546f215589ac7e7b2d01cc8a_640x480.jpg",
      "https://im.mashina.kg/tachka/images//a/e/7/ae706cd4dca0c9e505a68ebb31a1f152_640x480.jpg",
      "https://im.mashina.kg/tachka/images//2/b/e/2be6022381d1731a71ee30a6fd99e56c_640x480.jpg",
      "https://im.mashina.kg/tachka/images//6/5/7/657b5237ec1a05db061f1d5fd9c114fe_640x480.jpg"
    ]
  }
];

const STORAGE_KEYS = {
  customCars: "baha-marketplace-custom-cars",
  favorites: "baha-marketplace-favorites",
  user: "baha-marketplace-user",
  chat: "baha-marketplace-chat"
};

const defaultRegion = "all";
const usdRate = 89;
const fallbackImage = baseCars[0]?.image || "";
const showroomContact = {
  phoneDisplay: "+7 (900) 000-00-00",
  phoneHref: "79000000000",
  whatsappHref: "https://wa.me/79000000000"
};
const showroomName = "БАХА АВТО 777";
const cardSlideState = new Map();

const searchInput = document.querySelector("#searchInput");
const brandSelect = document.querySelector("#brandSelect");
const yearSelect = document.querySelector("#yearSelect");
const priceSelect = document.querySelector("#priceSelect");
const engineSelect = document.querySelector("#engineSelect");
const fuelSelect = document.querySelector("#fuelSelect");
const regionSelect = document.querySelector("#regionSelect");
const transmissionSelect = document.querySelector("#transmissionSelect");
const resetFilters = document.querySelector("#resetFilters");
const carsGrid = document.querySelector("#carsGrid");
const resultsCount = document.querySelector("#resultsCount");
const filterToggle = document.querySelector("#filterToggle");
const advancedFilters = document.querySelector("#advancedFilters");

const favoritesGrid = document.querySelector("#favoritesGrid");
const favoritesCount = document.querySelector("#favoritesCount");
const favoritesMeta = document.querySelector("#favoritesMeta");

const addListingForm = document.querySelector("#addListingForm");
const listingAuthorState = document.querySelector("#listingAuthorState");
const listingFormMessage = document.querySelector("#listingFormMessage");

const accountForm = document.querySelector("#accountForm");
const authSummary = document.querySelector("#authSummary");
const authMessage = document.querySelector("#authMessage");
const logoutButton = document.querySelector("#logoutButton");

const chatMessages = document.querySelector("#chatMessages");
const chatForm = document.querySelector("#chatForm");
const chatInput = document.querySelector("#chatInput");
const chatProfileState = document.querySelector("#chatProfileState");

function safeRead(key, fallbackValue) {
  try {
    const rawValue = window.localStorage.getItem(key);
    return rawValue ? JSON.parse(rawValue) : fallbackValue;
  } catch (error) {
    return fallbackValue;
  }
}

function safeWrite(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // Ignore storage write errors to keep the UI responsive.
  }
}

function safeRemove(key) {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    // Ignore storage write errors to keep the UI responsive.
  }
}

function formatNumber(value) {
  return new Intl.NumberFormat("ru-RU").format(value);
}

function formatPriceKgs(value) {
  return `${formatNumber(value)} KGS`;
}

function formatPriceUsd(value) {
  return `${formatNumber(value)} USD`;
}

function formatEngineValue(car) {
  if (!car || car.engine <= 0) {
    return car?.fuel === "электро" ? "Электро" : "Не указано";
  }

  return `${car.engine} л`;
}

function formatMileageValue(value) {
  return `${formatNumber(value)} км`;
}

function getCardSpecs(car) {
  return [
    car.year ? `${car.year} г.` : "",
    formatEngineValue(car),
    car.transmission || "",
    car.drive || "",
    car.mileage ? formatMileageValue(car.mileage) : ""
  ].filter(Boolean);
}

function formatTime(timestamp) {
  return new Intl.DateTimeFormat("ru-RU", {
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(timestamp));
}

function pluralizeRu(count, one, few, many) {
  const absolute = Math.abs(count) % 100;
  const last = absolute % 10;

  if (absolute > 10 && absolute < 20) {
    return many;
  }

  if (last > 1 && last < 5) {
    return few;
  }

  if (last === 1) {
    return one;
  }

  return many;
}

function normalizeIndex(index, total) {
  if (!total) {
    return 0;
  }

  return (index % total + total) % total;
}

function hashString(value) {
  return [...String(value)].reduce((total, symbol) => total + symbol.charCodeAt(0), 0);
}

function getCarById(carId) {
  return getAllCars().find((car) => String(car.id) === String(carId)) || null;
}

function getCarSeller(car) {
  return car.author || showroomName;
}

function getCarAddress(car) {
  return `${car.region}, автоцентр ${showroomName}, основная площадка`;
}

function getGalleryImages(car) {
  const uniqueImages = [...new Set([
    sanitizeImageUrl(car.image),
    ...(Array.isArray(car.images) ? car.images.map((url) => sanitizeImageUrl(url)) : [])
  ])].filter(Boolean);

  if (!uniqueImages.length && fallbackImage) {
    uniqueImages.push(fallbackImage);
  }

  const gallery = uniqueImages.slice(0, 5);

  while (gallery.length < 5 && gallery[0]) {
    gallery.push(gallery[0]);
  }

  return gallery;
}

function getCardSlideIndex(carId, total) {
  return normalizeIndex(cardSlideState.get(String(carId)) || 0, total);
}

function setCardSlideIndex(carId, index, total) {
  cardSlideState.set(String(carId), normalizeIndex(index, total));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function uniqueValues(list, key, sortFn) {
  const values = [...new Set(list.map((item) => item[key]))];
  return sortFn ? values.sort(sortFn) : values.sort();
}

function fillSelect(select, options, defaultValue = "all", labels = {}) {
  if (!select) {
    return;
  }

  const current = select.value || select.dataset.current || defaultValue;
  const preparedOptions = options.map((value) => String(value));
  const resolvedValue = preparedOptions.includes(String(current)) ? String(current) : String(defaultValue);

  select.innerHTML = preparedOptions.map((value) => {
    const label = labels[value] || value;
    return `<option value="${escapeHtml(value)}" ${value === resolvedValue ? "selected" : ""}>${escapeHtml(label)}</option>`;
  }).join("");

  select.dataset.current = resolvedValue;
}

function getStatusClass(status) {
  if (status === "В наличии") return "status-available";
  if (status === "Бронь") return "status-reserved";
  return "status-sold";
}

function getFavorites() {
  return safeRead(STORAGE_KEYS.favorites, []).map((value) => String(value));
}

function saveFavorites(favorites) {
  safeWrite(STORAGE_KEYS.favorites, [...new Set(favorites.map((value) => String(value)))]);
}

function isFavorite(carId) {
  return getFavorites().includes(String(carId));
}

function toggleFavorite(carId) {
  const normalizedId = String(carId);
  const favorites = getFavorites();
  const updatedFavorites = favorites.includes(normalizedId)
    ? favorites.filter((value) => value !== normalizedId)
    : [...favorites, normalizedId];

  saveFavorites(updatedFavorites);
}

function getCurrentUser() {
  return safeRead(STORAGE_KEYS.user, null);
}

function saveCurrentUser(user) {
  safeWrite(STORAGE_KEYS.user, user);
}

function getStoredCars() {
  return safeRead(STORAGE_KEYS.customCars, [])
    .map((car) => normalizeCar(car))
    .filter(Boolean);
}

function saveStoredCars(cars) {
  safeWrite(STORAGE_KEYS.customCars, cars);
}

function normalizeCar(car) {
  if (!car || !car.id || !car.brand || !car.model) {
    return null;
  }

  return {
    id: String(car.id),
    brand: String(car.brand),
    model: String(car.model),
    year: Number(car.year),
    engine: Number(car.engine),
    fuel: String(car.fuel),
    mileage: Number(car.mileage),
    transmission: String(car.transmission),
    drive: String(car.drive),
    color: String(car.color),
    trim: String(car.trim || ""),
    bodyType: String(car.bodyType || ""),
    steering: String(car.steering || ""),
    priceKgs: Number(car.priceKgs),
    priceUsd: Number(car.priceUsd),
    region: String(car.region),
    status: String(car.status || "В наличии"),
    description: String(car.description),
    image: sanitizeImageUrl(car.image),
    images: Array.isArray(car.images) ? car.images.map((url) => sanitizeImageUrl(url)) : [],
    sourceUrl: car.sourceUrl ? String(car.sourceUrl) : "",
    createdAt: Number(car.createdAt || Date.now()),
    author: car.author ? String(car.author) : ""
  };
}

function getAllCars() {
  return [...baseCars];
}

function getFavoriteCars() {
  const favorites = new Set(getFavorites());
  return getAllCars().filter((car) => favorites.has(String(car.id)));
}

function sanitizeImageUrl(value) {
  const stringValue = String(value || "").trim();
  return /^https?:\/\//i.test(stringValue) ? stringValue : (fallbackImage || "");
}

function createEmptyState(title, description) {
  return `
    <article class="card empty-state-card">
      <div class="card-body empty-state">
        <h3 class="card-title">${escapeHtml(title)}</h3>
        <p class="card-subtitle">${escapeHtml(description)}</p>
      </div>
    </article>
  `;
}

function createCarCardMarkup(car) {
  const favorite = isFavorite(car.id);
  const gallery = getGalleryImages(car);
  const activeSlide = getCardSlideIndex(car.id, gallery.length);
  const title = `${car.brand} ${car.model}`;
  const trim = car.trim || car.bodyType || "";
  const specs = getCardSpecs(car);
  const favoriteLabel = favorite ? "Убрать из избранного" : "Добавить в избранное";

  return `
    <article class="card" data-car-id="${escapeHtml(car.id)}">
      <div class="card-media" data-slider-root="true" data-car-id="${escapeHtml(car.id)}" data-total-slides="${gallery.length}">
        <div class="card-slider-track" style="transform: translateX(-${activeSlide * 100}%);">
          ${gallery.map((image, index) => {
            const backgroundImage = sanitizeImageUrl(image).replace(/'/g, "%27");
            return `
              <button class="card-slide" type="button" data-open-details="${escapeHtml(car.id)}" data-open-slide="${index}" style="background-image:
                linear-gradient(180deg, transparent 28%, rgba(4, 5, 8, 0.72)),
                url('${backgroundImage}');
                background-size: cover;
                background-position: center;"></button>
            `;
          }).join("")}
        </div>
        <button class="slider-arrow slider-arrow-prev" type="button" data-slide-direction="-1" data-car-id="${escapeHtml(car.id)}" aria-label="Предыдущее фото">‹</button>
        <button class="slider-arrow slider-arrow-next" type="button" data-slide-direction="1" data-car-id="${escapeHtml(car.id)}" aria-label="Следующее фото">›</button>
        <div class="card-slider-dots">
          ${gallery.map((_, index) => `
            <button class="card-slider-dot ${index === activeSlide ? "is-active" : ""}" type="button" data-slide-to="${index}" data-car-id="${escapeHtml(car.id)}" aria-label="Фото ${index + 1}"></button>
          `).join("")}
        </div>
        <div class="card-slider-count">${activeSlide + 1} / ${gallery.length}</div>
        <span class="card-status ${getStatusClass(car.status)}">${escapeHtml(car.status)}</span>
        <span class="card-region">${escapeHtml(car.region)}</span>
        <div class="card-hero-text">
          <strong>${escapeHtml(title)}</strong>
          <span>${escapeHtml(trim || `${car.year} г. • ${car.bodyType}`)}</span>
        </div>
      </div>
      <div class="card-body">
        <div class="card-copy">
          <h3 class="card-title">${escapeHtml(title)}</h3>
          ${trim ? `<p class="card-trim">${escapeHtml(trim)}</p>` : ""}
          <p class="card-subtitle">${escapeHtml(car.description)}</p>
        </div>
        <div class="card-specs">
          ${specs.map((item) => `<span class="card-spec">${escapeHtml(item)}</span>`).join("")}
        </div>
        <div class="card-price-row">
          <div class="price-block">
            <strong>${formatPriceKgs(car.priceKgs)}</strong>
            <small>${formatPriceUsd(car.priceUsd)}</small>
          </div>
          <div class="card-actions">
            <button class="inline-button details-trigger" type="button" data-car-id="${escapeHtml(car.id)}">Подробнее</button>
            <a class="primary-button" href="https://wa.me/79000000000" target="_blank" rel="noreferrer">Написать</a>
            <button class="favorite-toggle ${favorite ? "is-active" : ""}" type="button" data-car-id="${escapeHtml(car.id)}" aria-pressed="${favorite}" aria-label="${favoriteLabel}" title="${favoriteLabel}">
              ${favorite ? "★" : "☆"}
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function updateCardSliderDisplay(cardElement) {
  if (!cardElement) {
    return;
  }

  const cardId = cardElement.dataset.carId;
  const totalSlides = Number(cardElement.querySelector("[data-slider-root='true']")?.dataset.totalSlides || 0);
  const activeIndex = getCardSlideIndex(cardId, totalSlides);
  const sliderTrack = cardElement.querySelector(".card-slider-track");
  const counter = cardElement.querySelector(".card-slider-count");

  if (sliderTrack) {
    sliderTrack.style.transform = `translateX(-${activeIndex * 100}%)`;
  }

  if (counter) {
    counter.textContent = `${activeIndex + 1} / ${totalSlides}`;
  }

  cardElement.querySelectorAll(".card-slider-dot").forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === activeIndex);
  });
}

function bindCardSliderGestures(target) {
  if (!target) {
    return;
  }

  target.querySelectorAll("[data-slider-root='true']").forEach((sliderRoot) => {
    let touchStartX = null;

    sliderRoot.addEventListener("touchstart", (event) => {
      touchStartX = event.changedTouches[0].clientX;
    }, { passive: true });

    sliderRoot.addEventListener("touchend", (event) => {
      if (touchStartX === null) {
        return;
      }

      const deltaX = event.changedTouches[0].clientX - touchStartX;
      touchStartX = null;

      if (Math.abs(deltaX) < 35) {
        return;
      }

      const direction = deltaX > 0 ? -1 : 1;
      const cardElement = sliderRoot.closest(".card");
      const totalSlides = Number(sliderRoot.dataset.totalSlides || 0);
      const cardId = sliderRoot.dataset.carId;

      setCardSlideIndex(cardId, getCardSlideIndex(cardId, totalSlides) + direction, totalSlides);
      updateCardSliderDisplay(cardElement);
    }, { passive: true });
  });
}

function renderCars(list, target, options = {}) {
  const {
    countElement,
    countWord = ["автомобиль", "автомобиля", "автомобилей"],
    emptyTitle = "Ничего не найдено",
    emptyDescription = "Попробуйте изменить параметры поиска."
  } = options;

  if (countElement) {
    countElement.textContent = `${list.length} ${pluralizeRu(list.length, countWord[0], countWord[1], countWord[2])}`;
  }

  if (!target) {
    return;
  }

  if (!list.length) {
    target.innerHTML = createEmptyState(emptyTitle, emptyDescription);
    return;
  }

  target.innerHTML = list.map((car) => createCarCardMarkup(car)).join("");
  bindCardSliderGestures(target);
}

function populateFilters() {
  const catalogCars = getAllCars();
  const brandOptions = ["all", ...uniqueValues(catalogCars, "brand")];
  const yearOptions = ["all", ...uniqueValues(catalogCars, "year", (a, b) => b - a)];
  const priceOptions = ["all", 2000000, 3000000, 4000000, 5000000, 7000000, 9000000];
  const engineOptions = ["all", ...uniqueValues(catalogCars.filter((car) => car.engine > 0), "engine", (a, b) => a - b)];
  const fuelOptions = ["all", ...uniqueValues(catalogCars, "fuel")];
  const regionOptions = ["all", defaultRegion, ...uniqueValues(catalogCars, "region").filter((item) => item !== defaultRegion)];
  const transmissionOptions = ["all", ...uniqueValues(catalogCars, "transmission")];

  if (brandSelect && !brandSelect.dataset.current) brandSelect.dataset.current = "all";
  if (yearSelect && !yearSelect.dataset.current) yearSelect.dataset.current = "all";
  if (priceSelect && !priceSelect.dataset.current) priceSelect.dataset.current = "all";
  if (engineSelect && !engineSelect.dataset.current) engineSelect.dataset.current = "all";
  if (fuelSelect && !fuelSelect.dataset.current) fuelSelect.dataset.current = "all";
  if (regionSelect && !regionSelect.dataset.current) regionSelect.dataset.current = defaultRegion;
  if (transmissionSelect && !transmissionSelect.dataset.current) transmissionSelect.dataset.current = "all";

  fillSelect(brandSelect, brandOptions, "all", { all: "Все марки" });
  fillSelect(yearSelect, yearOptions, "all", { all: "Любой год" });
  fillSelect(priceSelect, priceOptions, "all", {
    all: "Любая цена",
    2000000: "до 2 000 000",
    3000000: "до 3 000 000",
    4000000: "до 4 000 000",
    5000000: "до 5 000 000",
    7000000: "до 7 000 000",
    9000000: "до 9 000 000"
  });
  fillSelect(engineSelect, engineOptions, "all", { all: "Любой объём" });
  fillSelect(fuelSelect, fuelOptions, "all", { all: "Любое топливо" });
  fillSelect(regionSelect, regionOptions, defaultRegion, { all: "Все регионы" });
  fillSelect(transmissionSelect, transmissionOptions, "all", { all: "Любая коробка" });
}

function applyFilters() {
  if (!carsGrid) {
    return;
  }

  const query = (searchInput?.value || "").trim().toLowerCase();
  const brand = brandSelect?.value || "all";
  const year = yearSelect?.value || "all";
  const price = priceSelect?.value || "all";
  const engine = engineSelect?.value || "all";
  const fuel = fuelSelect?.value || "all";
  const region = regionSelect?.value || defaultRegion;
  const transmission = transmissionSelect?.value || "all";

  const filtered = getAllCars().filter((car) => {
    const matchesQuery = !query || [
      car.brand,
      car.model,
      car.trim,
      car.bodyType,
      car.description,
      car.region,
      car.color
    ].join(" ").toLowerCase().includes(query);

    const matchesBrand = brand === "all" || car.brand === brand;
    const matchesYear = year === "all" || car.year >= Number(year);
    const matchesPrice = price === "all" || car.priceKgs <= Number(price);
    const matchesEngine = engine === "all" || car.engine === Number(engine);
    const matchesFuel = fuel === "all" || car.fuel === fuel;
    const matchesRegion = region === "all" || car.region === region;
    const matchesTransmission = transmission === "all" || car.transmission === transmission;

    return matchesQuery &&
      matchesBrand &&
      matchesYear &&
      matchesPrice &&
      matchesEngine &&
      matchesFuel &&
      matchesRegion &&
      matchesTransmission;
  });

  renderCars(filtered, carsGrid, {
    countElement: resultsCount,
    countWord: ["автомобиль", "автомобиля", "автомобилей"],
    emptyTitle: "Ничего не найдено",
    emptyDescription: "Попробуйте изменить фильтры или поисковый запрос."
  });
}

function resetAllFilters() {
  if (!searchInput) {
    return;
  }

  searchInput.value = "";
  if (brandSelect) brandSelect.value = "all";
  if (yearSelect) yearSelect.value = "all";
  if (priceSelect) priceSelect.value = "all";
  if (engineSelect) engineSelect.value = "all";
  if (fuelSelect) fuelSelect.value = "all";
  if (regionSelect) regionSelect.value = defaultRegion;
  if (transmissionSelect) transmissionSelect.value = "all";
  applyFilters();
}

function renderFavoritesPage() {
  if (!favoritesGrid) {
    return;
  }

  const favoriteCars = getFavoriteCars();
  renderCars(favoriteCars, favoritesGrid, {
    countElement: favoritesCount,
    countWord: ["объявление", "объявления", "объявлений"],
    emptyTitle: "В избранном пока пусто",
    emptyDescription: "Нажмите на звезду в карточке автомобиля, и объявление появится здесь."
  });

  if (favoritesMeta) {
    favoritesMeta.textContent = favoriteCars.length
      ? "Избранное работает даже без регистрации и хранится в браузере."
      : "Добавьте понравившиеся объявления на главной странице.";
  }
}

function renderAuthSummary() {
  if (!authSummary) {
    return;
  }

  const user = getCurrentUser();

  if (!user) {
    authSummary.innerHTML = `
      <span class="metric-label">Статус</span>
      <strong>Гость</strong>
    `;
    if (logoutButton) {
      logoutButton.hidden = true;
    }
    return;
  }

  authSummary.innerHTML = `
    <span class="metric-label">Статус</span>
    <strong>${escapeHtml(user.login)}</strong>
    <p>Регистрация пройдена</p>
  `;

  if (logoutButton) {
    logoutButton.hidden = false;
  }
}

function renderListingAuthorState() {
  if (!listingAuthorState) {
    return;
  }

  listingAuthorState.textContent = "Пройдите регистрацию";
}

function getDefaultChatMessages() {
  return [
    {
      id: "welcome-message",
      author: "manager",
      text: "Здравствуйте! Напишите вопрос по автомобилю, цене или обмену.",
      createdAt: Date.now()
    }
  ];
}

function getChatMessagesState() {
  const savedMessages = safeRead(STORAGE_KEYS.chat, []);
  return savedMessages.length ? savedMessages : getDefaultChatMessages();
}

function saveChatMessagesState(messages) {
  safeWrite(STORAGE_KEYS.chat, messages);
}

function renderChatMessages() {
  if (!chatMessages) {
    return;
  }

  const messages = getChatMessagesState();
  chatMessages.innerHTML = messages.map((message) => `
    <article class="chat-message ${message.author === "user" ? "chat-message-user" : "chat-message-manager"}">
      <div class="chat-bubble">
        <strong>${message.author === "user" ? "Вы" : "Менеджер"}</strong>
        <p>${escapeHtml(message.text)}</p>
        <time>${formatTime(message.createdAt)}</time>
      </div>
    </article>
  `).join("");

  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function renderChatProfileState() {
  if (!chatProfileState) {
    return;
  }

  const user = getCurrentUser();
  chatProfileState.textContent = user
    ? `Сейчас вы в чате как ${user.login}.`
    : "";
}

function generateManagerReply(text) {
  const normalized = text.toLowerCase();

  if (normalized.includes("цена") || normalized.includes("скид")) {
    return "По цене можно ориентироваться на карточку объявления. Если хотите, оставьте номер и менеджер свяжется с вами.";
  }

  if (normalized.includes("обмен")) {
    return "Обмен возможен по отдельным объявлениям. Уточните марку и модель вашего автомобиля.";
  }

  if (normalized.includes("налич") || normalized.includes("актуал")) {
    return "Актуальность лучше уточнить прямо перед покупкой, но избранные объявления всегда можно сохранить у себя.";
  }

  return "Спасибо за сообщение! Для быстрой связи можно также написать в WhatsApp.";
}

function ensureDetailsModal() {
  let modal = document.querySelector("#detailsModal");

  if (modal) {
    return modal;
  }

  modal = document.createElement("div");
  modal.className = "details-modal";
  modal.id = "detailsModal";
  modal.innerHTML = `
    <div class="details-modal-backdrop" data-modal-close="true"></div>
    <div class="details-modal-panel" role="dialog" aria-modal="true" aria-labelledby="detailsModalTitle">
      <button class="details-modal-close" type="button" data-modal-close="true" aria-label="Закрыть">×</button>
      <div id="detailsModalContent"></div>
    </div>
  `;

  document.body.appendChild(modal);
  return modal;
}

function ensureLightbox() {
  let lightbox = document.querySelector("#galleryLightbox");

  if (lightbox) {
    return lightbox;
  }

  lightbox = document.createElement("div");
  lightbox.className = "gallery-lightbox";
  lightbox.id = "galleryLightbox";
  lightbox.innerHTML = `
    <div class="gallery-lightbox-backdrop" data-lightbox-close="true"></div>
    <div class="gallery-lightbox-panel" role="dialog" aria-modal="true" aria-labelledby="galleryLightboxTitle">
      <button class="gallery-lightbox-close" type="button" data-lightbox-close="true" aria-label="Закрыть">×</button>
      <button class="gallery-lightbox-arrow gallery-lightbox-prev" type="button" data-lightbox-direction="-1" aria-label="Предыдущее фото">‹</button>
      <div class="gallery-lightbox-stage" id="galleryLightboxStage"></div>
      <button class="gallery-lightbox-arrow gallery-lightbox-next" type="button" data-lightbox-direction="1" aria-label="Следующее фото">›</button>
      <div class="gallery-lightbox-meta">
        <strong id="galleryLightboxTitle"></strong>
        <span id="galleryLightboxCounter"></span>
      </div>
    </div>
  `;

  document.body.appendChild(lightbox);
  return lightbox;
}

function updateDetailsGallery(carId, index) {
  const modal = ensureDetailsModal();
  const car = getCarById(carId);

  if (!car) {
    return;
  }

  const gallery = getGalleryImages(car);
  const resolvedIndex = normalizeIndex(index, gallery.length);
  const activeImage = gallery[resolvedIndex].replace(/'/g, "%27");
  const stage = modal.querySelector(".details-gallery-stage");
  const counter = modal.querySelector(".details-gallery-counter");

  modal.dataset.carId = String(carId);
  modal.dataset.activeIndex = String(resolvedIndex);

  if (stage) {
    stage.style.backgroundImage = `linear-gradient(180deg, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.18)), url('${activeImage}')`;
  }

  if (counter) {
    counter.textContent = `${resolvedIndex + 1} / ${gallery.length}`;
  }

  modal.querySelectorAll(".details-thumb").forEach((thumb, thumbIndex) => {
    thumb.classList.toggle("is-active", thumbIndex === resolvedIndex);
  });
}

function updateLightbox(carId, index) {
  const lightbox = ensureLightbox();
  const car = getCarById(carId);

  if (!car) {
    return;
  }

  const gallery = getGalleryImages(car);
  const resolvedIndex = normalizeIndex(index, gallery.length);
  const image = gallery[resolvedIndex].replace(/'/g, "%27");
  const stage = lightbox.querySelector("#galleryLightboxStage");
  const title = lightbox.querySelector("#galleryLightboxTitle");
  const counter = lightbox.querySelector("#galleryLightboxCounter");

  lightbox.dataset.carId = String(carId);
  lightbox.dataset.activeIndex = String(resolvedIndex);

  if (stage) {
    stage.style.backgroundImage = `url('${image}')`;
  }

  if (title) {
    title.textContent = `${car.brand} ${car.model}`;
  }

  if (counter) {
    counter.textContent = `${resolvedIndex + 1} / ${gallery.length}`;
  }
}

function openLightbox(carId, index = 0) {
  const lightbox = ensureLightbox();
  updateLightbox(carId, index);
  lightbox.classList.add("is-open");
}

function closeLightbox() {
  const lightbox = document.querySelector("#galleryLightbox");
  if (!lightbox) {
    return;
  }

  lightbox.classList.remove("is-open");
}

function openDetailsModal(carId, startIndex = 0) {
  const car = getCarById(carId);
  if (!car) {
    return;
  }

  const modal = ensureDetailsModal();
  const content = modal.querySelector("#detailsModalContent");
  const title = `${car.brand} ${car.model}`;
  const address = getCarAddress(car);
  const seller = getCarSeller(car);
  const gallery = getGalleryImages(car);
  const characteristics = [
    ["Комплектация", car.trim || "Не указано"],
    ["Год", car.year],
    ["Кузов", car.bodyType || "Не указано"],
    ["Коробка", car.transmission],
    ["Привод", car.drive],
    ["Объём", formatEngineValue(car)],
    ["Топливо", car.fuel],
    ["Пробег", formatMileageValue(car.mileage)],
    ["Цвет", car.color],
    ["Руль", car.steering || "Не указано"],
    ["Регион", car.region],
    ["Статус", car.status]
  ].map(([label, value]) => `
    <div class="details-list-row">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
    </div>
  `).join("");

  content.innerHTML = `
    <div class="details-modal-hero">
      <div class="details-gallery" data-gallery-car-id="${escapeHtml(car.id)}">
        <button class="details-gallery-stage" type="button" aria-label="Открыть фото в полном размере"></button>
        <button class="details-gallery-arrow details-gallery-prev" type="button" data-details-direction="-1" aria-label="Предыдущее фото">‹</button>
        <button class="details-gallery-arrow details-gallery-next" type="button" data-details-direction="1" aria-label="Следующее фото">›</button>
        <div class="details-gallery-counter"></div>
        <div class="details-gallery-thumbs">
          ${gallery.map((image, index) => {
            const thumb = sanitizeImageUrl(image).replace(/'/g, "%27");
            return `
              <button class="details-thumb" type="button" data-details-index="${index}" style="background-image: url('${thumb}');" aria-label="Фото ${index + 1}"></button>
            `;
          }).join("")}
        </div>
      </div>
      <div class="details-modal-summary">
        <span class="details-modal-kicker">${escapeHtml(car.status)}</span>
        <h2 id="detailsModalTitle">${escapeHtml(title)}</h2>
        <p>${escapeHtml(car.description)}</p>
        <div class="details-modal-price">
          <strong>${formatPriceKgs(car.priceKgs)}</strong>
          <small>${formatPriceUsd(car.priceUsd)}</small>
        </div>
        <div class="details-modal-actions">
          <a class="primary-button" href="${showroomContact.whatsappHref}" target="_blank" rel="noreferrer">Связаться</a>
          <button class="inline-button" type="button" data-modal-close="true">Закрыть</button>
        </div>
      </div>
    </div>
    <div class="details-modal-grid">
      <section class="details-card">
        <h3>Характеристика</h3>
        <div class="details-list">${characteristics}</div>
      </section>
      <section class="details-card">
        <h3>Описание</h3>
        <p>${escapeHtml(car.description)}</p>
      </section>
      <section class="details-card">
        <h3>Контакты</h3>
        <div class="details-list">
          <div class="details-list-row">
            <span>Продавец</span>
            <strong>${escapeHtml(seller)}</strong>
          </div>
          <div class="details-list-row">
            <span>Телефон</span>
            <a href="tel:${showroomContact.phoneHref}">${showroomContact.phoneDisplay}</a>
          </div>
          <div class="details-list-row">
            <span>WhatsApp</span>
            <a href="${showroomContact.whatsappHref}" target="_blank" rel="noreferrer">Открыть чат</a>
          </div>
        </div>
      </section>
      <section class="details-card">
        <h3>Адрес</h3>
        <p>${escapeHtml(address)}</p>
      </section>
    </div>
  `;

  modal.classList.add("is-open");
  document.body.classList.add("modal-open");
  updateDetailsGallery(carId, startIndex);
}

function closeDetailsModal() {
  const modal = document.querySelector("#detailsModal");
  if (!modal) {
    return;
  }

  modal.classList.remove("is-open");
  closeLightbox();
  document.body.classList.remove("modal-open");
}

function handleDocumentClick(event) {
  const sliderArrow = event.target.closest("[data-slide-direction]");
  if (sliderArrow) {
    const cardId = sliderArrow.dataset.carId;
    const cardElement = sliderArrow.closest(".card");
    const totalSlides = Number(cardElement?.querySelector("[data-slider-root='true']")?.dataset.totalSlides || 0);
    const direction = Number(sliderArrow.dataset.slideDirection || 0);

    setCardSlideIndex(cardId, getCardSlideIndex(cardId, totalSlides) + direction, totalSlides);
    updateCardSliderDisplay(cardElement);
    return;
  }

  const sliderDot = event.target.closest("[data-slide-to]");
  if (sliderDot) {
    const cardId = sliderDot.dataset.carId;
    const cardElement = sliderDot.closest(".card");
    const totalSlides = Number(cardElement?.querySelector("[data-slider-root='true']")?.dataset.totalSlides || 0);
    const targetIndex = Number(sliderDot.dataset.slideTo || 0);

    setCardSlideIndex(cardId, targetIndex, totalSlides);
    updateCardSliderDisplay(cardElement);
    return;
  }

  const openFromImage = event.target.closest("[data-open-details]");
  if (openFromImage) {
    openDetailsModal(openFromImage.dataset.openDetails, Number(openFromImage.dataset.openSlide || 0));
    return;
  }

  const button = event.target.closest(".favorite-toggle");
  if (button) {
    toggleFavorite(button.dataset.carId);

    if (carsGrid) {
      applyFilters();
    }

    if (favoritesGrid) {
      renderFavoritesPage();
    }
    return;
  }

  const detailsButton = event.target.closest(".details-trigger");
  if (detailsButton) {
    openDetailsModal(detailsButton.dataset.carId);
    return;
  }

  const detailsArrow = event.target.closest("[data-details-direction]");
  if (detailsArrow) {
    const modal = ensureDetailsModal();
    const carId = modal.dataset.carId;
    const activeIndex = Number(modal.dataset.activeIndex || 0);
    const direction = Number(detailsArrow.dataset.detailsDirection || 0);
    const car = getCarById(carId);

    if (!car) {
      return;
    }

    updateDetailsGallery(carId, activeIndex + direction);
    return;
  }

  const detailsThumb = event.target.closest("[data-details-index]");
  if (detailsThumb) {
    const modal = ensureDetailsModal();
    updateDetailsGallery(modal.dataset.carId, Number(detailsThumb.dataset.detailsIndex || 0));
    return;
  }

  if (event.target.closest(".details-gallery-stage")) {
    const modal = ensureDetailsModal();
    openLightbox(modal.dataset.carId, Number(modal.dataset.activeIndex || 0));
    return;
  }

  const lightboxArrow = event.target.closest("[data-lightbox-direction]");
  if (lightboxArrow) {
    const lightbox = ensureLightbox();
    const carId = lightbox.dataset.carId;
    const activeIndex = Number(lightbox.dataset.activeIndex || 0);
    const direction = Number(lightboxArrow.dataset.lightboxDirection || 0);
    updateLightbox(carId, activeIndex + direction);
    return;
  }

  if (event.target.closest("[data-lightbox-close='true']")) {
    closeLightbox();
    return;
  }

  if (event.target.closest("[data-modal-close='true']")) {
    closeDetailsModal();
  }
}

function initHomePage() {
  if (!carsGrid) {
    return;
  }

  populateFilters();
  applyFilters();

  [
    searchInput,
    brandSelect,
    yearSelect,
    priceSelect,
    engineSelect,
    fuelSelect,
    regionSelect,
    transmissionSelect
  ].filter(Boolean).forEach((element) => {
    element.addEventListener("input", applyFilters);
    element.addEventListener("change", applyFilters);
  });

  if (resetFilters) {
    resetFilters.addEventListener("click", resetAllFilters);
  }

  if (filterToggle && advancedFilters) {
    filterToggle.addEventListener("click", () => {
      advancedFilters.classList.toggle("is-open");
    });
  }
}

function initFavoritesPage() {
  renderFavoritesPage();
}

function initAddListingPage() {
  renderListingAuthorState();

  if (!addListingForm) {
    return;
  }

  addListingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (listingFormMessage) {
      listingFormMessage.textContent = "Пройдите регистрацию";
    } else {
      window.alert("Пройдите регистрацию");
    }
  });
}

function initAccountPage() {
  renderAuthSummary();

  if (accountForm) {
    accountForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(accountForm);
      const login = String(formData.get("login") || "").trim();
      const password = String(formData.get("password") || "").trim();

      const user = {
        login,
        password,
        registeredAt: Date.now()
      };

      saveCurrentUser(user);
      renderAuthSummary();

      if (authMessage) {
        authMessage.textContent = `Пользователь ${login} зарегистрирован и считается авторизованным.`;
      }
    });
  }

  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      safeRemove(STORAGE_KEYS.user);
      renderAuthSummary();

      if (authMessage) {
        authMessage.textContent = "Вы вышли из кабинета.";
      }
    });
  }
}

function initChatPage() {
  renderChatProfileState();
  renderChatMessages();

  if (!chatForm || !chatInput) {
    return;
  }

  chatForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = chatInput.value.trim();
    if (!text) {
      return;
    }

    const messages = getChatMessagesState();
    messages.push({
      id: `user-${Date.now()}`,
      author: "user",
      text,
      createdAt: Date.now()
    });
    saveChatMessagesState(messages);
    chatInput.value = "";
    renderChatMessages();

    window.setTimeout(() => {
      const updatedMessages = getChatMessagesState();
      updatedMessages.push({
        id: `manager-${Date.now()}`,
        author: "manager",
        text: generateManagerReply(text),
        createdAt: Date.now()
      });
      saveChatMessagesState(updatedMessages);
      renderChatMessages();
    }, 500);
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    const lightbox = document.querySelector("#galleryLightbox");
    if (lightbox?.classList.contains("is-open")) {
      closeLightbox();
      return;
    }

    closeDetailsModal();
  }
});

document.addEventListener("click", handleDocumentClick);

initHomePage();
initFavoritesPage();
initAddListingPage();
initAccountPage();
initChatPage();
