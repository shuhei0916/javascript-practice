
// グローバル変数の汚染を防ぐための即時関数
(() => {
    // 変数名に$をつけてDOM要素であることを示す
    const $doc = document;
    const $tab = $doc.getElementById('js-tab');
    const $nav = $tab.querySelectorAll('[data-nav]');
    const $content = $tab.querySelectorAll('[data-content]');
    const ACTIVE_CLASS = 'is-active';
    const navLen = $nav.length;

    console.log("hehe", $nav);
    console.log($tab);
    console.log('$content', $content);

    const init = () => {
        $content[0].style.display = 'block';
    }
    init();

    const handlerClick = (e) => {
        e.preventDefault(); // tabのaタブ（アンカーリンク：別ページに遷移するためのジャンプリンク）の要素を殺す

        // クリックされたnavとそのdataを取得
        const $this = e.target; 
        const targetVal = $this.dataset.nav; // dataset.（属性名)でデータ属性の値が取得できる
        
        // 対象外のタブコンテンツをリセットする
        let index = 0;
        while(index < navLen) {
            $content[index].style.display = 'none';
            $nav[index].classList.remove(ACTIVE_CLASS);
            index++;
        }

        // 対象のコンテンツをアクティブ化する
        $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display ='block';
        $nav[targetVal].classList.add(ACTIVE_CLASS);
        console.log($nav[targetVal].classList);
    };
    
    // 全nav要素に対して関数を適用
    let index = 0; 
    while(index < navLen) {
        $nav[index].addEventListener('click', (e) => handlerClick(e));
        index++;
    }


})();