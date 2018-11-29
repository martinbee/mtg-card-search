var mtgSearchMenuProps = {
  title: "Search for '%s'?",
  visible: true,
  contexts: ['selection'],
  onclick(info) {
    console.log(info.selectionText);
  }
};

chrome.contextMenus.create(mtgSearchMenuProps);