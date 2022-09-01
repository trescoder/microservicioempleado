# microservicioempleado

to run the application, just clone the repo and execute the command "docker compose up", this server will 
be listening on port 3000 by default

## Rutas disponibles

### employees

get: ``/employees/`` (return all employees)
get: ``/employees/:codigo`` (employee primary key)
delete: ``/employees/:codigo`` (employee primary key)

put: ``/employees/:codigo``
body: ``{
  "nombre": "test1",
  "apellido1": "test1",
  "apellido2": "test2",
   "codigo_departamento": 2
}``

post: ``/employees/add-employee``
body: ``{
	"nif": "A1",
	"nombre": "test1",
	"apellido1": "test1",
	"apellido2": "test2",
	"codigo_departamento": 2
}``

### Deparments

get: ``/department/:codigo`` (department primary key)
delete: ``/department/:codigo`` (department primary key)

put: ``/department/:codigo`` (department primary key)
body: ``{
  "nombre":"test1",
  "presupuesto": 472492
}``

post: ``/department/add-department`` (department primary key)
body: ``{
  "nombre":"test1",
  "presupuesto": 472492
}``
