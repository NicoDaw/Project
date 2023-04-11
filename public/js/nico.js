let idMax = -1;

window.onload = function () {
    async function loadEmployees() {
        fetch('/empleados', {
        })
            .then(response => response.json())
            .then(data => {
                const table = document.getElementById('tableContent');
                console.log(data);
                data.forEach(employee => {
                    const fila = `<a id="row${employee.employee_id}"><tr><td>${employee.employee_id}</td><td>${employee.first_name}</td><td>${employee.last_name}</td><td>  ${parseDate(employee.birth_date)}</td><td>${employee.country}</td><td>${employee.region != null ? employee.region : ""}</td> <td>${employee.city}</td> <td>${employee.extension}</td> <td>${employee.title}</td><td>${parseDate(employee.hire_date)}</td>  <td><a href="#" onclick="editarEmpleado(${employee.employee_id})"><i class="fas fa-edit buttonClass"></i></a>
                    <span onclick="eliminarEmpleado(${employee.employee_id})"><i class="fas fa-trash-alt buttonClass" style="color: blue"></i></span></td> </tr></a>
                    `
                    const updateForm = `<div id="update-employee-form-${employee.employee_id}" class='updateForm-${employee.employee_id} updateForm' style='display: none; width: 800px; background-color: #ECECEC' ">
                    <a href="#" onclick="editarEmpleado(${employee.employee_id}, 'close')" >
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25298.png" style="width: 20px; margin-left: 700px; margin-top: 20px"/>
                    </a>
                    <div class="formForUpdate">
                        <input type="hidden" name="_method" value="PUT">
                        <label for="firstName">First Name:</label>
                        <input type="text" id="upNombre${employee.employee_id}" name="firstName" placeholder="${employee.first_name}">
                        <br>
                        <label for="lastName">Last Name:</label>
                        <input type="text" id="upApellido${employee.employee_id}" name="lastName" placeholder="${employee.last_name}">
                        <br>
                        <label for="birthDate">Birth Date:</label>
                        <input type="date" id="upNacimiento${employee.employee_id}" name="birthDate" placeholder="${parseDate(employee.birth_date)}">
                        <br>
                        <label for="country">Country:</label>
                        <input type="text" id="upPais${employee.employee_id}" name="country" placeholder="${employee.country}">
                        <br>
                        <label for="region">Region:</label>
                        <input type="text" id="upRegion${employee.employee_id}" name="region" placeholder="${employee.region != null ? employee.region : ""}">
                        <br>
                        <label for="city">City:</label>
                        <input type="text" id="upCiudad${employee.employee_id}" name="city" placeholder="${employee.city}">
                        <br>
                        <label for="extension">Extension:</label>
                        <input type="text" id="upExtension${employee.employee_id}" name="extension" placeholder="${employee.extension}">
                        <br>
                        <label for="title">Title:</label>
                        <input type="text" id="upTitulo${employee.employee_id}" name="title" placeholder="${employee.title}">
                        <br>
                        <label for="hireDate">Hire Date:</label>
                        <input type="date" id="upInicio${employee.employee_id}" name="hireDate" placeholder="${parseDate(employee.hire_date)}">
                        <br>
                        <div class='updateButton'>
                            <button onclick="editarEmpleado(${employee.employee_id}, 'sendData')">Update</button>
                        </div>
                    </div>
                  </div>`

                    table.innerHTML += fila + updateForm;
                    idMax > employee.employee_id ? idMax = idMax : idMax = employee.employee_id;

                });
            });
    }
    loadEmployees();

    function parseDate(date) {
        let dateStr = new Date(date);
        let formatDate = dateStr.toISOString().substring(0, 10);
        return formatDate;
    }
}

function activatePopUp(enviar) {
    async function recibirEstados() {
        fetch('/regiones', {

        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let regiones = "";
                data.forEach(region => {
                    regiones += `<option value="${region.region_id}">${region.region_description}</option>`
                });
                document.getElementById('region').innerHTML += regiones;
            });
    }
    recibirEstados();

    if (enviar == 'enviar') {
        let objetoEmpleado = {}
        objetoEmpleado.id = selectPerID('id_empleado');
        objetoEmpleado.apellido = selectPerID('apellido');
        objetoEmpleado.nombre = selectPerID('nombre');
        objetoEmpleado.titulo = selectPerID('titulo');
        objetoEmpleado.cortesia = selectPerID('cortesia');
        objetoEmpleado.nacimiento = selectPerID('nacimiento');
        objetoEmpleado.alta = selectPerID('alta');
        objetoEmpleado.direccion = selectPerID('direccion');
        objetoEmpleado.ciudad = selectPerID('ciudad');
        objetoEmpleado.region = selectPerID('region');
        objetoEmpleado.cp = selectPerID('cp');
        objetoEmpleado.pais = selectPerID('pais');
        objetoEmpleado.telefono = selectPerID('telefono');
        objetoEmpleado.extension = selectPerID('extension');
        objetoEmpleado.notas = selectPerID('notas');
        objetoEmpleado.reporta = selectPerID('reporta');
        objetoEmpleado.foto = selectPerID('foto');

        async function añadirEmpleado() {
            try {
                const response = await fetch('/empleados', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(objetoEmpleado),
                });
                const data = await response.json();
                console.log(data);
                alert("Employee added successfully!");
                location.reload();
            } catch (error) {
                console.error(error);
                alert("Error adding employee. Please try again.");
            }
        }
        añadirEmpleado();
    }
    document.getElementById('tableHeader').classList.toggle('table-head-fixed')
    document.getElementById('navBarComponent').classList.toggle('main-header')
}

function choseCity() {
    let idRegion = document.getElementById('region').value;
    console.log(idRegion);
    if (idRegion != "") {
        document.getElementById('ciudad').removeAttribute('disabled');
        async function recibirCiudades() {
            fetch(`regiones/${idRegion}`, {})
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let ciudades = "";
                    data.forEach(ciudad => {
                        ciudades += `<option value="${ciudad.territory_id}">${ciudad.territory_description}</option>`
                    });
                    document.getElementById('ciudad').innerHTML = '<option></option>' + ciudades;
                });
        }
        recibirCiudades();
    } else {
        document.getElementById('ciudad').setAttribute('disabled', true);
        const select = document.getElementById('ciudad');
        const currentIndex = select.selectedIndex;
        console.log(currentIndex, "Esto es el index");
        const optionToMove = select.options[currentIndex];
        console.log(optionToMove);
        select.insertBefore(optionToMove, select.options[0]);
        optionToMove.selected = true;

    }
}

function selectPerID(param) {
    if (param == 'id_empleado') {
        return idMax + 1;
    }
    console.log(document.getElementById(param).value);
    return document.getElementById(param).value;
}

async function eliminarEmpleado(idEmpleado) {
    console.log("idEmpleadoDelete", idEmpleado);
    if (confirm("Are you sure you want to delete this employee?")) {
        let response = await fetch(`/empleados/${idEmpleado}`, {
            method: 'DELETE'
        })
        let data = response;
        console.log(data);
        if (data.ok) {
            alert("User deleted successfully")
            location.reload();
        } else {
            alert("There were a problem deleting the user")
        }
    }

    //     let a = await fetch(`/empleados/${idEmpleado}`, {
    //         method: 'DELETE'
    //     })
    //     console.log(a);
    //     // .then(response => {
    //     //     response.json()
    //     //         .then(data => {
    //     //             console.log(data);
    //     //             alert("Employee deleted successfully");
    //     //             // window.location.reload();
    //     //         })
    //     // })
    //     // .catch(error => {
    //     //     console.error(error);
    //     //     alert("Error deleting employee");
    //     //     // window.location.reload();
    //     // });
    // }
}

function editarEmpleado(idUpdate, status) {
    if (status == 'close') {
        $(`#update-employee-form-${idUpdate}`).hide();
    } else {
        $(`#update-employee-form-${idUpdate}`).show();
    }

    if (status == 'sendData') {
        updateObject = {}
        updateObject.apellido = selectPerID('upApellido' + idUpdate);
        updateObject.nombre = selectPerID('upNombre' + idUpdate);
        updateObject.nacimiento = selectPerID('upNacimiento' + idUpdate);
        updateObject.alta = selectPerID('upInicio' + idUpdate);
        updateObject.ciudad = selectPerID('upCiudad' + idUpdate);
        updateObject.region = selectPerID('upRegion' + idUpdate);
        updateObject.pais = selectPerID('upPais' + idUpdate);
        updateObject.extension = selectPerID('upExtension' + idUpdate);
        updateObject.titulo = selectPerID('upTitulo' + idUpdate);
        updateObject.id = idUpdate;

        async function updateEmpleado() {
            try {
                const response = await fetch(`/empleados/${idUpdate}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updateObject),
                });

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();
                alert(data);
                location.reload(); // Refresh the page upon successful update
            } catch (error) {
                console.error("There was an error:", error);
                alert("There was an error updating the employee");
            }
        }

        updateEmpleado();


    }

}



