// ===== マスターデータベース (拡充版) =====
const masterDatabase = [
    // --- カテゴリ: 気体・水素化物 (0℃, 1気圧での値) ---
    { name: '水素', density: 0.00008988, category: '気体', difficulty: 3, description: '宇宙で最も多く存在する元素。非常に軽く、燃えやすい。' },
    { name: 'ヘリウム', density: 0.000178, category: '気体', difficulty: 3, description: '風船に使われる、安全な軽い気体。' },
    { name: 'アンモニア', density: 0.000771, category: '気体', difficulty: 5, description: '特有の刺激臭を持つ気体。水によく溶ける。' },
    { name: '窒素', density: 0.001251, category: '気体', difficulty: 2, description: '空気の約78%を占める主要な成分。' },
    { name: '空気', density: 0.001293, category: '気体', difficulty: 1, description: '私たちが普段吸っている、窒素や酸素の混合物。' },
    { name: '酸素', density: 0.001429, category: '気体', difficulty: 2, description: '空気の約21%を占め、生物の呼吸に不可欠。' },
    { name: '二酸化炭素', density: 0.001977, category: '気体', difficulty: 3, description: 'ドライアイスの原料。空気より重い。' },
    { name: '塩素', density: 0.003214, category: '気体', difficulty: 6, description: 'プールの消毒で使われる、黄緑色の刺激臭を持つ気体。' },
    { name: '六フッ化硫黄(SF6)', density: 0.00617, category: '気体', difficulty: 9, description: '非常に重い気体で、声が低くなることで有名。電気の絶縁体として使われる。' },
    // ジボラン (最も単純なボラン)
    { name: 'ジボラン(B2H6)', density: 0.00124, category: '水素化物', difficulty: 8, description: 'ホウ素の水素化物。空気よりわずかに軽い。' },

    // --- カテゴリ: その他の特殊な物質 ---
    { name: 'エアロゲル', density: 0.003, category: '特殊な物質', difficulty: 10, description: '「凍った煙」とも呼ばれる。99%以上が空気でできた、世界で最も軽い固体。' },

    // --- カテゴリ: 木材・植物 ---
    { name: 'バルサ材', density: 0.16, category: '木材', difficulty: 4, description: '模型飛行機の材料。世界で最も軽い木材の一つ。' },
    { name: 'コルク', density: 0.24, category: '木材', difficulty: 2, description: 'ワインの栓でおなじみ。' },
    { name: '杉', density: 0.4, category: '木材', difficulty: 1, description: '日本の代表的な木材。' },
    { name: '黒檀', density: 1.2, category: '木材', difficulty: 6, description: '非常に硬く重い木材で、水に沈む。仏壇や高級家具に使われる。' },
    
    // --- カテゴリ: 液体 ---
    { name: 'ガソリン', density: 0.75, category: '液体', difficulty: 2, description: '自動車の燃料。水より軽い。' },
    { name: 'オリーブ油', density: 0.92, category: '液体', difficulty: 2, description: '料理に使う油。水に浮く。' },
    { name: '氷', density: 0.917, category: '氷', difficulty: 1, description: '水が凍ると体積が増えるため、密度は水より少し小さい。' },
    { name: '水', density: 1.0, category: '液体', difficulty: 1, description: '多くの物質の密度の基準となる。' },
    { name: '海水', density: 1.025, category: '液体', difficulty: 2, description: '塩分などが溶けているため、真水より少し重い。' },
    { name: '牛乳', density: 1.03, category: '液体', difficulty: 1, description: '水とほぼ同じだが、成分の分だけ少し重い。' },
    { name: 'ハチミツ', density: 1.42, category: '液体', difficulty: 3, description: '糖分が多く非常に粘り気がある液体。' },

    // === カテゴリ: 有機溶媒（溶剤） ===
    // 注: 特に記載がない限り、密度は標準的な温度（20℃）での液体状態の値です。
    // --- 非極性溶媒（炭化水素系）---
    { name: 'ペンタン', density: 0.626, category: '有機溶媒', difficulty: 6, description: '非常に揮発性の高い液体。実験室で溶媒や冷媒として使われる。' },
    { name: 'ヘキサン', density: 0.655, category: '有機溶媒', difficulty: 5, description: '無極性溶媒の代表格。油脂をよく溶かすため、食用油の抽出などに使われる。' },
    { name: 'ヘプタン', density: 0.684, category: '有機溶媒', difficulty: 5, description: 'ガソリンのオクタン価を測定する際の基準（0点）として使われる。' },
    { name: 'シクロヘキサン', density: 0.779, category: '有機溶媒', difficulty: 6, description: '環状の炭化水素。ヘキサンより密度が高いのが特徴。' },
    { name: 'オクタン', density: 0.703, category: '有機溶媒', difficulty: 5, description: 'ガソリンの主成分の一つ。ヘプタンより密度が高い。' },

    // --- 非極性溶媒（芳香族系）---
    { name: 'トルエン', density: 0.867, category: '有機溶媒', difficulty: 6, description: 'シンナーの主成分の一つ。ベンゼンより毒性が低い代替品として広く使われる。' },
    { name: 'ベンゼン', density: 0.876, category: '有機溶媒', difficulty: 6, description: '多くの化学製品の出発原料となる重要な化合物。発がん性がある。' },
    { name: 'キシレン', density: 0.864, category: '有機溶媒', difficulty: 7, description: 'トルエンと非常に密度が近い。異性体（オルト、メタ、パラ）の混合物。' },
    { name: 'クロロベンゼン', density: 1.11, category: '有機溶媒', difficulty: 8, description: '塩素原子が付いたことで、水より重くなったベンゼン。' },

    // --- 非プロトン性極性溶媒 ---
    { name: 'ジエチルエーテル', density: 0.713, category: '有機溶媒', difficulty: 5, description: '初期の全身麻酔薬として有名。引火性が非常に高い。' },
    { name: 'アセトン', density: 0.791, category: '有機溶媒', difficulty: 4, description: 'マニキュアの除光液でおなじみ。水にも油にもよく溶ける。' },
    { name: 'テトラヒドロフラン(THF)', density: 0.889, category: '有機溶媒', difficulty: 7, description: '多くの有機物を溶かす強力な溶媒。独特の匂いがある。' },
    { name: 'アセトニトリル', density: 0.786, category: '有機溶媒', difficulty: 7, description: '実験室で汎用される溶媒。メタノールやエタノールと密度が近い。' },
    { name: 'ジメチルホルムアミド(DMF)', density: 0.944, category: '有機溶媒', difficulty: 8, description: '沸点が高く、様々な化学反応で使われる「万能溶媒」。' },
    { name: 'ジメチルスルホキシド(DMSO)', density: 1.100, category: '有機溶媒', difficulty: 8, description: '非常に高い溶解性を持つ。皮膚への浸透性が高いことでも知られる。' },
    
    // --- プロトン性極性溶媒 ---
    { name: 'メタノール', density: 0.792, category: '有機溶媒', difficulty: 4, description: '最も単純なアルコール。「燃料アルコール」。飲むと失明の危険がある猛毒。' },
    { name: 'エタノール', density: 0.789, category: '液体', difficulty: 3, description: 'お酒の主成分。消毒用にも使われる。' },
    { name: 'イソプロパノール(IPA)', density: 0.786, category: '有機溶媒', difficulty: 4, description: '消毒用アルコールの主成分。エタノールより殺菌力が強いとされる。' },
    { name: 'ギ酸', density: 1.220, category: '有機溶媒', difficulty: 7, description: 'アリ（蟻）が持つ毒の成分。最も単純なカルボン酸。' },
    { name: '酢酸', density: 1.049, category: '有機溶媒', difficulty: 5, description: '食酢の酸味の主成分。純度の高いものは冬に凍るため氷酢酸と呼ばれる。' },
    { name: 'フェノール', density: 1.07, category: '有機溶媒', difficulty: 7, description: '常温では固体。消毒剤や化学原料として使われる、特有の薬品臭がある。' },
    { name: 'エチレングリコール', density: 1.113, category: '有機溶媒', difficulty: 6, description: '自動車の不凍液（クーラント）の主成分。甘みがあるが毒。' },
    { name: 'グリセリン', density: 1.261, category: '有機溶媒', difficulty: 6, description: '化粧品や食品添加物として使われる、非常に粘り気の高い液体。甘みがある。' },
    { name: 'トリフルオロエタノール(TFE)', density: 1.38, category: '有機溶媒', difficulty: 9, description: 'フッ素原子を持つため、アルコールの中でも際立って密度が高い。' },

    // --- ハロゲン系溶媒（高密度で判別が難しい） ---
    { name: 'ジクロロメタン', density: 1.33, category: '有機溶媒', difficulty: 8, description: '多くのプラスチックを溶かす強力な溶媒。ペンキ剥がし剤などに使われる。' },
    { name: 'クロロホルム', density: 1.49, category: '有機溶媒', difficulty: 8, description: 'かつては麻酔薬として使われた。水よりはるかに重い。' },
    { name: '四塩化炭素', density: 1.59, category: '有機溶媒', difficulty: 9, description: 'かつては消火剤や溶媒として使われたが、毒性が高く現在は使用が制限されている。' },
    
    // --- カテゴリ: 各種ポリマー ---
    { name: 'ポリプロピレン(PP)', density: 0.90, category: 'プラスチック', difficulty: 5, description: '水に浮く軽いプラスチック。自動車のバンパーや食品容器に使われる。' },
    { name: 'ポリエチレン(PE)', density: 0.92, category: 'プラスチック', difficulty: 4, description: 'レジ袋や容器など、最も広く使われるプラスチック。' },
    { name: 'ポリスチレン(PS)', density: 1.05, category: 'プラスチック', difficulty: 5, description: '発泡させると発泡スチロールになる。透明な容器にも使われる。' },
    { name: 'アクリル樹脂(PMMA)', density: 1.19, category: 'プラスチック', difficulty: 5, description: '透明度が高く、水族館の水槽などにも使われる。' },
    { name: 'ポリカーボネート(PC)', density: 1.20, category: 'プラスチック', difficulty: 6, description: '非常に衝撃に強いプラスチック。CDやスマートフォンの筐体に使われる。' },
    { name: 'ポリ塩化ビニル(PVC)', density: 1.4, category: 'プラスチック', difficulty: 5, description: '水道管や消しゴムなど、硬くも柔らかくもなる。' },
    { name: 'テフロン(PTFE)', density: 2.2, category: 'プラスチック', difficulty: 7, description: '非常に滑りやすく、フライパンのコーティングに使われることで有名。' },

    // --- カテゴリ: 鉱物・宝石・ガラス ---
    { name: '石炭', density: 1.5, category: '鉱物', difficulty: 3, description: '大昔の植物が変化してできた燃料。' },
    { name: 'ガラス', density: 2.5, category: '鉱物', difficulty: 2, description: '窓やコップに使われる。砂の仲間からできている。' },
    { name: 'コンクリート', density: 2.4, category: '鉱物', difficulty: 2, description: '建物の基礎などに使われる、現代建築に不可欠な材料。' },
    { name: '水晶', density: 2.65, category: '鉱物', difficulty: 6, description: '美しい六角形の結晶を作る石。' },
    { name: 'トパーズ', density: 3.53, category: '宝石', difficulty: 8, description: '11月の誕生石として知られる宝石。' },
    { name: 'ダイヤモンド', density: 3.51, category: '宝石', difficulty: 7, description: '地球上で最も硬い鉱物。炭素からできている。' },
    { name: 'コランダム(ルビー/サファイア)', density: 4.0, category: '宝石', difficulty: 8, description: 'ダイヤモンドの次に硬い鉱物。赤いものをルビー、それ以外をサファイアと呼ぶ。' },
    
    // --- カテゴリ: 金属 (軽金属・重金属・合金) ---
    { name: 'リチウム', density: 0.53, category: '軽金属', difficulty: 6, description: '最も軽い金属で、水に浮く。電池の材料として重要。' },
    { name: 'マグネシウム', density: 1.74, category: '軽金属', difficulty: 5, description: '実用金属としてはアルミニウムの次に軽い。' },
    { name: 'ジュラルミン', density: 2.8, category: '合金', difficulty: 7, description: 'アルミニウムに銅などを加えた合金。軽くて丈夫なため航空機の材料になる。' },
    { name: 'アルミニウム', density: 2.7, category: '軽金属', difficulty: 2, description: '1円玉やアルミホイルでおなじみの軽い金属。' },
    { name: 'チタン', density: 4.51, category: '軽金属', difficulty: 6, description: '軽くて丈夫で錆びにくい。航空機や医療用具に使われる。' },
    { name: '亜鉛', density: 7.13, category: '重金属', difficulty: 5, description: '鉄をサビから守る「トタン」のメッキに使われる。' },
    { name: 'ステンレス鋼', density: 7.9, category: '合金', difficulty: 6, description: '鉄にクロムなどを混ぜた、錆びにくい合金。台所のシンクなど。' },
    { name: '鉄', density: 7.87, category: '重金属', difficulty: 1, description: '最も身近な金属。建物や乗り物などあらゆる場所で活躍。' },
    { name: '真鍮(黄銅)', density: 8.5, category: '合金', difficulty: 7, description: '銅と亜鉛の合金。5円玉や金管楽器に使われる。' },
    { name: '青銅(ブロンズ)', density: 8.8, category: '合金', difficulty: 7, description: '銅と錫の合金。10円玉や銅像に使われる。' },
    { name: '銅', density: 8.96, category: '重金属', difficulty: 3, description: '10円玉（主成分）や電線に使われる、電気をよく通す金属。' },
    { name: '銀', density: 10.49, category: '貴金属', difficulty: 4, description: '食器やアクセサリーに使われる美しい貴金属。' },
    { name: '鉛', density: 11.34, category: '重金属', difficulty: 4, description: 'X線を遮る性質があり、病院のレントゲン室の壁に使われる。' },
    { name: '水銀', density: 13.55, category: '重金属', difficulty: 6, description: '常温で唯一の液体の金属。非常に重い。' },
    { name: 'ウラン', density: 19.1, category: '重金属', difficulty: 9, description: '原子燃料として使われる、放射性を持つ非常に重い金属。' },
    { name: '金', density: 19.3, category: '貴金属', difficulty: 3, description: '錆びることがなく、大昔から価値が高いとされる貴金属。' },
    { name: 'タングステン', density: 19.25, category: '重金属', difficulty: 8, description: '非常に融点が高い金属。電球のフィラメントに使われた。金と密度が近い。' },
    { name: '白金(プラチナ)', density: 21.45, category: '貴金属', difficulty: 7, description: '金よりも重く、希少な貴金属。' },
    { name: 'イリジウム', density: 22.56, category: '貴金属', difficulty: 9, description: 'オスミウムに次いで密度が高い。万年筆のペン先などに使われる。' },
    { name: 'オスミウム', density: 22.59, category: '貴金属', difficulty: 10, description: '地球上の安定した元素の中で、最も密度が高い物質。' },
];

// 1. HTML要素の取得
const levelTitle = document.getElementById('level-title');
const mistakeCounter = document.getElementById('mistake-counter');
const itemPool = document.getElementById('item-pool');
const dropZone = document.getElementById('drop-zone');
const checkButton = document.getElementById('check-button');
const nextButton = document.getElementById('next-button');
const restartButton = document.getElementById('restart-button');
const result = document.getElementById('result');

// 2. 現在のステージを管理する変数
let currentLevel = 1; // ステージは1から始める
let mistakeCount = 0;
const MAX_MISTAKES = 3;
let currentMaterials = []; // 現在のステージの物質リスト

// 3. ステージを自動生成する関数 
function generateLevel(level) {
    // 1. 問題数を決定
    let numItems;
    if (level <= 10) numItems = 4;
    else if (level <= 30) numItems = 5;
    else if (level <= 100) numItems = 6;
    else numItems = 7;

    // 2. 難易度範囲を決定
    const difficultyRange = Math.min(1 + Math.floor(level / 5), 8); // レベルが5上がるごとに難易度上限が1上がる
    
    // 3. データベースから候補をフィルタリング
    const candidates = masterDatabase.filter(item => item.difficulty <= difficultyRange);
    
    // 4. 候補からランダムに問題を選択
    //    （密度の差が近すぎないように少し調整）
    let selected = [];
    while (selected.length < numItems && candidates.length > 0) {
        const randomIndex = Math.floor(Math.random() * candidates.length);
        const candidate = candidates.splice(randomIndex, 1)[0]; // 候補から取り除く
        
        // 難易度調整：高レベルでは密度の近いものを許容
        const isTooClose = selected.some(item => Math.abs(item.density - candidate.density) < (0.5 / (level/10 + 1)) );

        if (selected.length === 0 || !isTooClose) {
            selected.push(candidate);
        }
    }
    
    return selected;
}


function loadStage() {
    // 前のステージの情報をクリア
    itemPool.innerHTML = '';
    dropZone.innerHTML = '';
    result.textContent = '';
    checkButton.style.display = 'inline-block';
    nextButton.style.display = 'none';
    restartButton.style.display = 'none';
    
    updateMistakeDisplay();

    // ★ ステージを自動生成！
    currentMaterials = generateLevel(currentLevel);
    
    levelTitle.textContent = `ステージ ${currentLevel}`;
    
    // 生成された問題でカードを作成
    currentMaterials
        .sort(() => Math.random() - 0.5)
        .forEach(material => {
            const item = document.createElement('div');
            item.textContent = material.name;
            item.className = 'item';
            item.draggable = true;
            item.dataset.density = material.density;
            item.title = material.description; // ヒントとして豆知識をツールチップに表示
            itemPool.appendChild(item);
        });

    addDragAndDropHandlers();
}

function addDragAndDropHandlers() {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.addEventListener('dragstart', (e) => {
            draggedItem = e.target;
            setTimeout(() => e.target.classList.add('dragging'), 0);
        });
        item.addEventListener('dragend', (e) => {
            e.target.classList.remove('dragging');
        });
    });

    [itemPool, dropZone].forEach(container => {
        container.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        container.addEventListener('drop', (e) => {
            e.preventDefault();
            if (draggedItem) {
                // 他の要素の間に挿入するロジック
                const afterElement = getDragAfterElement(container, e.clientY);
                if (afterElement == null) {
                    container.appendChild(draggedItem);
                } else {
                    container.insertBefore(draggedItem, afterElement);
                }
            }
        });
    });
}

// ドロップ位置の要素を特定するヘルパー関数
function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.item:not(.dragging)')];
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// ミス回数表示を更新する関数
function updateMistakeDisplay() {
    mistakeCounter.textContent = `のこりチャンス: ${MAX_MISTAKES - mistakeCount}回`;
}

// 4. 「答え合わせ」のロジックを更新
checkButton.addEventListener('click', () => {
    const sortedItems = [...dropZone.querySelectorAll('.item')];

    if (sortedItems.length < currentMaterials.length) {
        result.textContent = "すべての物質を下のエリアに移動させてください。";
        result.style.color = 'orange';
        return;
    }

    let isCorrect = true;
    for (let i = 0; i < sortedItems.length - 1; i++) {
        const densityA = parseFloat(sortedItems[i].dataset.density);
        const densityB = parseFloat(sortedItems[i + 1].dataset.density);
        if (densityA > densityB) {
            isCorrect = false;
            break;
        }
    }

    if (isCorrect) {
        result.textContent = "正解です！";
        result.style.color = 'green';
        checkButton.style.display = 'none'; // 答え合わせボタンを隠す

        // 正解時に豆知識を表示
        const descriptions = [...dropZone.querySelectorAll('.item')]
            .map(item => `${item.textContent}: ${item.title}`)
            .join('\n');
        // alert(descriptions); // ポップアップで解説など

        if (currentLevel < 1000) { // 目標ステージ数
            nextButton.style.display = 'inline-block';
        } else {
            result.textContent = "🎉 1000ステージクリア！あなたは真の密度マスターです！ 🎉";
        }
    } else {
        mistakeCount++;
        updateMistakeDisplay();
        
        if (mistakeCount >= MAX_MISTAKES) {
            // ゲームオーバー処理
            result.textContent = "ゲームオーバー...。はじめから再挑戦！";
            result.style.color = 'darkred';
            checkButton.style.display = 'none';
            restartButton.style.display = 'inline-block';
            // ゲーム状態をリセット
            currentLevel = 1; // 修正
            mistakeCount = 0;
        } else {
            result.textContent = "残念、不正解です。もう一度挑戦！";
            result.style.color = 'red';
        }
    }
});

// 「次のステージへ」ボタンの処理
nextButton.addEventListener('click', () => {
    currentLevel++;
    loadStage();
});

//「はじめから挑戦」ボタンの処理
restartButton.addEventListener('click', () => {
    currentLevel = 1; // ステージ1に戻す
    loadStage();
});

// 5. ゲームの開始
loadStage(currentLevel); // 修正
