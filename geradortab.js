function clickPress(event){
    if (event.keyCode == ""){
        tabuada()
    }
}
function tabuada(){
    var txtab = document.getElementById('tab')
    var seltab = document.getElementById('seltab')

    if (txtab.value.length == 0){
        window.alert('Digite um número!')
    } else {
        var tab = Number(txtab.value)
        var num = 1
        seltab.innerHTML=''
        
        while (num <= 10){
            let item = document.createElement('option')
            item.text = `${tab} x ${num} = ${tab*num}`
            item.value = `seltab${num}`
            seltab.appendChild(item)
            num++
        }

    }
    


}