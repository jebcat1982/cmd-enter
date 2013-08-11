$(document).on('keydown', '#messagetextarea', function(e) {
  if(e.keyCode == 13 && (e.metaKey || e.ctrlKey)) {
    $('#messagesubmit').click()
  }
})
