// ============================================================================
// Event Viewer
// Copyright (C) 2021 Aiko Fujimoto
//
// Licensed under MIT
// ============================================================================

const surugaya = {
  url: /^http?s:\/\/www\.suruga-ya\.jp\/search(.*)/gi,
  date: /\d{4}\/(0?[1-9]|1[012])\/(0?[1-9]|[12][0-9]|3[01])$/g,
  el: ['.release_date']
}

export default surugaya
