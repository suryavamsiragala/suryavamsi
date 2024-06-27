let myLeads = []
const inputEl = document.getElementById("save-ip")
const inputBt = document.getElementById("buttonIp")
const ulli = document.getElementById("ul-li")
const clear = document.getElementById("clear")
let storeLead = JSON.parse(localStorage.getItem("myLeads"))

if(storeLead)
    {
        myLeads = storeLead
        leads()
    }

clear.addEventListener("dblclick", function(){
    localStorage.clear()
    ulli.innerHTML = null
})

inputBt.addEventListener("click", function(){
            let userInput = inputEl.value
            myLeads.push(userInput)
            localStorage.setItem("myLeads", JSON.stringify(myLeads))
            console.log(myLeads)
            leads()
            // console.log(localStorage.getItem("myLeads"))
            
})
//localStorage.clear()
function leads(){
        let UnorLs = ""
        for(let i=0;i<myLeads.length;i++)
         {
             UnorLs += "<li> <a target =' _blank' href = '" + myLeads[i] + "'>" + myLeads[i] + "</a></li> "
             ulli.innerHTML = UnorLs
             inputEl.value = " "    
             console.log(ulli.textContent)
         } 
 }
