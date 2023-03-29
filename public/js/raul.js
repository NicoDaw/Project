const table = document.getElementById('dataContent')
const buttonAddOrder = document.getElementById('addOrder')
const popUpFormulario = document.getElementById('popUpFormAddOrder')
const formOrder = document.getElementById('formOrder')
const inputForm = popUpFormulario.querySelectorAll('input')
const submitAddForm = document.querySelector('#formOrder button[type="submit"]')
const selectCostumers = document.getElementById('customer_id')
const selectEmployees = document.getElementById('employee_id')
const selectShippers = document.getElementById('ship_via')

window.onload = async () => {
  fetch('/pedidos', { method: 'GET' })
    .then(response => response.json())
    .then(data => {
      data.forEach((rowOrder, id) => {
        table.innerHTML += `<tr>
            <td>${id}</td>
            <td>${rowOrder.order_id}</td>
            <td>${rowOrder.customer_id}</td>
            <td>${rowOrder.employee_id}</td>
            <td>${formatDate(rowOrder.order_date)}</td>
            <td>${formatDate(rowOrder.required_date)}</td>
            <td>${formatDate(rowOrder.shipped_date)}</td>
            <td>${rowOrder.ship_via}</td>
            <td>${rowOrder.freight}</td>
            <td>${rowOrder.ship_name}</td>
            <td>${rowOrder.ship_address}</td>
            <td>${rowOrder.ship_city}</td>
            <td>${rowOrder.ship_region}</td>
            <td>${rowOrder.ship_postal_code}</td>
            <td>${rowOrder.ship_country}</td>
            <td><a id='editOrder' href="">
            <i class="fas fa-edit"></i>
          </a>
          <a id="removeOrder" href=""><i class="fas fa-trash-alt"></i></a></td>
        </tr>`
      })
    })

  fetch('/customers', { method: 'GET' })
    .then(response => response.json())
    .then(data => {
      data.forEach(costumer => {
        const option = document.createElement('option')
        option.value = costumer.customer_id
        option.innerHTML = `${costumer.company_name} (${costumer.customer_id})`
        selectCostumers.appendChild(option)
      })
    })

  fetch('/empleados', { method: 'GET' })
    .then(response => response.json())
    .then(data => {
      data.forEach(employee => {
        const option = document.createElement('option')
        option.value = employee.employee_id
        option.innerHTML = `(${employee.employee_id}) ${employee.last_name}, ${employee.first_name}`
        selectEmployees.appendChild(option)
      })
    })

  fetch('/shippers', { method: 'GET' })
    .then(response => response.json())
    .then(data => {
      data.forEach(shipper => {
        const option = document.createElement('option')
        option.value = shipper.shipper_id
        option.innerHTML = `(${shipper.shipper_id}) ${shipper.company_name}`
        selectShippers.appendChild(option)
      })
    })
}
buttonAddOrder.addEventListener('click', () => {
  popUpFormulario.style.display = 'block'
})
const formatDate = date => {
  let dateFormated = new Date(date)
  dateFormated = dateFormated.toISOString().substring(0, 10)
  return dateFormated
}

const addOrder = async () => {
  const formInputs = document.querySelectorAll('#formOrder input,select')
  const formData = {}

  formInputs.forEach(input => {
    formData[input.name] = input.value
  })
  console.log("DATOS raul.js",JSON.stringify(formData))
  const respuesta = await fetch('/pedidos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })

  if (respuesta.ok) {
    console.log('Pedido creado correctamente')
    popUpFormulario.style.display = 'none'
  } else {
    console.error('Ha ocurrido un error al crear el pedido')
  }
}

submitAddForm.addEventListener('click', event => {
  event.preventDefault()
  addOrder()
})
