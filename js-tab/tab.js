
// グローバル変数の汚染を防ぐための即時関数
(() => {
    // 変数名に$をつけてDOM要素であることを示す
    const $doc = document;
    const $tab = $doc.getElementById('js-tab');
    const $nav = $tab.querySelectorAll('[data-nav]');
    const $content = $tab.querySelectorAll('[data-content]');

    console.log("hehe", $nav);
    console.log($tab);
    console.log('$content', $content);

    const init = () => {
        $content[0].style.display = 'block';
    }
    init();

    

})();