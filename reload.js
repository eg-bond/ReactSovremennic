let reloaded = sessionStorage.getItem('reloaded') || false

if (reloaded !== 'true') {
  sessionStorage.setItem('reloaded', true)
  location.reload()
}
