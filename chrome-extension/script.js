document.querySelector('.js-input-btn').addEventListener('click',()=>{
    saveLead();
})

let myLeads = JSON.parse(localStorage.getItem('leads'))||[];
function saveLead(){
    const inputElement = document.querySelector('.js-input-el');
    myLeads.push({
        lead: inputElement.value,
        leadId:inputElement.value
    })
    localStorage.setItem('leads', JSON.stringify(myLeads));
    renderLeadsList();
    inputElement.value = '';
    
    console.log(myLeads);
}

function renderLeadsList(){
    let html = '';
    myLeads.forEach((leads)=>{
        html += `<li>
                    <a href="${leads.lead}" target = '_blank'>
                         ${leads.lead}
                    </a>
                    <button class="js-remove-lead" data-leads-id='${leads.leadId}'>remove</button>
                 </li>`
    })
    document.querySelector('.leads-list').innerHTML = html;
    document.querySelectorAll('.js-remove-lead').forEach((button)=>{
        button.addEventListener('click',()=>{
            const leadId = button.dataset.leadsId;
            removeLead(leadId);
        })
    })
}

function removeLead(leadId){
    
    const newLeadsList = [];
    myLeads.forEach((lead)=>{
        // console.log(lead.leadId)
        // console.log(leadId)
       
        if(lead.leadId !== leadId){
            newLeadsList.push(lead);
        }
    })
    myLeads= newLeadsList;
    localStorage.setItem('leads', JSON.stringify(myLeads));
    renderLeadsList();
}
document.querySelector('.js-delete-all-btn').addEventListener('click',()=>{
   myLeads=[];
    localStorage.removeItem('leads');
     document.querySelector('.leads-list').innerHTML = '';
})

renderLeadsList();