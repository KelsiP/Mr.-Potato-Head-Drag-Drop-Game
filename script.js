$( function nos() {
    $( "#draggable-nose" ).draggable();
} );
$( function mout() {
    $( "#draggable-mouth" ).draggable();
} );
$( function eye() {
    $( "#draggable-eyes" ).draggable();
} );
$( function ha() {
    $( "#draggable-hat" ).draggable();
} );

function capture() {
    html2canvas(document.querySelector('#capture')).then(canvas => {
        document.body.appendChild(canvas)
        return canvas
    })
    .then(canvas => {
        const a = document.createElement('a')
        a.setAttribute('download', 'mrPotatoHead.png')
        a.setAttribute('href', (canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')))
        a.click()
        canvas.remove()
    })
}

const downloadimg = document.querySelector('#downloadimg')
downloadimg.addEventListener('click', capture)
