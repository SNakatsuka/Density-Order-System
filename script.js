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
let draggedItem = null;

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
    const currentMaterials = levels[currentLevel].materials;
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
            currentLevel = 0;
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
loadLevel(currentLevel);
