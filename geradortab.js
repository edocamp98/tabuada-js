var txtab = document.getElementById('tab')
txtab.addEventListener('keydown', (event) => {
    if (event.key === 'Enter'){
        tabuada()
    }
})
function tabuada(){        
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
    