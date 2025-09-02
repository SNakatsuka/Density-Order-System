// 1. 物質データ
const materials = [
    { name: '発泡スチロール', density: 0.02 },
    { name: '木（杉）', density: 0.4 },
    { name: '水', density: 1.0 },
    { name: 'ポリエチレン(PE)', density: 0.92 },
    { name: 'アルミニウム', density: 2.7 },
    { name: '鉄', density: 7.87 },
    { name: '金', density: 19.3 }
];

// HTML要素の取得
const itemPool = document.getElementById('item-pool');
const dropZone = document.getElementById('drop-zone');
const checkButton = document.getElementById('check-button');
const result = document.getElementById('result');

// 2. カードの生成とシャッフル
materials
    .sort(() => Math.random() - 0.5) // 配列をシャッフル
    .forEach(material => {
        const item = document.createElement('div');
        item.textContent = material.name;
        item.className = 'item';
        item.draggable = true;
        // 密度データをdata属性として埋め込む
        item.dataset.density = material.density;
        itemPool.appendChild(item);
    });

// 3. ドラッグ＆ドロップの実装
const items = document.querySelectorAll('.item');
items.forEach(item => {
    item.addEventListener('dragstart', () => {
        item.classList.add('dragging');
    });
    item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
    });
});

[itemPool, dropZone].forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault(); // デフォルトの動作を無効化
        const draggingItem = document.querySelector('.dragging');
        container.appendChild(draggingItem);
    });
});

// 4. 答え合わせ機能
checkButton.addEventListener('click', () => {
    const sortedItems = [...dropZone.querySelectorAll('.item')];
    if (sortedItems.length < materials.length) {
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
        result.textContent = "正解です！おめでとう！";
        result.style.color = 'green';
    } else {
        result.textContent = "残念、不正解です。もう一度挑戦！";
        result.style.color = 'red';
    }
});
