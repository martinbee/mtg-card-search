var baseSearchUrls = [
  'https://shop.tcgplayer.com/productcatalog/product/show?newSearch=false&ProductType=All&IsProductNameExact=false&ProductName=',
  'https://scryfall.com/search?q=',
  'http://tappedout.net/search/?q='
];

function openUpSearchTabs(searchTerm) {
  baseSearchUrls.forEach(function(baseUrl) {
    chrome.tabs.create({ url: baseUrl + searchTerm });
  });
}

var mtgSearchMenuProps = {
  title: "Search for '%s'?",
  visible: true,
  contexts: ['selection'],
  onclick(info) {
    console.log(info.selectionText);
    openUpSearchTabs(info.selectionText);
  }
};

chrome.contextMenus.create(mtgSearchMenuProps);