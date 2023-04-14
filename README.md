<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# App de envio de mail

1. Clonar repositorio
2. Instalar dependencias:

```
npm install
```

3. Crear arhicvo `.env` y colocar las variables de entorno definidas en el archivos `.env.template`

4. Ejecutar aplicacion

```
npm run start:dev
```

# End-Points

- Send mail

```
Desde postman o thunder cliente vsc ejcutar el siguiente end-point:

http://localhost:3000/api/mail/send

Body:{
  "email":"",
  "userName":"",
  "url": "",
  "subject":""
}

Method: POST
```

# Stack utilizado

- NestJS
- Nodemailer
- services: Gmail
