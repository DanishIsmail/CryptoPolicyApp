$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
        var file = 'app/provider/shared/' + $(this).data('include') + '.html'
        $(this).load(file)
    })
})