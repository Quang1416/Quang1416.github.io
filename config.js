// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "Chúc chị tuổi mới cũng là năm mới thì cái gì cũng mới! ",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "Avatar này chị để hơi lâu rồi đấy, đổi đi ạ",  // 同上...
        "Chúc chị có 1 buổi tối không ngủ cùng người yêu! ",
        "Nhưng....",
        "Điều quan trọng nhất em muốn nói là...",
        "Em rất xin lỗi chị và anh Minh",
        "Vì thời gian vừa qua em hơi 'báo' ",
        "Em thật sự cảm thấy ngại vì để anh chị phải chịu claim của sale về em",
        "Nhưng sau cùng em muốn nói là...",
        "Em không sửa đâu ạ!!!!!",
        "YEPP! chúc chị sinh nhật vui vẻ",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/chi_trang.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "Avatar này chị để hơi lâu rồi đấy, đổi đi ạ": "./imgs/chi_trang.jpg",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "Bấm ở đây để mở đèn chị ơi!",
        play: "Thêm tí nhạc nữa :v",
        bannar_coming: "Chúc chị sinh nhật vui vẻ",
        balloons_flying: "thêm tí bóng bay",
        cake_fadein: "Thêm cái bánh nữa!",
        light_candle: "thắp nến nốt đi chị :v",
        wish_message: "Bấm đây cho nó chạy nốt đi ạ, em k nghĩ đc nữa rồi :v",
        story: "Nhân dịp sinh nhật em có vài lời chúc gửi đến chị",
    }
};
