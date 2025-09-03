const masterDatabase = [
    // 気体
    { name: 'ヘリウム', density: 0.000178, category: '気体', difficulty: 3, description: '風船に使われる、空気よりずっと軽い気体。' },
    { name: '空気', density: 0.001293, category: '気体', difficulty: 1, description: '私たちが普段吸っている、窒素や酸素の混合物。' },
    // 木材・植物
    { name: 'バルサ材', density: 0.16, category: '木材', difficulty: 4, description: '模型飛行機の材料。世界で最も軽い木材の一つ。' },
    { name: 'コルク', density: 0.24, category: '木材', difficulty: 2, description: 'ワインの栓でおなじみ。' },
    { name: '杉', density: 0.4, category: '木材', difficulty: 1, description: '日本の代表的な木材。' },
    // 液体
    { name: 'ガソリン', density: 0.75, category: '液体', difficulty: 2, description: '自動車の燃料。水より軽い。' },
    { name: 'エタノール', density: 0.789, category: '液体', difficulty: 3, description: 'お酒の主成分。消毒用にも使われる。' },
    { name: 'オリーブ油', density: 0.92, category: '液体', difficulty: 2, description: '料理に使う油。水に浮く。' },
    { name: '氷', density: 0.917, category: '氷', difficulty: 1, description: '水が凍ると体積が増えるため、密度は水より少し小さい。' },
    { name: '水', density: 1.0, category: '液体', difficulty: 1, description: '多くの物質の密度の基準となる。' },
    { name: '海水', density: 1.025, category: '液体', difficulty: 2, description: '塩分などが溶けているため、真水より少し重い。' },
    { name: '牛乳', density: 1.03, category: '液体', difficulty: 1, description: '水とほぼ同じだが、成分の分だけ少し重い。' },
    { name: 'ハチミツ', density: 1.42, category: '液体', difficulty: 3, description: '糖分が多く非常に粘り気がある液体。' },
    // プラスチック
    { name: 'ポリエチレン(PE)', density: 0.92, category: 'プラスチック', difficulty: 4, description: 'レジ袋や容器など、最も広く使われるプラスチック。' },
    { name: 'アクリル樹脂', density: 1.19, category: 'プラスチック', difficulty: 5, description: '透明度が高く、水族館の水槽などにも使われる。' },
    { name: 'ポリ塩化ビニル(PVC)', density: 1.4, category: 'プラスチック', difficulty: 5, description: '水道管や消しゴムなど、硬くも柔らかくもなる。' },
    // 鉱物・ガラス
    { name: '石炭', density: 1.5, category: '鉱物', difficulty: 3, description: '大昔の植物が変化してできた燃料。' },
    { name: 'ガラス', density: 2.5, category: '鉱物', difficulty: 2, description: '窓やコップに使われる。砂の仲間からできている。' },
    { name: 'コンクリート', density: 2.4, category: '鉱物', difficulty: 2, description: '建物の基礎などに使われる、現代建築に不可欠な材料。' },
    { name: '水晶', density: 2.65, category: '鉱物', difficulty: 6, description: '美しい六角形の結晶を作る石。' },
    { name: 'ダイヤモンド', density: 3.51, category: '鉱物', difficulty: 7, description: '地球上で最も硬い鉱物。炭素からできている。' },
    // 金属
    { name: 'リチウム', density: 0.53, category: '軽金属', difficulty: 6, description: '最も軽い金属で、水に浮く。電池の材料として重要。' },
    { name: 'マグネシウム', density: 1.74, category: '軽金属', difficulty: 5, description: '実用金属としてはアルミニウムの次に軽い。' },
    { name: 'アルミニウム', density: 2.7, category: '軽金属', difficulty: 2, description: '1円玉やアルミホイルでおなじみの軽い金属。' },
    { name: 'チタン', density: 4.51, category: '軽金属', difficulty: 6, description: '軽くて丈夫で錆びにくい。航空機や医療用具に使われる。' },
    { name: '亜鉛', density: 7.13, category: '重金属', difficulty: 5, description: '鉄をサビから守る「トタン」のメッキに使われる。' },
    { name: '鉄', density: 7.87, category: '重金属', difficulty: 1, description: '最も身近な金属。建物や乗り物などあらゆる場所で活躍。' },
    { name: '銅', density: 8.96, category: '重金属', difficulty: 3, description: '10円玉や電線に使われる、電気をよく通す金属。' },
    { name: '銀', density: 10.49, category: '重金属', difficulty: 4, description: '食器やアクセサリーに使われる美しい貴金属。' },
    { name: '鉛', density: 11.34, category: '重金属', difficulty: 4, description: 'X線を遮る性質があり、病院のレントゲン室の壁に使われる。' },
    { name: '水銀', density: 13.55, category: '重金属', difficulty: 6, description: '常温で唯一の液体の金属。非常に重い。' },
    { name: '金', density: 19.3, category: '重金属', difficulty: 3, description: '錆びることがなく、大昔から価値が高いとされる貴金属。' },
    { name: '白金(プラチナ)', density: 21.45, category: '重金属', difficulty: 7, description: '金よりも重く、希少な貴金属。' },
    { name: 'イリジウム', density: 22.56, category: '重金属', difficulty: 9, description: '地球上の元素で最も密度が高いと言われるものの一つ。' }
];
