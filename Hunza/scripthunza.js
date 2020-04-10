function verificar() {
    var n = document.getElementById('cNome')
    var m = document.getElementById('cMail')
    var msg = document.getElementById('cMsg')

    if (n.value.length == '' || m.value.length == '' || msg.value.length == '') {
        alert('ERRO! Falta dados')
    } else {
        alert('Mensagem enviada.')
    }
}