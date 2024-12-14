//drinks ,combo ,bao, non-veg, veg ,chinese

function shownavbar(){
   
    if(document.getElementById('n-navbar-n-res').style.display=='none'){
    // document.getElementById('h-h-head').style.display='none'
    document.getElementById('n-navbar-n-res').style.display='block'
    document.getElementById('menu-img').src='../icons8-cross-60.png'
document.getElementById('res-h').style.display='none'
    
    }
    else{
        // document.getElementById('h-h-head').style.display='block'
    document.getElementById('n-navbar-n-res').style.display='none'
    document.getElementById('menu-img').src='../menu.png'
document.getElementById('res-h').style.display='block'
    
    }
    }
    
    
    
    window.addEventListener('load',()=>{
        document.getElementById('main-body').style.display='block'
        document.getElementById('loader').style.display='none'
    
    })



function showfood(id){
document.getElementById(`${id}-v`).display='none'
document.getElementById(`${id}-v`).display='none'
document.getElementById(`${id}-v`).display='none'

}



document.getElementById('drinks').style.background='grey'
document.getElementById('drinks').style.color='white'


var vname=['drinks','bao','nonvegs','vegs','chinese-rice','momo-fomo','veg-gravy','non-veg-gravy','hakka']

function vnamed(id){
    for(var i=0;i<vname.length;i++){
console.log(vname[i]+'-v')
        if(id==vname[i]){
            document.getElementById(vname[i]).style.background='grey'
            document.getElementById(vname[i]).style.color='white'
            document.getElementById(`${vname[i]}-v`).style.display='block'
        }
            else{
            document.getElementById(vname[i]).style.color='grey'
            document.getElementById(vname[i]).style.background='white'
            document.getElementById(`${vname[i]}-v`).style.display='none'

            }
    }
}


    


