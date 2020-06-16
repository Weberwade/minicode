let list_data = [
    {
        tital:"肖申克的救赎 The Shawshank Redemption",
        wepperimg:"/images/movieimg/01.jpg",
        daoyan:"弗兰克·德拉邦特",
        yanyuan:"弗兰克·德拉邦特、蒂姆·罗宾斯、摩根·弗里曼",
        data:1994,
        point:9.6
    },
    {
        tital:"霸王别姬",
        wepperimg:"/images/movieimg/02.jpg",
        daoyan:"陈凯歌",
        yanyuan:"张国荣、张丰毅、陈凯歌",
        data:1993,
        point:9.5
    },
    {
        tital:"这个杀手不太冷 Léon",
        wepperimg:"/images/movieimg/03.jpg",
        daoyan:"吕克·贝松",
        yanyuan:"吕克·贝松、让·雷诺、娜塔莉·波特曼",
        data:1994,
        point:9.4
    },
    {
        tital:"阿甘正传 Forrest Gump",
        wepperimg:"/images/movieimg/04.jpg",
        daoyan:"罗伯特·泽米吉斯",
        yanyuan:"罗伯特·泽米吉斯、汤姆·汉克斯、罗宾·怀特",
        data:1994,
        point:9.4
    },
    {
        tital:"美丽人生 La vita è bella",
        wepperimg:"/images/movieimg/05.jpg",
        daoyan:"罗伯托·贝尼尼",
        yanyuan:"罗伯托·贝尼尼、罗伯托·贝尼尼、尼可莱塔·布拉斯基",
        data:1997,
        point:9.5
    },
    {
        tital:"千与千寻 千と千尋の神隠し",
        wepperimg:"/images/movieimg/06.jpg",
        daoyan:"宫崎骏",
        yanyuan:"宫崎骏、柊瑠美、入野自由",
        data:2001,
        point:9.2
    },
    {
        tital:"泰坦尼克号 Titanic",
        wepperimg:"/images/movieimg/07.jpg",
        daoyan:"詹姆斯·卡梅隆",
        yanyuan:"詹姆斯·卡梅隆、莱昂纳多·迪卡普里奥、凯特·温丝莱特",
        data:1997,
        point:9.2
    },
    {
        tital:"辛德勒的名单 Schindler's List",
        wepperimg:"/images/movieimg/08.jpg",
        daoyan:"史蒂文·斯皮尔伯格",
        yanyuan:"史蒂文·斯皮尔伯格、连姆·尼森、本·金斯利",
        data:1993,
        point:9.4
    },
    {
        tital:"盗梦空间 Inception",
        wepperimg:"/images/movieimg/09.jpg",
        daoyan:"克里斯托弗·诺兰",
        yanyuan:"克里斯托弗·诺兰、莱昂纳多·迪卡普里奥、约瑟夫·高登-莱维特",
        data:2008,
        point:9.3
    },
    {
        tital:"机器人总动员 WALL·E",
        wepperimg:"/images/movieimg/10.jpg",
        daoyan:"安德鲁·斯坦顿",
        yanyuan:"安德鲁·斯坦顿、本·贝尔特、艾丽莎·奈特",
        data:1994,
        point:9.6
    },
    {
        tital:"海上钢琴师 La leggenda del pianista sull'oceano",
        wepperimg:"/images/movieimg/11.jpg",
        daoyan:"朱塞佩·托纳多雷",
        yanyuan:"朱塞佩·托纳多雷、蒂姆·罗斯、普路特·泰勒·文斯",
        data:1998,
        point:9.2
    },
    {
        tital:"三傻大闹宝莱坞 3 Idiots",
        wepperimg:"/images/movieimg/12.jpg",
        daoyan:"拉吉库马尔·希拉尼",
        yanyuan:"拉吉库马尔·希拉尼、阿米尔·汗、卡琳娜·卡普尔",
        data:2009,
        point:9.1
    },
    {
        tital:"忠犬八公的故事 Hachi: A Dog's Tale",
        wepperimg:"/images/movieimg/13.jpg",
        daoyan:"拉斯·霍尔斯道姆",
        yanyuan:"拉斯·霍尔斯道姆、理查·基尔、萨拉·罗默尔",
        data:2009,
        point:9.2
    },
    {
        tital:"放牛班的春天 Les choristes",
        wepperimg:"/images/movieimg/14.jpg",
        daoyan:"克里斯托夫·巴拉蒂",
        yanyuan:"克里斯托夫·巴拉蒂、热拉尔·朱尼奥、让-巴蒂斯特·莫尼耶",
        data:1994,
        point:9.6
    },
    {
        tital:"大话西游之大圣娶亲 西遊記大結局之仙履奇緣",
        wepperimg:"/images/movieimg/15.jpg",
        daoyan:"刘镇伟",
        yanyuan:"刘镇伟、周星驰、吴孟达",
        data:1995,
        point:9.2
    },
    {
        tital:"楚门的世界 The Truman Show",
        wepperimg:"/images/movieimg/16.jpg",
        daoyan:"彼得·威尔",
        yanyuan:"彼得·威尔、金·凯瑞、劳拉·琳妮",
        data:1998,
        point:9.1
    },
    {
        tital:"龙猫 となりのトトロ",
        wepperimg:"/images/movieimg/17.jpg",
        daoyan:"宫崎骏",
        yanyuan:"宫崎骏、日高法子、坂本千夏",
        data:1988,
        point:9.1
    },
    {
        tital:"教父 The Godfather",
        wepperimg:"/images/movieimg/18.jpg",
        daoyan:"弗朗西斯·福特·科波拉",
        yanyuan:"弗朗西斯·福特·科波拉、马龙·白兰度、阿尔·帕西诺",
        data:1972,
        point:9.2
    },
    {
        tital:"熔炉 도가니",
        wepperimg:"/images/movieimg/19.jpg",
        daoyan:"黄东赫",
        yanyuan:"黄东赫、孔侑、郑有美",
        data:2011,
        point:9.2
    },
    {
        tital:"星际穿越 Interstellar",
        wepperimg:"/images/movieimg/20.jpg",
        daoyan:"克里斯托弗·诺兰",
        yanyuan:"克里斯托弗·诺兰、马修·麦康纳、安妮·海瑟薇",
        data:2014,
        point:9.1
    }
  ];
  
  module.exports = {list_data};