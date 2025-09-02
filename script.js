// 1. ステージごとのデータを用意する
const levels = [
    {
        name: 'ステージ1：基本編',
        materials: [
            { name: '木（杉）', density: 0.4 },
            { name: '水', density: 1.0 },
            { name: 'アルミニウム', density: 2.7 },
            { name: '鉄', density: 7.87 },
        ]
    },
    {
        name: 'ステージ2：プラスチックと液体',
        materials: [
            { name: '発泡スチロール', density: 0.02 },
            { name: 'エタノール', density: 0.789 },
            { name: 'アクリル樹脂', density: 1.19 },
            { name: 'ガラス', density: 2.5 },
            { name: '海水', density: 1.025 },
        ]
    },
    {
        name: 'ステージ3：金属いろいろ',
        materials: [
            { name: 'マグネシウム', density: 1.74 },
            { name: 'チタン', density: 4.51 },
            { name: '銅', density: 8.96 },
            { name: '銀', density: 10.49 },
            { name: '鉛', density: 11.34 },
            { name: '金', density: 19.3 },
        ]
    }
];

// HTML要素の取得
const levelTitle = document.getElementById('level-title');
const itemPool = document.getElementById('item-pool');
const dropZone = document.getElementById('drop-zone');
const checkButton = document.getElementById('check-button');
const nextButton = document.getElementById('next-button');
const result = document.getElementById('result');

// 2. 現在のステージを管理する変数
let currentLevel = 0;
let draggedItem = null;

// 3. ステージを読み込む関数
function loadLevel(levelIndex) {
    // 前のステージのカードをクリア
    itemPool.innerHTML = '';
    dropZone.innerHTML = '';
    result.textContent = '';
    checkButton.style.display = 'inline-block';
    nextButton.style.display = 'none';

    const level = levels[levelIndex];
    levelTitle.textContent = level.name;

    // 問題をシャッフルしてカードを生成
    level.materials
        .sort(() => Math.random() - 0.5)
        .forEach(material => {
            const item = document.createElement('div');
            item.textContent = material.name;
            item.className = 'item';
            item.draggable = true;
            item.dataset.density = material.density;
            itemPool.appendChild(item);
        });

    // ドラッグ＆ドロップのイベントリスナーを再設定
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

        // 次のステージがあるか確認
        if (currentLevel < levels.length - 1) {
            nextButton.style.display = 'inline-block'; // 次のステージへボタンを表示
        } else {
            result.textContent = "全ステージクリア！おめでとうございます！";
            result.style.color = 'gold';
        }
    } else {
        result.textContent = "残念、不正解です。もう一度挑戦！";
        result.style.color = 'red';
    }
});

// 「次のステージへ」ボタンの処理
nextButton.addEventListener('click', () => {
    currentLevel++;
    loadLevel(currentLevel);
});

// 5. ゲームの開始
loadLevel(currentLevel);
