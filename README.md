#  FRONTEND CLIMA

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Contenido</summary>
  <ol>
    <li>
      <a href="#comenzando">Comenzando</a>
      <ul>
        <li><a href="#pre-requisitos">Pre-requisitos</a></li>
      </ul>
        <ul>
        <li><a href="#instalación-y-ejecución">Instalación y ejecución</a></li>
      </ul>
    </li>
    <li><a href="#construido-con">Tecnologias usadas</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ol>
</details>


## Comenzando 

### Pre-requisitos 
_Para ejecutar este proyecto es necesario contar con :[Docker](https://docs.docker.com/engine/install/)_



### Instalación y ejecución

1. Clonar el repositorio
   ```sh
   git clone git@github.com:beetlejuice96/challenge-galicia-seguros.git
   
   git checkout withMUI
   ```
2. Agregar archivo de configuracion **.env** para las variables de entorno
   1. debera completar dos variables las cuales son
        ```
        REACT_APP_URL_WEATHER_API=
        REACT_APP_API_KEY=
        ```
    2.  El valor para REACT_APP_URL_WEATHER_API  es **https://api.weatherbit.io/v2.0**
   
    3. El valor para  REACT_APP_API_KEY se obtiene registrandose en la pagina de [weatherbit API](https://www.weatherbit.io/account/create)
   
   
3. Ejecutar
   ```sh
   docker-compose up
   ```
   
4. En su navegador acceder a `http://localhost:8080`
   
5. Para bajar el proyecto
   ```sh
   docker-compose down --remove-orphans
   ```


## Construido con 

* [ReactJs v17](https://es.reactjs.org/)
* [React Router](https://reactrouter.com/)
* [Axios](https://axios-http.com/docs/intro)
* [Material UI](https://mui.com/)
* [Docker](https://www.docker.com/)

## Contacto

* **Dilan Bernabe** - [Linkedin](https://www.linkedin.com/in/dilan-bernabe-riegel-878545174/)

<p align="right">(<a href="#top">Volver arriba</a>)</p>
