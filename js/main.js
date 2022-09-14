document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const rapperName = document.querySelector('input').value
    if (rapperName != '') {
      try{
          const response = await fetch(`https://rap-names-api-ld.herokuapp.com/api/${rapperName}`)
          const data = await response.json()

          console.log(data)
          document.querySelector('.name').innerText += ` ${data.birthName}`
          document.querySelector('.age').innerText += ` ${data.age}`
          document.querySelector('.birthdate').innerText += ` ${data.birthdate}`
          document.querySelector('.birthlocation').innerText += ` ${data.birthLocation}`
      }catch(error){
          console.log(error)
      }
    }
}
