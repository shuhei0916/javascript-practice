
// グローバル変数の汚染を防ぐための即時関数
(() => {
    const $doc = document;
    const $tab = $doc.getElementById('js-tab');
    const $nav = $tab.querySelectorAll('[data-nav]');
    const $content = $tab.querySelectorAll('[data-content]');

    console.log("hehe", $nav);
    console.log($tab);

})();