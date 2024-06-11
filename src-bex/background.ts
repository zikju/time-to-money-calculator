import { bexBackground } from 'quasar/wrappers'

function openExtension () {
  chrome.tabs.create(
    {
      url: chrome.runtime.getURL('www/index.html')
    },
    (/* newTab */) => {
      // Tab opened.
    }
  )
}

// chrome.runtime.onInstalled.addListener(openExtension)
chrome.action.onClicked.addListener(openExtension)


export default bexBackground((/* bridge , allActiveConnections */) => {
  //
})
