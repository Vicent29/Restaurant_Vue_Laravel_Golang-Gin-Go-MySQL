# 🍽️  Proyecto Restaurante Sanvic

## Indice:

1. ¿Que es Sanvic?
2. Tecnologias implementadas.
3. Desarrollo de los modulos.

# 🔹 Sanvic:  

Bienvenidos a Sanvic, es un proyecto desarrollado y diseñado por [`Vicent Esteve`](https://github.com/Vicent29) y [`Santi Martinez`](https://github.com/santimaal). Fue creado para cubrir las necesidades de reservas de un restaurante. Por una parte, los usuarios tendrán la posibilidad de visualizar los diferentes menús y gastronomías nacionales y realizar reservas indicando temporalidad. Por otra parte, hemos implementado un panel de Administrador que se encarga de gestionar las reservas, usuarios y mesas. Además de muchas mejoras, por ejemplo podrás recibir notificaciones por Telegram para confirmar tu reserva.

# 🔹 Tecnologías:

<img src="https://img.shields.io/badge/Vue3-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D"
                 alt="VUE" />
<img src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white"
                alt="laravel" />
<img src="https://img.shields.io/badge/go-00ADD8.svg?style=for-the-badge&logo=go&logoColor=white"
                alt="GO" />

## 🔸 Backend

- ### [Laravel 9](https://laravel.com/) 

  - Migrations
  - Factories
    - Libreria Faker
  - Seeders
  - Models
  - Controllers
  - Mysql
    - Relationships
    - Schema
  - Middleware_auth
    - Header
    - Token JWT


- ### [GO 1.16](https://go.dev/)
  - Validators
  - Serializers
  - Repositories
  - Interfaces
  - Relationships
  - Middleware_auth
    - JWT-go v3.2.0
  - Telegram-bot-api/v5 v5.5.1
  - Gopkg.in/telebot.v3 v3.1.2
  - Gin v1.8.1
  - Gorm v1.9.16
  - Godotenv v1.4.0

## 🔸 Frontend

- ### [Vue v3](https://vuejs.org/)
  
  - Reactive Forms
    - Vuelidate
  - Lazy load
  - Btoa / Atob
  - Guards
  - Service with axios
  - Authentication JWT
  - Store y composables
  - Custom infinity scroll
  - Librerias:
    - Bootstrap
      - Custom pagination
    - Toaster
    - Vue3-carousel
    

## 🔸 Base de datos:

  - [MySQL](https://www.mysql.com/)

# 🔹 Desarrollo de los modulos:  

##  📌  Home
  - Es la view principal, donde podremos encontrar un [`Vue3-carousel`](https://ssense.github.io/vue-carousel/) en el que se ven reflejados los menus del restaurante, ademas en la parte inferior podrás encontrar un Infinite Scroll custom con las temáticas (cada una pertenece a una comunidad autónoma)
##  📝   Rserves
  - Es la view en la que los usuarios podrán ver, filtrar y reservar cada una de las mesas de nuestro restaurante. Además tendrán información de cada una de las mesas y al seleccionar una de ellas, saltará un modal en el cual tendrán que configurar la temporalidad en la que les gustaría realizar la reserva.
##  🔑   Login/Register
- Son la views que el usuario tendrá la opción de registrarse y loguearse, hemos utilizado formularios de Boostrap y  [`Vuelidate`](https://vuelidate.js.org/) para controlar que se cumplan los requerimientos en ambas views.
## 👨🏼‍🦱  Profile
-  Encontraremos todos los datos del usuario, tendrá la opción de modificarlos. Por otra parte, hemos añadido una funcionalidad para que recibas notificaciones por [`Telegram`](https://core.telegram.org/bots/api) para poder confirmarte las reservas. Ademas, podras ver un historial de tus reservas de mas nuevas a mas antiguas y en que estado se encuentran (pendiente / aceptada / denegada).

## 📩  Notifications
- En header tendremos una opción que se encargará de avisarte de cuándo tienes alguna notificación sobre las reservas y tienes un desplegable en el que visualizar las notificaciones una vez entres.
- Por la parte del administrador, recibirá de la misma manera las notificaciones para poder aceptar o denegar las reservas de los usuarios que hayan solicitado reservar una mesa.

## 📎 Dashboard Admin
- En la view de Dashboard podremos ver un registro de (Tmaticas / Mesas / Usuarios / Reservas) en los cuales el administrador podrá modificar, crear y borrar según le resulte necesario. Todo el servicio de Administrador es realizado por [`Laravel 9`](https://laravel.com/)


   
    


