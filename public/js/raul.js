const table = document.getElementById('dataContent')
// buttons
const buttonAddOrder = document.getElementById('addOrder')
const sendForm = document.getElementById('submitButton')
const UpdateForm = document.getElementById('updateButton')
const tableData = document.getElementById('tableData')
// const popUpFormulario = document.getElementById('popUpFormAddOrder')
// const popUpFormulario = document.getElementById('')
const formOrder = document.getElementById('formOrder')
const editOrderForm = document.querySelectorAll('.editOrder')
// const inputForm = popUpFormulario.querySelectorAll('input')
const selectCostumers = document.getElementById('customer_id')
const selectEmployees = document.getElementById('employee_id')
const selectShippers = document.getElementById('ship_via')

const dataInputForm = document.querySelectorAll('.data')

// Obtener el modal
const modal = document.getElementById('modal')

// Obtener el botón para abrir el modal
const btn = document.getElementById('openModal')

// Obtener el botón para cerrar el modal
const span = document.getElementsByClassName('close')[0]

const formatDate = date => {
  let dateFormated = new Date(date)
  dateFormated = dateFormated.toISOString().substring(0, 10)
  return dateFormated
}

const loadTableData = () => {
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
            <td>
            <i id="openModal" onclick="editOrder(${
              rowOrder.order_id
            })" class="fas fa-edit editOrder"></i>
            <i id="removeOrder" onclick="removeOrder(${
              rowOrder.order_id
            })" class="fas fa-trash-alt"></i>
            </td>
        </tr>`
      })
    })
  return table
}

const loadFormData = id => {
  fetch(`/pedidos/${id}`, { method: 'GET' })
    .then(response => response.json())
    .then(data => {
      // let order = dataFormat(data, id)
      console.log('data', data)
      dataInputForm[0].value = data[0].order_id
      dataInputForm[1].value = data[0].customer_id
      dataInputForm[2].value = data[0].employee_id
      dataInputForm[3].value = formatDate(data[0].order_date)
      dataInputForm[4].value = formatDate(data[0].required_date)
      dataInputForm[5].value = formatDate(data[0].shipped_date)
      dataInputForm[6].value = data[0].ship_via
      dataInputForm[7].value = data[0].freight
      dataInputForm[8].value = data[0].ship_name
      dataInputForm[9].value = data[0].ship_address
      dataInputForm[10].value = data[0].ship_city
      dataInputForm[11].value = data[0].ship_region
      dataInputForm[12].value = data[0].ship_postal_code
      dataInputForm[13].value = data[0].ship_country
    })
}
window.onload = () => {
  loadTableData()
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

// addOrder
buttonAddOrder.addEventListener('click', () => {
  tableData.classList.toggle('table-head-fixed')
  document.getElementById('submitButton').hidden = false
  document.getElementById('updateButton').hidden = true
  modal.style.display = 'block'
})

const addOrder = async () => {
  const formInputs = document.querySelectorAll('#formOrder input,select')
  const formData = {}
  formInputs.forEach(input => {
    formData[input.name] = input.value
  })
  console.log('DATOS raul.js', JSON.stringify(formData))
  const respuesta = await fetch('/pedidos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })

  if (respuesta.ok) {
    console.log('Pedido creado correctamente')
    modal.style.display = 'none'
  } else {
    console.error('Ha ocurrido un error al crear el pedido')
  }
}

const updateOrder = async () => {
  const formInputs = document.querySelectorAll('#formOrder input,select')
  const formData = {}
  formInputs.forEach(input => {
    formData[input.name] = input.value
  })

  const order_id = formData.order_id
  console.log('DATOS raul.js', JSON.stringify(formData))
  try {
    await fetch(`/pedidos/${order_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    console.log('Pedido actualizado correctamente')
    modal.style.display = 'none'
  } catch (error) {
    console.log('error', error)
  }
}

const editOrder = order_id => {
  loadFormData(order_id)
  document.getElementById('updateButton').hidden = false
  document.getElementById('submitButton').hidden = true
  tableData.classList.toggle('table-head-fixed')
  modal.style.display = 'block'
}
const removeOrder = () => {}

sendForm.addEventListener('click', event => {
  event.preventDefault()
  addOrder()
})

UpdateForm.addEventListener('click', e => {
  e.preventDefault()
  updateOrder()
})
// Cerrar el modal
span.addEventListener('click', e => {
  modal.style.display = 'none'
})
