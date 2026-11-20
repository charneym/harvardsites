var SITE="日本プライベートエクイティ";
var PK="jpe";
/* Japanese has no spaces between words: let SplitText break lines between characters (with kinsoku: no line starts with
   closing punctuation or small kana, none ends with an opening bracket) instead of treating a sentence as one word. */
(function(){var C=window.SplitText;if(!C||C.__jp)return;C.__jp=1;var cr=C.create;
  var JP=/[　-ヿ㐀-鿿＀-￯]/;
  function prep(t){return t.replace(/ /g," ​").replace(/([　-ヿ㐀-鿿＀-￯])(?=[^、。，．）」』】〕・ー？！ぁぃぅぇぉっゃゅょァィゥェォッャュョ％​])/g,"$1​").replace(/([「『（【〔])​/g,"$1")}
  C.create=function(el,o){o=Object.assign({},o||{});var ty=o.type||"";var node=typeof el==="string"?document.querySelector(el):el;
    if(/words|lines/.test(ty)&&!o.prepareText&&node&&JP.test(node.textContent||"")){o.prepareText=prep;o.wordDelimiter={delimiter:/​/,replaceWith:""}}
    return cr.call(this,el,o)}})();
