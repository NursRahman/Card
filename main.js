const API = 'https://jsonplaceholder.typicode.com/users'
const output = document.getElementById('output')

const func = async()=>{
    let request = await fetch(API)
    let response = await request.json()
    render(response)   
}

const render = (data)=>{
    data.forEach((el, index)=>{
        let name = document.createElement('h3') 
        name.innerHTML = `Name: ` + el.name
        let email = document.createElement('p')
        email.innerHTML = `E-mail: ` + el.email
        let addr = document.createElement('p')
        addr.innerHTML = `Street: ` + el.address.street
        let addr2 = document.createElement('p')
        addr2.innerHTML = `Suite: ` + el.address.suite
        let addr3 = document.createElement('p')
        addr3.innerHTML = `City: ` + el.address.city

        let card = document.createElement('div')
        card.className = 'card'

        output.append(card)
        card.append(name, email, addr, addr2, addr3)
    })
}

func()