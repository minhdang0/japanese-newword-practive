const vocab = [
{ kanji: "朝", jp: "あさ", vi: "buổi sáng" },
  { kanji: "朝ご飯", jp: "あさごはん", vi: "bữa ăn sáng" },
  { kanji: "", jp: "あさって", vi: "ngày kia" },
  { kanji: "足", jp: "あし", vi: "chân" },
  { kanji: "明日", jp: "あした", vi: "ngày mai" },
  { kanji: "", jp: "これ", vi: "cái này" },
  { kanji: "", jp: "それ", vi: "cái đó" },
  { kanji: "", jp: "あれ", vi: "cái kia" },
  { kanji: "", jp: "ここ", vi: "chỗ này" },
  { kanji: "", jp: "そこ", vi: "chỗ đó" },
  { kanji: "", jp: "あそこ", vi: "chỗ kia, đằng kia" },
  { kanji: "", jp: "こちら", vi: "phía này" },
  { kanji: "", jp: "そちら", vi: "phía đó" },
  { kanji: "", jp: "あちら", vi: "phía kia" },
  { kanji: "春", jp: "はる", vi: "mùa xuân" },
  { kanji: "夏", jp: "なつ", vi: "mùa hạ" },
  { kanji: "秋", jp: "あき", vi: "mùa thu" },
  { kanji: "冬", jp: "ふゆ", vi: "mùa đông" },
  { kanji: "頭", jp: "あたま", vi: "đầu" },
  { kanji: "", jp: "あなた", vi: "bạn" },
  { kanji: "兄", jp: "あに", vi: "anh trai (mình)" },
  { kanji: "姉", jp: "あね", vi: "chị gái (mình)" },
  { kanji: "", jp: "アパート", vi: "căn hộ" },
  { kanji: "雨", jp: "あめ", vi: "mưa" },
  { kanji: "飴", jp: "あめ", vi: "kẹo (ngậm)" },
  { kanji: "家", jp: "いえ", vi: "nhà" },
  { kanji: "池", jp: "いけ", vi: "cái ao" },
  { kanji: "医者", jp: "いしゃ", vi: "bác sĩ" },
  { kanji: "椅子", jp: "いす", vi: "ghế" },
  { kanji: "一", jp: "いち", vi: "một" },
  { kanji: "一日", jp: "いちにち/ついたち", vi: "một ngày, ngày mồng 1" },
  { kanji: "二日", jp: "ふつか", vi: "2 ngày, ngày mồng 2" },
  { kanji: "三日", jp: "みっか", vi: "3 ngày, ngày mồng 3" },
  { kanji: "四日", jp: "よっか", vi: "4 ngày, ngày mồng 4" },
  { kanji: "五日", jp: "いつか", vi: "năm ngày, ngày mồng 5" },
  { kanji: "六日", jp: "むいか", vi: "6 ngày, ngày mồng 6" },
  { kanji: "七日", jp: "なのか", vi: "7 ngày, ngày mồng 7" },
  { kanji: "八日", jp: "ようか", vi: "8 ngày, ngày mồng 8" },
  { kanji: "九日", jp: "ここのか", vi: "9 ngày, ngày mồng 9" },
  { kanji: "十日", jp: "とおか", vi: "10 ngày, ngày mồng 10" },
  { kanji: "五つ", jp: "いつつ", vi: "năm cái (đếm đồ vật nói chung)" },
  { kanji: "犬", jp: "いぬ", vi: "con chó" },
  { kanji: "今", jp: "いま", vi: "bây giờ" },
  { kanji: "意味", jp: "いみ", vi: "ý nghĩa" },
  { kanji: "妹", jp: "いもうと", vi: "em gái (mình)" },
  { kanji: "入口", jp: "いりぐち", vi: "lối vào" },
  { kanji: "色", jp: "いろ", vi: "màu" },
  { kanji: "上", jp: "うえ", vi: "trên" },
  { kanji: "後ろ", jp: "うしろ", vi: "đằng sau" },
  { kanji: "歌", jp: "うた", vi: "bài hát" },
  { kanji: "海", jp: "うみ", vi: "biển" },
  { kanji: "上着", jp: "うわぎ", vi: "áo khoác" },
  { kanji: "絵", jp: "え", vi: "bức tranh" },
  { kanji: "映画", jp: "えいが", vi: "phim (điện ảnh)" },
  { kanji: "映画館", jp: "えいがかん", vi: "rạp chiếu phim" },
  { kanji: "英語", jp: "えいご", vi: "tiếng Anh" },
  { kanji: "駅", jp: "えき", vi: "nhà ga" },
  { kanji: "", jp: "エレベーター", vi: "thang máy" },
  { kanji: "鉛筆", jp: "えんぴつ", vi: "bút chì" },
  { kanji: "大勢", jp: "おおぜい", vi: "nhiều (người)" },
  { kanji: "お母さん", jp: "おかあさん", vi: "mẹ (khi nói về mẹ người khác)" },
  { kanji: "お菓子", jp: "おかし", vi: "bánh, kẹo" },
  { kanji: "お金", jp: "おかね", vi: "tiền" },
  { kanji: "奥さん", jp: "おくさん", vi: "vợ (khi nói về vợ người khác)" },
  { kanji: "お酒", jp: "おさけ", vi: "rượu" },
  { kanji: "お皿", jp: "おさら", vi: "cái đĩa" },
  { kanji: "", jp: "おじいさん", vi: "ông (nội, ngoại), ông già" },
  { kanji: "", jp: "おじさん", vi: "chú, bác (người đàn ông trung niên)" },
  { kanji: "お茶", jp: "おちゃ", vi: "trà" },
  { kanji: "お手洗い", jp: "おてあらい", vi: "nhà vệ sinh" },
  { kanji: "お父さん", jp: "おとうさん", vi: "bố (dùng để nói về bố người khác)" },
  { kanji: "弟", jp: "おとうと", vi: "em trai (mình)" },
  { kanji: "男", jp: "おとこ", vi: "nam giới, con trai" },
  { kanji: "男の子", jp: "おとこのこ", vi: "bé trai" },
  { kanji: "一昨日", jp: "おととい", vi: "hôm kia" },
  { kanji: "一昨年", jp: "おととし", vi: "năm kia" },
  { kanji: "大人", jp: "おとな", vi: "người lớn" },
  { kanji: "", jp: "おなか", vi: "bụng" },
  { kanji: "同じ", jp: "おなじ", vi: "giống nhau" },
  { kanji: "お兄さん", jp: "おにいさん", vi: "anh trai (người khác)" },
  { kanji: "お姉さん", jp: "おねえさん", vi: "chị gái (người khác)" },
  { kanji: "", jp: "おばあさん", vi: "bà (nội, ngoại), bà già" },
  { kanji: "", jp: "おばさん", vi: "cô, dì" },
  { kanji: "お風呂", jp: "おふろ", vi: "bồn tắm" },
  { kanji: "お弁当", jp: "おべんとう", vi: "cơm hộp" },
  { kanji: "", jp: "おまわりさん", vi: "cảnh sát" },
  { kanji: "音楽", jp: "おんがく", vi: "âm nhạc" },
  { kanji: "女の子", jp: "おんなのこ", vi: "bé gái" },
  { kanji: "外国", jp: "がいこく", vi: "nước ngoài" },
  { kanji: "外国人", jp: "がいこくじん", vi: "người nước ngoài" },
  { kanji: "会社", jp: "かいしゃ", vi: "công ty" },
  { kanji: "階段", jp: "かいだん", vi: "cầu thang" },
  { kanji: "買い物", jp: "かいもの", vi: "mua sắm" },
  { kanji: "", jp: "かぎ", vi: "chìa khóa" },
  { kanji: "学生", jp: "がくせい", vi: "học sinh, sinh viên" },
  { kanji: "傘", jp: "かさ", vi: "cái ô" },
  { kanji: "風", jp: "かぜ", vi: "gió" },
  { kanji: "風邪", jp: "かぜ", vi: "cảm, cúm" },
  { kanji: "家族", jp: "かぞく", vi: "gia đình" },
  { kanji: "方", jp: "かた", vi: "vị, người (cách nói lịch sự của 人), cách (làm việc gì đó)" },
  { kanji: "学校", jp: "がっこう", vi: "trường học" },
  { kanji: "", jp: "カップ", vi: "cốc (có tay cầm)" },
  { kanji: "", jp: "コップ", vi: "cốc (không quai)" },
  { kanji: "家庭", jp: "かてい", vi: "gia đình" },
  { kanji: "角", jp: "かど", vi: "góc (bàn, cua, quẹo)" },
  { kanji: "", jp: "かばん", vi: "cặp, túi sách" },
  { kanji: "花瓶", jp: "かびん", vi: "bình hoa, lọ hoa" },
  { kanji: "紙", jp: "かみ", vi: "giấy" },
  { kanji: "", jp: "カメラ", vi: "máy ảnh" },
  { kanji: "火曜日", jp: "かようび", vi: "thứ ba" },
  { kanji: "", jp: "カレー", vi: "cà ri" },
  { kanji: "", jp: "カレンダー", vi: "tờ lịch" },
  { kanji: "川", jp: "かわ", vi: "sông" },
  { kanji: "漢字", jp: "かんじ", vi: "chữ hán" },
  { kanji: "木", jp: "き", vi: "cây, gỗ" },
  { kanji: "黄色", jp: "きいろ", vi: "màu vàng" },
  { kanji: "北", jp: "きた", vi: "phía bắc" },
  { kanji: "", jp: "ギター", vi: "guitar" },
  { kanji: "喫茶店", jp: "きっさてん", vi: "quán giải khát" },
  { kanji: "切手", jp: "きって", vi: "tem" },
  { kanji: "切符", jp: "きっぷ", vi: "vé (tàu, xe)" },
  { kanji: "昨日", jp: "きのう", vi: "hôm qua" },
  { kanji: "牛肉", jp: "ぎゅうにく", vi: "thịt bò" },
  { kanji: "牛乳", jp: "ぎゅうにゅう", vi: "sữa (bò)" },
  { kanji: "今日", jp: "きょう", vi: "hôm nay" },
  { kanji: "教室", jp: "きょうしつ", vi: "phòng học, lớp học" },
  { kanji: "兄弟", jp: "きょうだい", vi: "anh chị em" },
  { kanji: "去年", jp: "きょねん", vi: "năm ngoái" },
  { kanji: "", jp: "キロ/キログラム", vi: "kg" },
  { kanji: "", jp: "キロ/キロメートル", vi: "km" },
  { kanji: "銀行", jp: "ぎんこう", vi: "ngân hàng" },
  { kanji: "金曜日", jp: "きんようび", vi: "thứ sáu" },
  { kanji: "薬", jp: "くすり", vi: "thuốc" },
  { kanji: "果物", jp: "くだもの", vi: "hoa quả, trái cây" },
  { kanji: "口", jp: "くち", vi: "miệng" },
  { kanji: "靴", jp: "くつ", vi: "giày dép" },
  { kanji: "靴下", jp: "くつした", vi: "cái tất" },
  { kanji: "国", jp: "くに", vi: "đất nước" },
  { kanji: "曇り", jp: "くもり", vi: "có mây, nhiều mây" },
  { kanji: "", jp: "クラス", vi: "lớp học" },
  { kanji: "", jp: "グラム", vi: "gram" },
  { kanji: "車", jp: "くるま", vi: "xe hơi, xe" },
  { kanji: "黒", jp: "くろ", vi: "đen, màu đen" },
  { kanji: "警官", jp: "けいかん", vi: "cảnh sát" },
  { kanji: "今朝", jp: "けさ", vi: "sáng nay" },
  { kanji: "結婚", jp: "けっこん", vi: "kết hôn" },
  { kanji: "月曜日", jp: "げつようび", vi: "thứ hai" },
  { kanji: "玄関", jp: "げんかん", vi: "lối đi vào" },
  { kanji: "公園", jp: "こうえん", vi: "công viên" },
  { kanji: "交差点", jp: "こうさてん", vi: "ngã tư" },
  { kanji: "紅茶", jp: "こうちゃ", vi: "trà đen" },
  { kanji: "交番", jp: "こうばん", vi: "bốt, trạm cảnh sát" },
  { kanji: "声", jp: "こえ", vi: "tiếng, giọng nói" },
  { kanji: "", jp: "コート", vi: "áo khoác" },
  { kanji: "", jp: "コーヒー", vi: "cà phê" },
  { kanji: "午後", jp: "ごご", vi: "buổi chiều" },
  { kanji: "九つ", jp: "ここのつ", vi: "9 cái (vật nói chung)" },
  { kanji: "午前", jp: "ごぜん", vi: "buổi sáng" },
  { kanji: "", jp: "こっち", vi: "phía này (cách nói ngắn gọn của こちら)" },
  { kanji: "今年", jp: "ことし", vi: "năm nay" },
  { kanji: "言葉", jp: "ことば", vi: "từ, từ vựng" },
  { kanji: "子供", jp: "こども", vi: "trẻ em, con cái" },
  { kanji: "御飯", jp: "ごはん", vi: "cơm, bữa ăn" },
  { kanji: "今月", jp: "こんげつ", vi: "tháng này" },
  { kanji: "今週", jp: "こんしゅう", vi: "tuần này" },
  { kanji: "", jp: "こんな", vi: "như thế này" },
  { kanji: "今晩", jp: "こんばん", vi: "tối nay" },
  { kanji: "財布", jp: "さいふ", vi: "cái ví" },
  { kanji: "魚", jp: "さかな", vi: "cá" },
  { kanji: "作文", jp: "さくぶん", vi: "làm văn" },
  { kanji: "雑誌", jp: "ざっし", vi: "tạp chí" },
  { kanji: "砂糖", jp: "さとう", vi: "đường" },
  { kanji: "再来年", jp: "さらいねん", vi: "năm sau nữa" },
  { kanji: "三", jp: "さん", vi: "ba" },
  { kanji: "四", jp: "し/よん", vi: "bốn" },
  { kanji: "塩", jp: "しお", vi: "muối" },
  { kanji: "時間", jp: "じかん", vi: "thời gian" },
  { kanji: "仕事", jp: "しごと", vi: "công việc" },
  { kanji: "辞書", jp: "じしょ", vi: "từ điển" },
  { kanji: "下", jp: "した", vi: "dưới" },
  { kanji: "七", jp: "しち/なな", vi: "bảy" },
  { kanji: "質問", jp: "しつもん", vi: "câu hỏi" },
  { kanji: "自転車", jp: "じてんしゃ", vi: "xe đạp" },
  { kanji: "自動車", jp: "じどうしゃ", vi: "ô tô, xe hơi" },
  { kanji: "自分", jp: "じぶん", vi: "bản thân, tự mình" },
  { kanji: "写真", jp: "しゃしん", vi: "ảnh" },
  { kanji: "", jp: "シャツ", vi: "áo sơ mi" },
  { kanji: "", jp: "シャワー", vi: "vòi hoa sen" },
  { kanji: "十", jp: "じゅう", vi: "mười" },
  { kanji: "授業", jp: "じゅぎょう", vi: "giờ học" },
  { kanji: "宿題", jp: "しゅくだい", vi: "bài tập về nhà" },
  { kanji: "", jp: "しょうゆ", vi: "xì dầu" },
  { kanji: "食堂", jp: "しょくどう", vi: "phòng ăn, nhà ăn" },
  { kanji: "新聞", jp: "しんぶん", vi: "báo" },
  { kanji: "水曜日", jp: "すいようび", vi: "thứ tư" },
  { kanji: "", jp: "スカート", vi: "váy ngắn" },
  { kanji: "", jp: "ストーブ", vi: "lò sưởi" },
  { kanji: "", jp: "スプーン", vi: "cái thìa" },
  { kanji: "", jp: "スポーツ", vi: "thể thao" },
  { kanji: "", jp: "ズボン", vi: "quần" },
  { kanji: "背", jp: "せ", vi: "lưng" },
  { kanji: "生徒", jp: "せいと", vi: "học sinh" },
  { kanji: "", jp: "セーター", vi: "áo len" },
  { kanji: "", jp: "せっけん", vi: "xà bông" },
  { kanji: "", jp: "ゼロ", vi: "số 0" },
  { kanji: "千", jp: "せん", vi: "nghìn" },
  { kanji: "先月", jp: "せんげつ", vi: "tháng trước" },
  { kanji: "先週", jp: "せんしゅう", vi: "tuần trước" },
  { kanji: "先生", jp: "せんせい", vi: "giáo viên, bác sĩ" },
  { kanji: "洗濯", jp: "せんたく", vi: "việc giặt giũ" },
  { kanji: "掃除", jp: "そうじ", vi: "dọn dẹp" },
  { kanji: "外", jp: "そと", vi: "ngoài" },
  { kanji: "", jp: "そば", vi: "gần, bên cạnh" },
  { kanji: "空", jp: "そら", vi: "bầu trời" },
  { kanji: "大学", jp: "だいがく", vi: "đại học" },
  { kanji: "大使館", jp: "たいしかん", vi: "đại sứ quán" },
  { kanji: "台所", jp: "だいどころ", vi: "nhà bếp" },
  { kanji: "", jp: "タクシー", vi: "xe taxi" },
  { kanji: "建物", jp: "たてもの", vi: "tòa nhà" },
  { kanji: "食べ物", jp: "たべもの", vi: "đồ ăn" },
  { kanji: "卵", jp: "たまご", vi: "trứng" },
  { kanji: "誕生日", jp: "たんじょうび", vi: "sinh nhật" },
  { kanji: "地下鉄", jp: "ちかてつ", vi: "tàu điện ngầm" },
  { kanji: "地図", jp: "ちず", vi: "bản đồ" },
  { kanji: "茶色", jp: "ちゃいろ", vi: "màu nâu (màu trà)" },
  { kanji: "", jp: "ちゃわん", vi: "cái bát" },
  { kanji: "一日", jp: "ついたち", vi: "ngày mồng 1" },
  { kanji: "机", jp: "つくえ", vi: "bàn" },
  { kanji: "手", jp: "て", vi: "tay" },
  { kanji: "", jp: "テーブル", vi: "cái bàn" },
  { kanji: "", jp: "テープレコーダー", vi: "máy ghi âm" },
  { kanji: "手紙", jp: "てがみ", vi: "thư" },
  { kanji: "出口", jp: "でぐち", vi: "cửa ra, lối ra" },
  { kanji: "", jp: "テスト", vi: "kiểm tra" },
  { kanji: "", jp: "デパート", vi: "cửa hàng bách hóa" },
  { kanji: "", jp: "テレビ", vi: "tivi" },
  { kanji: "天気", jp: "てんき", vi: "thời tiết" },
  { kanji: "電気", jp: "でんき", vi: "điện, đèn điện" },
  { kanji: "電車", jp: "でんしゃ", vi: "tàu điện" },
  { kanji: "電話", jp: "でんわ", vi: "điện thoại" },
  { kanji: "戸", jp: "と", vi: "cửa" },
  { kanji: "", jp: "ドア", vi: "cửa" },
  { kanji: "", jp: "トイレ", vi: "nhà vệ sinh" },
  { kanji: "所", jp: "ところ", vi: "nơi, chỗ" },
  { kanji: "年", jp: "とし", vi: "năm" },
  { kanji: "図書館", jp: "としょかん", vi: "thư viện" },
  { kanji: "動物", jp: "どうぶつ", vi: "động vật" },
  { kanji: "時々", jp: "ときどき", vi: "thỉnh thoảng" },
  { kanji: "時計", jp: "とけい", vi: "đồng hồ" },
  { kanji: "隣", jp: "となり", vi: "bên cạnh" },
  { kanji: "友達", jp: "ともだち", vi: "bạn bè" },
  { kanji: "土曜日", jp: "どようび", vi: "thứ bảy" },
  { kanji: "鳥", jp: "とり", vi: "con chim" },
  { kanji: "とり肉", jp: "とりにく", vi: "thịt gà" },
  { kanji: "", jp: "ナイフ", vi: "dao" },
  { kanji: "中", jp: "なか", vi: "trong" },
  { kanji: "夏", jp: "なつ", vi: "mùa hè" },
  { kanji: "夏休み", jp: "なつやすみ", vi: "kỳ nghỉ hè" },
  { kanji: "七つ", jp: "ななつ", vi: "bảy cái (đếm vật nói chung)" },
  { kanji: "名前", jp: "なまえ", vi: "tên" },
  { kanji: "二", jp: "に", vi: "hai" },
  { kanji: "肉", jp: "にく", vi: "thịt" },
  { kanji: "西", jp: "にし", vi: "phía tây" },
  { kanji: "日曜日", jp: "にちようび", vi: "chủ nhật" },
  { kanji: "荷物", jp: "にもつ", vi: "hành lý, đồ đạc" },
  { kanji: "", jp: "ニュース", vi: "tin tức" },
  { kanji: "庭", jp: "にわ", vi: "vườn" },
  { kanji: "", jp: "ネクタイ", vi: "cà vạt" },
  { kanji: "猫", jp: "ねこ", vi: "mèo" },
  { kanji: "飲み物", jp: "のみもの", vi: "đồ uống" },
  { kanji: "歯", jp: "は", vi: "răng" },
  { kanji: "", jp: "パーティー", vi: "tiệc" },
  { kanji: "灰皿", jp: "はいざら", vi: "gạt tàn thuốc" },
  { kanji: "葉書", jp: "はがき", vi: "bưu thiếp" },
  { kanji: "箱", jp: "はこ", vi: "cái hộp" },
  { kanji: "橋", jp: "はし", vi: "cầu" },
  { kanji: "箸", jp: "はし", vi: "đũa" },
  { kanji: "", jp: "バス", vi: "xe buýt" },
  { kanji: "", jp: "バター", vi: "bơ" },
  { kanji: "二十歳", jp: "はたち/にじゅっさい", vi: "20 tuổi" },
  { kanji: "八", jp: "はち", vi: "tám" },
  { kanji: "二十日", jp: "はつか", vi: "ngày 20, 20 ngày" },
  { kanji: "花", jp: "はな", vi: "hoa" },
  { kanji: "鼻", jp: "はな", vi: "mũi" },
  { kanji: "話", jp: "はなし", vi: "câu chuyện" },
  { kanji: "春", jp: "はる", vi: "mùa xuân" },
  { kanji: "半", jp: "はん", vi: "một nửa" },
  { kanji: "晩", jp: "ばん", vi: "buổi tối" },
  { kanji: "", jp: "パン", vi: "bánh mì" },
  { kanji: "", jp: "ハンカチ", vi: "khăn tay" },
  { kanji: "番号", jp: "ばんごう", vi: "số" },
  { kanji: "晩御飯", jp: "ばんごはん", vi: "bữa ăn tối" },
  { kanji: "半分", jp: "はんぶん", vi: "một nửa" },
  { kanji: "東", jp: "ひがし", vi: "phía đông" },
  { kanji: "飛行機", jp: "ひこうき", vi: "máy bay" },
  { kanji: "左", jp: "ひだり", vi: "phía bên tay trái" },
  { kanji: "人", jp: "ひと", vi: "người" },
  { kanji: "一つ", jp: "ひとつ", vi: "một cái (đếm vật nói chung)" },
  { kanji: "一月", jp: "いちがつ", vi: "tháng 1" },
  { kanji: "一人", jp: "ひとり", vi: "một người" },
  { kanji: "百", jp: "ひゃく", vi: "trăm" },
  { kanji: "病院", jp: "びょういん", vi: "bệnh viện" },
  { kanji: "病気", jp: "びょうき", vi: "bệnh" },
  { kanji: "昼", jp: "ひる", vi: "buổi trưa, ban ngày" },
  { kanji: "昼ご飯", jp: "ひるごはん", vi: "ăn trưa" },
  { kanji: "", jp: "フィルム", vi: "cuộn phim" },
  { kanji: "封筒", jp: "ふうとう", vi: "phong bì" },
  { kanji: "", jp: "プール", vi: "hồ bơi" },
  { kanji: "", jp: "フォーク", vi: "dĩa" },
  { kanji: "服", jp: "ふく", vi: "quần áo" },
  { kanji: "二つ", jp: "ふたつ", vi: "hai cái (đếm vật nói chung)" },
  { kanji: "豚肉", jp: "ぶたにく", vi: "thịt lợn" },
  { kanji: "二人", jp: "ふたり", vi: "hai người" },
  { kanji: "二日", jp: "ふつか", vi: "hai ngày, ngày mồng 2" },
  { kanji: "冬", jp: "ふゆ", vi: "mùa đông" },
  { kanji: "文章", jp: "ぶんしょう", vi: "câu văn, đoạn văn" },
  { kanji: "", jp: "ページ", vi: "trang" },
  { kanji: "", jp: "ベッド", vi: "cái giường" },
  { kanji: "", jp: "ペット", vi: "thú cưng" },
  { kanji: "部屋", jp: "へや", vi: "căn phòng" },
  { kanji: "辺", jp: "へん", vi: "khu vực" },
  { kanji: "", jp: "ペン", vi: "bút" },
  { kanji: "帽子", jp: "ぼうし", vi: "mũ" },
  { kanji: "", jp: "ボールペン", vi: "bút bi" },
  { kanji: "", jp: "ポケット", vi: "túi (áo, quần)" },
  { kanji: "", jp: "ボタン", vi: "nút" },
  { kanji: "", jp: "ホテル", vi: "khách sạn" },
  { kanji: "本", jp: "ほん", vi: "cuốn sách" },
  { kanji: "本棚", jp: "ほんだな", vi: "giá sách" },
  { kanji: "本当", jp: "ほんとう", vi: "sự thật" },
  { kanji: "毎朝", jp: "まいあさ", vi: "mỗi buổi sáng" },
  { kanji: "毎月", jp: "まいげつ/まいつき", vi: "mỗi tháng" },
  { kanji: "毎週", jp: "まいしゅう", vi: "mỗi tuần" },
  { kanji: "毎日", jp: "まいにち", vi: "mỗi ngày" },
  { kanji: "毎年", jp: "まいねん/まいとし", vi: "mỗi năm" },
  { kanji: "毎晩", jp: "まいばん", vi: "mỗi tối" },
  { kanji: "前", jp: "まえ", vi: "trước" },
  { kanji: "町", jp: "まち", vi: "thị xã, thành phố" },
  { kanji: "窓", jp: "まど", vi: "cửa sổ" },
  { kanji: "万", jp: "まん", vi: "vạn (mười nghìn)" },
  { kanji: "万年筆", jp: "まんねんひつ", vi: "bút mực" },
  { kanji: "右", jp: "みぎ", vi: "bên phải" },
  { kanji: "水", jp: "みず", vi: "nước" },
  { kanji: "店", jp: "みせ", vi: "cửa hàng, cửa tiệm" },
  { kanji: "道", jp: "みち", vi: "đường phố" },
  { kanji: "三つ", jp: "みっつ", vi: "ba cái (đếm đồ vật nói chung)" },
  { kanji: "緑", jp: "みどり", vi: "màu xanh lá cây" },
  { kanji: "皆さん", jp: "みなさん", vi: "tất cả mọi người" },
  { kanji: "南", jp: "みなみ", vi: "phía nam" },
  { kanji: "耳", jp: "みみ", vi: "tai" },
  { kanji: "", jp: "みんな", vi: "tất cả" },
  { kanji: "向こう", jp: "むこう", vi: "phía bên kia" },
  { kanji: "六つ", jp: "むっつ", vi: "sáu cái (đếm đồ vật nói chung)" },
  { kanji: "村", jp: "むら", vi: "làng" },
  { kanji: "目", jp: "め", vi: "mắt" },
  { kanji: "", jp: "メートル", vi: "mét" },
  { kanji: "眼鏡", jp: "めがね", vi: "kính" },
  { kanji: "もう一度", jp: "もういちど", vi: "một lần nữa" },
  { kanji: "木曜日", jp: "もくようび", vi: "thứ năm" },
  { kanji: "物", jp: "もの", vi: "đồ vật" },
  { kanji: "門", jp: "もん", vi: "cổng, cửa" },
  { kanji: "問題", jp: "もんだい", vi: "vấn đề" },
  { kanji: "八百屋", jp: "やおや", vi: "cửa hàng rau" },
  { kanji: "野菜", jp: "やさい", vi: "rau" },
  { kanji: "休み", jp: "やすみ", vi: "nghỉ, nghỉ ngơi" },
  { kanji: "八つ", jp: "やっつ", vi: "tám cái (đếm vật nói chung)" },
  { kanji: "山", jp: "やま", vi: "núi" },
  { kanji: "夕方", jp: "ゆうがた", vi: "chiều tối" },
  { kanji: "夕飯", jp: "ゆうはん", vi: "bữa ăn tối" },
  { kanji: "郵便局", jp: "ゆうびんきょく", vi: "bưu điện" },
  { kanji: "", jp: "ゆうべ", vi: "đêm qua" },
  { kanji: "洋服", jp: "ようふく", vi: "quần áo kiểu phương tây" },
  { kanji: "横", jp: "よこ", vi: "bên cạnh, bên, chiều rộng" },
  { kanji: "四つ", jp: "よっつ", vi: "bốn cái (đếm đồ vật nói chung)" },
  { kanji: "夜", jp: "よる", vi: "buổi tối, ban đêm" },
  { kanji: "来月", jp: "らいげつ", vi: "tháng sau" },
  { kanji: "来週", jp: "らいしゅう", vi: "tuần sau" },
  { kanji: "来年", jp: "らいねん", vi: "năm sau" },
  { kanji: "", jp: "ラジオ", vi: "radio" },
  { kanji: "", jp: "ラジカセ/ラジオカセット", vi: "đài cassette" },
  { kanji: "留学生", jp: "りゅうがくせい", vi: "du học sinh" },
  { kanji: "両親", jp: "りょうしん", vi: "bố mẹ" },
  { kanji: "料理", jp: "りょうり", vi: "nấu ăn, món ăn" },
  { kanji: "旅行", jp: "りょこう", vi: "du lịch" },
  { kanji: "冷蔵庫", jp: "れいぞうこ", vi: "tủ lạnh" },
  { kanji: "", jp: "レストラン", vi: "nhà hàng" },
  { kanji: "廊下", jp: "ろうか", vi: "hành lang" },
  { kanji: "六", jp: "ろく", vi: "sáu" },
  { kanji: "", jp: "ワイシャツ", vi: "áo sơ mi" },
  { kanji: "私", jp: "わたくし", vi: "tôi (khiêm nhường ngữ)" },
  { kanji: "私", jp: "わたし", vi: "tôi" },
  { kanji: "会う", jp: "あう", vi: "gặp mặt" },
  { kanji: "開く", jp: "あく", vi: "mở (tự động từ)" },
  { kanji: "開ける", jp: "あける", vi: "mở (tha động từ)" },
  { kanji: "上げる", jp: "あげる", vi: "nâng lên, tăng lên" },
  { kanji: "遊ぶ", jp: "あそぶ", vi: "chơi" },
  { kanji: "浴びる", jp: "あびる", vi: "tắm (vòi hoa sen)" },
  { kanji: "洗う", jp: "あらう", vi: "rửa" },
  { kanji: "", jp: "ある", vi: "có (dùng cho đồ vật, vật vô tri vô giác)" },
  { kanji: "歩く", jp: "あるく", vi: "đi bộ" },
  { kanji: "", jp: "いる", vi: "có (được sử dụng cho người và động vật)" },
  { kanji: "要る", jp: "いる", vi: "cần" },
  { kanji: "入れる", jp: "いれる", vi: "cho vào, đưa vào" },
  { kanji: "歌う", jp: "うたう", vi: "hát" },
  { kanji: "生まれる", jp: "うまれる", vi: "được sinh ra" },
  { kanji: "売る", jp: "うる", vi: "bán" },
  { kanji: "教える", jp: "おしえる", vi: "dạy, chỉ cho biết" },
  { kanji: "覚える", jp: "おぼえる", vi: "nhớ" },
  { kanji: "降りる", jp: "おりる", vi: "xuống" },
  { kanji: "終る", jp: "おわる", vi: "kết thúc" },
  { kanji: "買う", jp: "かう", vi: "mua" },
  { kanji: "返す", jp: "かえす", vi: "trả lại" },
  { kanji: "帰る", jp: "かえる", vi: "về" },
  { kanji: "", jp: "かかる", vi: "mất, tốn (thời gian, tiền bạc...)" },
  { kanji: "書く", jp: "かく", vi: "viết" },
  { kanji: "貸す", jp: "かす", vi: "cho vay, cho mượn" },
  { kanji: "借りる", jp: "かりる", vi: "vay, mượn" },
  { kanji: "消える", jp: "きえる", vi: "biến mất, tắt (điện)" },
  { kanji: "聞く", jp: "きく", vi: "nghe, hỏi" },
  { kanji: "切る", jp: "きる", vi: "cắt" },
  { kanji: "着る", jp: "きる", vi: "mặc (đưa từ trên xuống như áo...)" },
  { kanji: "曇る", jp: "くもる", vi: "có mây, nhiều mây" },
  { kanji: "来る", jp: "くる", vi: "đến" },
  { kanji: "答える", jp: "こたえる", vi: "trả lời" },
  { kanji: "", jp: "コピーする", vi: "copy, sao chép" },
  { kanji: "困る", jp: "こまる", vi: "bối rối, khó khăn, rắc rối" },
  { kanji: "散歩", jp: "さんぽする", vi: "đi dạo" },
  { kanji: "閉まる", jp: "しまる", vi: "đóng (tự động từ)" },
  { kanji: "閉める", jp: "しめる", vi: "đóng (tha động từ)" },
  { kanji: "知る", jp: "しる", vi: "biết" },
  { kanji: "吸う", jp: "すう", vi: "hút" },
  { kanji: "住む", jp: "すむ", vi: "sống" },
  { kanji: "", jp: "する", vi: "làm, chơi, tổ chức..." },
  { kanji: "座る", jp: "すわる", vi: "ngồi" },
  { kanji: "掃除する", jp: "そうじする", vi: "dọn dẹp" },
  { kanji: "出す", jp: "だす", vi: "lấy ra, nộp, gửi (thư)" },
  { kanji: "立つ", jp: "たつ", vi: "đứng" },
  { kanji: "頼む", jp: "たのむ", vi: "nhờ" },
  { kanji: "食べる", jp: "たべる", vi: "ăn" },
  { kanji: "使う", jp: "つかう", vi: "sử dụng" },
  { kanji: "疲れる", jp: "つかれる", vi: "mệt mỏi" },
  { kanji: "着く", jp: "つく", vi: "đến" },
  { kanji: "作る", jp: "つくる", vi: "làm, chế tạo, nấu ăn" },
  { kanji: "", jp: "つける", vi: "bật" },
  { kanji: "勤める", jp: "つとめる", vi: "làm việc" },
  { kanji: "出かける", jp: "でかける", vi: "đi ra ngoài" },
  { kanji: "出る", jp: "でる", vi: "ra, rời khỏi, xuất hiện" },
  { kanji: "飛ぶ", jp: "とぶ", vi: "bay, nhảy" },
  { kanji: "止まる", jp: "とまる", vi: "dừng lại (tự động từ)" },
  { kanji: "止める", jp: "とめる", vi: "đỗ, đậu (xe, đài...) (tha động từ)" },
  { kanji: "取る", jp: "とる", vi: "lấy (muối...)" },
  { kanji: "撮る", jp: "とる", vi: "chụp ảnh hoặc quay phim" },
  { kanji: "鳴く", jp: "なく", vi: "kêu, hót" },
  { kanji: "無くす", jp: "なくす", vi: "làm mất, đánh mất" },
  { kanji: "習う", jp: "ならう", vi: "học" },
  { kanji: "並ぶ", jp: "ならぶ", vi: "xếp hàng, ngang bằng" },
  { kanji: "並べる", jp: "ならべる", vi: "sắp xếp, bố trí" },
  { kanji: "", jp: "なる", vi: "trở nên, trở thành" },
  { kanji: "脱ぐ", jp: "ぬぐ", vi: "cởi" },
  { kanji: "寝る", jp: "ねる", vi: "đi ngủ, ngủ" },
  { kanji: "登る", jp: "のぼる", vi: "leo lên" },
  { kanji: "飲む", jp: "のむ", vi: "uống" },
  { kanji: "乗る", jp: "のる", vi: "lên (tàu, xe...) cưỡi ngựa" },
  { kanji: "入る", jp: "はいる", vi: "vào, đi vào" },
  { kanji: "履く", jp: "はく", vi: "mặc, đi (từ dưới lên)" },
  { kanji: "始まる", jp: "はじまる", vi: "được bắt đầu (tự động từ)" },
  { kanji: "始める", jp: "はじめる", vi: "bắt đầu (tha động từ)" },
  { kanji: "走る", jp: "はしる", vi: "chạy" },
  { kanji: "働く", jp: "はたらく", vi: "làm việc" },
  { kanji: "話す", jp: "はなす", vi: "nói chuyện" },
  { kanji: "貼る", jp: "はる", vi: "dán" },
  { kanji: "晴れる", jp: "はれる", vi: "có nắng, thời tiết đẹp" },
  { kanji: "引く", jp: "ひく", vi: "kéo" },
  { kanji: "弾く", jp: "ひく", vi: "chơi (nhạc cụ)" },
  { kanji: "吹く", jp: "ふく", vi: "thổi" },
  { kanji: "降る", jp: "ふる", vi: "rơi (mưa, tuyết)" },
  { kanji: "勉強する", jp: "べんきょうする", vi: "học" },
  { kanji: "曲る", jp: "まがる", vi: "rẽ, cong" },
  { kanji: "待つ", jp: "まつ", vi: "chờ đợi" },
  { kanji: "見せる", jp: "みせる", vi: "cho xem" },
  { kanji: "見る", jp: "みる", vi: "xem, nhìn, trông" },
  { kanji: "持つ", jp: "もつ", vi: "mang, cầm" },
  { kanji: "休む", jp: "やすむ", vi: "nghỉ, nghỉ ngơi" },
  { kanji: "", jp: "やる", vi: "làm" },
  { kanji: "呼ぶ", jp: "よぶ", vi: "gọi" },
  { kanji: "読む", jp: "よむ", vi: "đọc" },
  { kanji: "練習", jp: "れんしゅうする", vi: "thực hành, luyện tập" },
  { kanji: "分かる", jp: "わかる", vi: "hiểu, nắm được" },
  { kanji: "忘れる", jp: "わすれる", vi: "quên" },
  { kanji: "渡す", jp: "わたす", vi: "đưa cho" },
  { kanji: "渡る", jp: "わたる", vi: "đi qua, băng qua" },
  { kanji: "青い", jp: "あおい", vi: "xanh da trời" },
  { kanji: "赤い", jp: "あかい", vi: "màu đỏ" },
  { kanji: "明い", jp: "あかるい", vi: "sáng, tươi sáng, vui vẻ, sáng sủa" },
  { kanji: "暖かい", jp: "あたたかい", vi: "ấm áp" },
  { kanji: "新しい", jp: "あたらしい", vi: "mới" },
  { kanji: "暑い", jp: "あつい", vi: "nóng (thời tiết)" },
  { kanji: "熱い", jp: "あつい", vi: "nóng (khi chạm vào)" },
  { kanji: "厚い", jp: "あつい", vi: "dày" },
  { kanji: "危ない", jp: "あぶない", vi: "nguy hiểm" },
  { kanji: "甘い", jp: "あまい", vi: "ngọt, ngọt ngào" },
  { kanji: "", jp: "いい/よい", vi: "tốt" },
  { kanji: "忙しい", jp: "いそがしい", vi: "bận rộn" },
  { kanji: "痛い", jp: "いたい", vi: "đau" },
  { kanji: "", jp: "うるさい", vi: "ồn ào, gây phiền nhiễu" },
  { kanji: "美味しい", jp: "おいしい", vi: "ngon" },
  { kanji: "多い", jp: "おおい", vi: "nhiều" },
  { kanji: "大きい", jp: "おおきい", vi: "to, lớn" },
  { kanji: "遅い", jp: "おそい", vi: "muộn, chậm" },
  { kanji: "重い", jp: "おもい", vi: "nặng" },
  { kanji: "", jp: "おもしろい", vi: "thú vị" },
  { kanji: "辛い", jp: "からい", vi: "cay" },
  { kanji: "軽い", jp: "かるい", vi: "nhẹ" },
  { kanji: "", jp: "かわいい", vi: "dễ thương" },
  { kanji: "黄色い", jp: "きいろい", vi: "màu vàng" },
  { kanji: "汚い", jp: "きたない", vi: "bẩn" },
  { kanji: "暗い", jp: "くらい", vi: "tối" },
  { kanji: "寒い", jp: "さむい", vi: "lạnh" },
  { kanji: "白い", jp: "しろい", vi: "trắng" },
  { kanji: "少ない", jp: "すくない", vi: "một chút, một ít" },
  { kanji: "涼しい", jp: "すずしい", vi: "mát" },
  { kanji: "狭い", jp: "せまい", vi: "hẹp" },
  { kanji: "楽しい", jp: "たのしい", vi: "vui" },
  { kanji: "小さい", jp: "ちいさい", vi: "nhỏ" },
  { kanji: "近い", jp: "ちかい", vi: "gần" },
  { kanji: "", jp: "つまらない", vi: "nhàm chán" },
  { kanji: "冷たい", jp: "つめたい", vi: "lạnh, buốt (khi chạm vào)" },
  { kanji: "遠い", jp: "とおい", vi: "xa" },
  { kanji: "長い", jp: "ながい", vi: "dài" },
  { kanji: "早い", jp: "はやい", vi: "sớm" },
  { kanji: "速い", jp: "はやい", vi: "nhanh chóng" },
  { kanji: "広い", jp: "ひろい", vi: "rộng rãi, rộng" },
  { kanji: "太い", jp: "ふとい", vi: "béo" },
  { kanji: "古い", jp: "ふるい", vi: "cũ (không dùng cho người)" },
  { kanji: "欲しい", jp: "ほしい", vi: "muốn" },
  { kanji: "細い", jp: "ほそい", vi: "gầy, hẹp, thon" },
  { kanji: "", jp: "まずい", vi: "dở (món ăn), không ổn rồi" },
  { kanji: "丸い", jp: "まるい", vi: "tròn" },
  { kanji: "短い", jp: "みじかい", vi: "ngắn" },
  { kanji: "難しい", jp: "むずかしい", vi: "khó" },
  { kanji: "安い", jp: "やすい", vi: "giá rẻ" },
  { kanji: "弱い", jp: "よわい", vi: "yếu" },
  { kanji: "強い", jp: "つよい", vi: "mạnh" },
  { kanji: "若い", jp: "わかい", vi: "trẻ" },
  { kanji: "悪い", jp: "わるい", vi: "xấu" },
  { kanji: "嫌", jp: "いや", vi: "chán, ghét, khó chịu" },
  { kanji: "", jp: "いろいろ", vi: "nhiều, đa dạng" },
  { kanji: "", jp: "すてき", vi: "đẹp, hay" },
  { kanji: "嫌い", jp: "きらい", vi: "ghét, không thích" },
  { kanji: "", jp: "きれい", vi: "đẹp, sạch sẽ" },
  { kanji: "結構", jp: "けっこう", vi: "đủ" },
  { kanji: "元気", jp: "げんき", vi: "khỏe mạnh" },
  { kanji: "静か", jp: "しずか", vi: "yên tĩnh" },
  { kanji: "上手", jp: "じょうず", vi: "giỏi, khéo" },
  { kanji: "丈夫", jp: "じょうぶ", vi: "chắc, bền" },
  { kanji: "好き", jp: "すき", vi: "thích" },
  { kanji: "大丈夫", jp: "だいじょうぶ", vi: "không sao, không vấn đề gì" },
  { kanji: "大好き", jp: "だいすき", vi: "rất thích" },
  { kanji: "大切", jp: "たいせつ", vi: "quan trọng, quý giá" },
  { kanji: "大変", jp: "たいへん", vi: "khó khăn, vất vả" },
  { kanji: "小さな", jp: "ちいさな", vi: "nhỏ" },
  { kanji: "賑やか", jp: "にぎやか", vi: "náo nhiệt" },
  { kanji: "暇", jp: "ひま", vi: "rảnh rỗi" },
  { kanji: "便利", jp: "べんり", vi: "tiện lợi" },
  { kanji: "", jp: "りっぱ", vi: "lộng lẫy, tuyệt vời" },
  { kanji: "不便", jp: "ふべん", vi: "bất tiện" },
  { kanji: "簡単", jp: "かんたん", vi: "đơn giản" },
   { kanji: "", jp: "あまり", vi: "không~lắm" },
  { kanji: "一緒", jp: "いっしょ", vi: "cùng nhau" },
  { kanji: "後", jp: "あと", vi: "sau đó" },
  { kanji: "", jp: "あのう", vi: "à, ừm... (dùng trong giao tiếp, biểu thị sự ngại ngùng, do dự)" },
  { kanji: "", jp: "いいえ", vi: "không" },
  { kanji: "", jp: "いかが", vi: "như thế nào (cách nói lịch sự của どう)" },
  { kanji: "", jp: "いくつ", vi: "bao nhiêu cái? bao nhiêu tuổi?" },
  { kanji: "", jp: "いくら", vi: "bao nhiêu? (hỏi giá tiền)" },
  { kanji: "", jp: "いつ", vi: "khi nào" },
  { kanji: "", jp: "いつも", vi: "luôn luôn" },
  { kanji: "", jp: "ええ", vi: "vâng, có (bằng はい)" },
  { kanji: "先", jp: "さき", vi: "trước (làm cái gì đó trước)" },
  { kanji: "", jp: "しかし", vi: "tuy nhiên" },
  { kanji: "", jp: "すぐに", vi: "ngay lập tức" },
  { kanji: "", jp: "その", vi: "~đó" },
  { kanji: "", jp: "それから", vi: "sau đó" },
  { kanji: "", jp: "それでは", vi: "vậy thì, thế thì" },
  { kanji: "", jp: "たくさん", vi: "nhiều" },
  { kanji: "", jp: "たぶん", vi: "có thể, có lẽ" },
  { kanji: "誰", jp: "だれ", vi: "ai, người nào" },
  { kanji: "誰", jp: "だれか", vi: "ai đó" },
  { kanji: "", jp: "だんだん", vi: "dần" },
  { kanji: "", jp: "ちょうど", vi: "vừa đúng, vừa đủ" },
  { kanji: "", jp: "ちょっと", vi: "một ít, một chút" },
  { kanji: "次", jp: "つぎ", vi: "tiếp theo" },
  { kanji: "", jp: "どう", vi: "như thế nào" },
  { kanji: "", jp: "どうして", vi: "tại sao" },
  { kanji: "", jp: "どうぞ", vi: "xin mời" },
  { kanji: "", jp: "どこ", vi: "chỗ nào" },
  { kanji: "", jp: "どちら", vi: "phía nào" },
  { kanji: "", jp: "どっち", vi: "phía nào (thân mật của どちら)" },
  { kanji: "", jp: "どれ", vi: "cái nào" },
  { kanji: "", jp: "なぜ", vi: "tại sao" },
  { kanji: "", jp: "など", vi: "vân vân" },
  { kanji: "何", jp: "なん/なに", vi: "gì, cái gì" },
  { kanji: "", jp: "はい", vi: "vâng, có" },
  { kanji: "", jp: "ほか", vi: "khác" },
  { kanji: "", jp: "まっすぐ", vi: "thẳng" },
  { kanji: "", jp: "さあ", vi: "dùng để chuyển đề tài" },
];

let mode = "mc";
let dir = "jp2vi";
let shuffled = [];
let current = 0;
let correct = 0;
let wrong = 0;
let streak = 0;
let answered = false;
let wrongWords = [];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function setMode(m) {
  mode = m;
  document
    .querySelectorAll(".tab-btn")
    .forEach((b, i) =>
      b.classList.toggle("active", ["mc", "type", "flash"][i] === m),
    );
  renderQuestion();
}

function setDir(d) {
  dir = d;
  document
    .querySelectorAll(".dir-btn")
    .forEach((b, i) =>
      b.classList.toggle("active", ["jp2vi", "vi2jp"][i] === d),
    );
  renderQuestion();
}

function restart() {
  shuffled = shuffle(vocab);
  current = 0;
  correct = 0;
  wrong = 0;
  streak = 0;
  wrongWords = [];
  updateStats();
  document.getElementById("finishScreen").classList.remove("show");
  document.getElementById("quizCard").style.display = "";
  document.getElementById("wrongList").innerHTML = "";
  renderQuestion();
}

function updateStats() {
  document.getElementById("statCorrect").textContent = correct;
  document.getElementById("statWrong").textContent = wrong;
  document.getElementById("statTotal").textContent = current;
  document.getElementById("statStreak").textContent = streak;
  const pct = shuffled.length ? (current / shuffled.length) * 100 : 0;
  document.getElementById("progressFill").style.width = pct + "%";
}

function getPrompt(item) {
  return dir === "jp2vi" ? item.jp : item.vi;
}
function getAnswer(item) {
  return dir === "jp2vi" ? item.vi : item.jp;
}
function getKanji(item) {
  return dir === "jp2vi" ? item.kanji : "";
}

function renderQuestion() {
  if (current >= shuffled.length) {
    showFinish();
    return;
  }
  answered = false;
  const item = shuffled[current];

  // Card
  document.getElementById("qNum").textContent =
    `${current + 1} / ${shuffled.length}`;
  const hint =
    dir === "jp2vi"
      ? "Từ tiếng Nhật — nghĩa là gì?"
      : "Nghĩa tiếng Việt — tiếng Nhật là gì?";
  document.getElementById("cardHint").textContent = hint;

  const promptEl = document.getElementById("jpWord");
  const kanjiEl = document.getElementById("kanjiSub");

  if (dir === "jp2vi") {
    promptEl.style.fontFamily = "'Noto Sans JP', sans-serif";
    promptEl.textContent = item.jp;
    kanjiEl.textContent = item.kanji ? `(${item.kanji})` : "";
  } else {
    promptEl.style.fontFamily = "'Be Vietnam Pro', sans-serif";
    promptEl.textContent = item.vi;
    kanjiEl.textContent = "";
  }

  document.getElementById("flashAnswer").classList.remove("show");
  document.getElementById("flashAnswer").textContent = getAnswer(item);
  document.getElementById("feedbackBar").className = "feedback-bar";
  document.getElementById("nextBtn").classList.remove("show");

  // Mode-specific
  const optGrid = document.getElementById("optionsGrid");
  const typeWrap = document.getElementById("typeWrap");
  const revealBtn = document.getElementById("revealBtn");
  const flashBtns = document.getElementById("flashBtns");

  optGrid.style.display = "none";
  typeWrap.style.display = "none";
  revealBtn.style.display = "none";
  flashBtns.classList.remove("show");

  if (mode === "mc") {
    optGrid.style.display = "grid";
    renderOptions(item);
  } else if (mode === "type") {
    typeWrap.style.display = "flex";
    const inp = document.getElementById("typeInput");
    inp.value = "";
    inp.className = "type-input";
    inp.disabled = false;
    inp.focus();
  } else if (mode === "flash") {
    revealBtn.style.display = "block";
  }
}

function renderOptions(item) {
  const grid = document.getElementById("optionsGrid");
  grid.innerHTML = "";

  const correctAns = getAnswer(item);
  const pool = vocab.filter((v) => getAnswer(v) !== correctAns);
  const distractors = shuffle(pool)
    .slice(0, 3)
    .map((v) => getAnswer(v));
  const options = shuffle([correctAns, ...distractors]);

  options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "opt-btn";
    if (dir === "vi2jp") {
      btn.style.fontFamily = "'Noto Sans JP', sans-serif";
      btn.style.fontSize = "1.15rem";
    }
    btn.textContent = opt;
    btn.onclick = () => selectOption(btn, opt, correctAns);
    grid.appendChild(btn);
  });
}

function selectOption(btn, chosen, correct_ans) {
  if (answered) return;
  answered = true;
  const allBtns = document.querySelectorAll(".opt-btn");
  allBtns.forEach((b) => {
    b.disabled = true;
    if (b.textContent === correct_ans) b.classList.add("correct");
  });

  if (chosen === correct_ans) {
    btn.classList.add("correct");
    markCorrect();
  } else {
    btn.classList.add("wrong");
    markWrong();
  }
  showNext();
}

function submitType() {
  if (answered) return;
  const item = shuffled[current];
  const input = document.getElementById("typeInput");
  const val = input.value.trim().toLowerCase();
  const correctAns = getAnswer(item).toLowerCase();

  // Flexible matching: accept if val is contained or close
  const isCorrect =
    val === correctAns ||
    (correctAns.includes(val) && val.length >= 3) ||
    val.includes(correctAns.split(",")[0].trim());

  answered = true;
  input.disabled = true;

  if (isCorrect) {
    input.classList.add("correct");
    markCorrect();
  } else {
    input.classList.add("wrong");
    markWrong();
  }
  showFeedback(isCorrect, getAnswer(item));
  showNext();
}

function revealFlash() {
  document.getElementById("flashAnswer").classList.add("show");
  document.getElementById("revealBtn").style.display = "none";
  document.getElementById("flashBtns").classList.add("show");
}

function flashAnswer(knew) {
  if (knew) {
    correct++;
    streak++;
  } else {
    wrong++;
    streak = 0;
    wrongWords.push(shuffled[current]);
  }
  current++;
  updateStats();
  document.getElementById("flashBtns").classList.remove("show");
  renderQuestion();
}

function markCorrect() {
  correct++;
  streak++;
  showFeedback(true);
}
function markWrong() {
  wrong++;
  streak = 0;
  wrongWords.push(shuffled[current]);
  showFeedback(false, getAnswer(shuffled[current]));
}

function showFeedback(ok, correctAns) {
  const bar = document.getElementById("feedbackBar");
  bar.className = "feedback-bar show " + (ok ? "correct-fb" : "wrong-fb");
  document.getElementById("feedbackIcon").textContent = ok ? "✅" : "❌";
  if (ok) {
    const msgs = ["Chính xác!", "Tuyệt vời!", "Đúng rồi!", "Xuất sắc!"];
    document.getElementById("feedbackText").textContent =
      msgs[Math.floor(Math.random() * msgs.length)] +
      (streak >= 3 ? ` 🔥 ${streak} liên tiếp!` : "");
  } else {
    document.getElementById("feedbackText").textContent =
      `Sai rồi. Đáp án đúng: ${correctAns || ""}`;
  }
}

function showNext() {
  updateStats();
  document.getElementById("nextBtn").classList.add("show");
}

function nextQuestion() {
  current++;
  updateStats();
  renderQuestion();
}

document.getElementById("typeInput").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (!answered) submitType();
    else if (answered) nextQuestion();
  }
});

function showFinish() {
  document.getElementById("quizCard").style.display = "none";
  document.getElementById("optionsGrid").style.display = "none";
  document.getElementById("typeWrap").style.display = "none";
  document.getElementById("revealBtn").style.display = "none";
  document.getElementById("flashBtns").classList.remove("show");
  document.getElementById("feedbackBar").className = "feedback-bar";
  document.getElementById("nextBtn").classList.remove("show");

  const total = vocab.length;
  const pct = Math.round((correct / total) * 100);
  let emoji = pct >= 90 ? "🏆" : pct >= 70 ? "🎌" : pct >= 50 ? "📖" : "💪";
  document.getElementById("finishEmoji").textContent = emoji;
  document.getElementById("finishScore").textContent =
    `${correct} / ${total} đúng (${pct}%)`;
  document.getElementById("finishSub").textContent =
    pct >= 90
      ? "Xuất sắc! Bạn học rất giỏi!"
      : pct >= 70
        ? "Tốt lắm, tiếp tục luyện tập nhé!"
        : "Cố gắng thêm, bạn sẽ làm được!";

  const finishScreen = document.getElementById("finishScreen");
  finishScreen.classList.add("show");

  if (wrongWords.length > 0) {
    const wl = document.getElementById("wrongList");
    wl.innerHTML = `<h3>Các từ cần ôn lại (${wrongWords.length})</h3>`;
    wrongWords.forEach((w) => {
      const d = document.createElement("div");
      d.className = "wrong-item";
      d.innerHTML = `<span class="jp">${w.jp}${w.kanji ? " (" + w.kanji + ")" : ""}</span><span class="vi">${w.vi}</span>`;
      wl.appendChild(d);
    });
  }

  document.getElementById("progressFill").style.width = "100%";
}

// Init
restart();
